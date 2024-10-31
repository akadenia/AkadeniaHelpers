import { describe, it, expect } from "@jest/globals"

import { sanitizeErrorIntoProperErrorObject } from "../src/error"

describe("sanitizeErrorIntoProperErrorObject", () => {
  it("returns Error with description if error is an object with a description property", () => {
    const error = { description: "This is a description error" }
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("This is a description error")
  })

  it("returns Error with message if error is an object with a message property and no description", () => {
    const error = { message: "This is a message error" }
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("This is a message error")
  })

  it("prioritizes description over message if both are present", () => {
    const error = { description: "Description error", message: "Message error" }
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("Description error")
  })

  it("returns Error with message if error is a proper Error instance", () => {
    const error = new Error("Proper error message")
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("Proper error message")
  })

  it("returns Error with message if error is a string", () => {
    const error = "This is a string error"
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("This is a string error")
  })

  it("returns generic Error if error is an object with neither message nor description", () => {
    const error = { code: 500 }
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("An unknown error occurred")
  })

  it("returns generic Error if error is null", () => {
    const error = null
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("An unknown error occurred")
  })

  it("returns generic Error if error is undefined", () => {
    const error = undefined
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("An unknown error occurred")
  })

  it("returns generic Error if error is a number", () => {
    const error = 404
    const result = sanitizeErrorIntoProperErrorObject(error)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe("An unknown error occurred")
  })
})
