import { describe, it, expect, jest } from "@jest/globals"

import {
  uuidv4,
  convertSnakeToCamelCase,
  truncateText,
  fileNameFromPath,
  formatPosition,
  pluralizeOnCondition,
  replaceUnderscoreWithSpaces,
  replaceSpacesWithUnderscore,
  convertCamelToSnakeCase,
  convertKeyCasing,
  handleNullDisplay,
  capitalizeText,
  enforceCharacterLimit,
  isValidEmail,
  convertCamelToKebabCase,
  convertKebabToCamelCase,
  isAcronym,
  acronymToKebabCase,
  generateIDFromWord,
  generateWordFromId,
  generateSlugFromWordsWithID,
  extractIDfromSlug,
} from "../src/text"

it("uuidv4", () => {
  const uuid = uuidv4()

  expect(uuid).not.toBe(null)
})

it("convertSnakeToCamelCase", () => {
  let actual = convertSnakeToCamelCase("this_is_a_test")
  const expected = "thisIsATest"

  expect(actual).toBe(expected)

  actual = convertSnakeToCamelCase("thIs_is_a_test")

  expect(actual).toBe(expected)

  actual = convertSnakeToCamelCase("this_iS_A_test")

  expect(actual).toBe(expected)

  actual = convertSnakeToCamelCase("This_is_a_test")

  expect(actual).toBe(expected)

  actual = convertSnakeToCamelCase("THIS_IS_A_TEST")

  expect(actual).toBe(expected)
})

it("convertCamelToSnakeCase", () => {
  let actual = convertCamelToSnakeCase("thisIsATest")
  let expected = "this_is_a_test"

  expect(actual).toBe(expected)

  actual = convertCamelToSnakeCase("someOtherCamelCase")
  expected = "some_other_camel_case"
  expect(actual).toBe(expected)

  actual = convertCamelToSnakeCase("testWithNumber5")
  expected = "test_with_number_5"
  expect(actual).toBe(expected)
})

describe("convertKeyCasing", () => {
  it("should convert a string to snake case", () => {
    const input = "thisIsAString"
    const expected = "this_is_a_string"
    const actual = convertKeyCasing(input, "toSnakeCase")

    expect(actual).toEqual(expected)
  })

  it("should convert a string to camel case", () => {
    const input = "this_is_a_string"
    const expected = "thisIsAString"
    const actual = convertKeyCasing(input, "toCamelCase")

    expect(actual).toEqual(expected)
  })

  it("should convert an object's keys to snake case", () => {
    const input = { firstName: "Test", lastName: "User" }
    const expected = { first_name: "Test", last_name: "User" }
    const actual = convertKeyCasing(input, "toSnakeCase")

    expect(actual).toEqual(expected)
  })

  it("should convert an object's keys to camel case", () => {
    const input = { first_name: "Test", last_name: "User" }
    const expected = { firstName: "Test", lastName: "User" }
    const actual = convertKeyCasing(input, "toCamelCase")

    expect(actual).toEqual(expected)
  })

  it("should convert an array of objects' keys to snake case", () => {
    const input = [
      { firstName: "Test", lastName: "User" },
      { firstName: "Test", lastName: "User" },
    ]
    const expected = [
      { first_name: "Test", last_name: "User" },
      { first_name: "Test", last_name: "User" },
    ]
    const actual = convertKeyCasing(input, "toSnakeCase")

    expect(actual).toEqual(expected)
  })

  it("should convert an array of objects' keys to camel case", () => {
    const input = [
      { first_name: "Test", last_name: "User" },
      { first_name: "Test", last_name: "User" },
    ]
    const expected = [
      { firstName: "Test", lastName: "User" },
      { firstName: "Test", lastName: "User" },
    ]
    const actual = convertKeyCasing(input, "toCamelCase")

    expect(actual).toEqual(expected)
  })
})

it("truncateText", () => {
  let actual = truncateText("Hello", 3)
  let expected = "..."

  expect(actual).toBe(expected)

  actual = truncateText("Hello", 4)
  expected = "H..."

  expect(actual).toBe(expected)

  actual = truncateText("Hello", 5)
  expected = "Hello"

  expect(actual).toBe(expected)

  expect(actual).toBe(expected)

  actual = truncateText("Hello", 20)
  expected = "Hello"

  expect(actual).toBe(expected)

  actual = truncateText("Hello", 0)
  expected = "..."

  expect(actual).toBe(expected)

  actual = truncateText("", 5)
  expected = ""

  expect(actual).toBe(expected)
})

it("fileNameFromPath", () => {
  const actual = fileNameFromPath("/path/to/file.html")
  const expected = "file.html"

  expect(actual).toBe(expected)
})

it("formatPosition", () => {
  let actual = formatPosition(1)
  let expected = "1st"

  expect(actual).toBe(expected)

  actual = formatPosition(2)
  expected = "2nd"

  expect(actual).toBe(expected)

  actual = formatPosition(3)
  expected = "3rd"

  expect(actual).toBe(expected)

  actual = formatPosition(4)
  expected = "4th"

  expect(actual).toBe(expected)
})

