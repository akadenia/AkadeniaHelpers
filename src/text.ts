import { ObjectHelpers } from "./"

// Internal Helper Functions At The Top

/**
 *
 * @function
 * @param {T} input - The string, object, or array of objects that needs to have its casing changed
 * @param {"toSnakeCase" | "toCamelCase"} type - The type of casing the string, object, or array of objects should be converted to (snake_case or camelCase)
 * @returns {T} - A new string, object, or array of objects in the specified casing
 */
export const convertKeyCasing = <T extends string | Object | Array<Object>>(input: T, type: "toSnakeCase" | "toCamelCase"): T => {
  if (typeof input === "string") {
    const transformedString =
      type === "toSnakeCase"
        ? input.replace(/([A-Z0-9])/g, "_$1").toLowerCase()
        : input.toLowerCase().replace(/(_\w)/g, (m) => m[1].toUpperCase())
    return transformedString as T
  } else if (ObjectHelpers.isPureObject(input)) {
    const newObj: any = {}
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const newKey =
          type === "toSnakeCase" ? key.replace(/([A-Z])/g, "_$1").toLowerCase() : key.replace(/(_\w)/g, (m) => m[1].toUpperCase())
        if (ObjectHelpers.isPureObject(input[key]) || Array.isArray(input[key])) {
          newObj[newKey] = convertKeyCasing(input[key] as Object, type)
        } else {
          newObj[newKey] = input[key]
        }
      }
    }
    return newObj as T
  } else if (Array.isArray(input)) {
    return input.map((item: Object) => convertKeyCasing(item, type)) as T
  }
  return input as T
}

/**
 *
 * @function
 * @returns {string} - A randomly generated string.
 */
export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 *
 * @function
 * @param {number} position - A position number.
 * @returns {string} - A string representing the position with the appropriate suffix (st, nd, rd, or th) e.g "1st", "2nd", "3rd", "4th", etc.
 */
export const formatPosition = (position: number): string => {
  let postfix = "th"

  if (position === 1) {
    postfix = "st"
  } else if (position === 2) {
    postfix = "nd"
  } else if (position === 3) {
    postfix = "rd"
  }

  return `${position}${postfix}`
}

/**
 *
 * @function
 * @param {string} text - The text to be truncated
 * @param {number} characterLimit - The maximum number of characters that the text can have
 * @returns {string} - The truncated text with "..." added at the end if the text has exceeded the character limit
 */
export const truncateText = (text: string, characterLimit: number): string =>
  text.length > characterLimit ? text.substring(0, characterLimit - 3) + "..." : text

/**
 *
 * @function
 * @param {string} path - The path of the file
 * @returns {string} - The file name
 */
export const fileNameFromPath = (path: string): string => path.substring(path.lastIndexOf("/") + 1)

/**
 *
 * @function
 * @param {string} s - The string that needs to have spaces replaced with underscores
 * @returns {string} - The string with spaces replaced with underscores
 */
export const replaceSpacesWithUnderscore = (s?: string): string => s?.trim().replace(/\s/g, "_") || ""

/**
 *
 * @function
 * @param {string} s - The string that needs to have underscores replaced with spaces
 * @returns {string} - The string with underscores replaced with spaces
 */
export const replaceUnderscoreWithSpaces = (s?: string): string => s?.trim().replace(/_/g, " ") || ""

/**
 *
 * @function
 * @param {string} word - The word that needs to be pluralized
 * @param {boolean} condition - The condition that determines if the word needs to be pluralized
 * @returns {string} - The word with "s" added to the end if the condition is true
 */
export const pluralizeOnCondition = (word: string, condition: boolean) => {
  return condition ? `${word}s` : word
}
/**
 * @function
 * @param {Object | Array<Object> | string} data - The object or array of objects to convert key cases
 * @returns {Object | Array<Object> | string} - The object or array of objects with the keys in camelCase
 */
export const convertSnakeToCamelCase = (data: string | Object | Array<Object>) => {
  return convertKeyCasing(data, "toCamelCase")
}

/**
 * @function
 * @param {Object | Array<Object> | string} data - The object or array of objects to convert key cases
 * @returns {Object | Array<Object> | string} - The object or array of objects with the keys in snake_case
 */
export const convertCamelToSnakeCase = (data: string | Object | Array<Object>) => {
  return convertKeyCasing(data, "toSnakeCase")
}

