import { describe, it, expect } from "@jest/globals"

import { compareLocations, getBearingToCoordinate, getDistanceBetweenPoints } from "../src/map"

describe("map", () => {
  it("getDistanceBetweenPoints --> calculates the correct distance between two points", () => {
    const point1 = [51.5074, 0.1278]
    const point2 = [40.7128, 74.006]

    const actual = getDistanceBetweenPoints(point1, point2)

    expect(actual).toBeCloseTo(5570222, 0)
  })

  it("returns null for invalid inputs", () => {
    let point1: number[] | undefined = [51.5074, 0.1278]
    let point2: number[] | undefined = undefined

    let distance = getDistanceBetweenPoints(point1, point2)

    expect(distance).toBeNull()

    point1 = undefined
    point2 = [40.7128, 74.006]

    distance = getDistanceBetweenPoints(point1, point2)

    expect(distance).toBeNull()
  })

  it("compareLocations --> precision", () => {
    const locationA = [0, 0]
    const locationB = [1.1234, 1.1234]
    const locationC = [1.1234111, 1.1234111]
    const locationD = [1.1234222, 1.1234222]
    expect(compareLocations(locationA, locationA, 0)).toBe(true)
    expect(compareLocations(locationB, locationB, 4)).toBe(true)
    expect(compareLocations(locationB, locationB, 4)).toBe(true)
    expect(compareLocations(locationC, locationC, 4)).toBe(true)
    expect(compareLocations(locationC, locationC, 5)).toBe(true)
    expect(compareLocations(locationB, locationC, 2)).toBe(true)
    expect(compareLocations(locationB, locationC, 3)).toBe(true)
    expect(compareLocations(locationB, locationC, 4)).toBe(true)
    expect(compareLocations(locationB, locationC, 5)).toBe(false)
    expect(compareLocations(locationA, locationB, 0)).toBe(false)

    expect(compareLocations(locationC, locationD, 2)).toBe(true)
    expect(compareLocations(locationC, locationD, 3)).toBe(true)
    expect(compareLocations(locationC, locationD, 4)).toBe(true)
    expect(compareLocations(locationC, locationD, 5)).toBe(false)
  })

  it("compareLocations --> x mismatch", () => {
    expect(compareLocations([1.234, 2.345], [3.456, 2.345], 3)).toBe(false)
  })

  it("compareLocations --> y mismatch", () => {
    expect(compareLocations([1.234, 2.345], [1.234, 4.345], 3)).toBe(false)
  })

  it("getBearingToCoordinate -- should return the bearing from startCoordinate to endCoordinate", () => {
    const startCoordinate: number[] | undefined = [0, 0]
    const endCoordinate: number[] | undefined = [1, 1]
    expect(Math.ceil(getBearingToCoordinate({ startCoordinate, endCoordinate }))).toBe(45)
  })

  it("getBearingToCoordinate -- should throw an error if startCoordinate/endCoordinate or both are undefined", () => {
    const startCoordinate: number[] | undefined = [0, 0]
    const endCoordinate: number[] | undefined = [1, 1]
    expect(() => getBearingToCoordinate({ startCoordinate, endCoordinate: undefined })).toThrow()
    expect(() => getBearingToCoordinate({ startCoordinate: undefined, endCoordinate })).toThrow()
    expect(() => getBearingToCoordinate({ startCoordinate: undefined, endCoordinate: undefined })).toThrow()
  })
})
