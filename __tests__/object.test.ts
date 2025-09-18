import { describe, it, expect } from "@jest/globals"

import {
  isPureObject,
  parseCookie,
  filterObjectsByProperty,
  filterObjectsBySubObject,
  findObjectBySubObject,
  containsSubObject,
  objectPropHasValue,
  findEntry,
  convertObjectKeysToKebabCase,
} from "../src/object"

interface TestUser {
  id: number
  name: string
  age?: number
  month?: number
  year?: number
}

describe("isPureObject", () => {
  it("returns true for a pure object", () => {
    expect(isPureObject({})).toBe(true)
  })

  it("returns false for an array", () => {
    expect(isPureObject([])).toBe(false)
  })

  it("returns false for a function", () => {
    expect(isPureObject(() => {})).toBe(false)
  })

  it("returns false for a Date object", () => {
    expect(isPureObject(new Date())).toBe(false)
  })

  it("returns false for a string", () => {
    expect(isPureObject("hello")).toBe(false)
  })

  it("returns false for a number", () => {
    expect(isPureObject(123)).toBe(false)
  })

  it("returns false for a boolean", () => {
    expect(isPureObject(true)).toBe(false)
  })

  it("returns false for null", () => {
    expect(isPureObject(null)).toBe(false)
  })

  it("returns false for undefined", () => {
    expect(isPureObject(undefined)).toBe(false)
  })
})

describe("parseCookie", () => {
  it("parses a cookie string into an object", () => {
    const cookieString = "name=test; age=35"
    const expected = { name: "test", age: "35" }

    expect(parseCookie(cookieString)).toEqual(expected)
  })

  it("decodes URL-encoded characters in the keys and values", () => {
    const cookieString = "first%20name=test%20user"
    const expected = { "first name": "test user" }

    expect(parseCookie(cookieString)).toEqual(expected)
  })

  it("ignores values without keys", () => {
    const cookieString = "name=test; age; job=software%20engineer"
    const expected = { name: "test", job: "software engineer" }

    expect(parseCookie(cookieString)).toEqual(expected)
  })
})

describe("filterObjectsByProperty", () => {
  const users: TestUser[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Adam" },
    { id: 4, name: "John" },
  ]

  it("should filter objects that have the specified property name and value", () => {
    const filteredUsers = filterObjectsByProperty(users, "name", "John")
    expect(filteredUsers).toEqual([
      { id: 1, name: "John" },
      { id: 4, name: "John" },
    ])
  })

  it("should return an empty array when no objects have the specified property name and value", () => {
    const filteredUsers = filterObjectsByProperty(users, "name", "Alice")
    expect(filteredUsers).toEqual([])
  })

  it("should return an empty array when the input array is empty", () => {
    const filteredUsers = filterObjectsByProperty([] as TestUser[], "name", "John")
    expect(filteredUsers).toEqual([])
  })

  it("should return an empty array when the property name is not found in any object", () => {
    const filteredUsers = filterObjectsByProperty(users, "age", 30)
    expect(filteredUsers).toEqual([])
  })
})

describe("containsSubObject", () => {
  it("should return false if one parameter is not an object", () => {
    expect(containsSubObject({}, 5)).toBe(false)
  })

  it("should return true for equal objects", () => {
    const obj1 = { name: "John", age: 25 }
    const obj2 = { name: "John", age: 25 }
    expect(containsSubObject(obj1, obj2)).toBe(true)
  })

  it("should return true for objects with the nested objects", () => {
    const obj1 = { name: "John", age: 25 }
    const obj2 = { name: "Jane", age: 30, year: 2023 }
    expect(containsSubObject(obj1, { name: "John" })).toBe(true)
    expect(containsSubObject(obj2, { name: "Jane", age: 30 })).toBe(true)
  })

  it("should return false is subobject is not found", () => {
    const obj1 = { name: "John", age: 25 }
    const obj2 = { name: "Jane", age: 30, year: 2023 }
    expect(containsSubObject(obj1, { name: "Johnny" })).toBe(false)
    expect(containsSubObject(obj2, { name: "Janet" })).toBe(false)
    expect(containsSubObject(obj1, { name: "John", age: 20 })).toBe(false)
  })
})

describe("filterObjectsBySubObject", () => {
  const users: TestUser[] = [
    { id: 1, name: "John", age: 20, month: 10 },
    { id: 2, name: "Jane", age: 20, month: 10 },
    { id: 3, name: "Adam", age: 20, month: 10 },
    { id: 4, name: "John", age: 20, month: 10 },
  ]

  it("should filter objects that have the specified nested object", () => {
    const filteredUsers = filterObjectsBySubObject(users, { name: "John" })
    expect(filteredUsers).toEqual([
      { id: 1, name: "John", age: 20, month: 10 },
      { id: 4, name: "John", age: 20, month: 10 },
    ])
  })

  it("should return an empty array when no objects have the specified property name and value", () => {
    const filteredUsers = filterObjectsBySubObject(users, { age: 10, year: 2023 })
    expect(filteredUsers).toEqual([])
  })

  it("should return all objects if nested object is empty", () => {
    const filteredUsers = filterObjectsBySubObject(users, {})
    expect(filteredUsers).toEqual(users)
  })

  it("should return an empty array when the array is empty", () => {
    const filteredUsers = filterObjectsBySubObject([] as TestUser[], { name: "John" })
    expect(filteredUsers).toEqual([])
  })
})

