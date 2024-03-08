// SAMPLE
import { jest, describe, expect, it, afterEach } from "@jest/globals"

afterEach(() => {
  jest.clearAllMocks()
})

describe("Test suite", () => {
  it("should succeed", () => {
    expect(true).toBeTruthy()
  })
})
