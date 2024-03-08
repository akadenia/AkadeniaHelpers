import { describe, it, expect } from "@jest/globals"

import { getDateString, getReadableDate, getReadableDateTime, formatDateTime } from "../src/date"

describe("date", () => {
  it("getDateString", () => {
    const actual = getDateString("Wed Jun 29 2022")
    const expected = "6/29/2022"

    expect(actual).toBe(expected)
  })

  it("getReadableDate", () => {
    const actual = getReadableDate(new Date(2023, 4, 14))
    const expected = "2023-05-14"

    expect(actual).toBe(expected)
  })

  it("getReadableDateTime", () => {
    const actual = getReadableDateTime(new Date(2000, 0, 1, 12, 45, 30))
    const expected = "2000-01-01 12:45:30"

    expect(actual).toBe(expected)
  })

  it("formatDateTime with year, month and day options", () => {
    const actual = formatDateTime("2023-01-03T15:11:51.538Z", { year: "numeric", month: "short", day: "numeric" })
    const expected = "Jan 3, 2023"

    expect(actual).toBe(expected)
  })

  it("formatDateTime with only day option", () => {
    const actual = formatDateTime("2023-01-03T15:11:51.538Z", { day: "numeric" })
    const expected = "3"

    expect(actual).toBe(expected)
  })

  it("formatDateTime with only day option", () => {
    const actual = formatDateTime("2023-01-03T15:11:51.538Z", { day: "numeric" })
    const expected = "3"

    expect(actual).toBe(expected)
  })

  it("formatDateTime with not a date string", () => {
    const actual = formatDateTime("not date string", { day: "numeric" })
    const expected = "Invalid Date"

    expect(actual).toBe(expected)
  })
})
