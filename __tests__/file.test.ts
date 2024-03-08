import { describe, it, expect } from "@jest/globals"

import { checkFileExtension } from "../src/file"

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