/**
 * Convert camel case to kebab case
 * @function
 * @param {string} word - The word needed to be converted to kebab case from camel case
 * @returns {string} - The word returned as kebab case
 */
export function convertCamelToKebabCase(word: string): string {
  return word.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
}

/**
 * Convert kebab case to camel case
 * @function
 * @param {string} word - The word needed to be converted from kebab case to camel case
 * @returns {string} - The word returned as camel case
 */
export function convertKebabToCamelCase(word: string): string {
  return word
    .split("-")
    .map((token) => capitalizeText(token))
    .join("")
}

/**
 * Generate acronym from text
 * @param term term to be converted to an acronym
 * @returns an acronym generated from the term
 */
export function generateAcronym(term: string) {
  return term
    .split(" ")
    .map((word) => word[0])
    .join("")
}

/**
 * Validate if a word is acronym
 * @function
 * @param {string} word - The word that is being validated as acronym
 * @returns {string} - The boolean value when the condition is met
 */
export function isAcronym(word: string): boolean {
  return word.toUpperCase() === word
}

/**
 * Convert acronym to kebab case
 * @function
 * @param {string} word - The acronym to be converted to kebab case
 * @returns {string} - The word returned as camel case
 */
export function acronymToKebabCase(word: string): string {
  if (!isAcronym(word)) {
    throw new Error(`The text passed: ${word} is not an acronym.`)
  }
  return word
    .split("")
    .map((token) => token.toLowerCase())
    .join("-")
}

/**
 * @function
 * @param  value The string to be displayed
 * @returns The passed string or the default string if the passed string is null or undefined
 */
export const handleNullDisplay = (value: string | null | undefined, defaultValue: string = "N/A") => value ?? defaultValue

/**
 * @function
 * @param  text The string to be capitalized
 * @returns The string in a capitalized form
 */
export const capitalizeText = (text: string | undefined): string => {
  if (!text) return ""
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Enforces a character limit on a given string.
 * @function
 * @param {object} options - The options for the function.
 * @param {string} options.text - The text to limit.
 * @param {number} options.characterLimit - The maximum number of characters allowed.
 * @param {function} options.onCharacterLimit - The function to call when the character limit is exceeded.
 * @returns {string} The original string if it is shorter than the character limit, or a truncated version of the string if it is longer.
 */
export const enforceCharacterLimit = ({
  text,
  characterLimit,
  onCharacterLimit,
}: {
  text: string
  characterLimit: number
  onCharacterLimit: () => void
}): string => {
  if (text.length > characterLimit) {
    onCharacterLimit()
    return text.slice(0, characterLimit)
  }
  return text
}

/**
 * Validate email if its a proper email or not
 * @function
 * @param email The email to be validated
 * @returns The boolean value when the condition is met
 */
export const isValidEmail = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/
  const result = email?.match(emailRegex)
  return !!result
}

/**
 * Generate ID from word
 * @function
 * @param word The word needed to generate ID from
 * @returns The generated ID from the word
 */
export function generateIDFromWord(text: string): string {
  return text
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
}

/**
 * Get the word from the generated ID
 * @function
 * @param id The id that is needed to get the word from.
 * @param customList The word lists that are used to check the original words from.
 * @returns The word that is got from the id
 */
export function generateWordFromId(id: string, customList: Record<string, string> = {}): string {
  return customList[id] ?? id.split("-").map(capitalizeText).join(" ")
}

/**
 * Get the slug from words
 * @function
 * @param id The id that will be in the slug
 * @param words The words that will be in the slug
 * @returns The slug from the words and it will be url path safe
 */
export function generateSlugFromWordsWithID(id: string, ...words: string[]): string {
  let allWords = [...words.map((word) => word.split(" ")).flat(), ...id.split(" ").flat()]
  allWords = allWords.map((word) => encodeURIComponent(word.toLocaleLowerCase()))
  return allWords.join("-")
}

/**
 * Extracts the id from the slug
 * @function
 * @param slug The slug associated with the id
 * @returns The id from the slug
 */
export function extractIDfromSlug(slug: string): string | undefined {
  if (!slug) {
    if (slug === "") {
      throw new Error("slug is required, cannot be empty string")
    }
    throw new Error("slug is required, cannot be null or undefined")
  }
  return slug.split("-").pop()
}
