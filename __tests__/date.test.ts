import { describe, it, expect } from "@jest/globals"

import { getDateString, getReadableDate, getReadableDateTime, formatDateTime, parseDate, getShortOrdinalDate } from "../src/date"

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

  it("formatDateTime with an invalid date string", () => {
    const actual = formatDateTime("not date string", { day: "numeric" })
    const expected = "Invalid Date"

    expect(actual).toBe(expected)
  })

  it("parseDate with an invalid date string", () => {
    const dateParser = () => parseDate("not a date string")
    const expected = 'Cannot parse date: "not a date string"'
    expect(dateParser).toThrow(expected)
  })

  it("parseDate with a valid date string", () => {
    const actual = parseDate("1/1/2020")
    const expected = new Date("1/1/2020")
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it("parseDate with a valid date object", () => {
    const expected = new Date("1/1/2020")
    const actual = parseDate(expected)
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it("parseDate with an invalid date object", () => {
    const invalidDate = new Date("not a date string")
    const dateParser = () => parseDate(invalidDate)
    const expected = "Cannot parse date: null"
    expect(dateParser).toThrow(expected)
  })

  it("getShortOrdinalDate with a valid date object of day 1", () => {
    const actual = getShortOrdinalDate("2020-01-01")
    const expected = "Jan 1st 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 2", () => {
    const actual = getShortOrdinalDate("2020-01-02")
    const expected = "Jan 2nd 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 3", () => {
    const actual = getShortOrdinalDate("2020-01-03")
    const expected = "Jan 3rd 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 4", () => {
    const actual = getShortOrdinalDate("2020-01-04")
    const expected = "Jan 4th 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 21", () => {
    const actual = getShortOrdinalDate("2020-01-21")
    const expected = "Jan 21st 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 22", () => {
    const actual = getShortOrdinalDate("2020-01-22")
    const expected = "Jan 22nd 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 23", () => {
    const actual = getShortOrdinalDate("2020-01-23")
    const expected = "Jan 23rd 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })

  it("getShortOrdinalDate with a valid date object of day 24", () => {
    const actual = getShortOrdinalDate("2020-01-24")
    const expected = "Jan 24th 2020"
    expect(actual.startsWith(expected)).toBeTruthy()
  })
})