describe("pluralizeOnCondition", () => {
  it("pluralizeOnCondition - should return plural if condition is true", () => {
    expect(pluralizeOnCondition("thing", true)).toBe("things")
  })

  it("pluralizeOnCondition - should return unaltered word if condition is false", () => {
    expect(pluralizeOnCondition("thing", false)).toBe("thing")
  })
})

describe("pluralizeOnCondition", () => {
  it("replaceUnderscoreWithSpaces - should replace underscores with spaces", () => {
    expect(replaceUnderscoreWithSpaces("some_random_string")).toBe("some random string")
    expect(replaceUnderscoreWithSpaces(" some_random_string ")).toBe("some random string")
    expect(replaceUnderscoreWithSpaces(" some_random_ string ")).toBe("some random  string")
  })

  it("replaceSpacesWithUnderscore - should replace spaces with underscore", () => {
    expect(replaceSpacesWithUnderscore("some random string")).toBe("some_random_string")
    expect(replaceSpacesWithUnderscore(" some random string ")).toBe("some_random_string")
    expect(replaceSpacesWithUnderscore("some random  string ")).toBe("some_random__string")
    expect(replaceSpacesWithUnderscore(undefined)).toBe("")
  })
})

it("handleNullDisplay", () => {
  // For non-null values, the function should return the value
  let actual = handleNullDisplay("Hello")
  let expected = "Hello"

  expect(actual).toBe(expected)

  // For null values without a default passed, the function should return "N/A"
  actual = handleNullDisplay(null)
  expected = "N/A"

  expect(actual).toBe(expected)

  // For undefine values without a default passed, the function should return "N/A"
  actual = handleNullDisplay(undefined)
  expected = "N/A"

  expect(actual).toBe(expected)

  // For null values with a default passed, the function should return the default
  actual = handleNullDisplay(null, "None")
  expected = "None"

  expect(actual).toBe(expected)

  // For undefined values with a default passed, the function should return the default
  actual = handleNullDisplay(undefined, "None")
  expected = "None"

  expect(actual).toBe(expected)
})

describe("capitalizeText", () => {
  it("should return empty string if empty string is passed", () => {
    expect(capitalizeText("")).toBe("")
  })

  it("should capitalize string correctly", () => {
    expect(capitalizeText("t")).toBe("T")
    expect(capitalizeText("T")).toBe("T")
    expect(capitalizeText("testing")).toBe("Testing")
    expect(capitalizeText("testing here")).toBe("Testing here")
    expect(capitalizeText("Testing here")).toBe("Testing here")
  })
})

describe("enforceCharacterLimit", () => {
  it("enforceCharacterLimit - should return the string if it is less than the limit", () => {
    const string = "Hello World"
    expect(
      enforceCharacterLimit({
        text: string,
        characterLimit: 100,
        onCharacterLimit: () => {},
      }),
    ).toBe(string)
  })

  it("enforceCharacterLimit - should return the string if it is equal to the limit", () => {
    const string = "Hello World"
    expect(
      enforceCharacterLimit({
        text: string,
        characterLimit: 11,
        onCharacterLimit: () => {},
      }),
    ).toBe(string)
  })

  it("enforceCharacterLimit - should call onCharacterLimit if the string is greater than the limit", () => {
    const string = "Hello World"
    const onCharacterLimit = jest.fn()
    expect(
      enforceCharacterLimit({
        text: string,
        characterLimit: 5,
        onCharacterLimit,
      }),
    ).toBe("Hello")
    expect(onCharacterLimit).toHaveBeenCalled()
  })

  it("enforceCharacterLimit - should return a string with the length of the limit if the string is greater than the limit", () => {
    const string = "Hello World"
    expect(
      enforceCharacterLimit({
        text: string,
        characterLimit: 5,
        onCharacterLimit: () => {},
      }),
    ).toBe("Hello")
  })
})

describe("isValidEmail", () => {
  it("isValidEmail - should return true for a .com email domain", () => {
    expect(isValidEmail("kofi@gmail.com")).toBe(true)
  })

  it("isValidEmail - should return true for a .in email domain", () => {
    expect(isValidEmail("kofi@gmail.in")).toBe(true)
  })

  it("isValidEmail - should return true for a .co email domain", () => {
    expect(isValidEmail("kofi@akadenia.co")).toBe(true)
  })

  it("isValidEmail - should return true for a .edu email domain", () => {
    expect(isValidEmail("kofi@umw.edu")).toBe(true)
  })

  it("isValidEmail - should return true for a .org email domain", () => {
    expect(isValidEmail("kofi@who.org")).toBe(true)
  })

  it("isValidEmail - should return false for a missing email domain name", () => {
    expect(isValidEmail("kofi@.org")).toBe(false)
  })

  it("isValidEmail - should return false for a missing email domain name and @ symbol", () => {
    expect(isValidEmail("kofi.org")).toBe(false)
  })

  it("isValidEmail - should return false for a missing email domain", () => {
    expect(isValidEmail("kofi")).toBe(false)
  })

  it("isValidEmail - should return false for empty string value", () => {
    expect(isValidEmail("")).toBe(false)
  })

  it("isValidEmail - should return false for undefined value", () => {
    // the function parameter takes only String
    //  but we want to test for undefined values
    expect(isValidEmail(undefined as unknown as string)).toBe(false)
  })

  it("isValidEmail - should return false for null value", () => {
    // the function parameter takes only String
    //  but we want to test for null values
    expect(isValidEmail(null as unknown as string)).toBe(false)
  })
})

