import { describe, it, expect } from "@jest/globals"

import { checkFileExtension, formatFileSize } from "../src/file"

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

describe("formatFileSize", () => {
  it("formats 100 bytes as '100 B'", () => {
    expect(formatFileSize(100)).toBe("100 B")
  })

  it("formats 1024 bytes as '1.0 KB'", () => {
    expect(formatFileSize(1024)).toBe("1.0 KB")
  })

  it("formats 1536 bytes as '1.5 KB'", () => {
    expect(formatFileSize(1536)).toBe("1.5 KB")
  })

  it("formats 1,048,576 bytes (1024 * 1024) as '1.0 MB'", () => {
    expect(formatFileSize(1024 * 1024)).toBe("1.0 MB")
  })

  it("formats 1,073,741,824 bytes (1024 * 1024 * 1024) as '1.0 GB'", () => {
    expect(formatFileSize(1024 * 1024 * 1024)).toBe("1.0 GB")
  })

  it("returns '0 B' when the size is 0 bytes", () => {
    expect(formatFileSize(0)).toBe("0 B")
  })

  it("returns '0 B' when the size is negative", () => {
    expect(formatFileSize(-1)).toBe("0 B")
  })

  it("returns '0 B' when the input value is null (invalid size)", () => {
    expect(formatFileSize(null)).toBe("0 B")
  })
})