describe("findObjectBySubObject", () => {
  const users = [
    { id: 1, name: "John", age: 20, month: 10 },
    { id: 2, name: "Jane", age: 20, month: 10 },
    { id: 3, name: "Adam", age: 20, month: 10 },
    { id: 4, name: "John", age: 20, month: 10 },
  ]

  it("should filter objects that have the specified nested object", () => {
    const filteredUsers = findObjectBySubObject(users, { name: "John" })
    expect(filteredUsers).toEqual({ id: 1, name: "John", age: 20, month: 10 })
  })

  it("should return an empty array when no objects have the specified property name and value", () => {
    const filteredUsers = findObjectBySubObject(users, { age: 10 })
    expect(filteredUsers).toEqual(null)
  })

  it("should return all objects if nested object is empty", () => {
    const filteredUsers = findObjectBySubObject(users, {})
    expect(filteredUsers).toEqual({ id: 1, name: "John", age: 20, month: 10 })
  })

  it("should return an empty array when the array is empty", () => {
    const filteredUsers = findObjectBySubObject([] as TestUser[], { name: "John" })
    expect(filteredUsers).toEqual(null)
  })
})

describe("objectPropHasValue", () => {
  it("should return true if the object has the key with the given value", () => {
    const person = { name: "Alice", age: 30, city: "New York" }
    const result = objectPropHasValue({ object: person, propName: "age", value: 30 })
    expect(result).toBe(true)
  })

  it("should return true if the vehicle object has the specified brand", () => {
    const vehicle = { brand: "Tesla", model: "Model S", year: 2020 }
    const result = objectPropHasValue({ object: vehicle, propName: "brand", value: "Tesla" })
    expect(result).toBe(true)
  })

  it("should return false if the object has the key with a different value", () => {
    const product = { id: 123, name: "Smartphone", price: 599 }
    const result = objectPropHasValue({ object: product, propName: "price", value: 699 })
    expect(result).toBe(false)
  })

  it("should return false if the object does not have the specified key", () => {
    const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
    const result = objectPropHasValue({ object: book, propName: "genre" as any, value: "Novel" })
    expect(result).toBe(false)
  })
})

describe("findEntry", () => {
  it("should return the first entry that satisfies the predicate", () => {
    const numbers = [5, 10, 15, 20]
    const predicate = (item: number) => item > 10
    const result = findEntry(numbers, predicate)
    expect(result).toBe(15)
  })

  it("should return null if no entries satisfy the predicate", () => {
    const words = ["apple", "banana", "cherry"]
    const predicate = (item: string) => item.startsWith("z")
    const result = findEntry(words, predicate)
    expect(result).toBe(null)
  })

  it("should return the first object entry that satisfies the predicate", () => {
    const products = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Tablet" },
    ]
    const predicate = (item: { id: number; name: string }) => item.id === 2
    const result = findEntry(products, predicate)
    expect(result).toEqual({ id: 2, name: "Smartphone" })
  })

  it("should return the first entry in an array of mixed types that satisfies the predicate", () => {
    const mixed = [1, "apple", false, { id: 2 }]
    const predicate = (item: any) => typeof item === "string"
    const result = findEntry(mixed, predicate)
    expect(result).toBe("apple")
  })
})

describe("convertObjectKeysToKebabCase", () => {
  it("should convert camelCase object keys to kebab-case", () => {
    const camelCaseObj = { firstName: "John", lastName: "Doe", age: 30 }
    const result = convertObjectKeysToKebabCase(camelCaseObj)
    expect(result).toEqual({ "first-name": "John", "last-name": "Doe", age: 30 })
  })

  it("should handle object with mixed camelCase and kebab-case keys", () => {
    const mixedObj = { firstName: "John", "last-name": "Doe", userName: "johndoe" }
    const result = convertObjectKeysToKebabCase(mixedObj)
    expect(result).toEqual({ "first-name": "John", "last-name": "Doe", "user-name": "johndoe" })
  })

  it("should handle empty object", () => {
    const emptyObj = {}
    const result = convertObjectKeysToKebabCase(emptyObj)
    expect(result).toEqual({})
  })

  it("should return undefined when input is undefined", () => {
    const result = convertObjectKeysToKebabCase(undefined)
    expect(result).toBeUndefined()
  })
})