it("convertCamelToKebabCase", () => {
  let actual = convertCamelToKebabCase("thisIsATest")
  let expected = "this-is-a-test"

  expect(actual).toBe(expected)

  actual = convertCamelToKebabCase("someOtherCamelCase")
  expected = "some-other-camel-case"
  expect(actual).toBe(expected)

  actual = convertCamelToKebabCase("testWithNumber5")
  expected = "test-with-number5"
  expect(actual).toBe(expected)
})

it("convertKebabToCamelCase", () => {
  let actual = convertKebabToCamelCase("this-is-a-test")
  let expected = "ThisIsATest"

  expect(actual).toBe(expected)

  actual = convertKebabToCamelCase("some-other-camel-case")
  expected = "SomeOtherCamelCase"
  expect(actual).toBe(expected)

  actual = convertKebabToCamelCase("test-with-number5")
  expected = "TestWithNumber5"
  expect(actual).toBe(expected)
})

it("isAcronym", () => {
  let actual = isAcronym("NASA")
  let expected = true

  expect(actual).toBe(expected)

  actual = isAcronym("AI")
  expected = true
  expect(actual).toBe(expected)

  actual = isAcronym("FAQs")
  expected = false
  expect(actual).toBe(expected)

  actual = isAcronym("faqs")
  expected = false
  expect(actual).toBe(expected)
})

it("acronymToKebabCase", () => {
  let actual = acronymToKebabCase("AI")
  let expected = "a-i"

  expect(actual).toBe(expected)

  actual = acronymToKebabCase("FAQ")
  expected = "f-a-q"
  expect(actual).toBe(expected)

  let errorActual = () => acronymToKebabCase("faq")
  expected = "The text passed: faq is not an acronym."
  expect(errorActual).toThrow(expected)
})

it("generateIdFromWord", () => {
  let actual = generateIDFromWord("Public Safety")
  let expected = "public-safety"

  expect(actual).toBe(expected)

  actual = generateIDFromWord("AI")
  expected = "ai"
  expect(actual).toBe(expected)

  actual = generateIDFromWord("FinTech")
  expected = "fintech"
  expect(actual).toBe(expected)
})

it("generateWordFromId", () => {
  let actual = generateWordFromId("public-safety")
  let expected = "Public Safety"

  expect(actual).toBe(expected)

  actual = generateWordFromId("ai", { ai: "AI" })
  expected = "AI"
  expect(actual).toBe(expected)

  actual = generateWordFromId("fintech", { fintech: "FinTech" })
  expected = "FinTech"
  expect(actual).toBe(expected)
})

it("generateSlugFromWords", () => {
  let actual = generateSlugFromWordsWithID("qdsad123asd12dasd", "Hello world post by user")
  let expected = "hello-world-post-by-user-qdsad123asd12dasd"

  expect(actual).toBe(expected)

  actual = generateSlugFromWordsWithID("qdsad123asd12dasd")
  expected = "qdsad123asd12dasd"
  expect(actual).toBe(expected)

  actual = generateSlugFromWordsWithID("qdsad123asd12dasd", "Hello world post by user <$>")
  expected = "hello-world-post-by-user-%3C%24%3E-qdsad123asd12dasd"

  expect(actual).toBe(expected)
})

it("extractIDfromSlug", () => {
  let actual = extractIDfromSlug("hello-world-post-by-mo-qdsad123asd12dasd")
  let expected = "qdsad123asd12dasd"

  expect(actual).toBe(expected)

  actual = extractIDfromSlug("qdsad123asd12dasd")
  expected = "qdsad123asd12dasd"
  expect(actual).toBe(expected)

  let errorActual = () => extractIDfromSlug("")
  expected = "slug is required, cannot be empty string"
  expect(errorActual).toThrow(expected)

  errorActual = () => extractIDfromSlug(undefined as unknown as string)
  expected = "slug is required, cannot be null or undefined"
  expect(errorActual).toThrow(expected)

  errorActual = () => extractIDfromSlug(null as unknown as string)
  expected = "slug is required, cannot be null or undefined"
  expect(errorActual).toThrow(expected)
})
