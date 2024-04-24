/**
 *
 * @function
 * @param {any} object - The object to check if it is a pure object (not an array, date, or function)
 * @returns {boolean} - Whether or not the provided object is a pure object
 */
export const isPureObject = function (object: any) {
  const isDateObject = object instanceof Date
  return object === Object(object) && !Array.isArray(object) && typeof object !== "function" && !isDateObject
}

/**
 * @function
 * @param {string} str - The string of cookies to parse
 * @returns {Object} - The object containing key-value pairs of the parsed cookies
 */
export const parseCookie = (str: string): Object =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc: { [key: string]: string }, v) => {
      if (v.length > 1) {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      }
      return acc
    }, {})

/**
 * Filters an array of objects based on a specified property and value.
 * @template T extends Record<string, any> - The type of objects in the array.
 * @param {T[]} array - The array of objects to filter.
 * @param {keyof T} propertyName - The name of the property to filter on.
 * @param {T[keyof T]} propertyValue - The value of the property to filter on.
 * @returns {T[]} - The filtered array of objects.
 */
export function filterObjectsByProperty<T extends Record<string, any>>(
  array: T[],
  propertyName: keyof T,
  propertyValue: T[keyof T],
): T[] {
  const predicate = (obj: T) => Object.getOwnPropertyDescriptor(obj, propertyName) && obj[propertyName] === propertyValue
  return array.filter(predicate)
}

/**
 * Checks if the main object contains the sub object.
 * @template T extends Record<string, any> - The type of the main object.
 * @param {T} mainObject - The main object to check.
 * @param {Partial<T>} subObject - The sub object to look for in the main object.
 * @returns {boolean} - True if the main object contains the sub object, false otherwise.
 */
export function containsSubObject<T extends Record<string, any>>(mainObject: T, subObject: Partial<T>): boolean {
  if (!(isPureObject(mainObject) && isPureObject(subObject))) {
    return false
  }

  for (let key of Object.keys(subObject)) {
    if (!(Object.getOwnPropertyDescriptor(mainObject, key) && mainObject[key] === subObject[key])) {
      return false
    }
  }

  return true
}

/**
 * Finds the object containing the given sub object in the array.
 * @template T extends Record<string, any> - The type of objects in the array.
 * @param {T[]} array - The array of objects.
 * @param {Partial<T>} subObject - The sub object used to search the array.
 * @returns {T | null} - The object containing the given sub object or null.
 */
export function findObjectBySubObject<T extends Record<string, any>>(array: T[], subObject: Partial<T>): T | null {
  const predicate = (obj: any) => containsSubObject(obj, subObject)
  return array.find(predicate) || null
}

/**
 * Filters an array of objects based on the objects containing the given sub object
 * @template T extends Record<string, any>
 * @param {T[]} array - The array of objects
 * @param {Partial<T>} subObject - The sub object used to search the array
 * @returns {Object | null} - An array of objects containing the given sub object
 */
export function filterObjectsBySubObject<T extends Record<string, any>>(array: T[], subObject: Partial<T>): T[] {
  const predicate = (obj: any) => containsSubObject(obj, subObject)
  return array.filter(predicate)
}

/**
 * Checks if the object has the key with the value.
 * @param {Object} object - The object to check
 * @param {string} key - The key to check
 * @param {any} value - The value to check
 * @returns {boolean} - Whether or not the object has the key with the value
 * @example
 * const object = { a: 1, b: 2, c: 3 }
 * objectPropHasValue(object, 'a', 1) // true
 * objectPropHasValue(object, 'b', 3) // false
 */
export const objectPropHasValue = <ObjectType>({
  object,
  propName,
  value,
}: {
  object: ObjectType
  propName: keyof ObjectType
  value: ObjectType[keyof ObjectType]
}): boolean => object[propName] === value

/**
 * Finds the first entry in the array that satisfies the predicate.
 * @template EntryType - The type of the entries in the array.
 * @param {EntryType[]} array - The array of entries to search.
 * @param {(item: EntryType) => boolean} predicate - The predicate function to use to search the array.
 * @returns {EntryType | null} - The first entry that satisfies the predicate, or null if not found.
 */
export const findEntry = <EntryType>(array: EntryType[], predicate: (item: EntryType) => boolean): EntryType | null =>
  array.find(predicate) || null

export function convertArrayToMap<T extends object>(arrayData: T[], keyProp: keyof T) {
  if (typeof keyProp !== "string") {
    throw new Error("keyProp can only be strings or numbers")
  }

  const dataAsObject: { [key: string]: T } = {}

  arrayData.reduce((prev, curr) => {
    const key = curr[keyProp] as unknown as string
    prev[key] = curr
    return prev
  }, dataAsObject)

  return dataAsObject
}
