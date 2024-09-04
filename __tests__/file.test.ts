import { describe, it, expect } from "@jest/globals"

import revokeDiffFilePreviewUrls, { checkFileExtension, getFileExtensionsFromTypes } from "../src/file"

async function isObjectURLRevoked(url: string) {
  try {
    const response = await fetch(url)
    return !response.ok // If the response is not ok, the URL might be revoked
  } catch (error) {
    return true // Fetch failed, indicating URL is revoked
  }
}

function generateFiles(length: number) {
  return Array.from({ length }, (_, i) => i).map((i) => {
    return new Blob(["Hello, world!"], { type: "text/plain" })
  })
}

describe("checkFileExtension", () => {
  it("should return true if the file extension is valid", () => {
    expect(checkFileExtension("test.txt", ["txt", "md"])).toBe(true)
  })

  it("should return false if the file extension is invalid", () => {
    expect(checkFileExtension("test.txt", ["md"])).toBe(false)
  })

  it("should return false if the file extension is missing", () => {
    expect(checkFileExtension("test", ["md"])).toBe(false)
  })
})

describe("getFileExtensionsFromTypes", () => {
  it("should return the extensions from the types", () => {
    const types = ["images/png", "images/jpeg"]
    const expected = ["png", "jpeg"]
    expect(getFileExtensionsFromTypes(types)).toEqual(expected)
  })

  it("should throw error if types parameter is not an array", () => {
    const types = undefined
    const errorActual = () => getFileExtensionsFromTypes(types as unknown as Array<string>)
    const expected = "types must be an array"
    expect(errorActual).toThrow(expected)
  })

  it("should ignore any type value that is not valid in the types array", () => {
    const types = ["images/png", "images/jpeg", "dummystring"]
    const expected = ["png", "jpeg"]
    expect(getFileExtensionsFromTypes(types)).toEqual(expected)
  })
})

describe("revokeDiffFilePreviewUrls", () => {
  const createObjectUrls = (files: Blob[]) => {
    return files.map((file) => URL.createObjectURL(file))
  }
  it("should revoke urls that are not in the new list", async () => {
    const files = generateFiles(3)
    const oldPreviewUrls = createObjectUrls(files)
    const newPreviewUrls = oldPreviewUrls.slice(1)
    revokeDiffFilePreviewUrls(oldPreviewUrls, newPreviewUrls)
    expect(await isObjectURLRevoked(oldPreviewUrls[0])).toBeTruthy()
  })

  it("should not revoke any urls when the old list is all in the new list", async () => {
    const files = generateFiles(3)
    const newPreviewUrls = createObjectUrls(files)
    const oldPreviewUrls = newPreviewUrls.slice(1)
    revokeDiffFilePreviewUrls(oldPreviewUrls, newPreviewUrls)
    expect(
      (await Promise.all(newPreviewUrls.map(async (url) => await isObjectURLRevoked(url)))).every((url) => !url),
    ).toBeTruthy()
  })
  it("should throw an error when the new list is not an array", async () => {
    const expectedError = "oldList and newList must be arrays"
    const errorActual = () => revokeDiffFilePreviewUrls([], "" as unknown as Array<string>)
    expect(errorActual).toThrow(expectedError)
  })
  it("should throw an error when the old list is not an array", async () => {
    const expectedError = "oldList and newList must be arrays"
    const errorActual = () => revokeDiffFilePreviewUrls("" as unknown as Array<string>, [])
    expect(errorActual).toThrow(expectedError)
  })
})
