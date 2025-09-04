<div align="center">
  <img src="https://cdn.akadenia.com/images/akadenia-webp/logo/horizontal-logo.svg" alt="Akadenia" width="200" />
  
  ## @akadenia/helpers
  
  <img src="https://cdn.akadenia.com/images/badges/npm-version-helpers.svg" alt="npm version" />
  <img src="https://cdn.akadenia.com/images/badges/license-mit.svg" alt="License: MIT" />
  <img src="https://cdn.akadenia.com/images/badges/typescript.svg" alt="TypeScript" />
  
  A comprehensive collection of utility functions for common JavaScript/TypeScript operations including date manipulation, text processing, object handling, map calculations, and more.
  
  [Documentation](https://akadenia.com/packages/akadenia-helpers) • [GitHub](https://github.com/akadenia/AkadeniaHelpers) • [Issues](https://github.com/akadenia/AkadeniaHelpers/issues)
</div>

## Features

- **Date Helpers**: Comprehensive date manipulation and formatting utilities
- **Text Helpers**: String processing, validation, and transformation functions
- **Object Helpers**: Object manipulation, filtering, and utility functions
- **Map Helpers**: Geographical calculations and coordinate operations
- **Generic Helpers**: General utility functions for common operations
- **File Helpers**: File validation and processing utilities
- **TypeScript Support**: Full type definitions included
- **Zero Dependencies**: Lightweight with no external dependencies

## Installation

```bash
npm install @akadenia/helpers
```

## Usage

```typescript
import { DateHelpers, TextHelpers, ObjectHelpers, MapHelpers, GenericHelpers, FileHelpers } from '@akadenia/helpers'
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [DateHelpers](#datehelpers)
- [TextHelpers](#texthelpers)
- [ObjectHelpers](#objecthelpers)
- [MapHelpers](#maphelpers)
- [GenericHelpers](#generichelpers)
- [FileHelpers](#filehelpers)
- [Contributing](#contributing)
  - [License](#license)

## DateHelpers

Utility functions for date and time operations.

### `getReadableDateTime(datetime?)`

Returns the date in `yyyy-mm-dd hh:mm:ss` format.

**Parameters:**
- `datetime` (optional): `Date` - The date to convert. Defaults to current date.

**Example:**
```typescript
import { DateHelpers } from '@akadenia/helpers'

// Using current date
const now = DateHelpers.getReadableDateTime()
console.log(now) // "2024-01-15 14:30:25"

// Using specific date
const specificDate = DateHelpers.getReadableDateTime(new Date('2024-01-15T10:30:00Z'))
console.log(specificDate) // "2024-01-15 10:30:00"
```

### `getReadableDate(datetime?)`

Returns the date in `yyyy-mm-dd` format.

**Parameters:**
- `datetime` (optional): `Date` - The date to convert. Defaults to current date.

**Example:**
```typescript
const date = DateHelpers.getReadableDate()
console.log(date) // "2024-01-15"

const specificDate = DateHelpers.getReadableDate(new Date('2024-01-15T10:30:00Z'))
console.log(specificDate) // "2024-01-15"
```

### `getDateString(date)`

Returns a string representing the date in the user's local timezone.

**Parameters:**
- `date`: `string | Date` - The date to convert.

**Example:**
```typescript
const dateString = DateHelpers.getDateString('2024-01-15')
console.log(dateString) // "1/15/2024" (format depends on locale)

const dateString2 = DateHelpers.getDateString(new Date('2024-01-15T10:30:00Z'))
console.log(dateString2) // "1/15/2024"
```

### `formatDateTime(date, options, localTimezone?)`

Returns a formatted date string using Intl.DateTimeFormat options.

**Parameters:**
- `date`: `string | Date` - The date to format.
- `options`: `Intl.DateTimeFormatOptions` - Formatting options.
- `localTimezone` (optional): `string | Intl.Locale` - Locale for formatting. Defaults to "en-US".

**Example:**
```typescript
const formatted = DateHelpers.formatDateTime(
  new Date('2024-01-15T10:30:00Z'),
  { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  },
  'en-US'
)
console.log(formatted) // "January 15, 2024 at 10:30 AM"
```

### `parseDate(date)`

Returns a Date object from a string or Date input. Throws an error for invalid dates.

**Parameters:**
- `date`: `string | Date` - The date to parse.

**Example:**
```typescript
const parsedDate = DateHelpers.parseDate('2024-01-15')
console.log(parsedDate) // Date object for 2024-01-15

const parsedDate2 = DateHelpers.parseDate('invalid-date')
// Throws: Error: Cannot parse date: "invalid-date"
```

### `getShortOrdinalDate(date, appendTime?)`

Returns a string representing the date in short ordinal format.

**Parameters:**
- `date`: `string | Date` - The date to format.
- `appendTime` (optional): `boolean` - Whether to include time. Defaults to false.

**Example:**
```typescript
const ordinalDate = DateHelpers.getShortOrdinalDate('2024-01-15')
console.log(ordinalDate) // "Jan 15th 2024"

const ordinalDateTime = DateHelpers.getShortOrdinalDate('2024-01-15T10:30:00Z', true)
console.log(ordinalDateTime) // "Jan 15th 2024 10:30:00"
```

## MapHelpers

Utility functions for geographical calculations and map operations.

### `getDistanceBetweenPoints(point1, point2)`

Calculates the distance between two geographical points using the Haversine formula.

**Parameters:**
- `point1`: `number[] | undefined` - First point coordinates [longitude, latitude].
- `point2`: `number[] | undefined` - Second point coordinates [longitude, latitude].

**Example:**
```typescript
// Distance between New York and Los Angeles
const nyc = [-74.006, 40.7128] // [lng, lat]
const la = [-118.2437, 34.0522] // [lng, lat]

const distance = MapHelpers.getDistanceBetweenPoints(nyc, la)
console.log(distance) // 3944419.5 (meters, approximately 3944 km)

// Returns null for invalid points
const invalid = MapHelpers.getDistanceBetweenPoints(nyc, undefined)
console.log(invalid) // null
```

### `compareLocations(location1, location2, precision?)`

Compares two locations to see if they are the same within a specified precision.

**Parameters:**
- `location1`: `number[] | undefined` - First location coordinates [longitude, latitude].
- `location2`: `number[] | undefined` - Second location coordinates [longitude, latitude].
- `precision` (optional): `number` - Decimal precision for comparison. Defaults to 6.

**Example:**
```typescript
const loc1 = [-74.006, 40.7128]
const loc2 = [-74.006001, 40.712801] // Very close to loc1
const loc3 = [-74.01, 40.72] // Further from loc1

console.log(MapHelpers.compareLocations(loc1, loc2)) // true (within 6 decimal precision)
console.log(MapHelpers.compareLocations(loc1, loc3)) // false
console.log(MapHelpers.compareLocations(loc1, loc2, 3)) // true (within 3 decimal precision)

// Throws error for undefined locations
MapHelpers.compareLocations(loc1, undefined) // Error: location1 and location2 are required
```

### `getBearingToCoordinate({startCoordinate, endCoordinate})`

Calculates the bearing (direction) from one coordinate to another in degrees.

**Parameters:**
- `startCoordinate`: `number[] | undefined` - Starting point [longitude, latitude].
- `endCoordinate`: `number[] | undefined` - Ending point [longitude, latitude].

**Example:**
```typescript
const start = [-74.006, 40.7128] // New York
const end = [-118.2437, 34.0522] // Los Angeles

const bearing = MapHelpers.getBearingToCoordinate({ startCoordinate: start, endCoordinate: end })
console.log(bearing) // 277.5 (degrees, approximately west)

// Throws error for undefined coordinates
MapHelpers.getBearingToCoordinate({ startCoordinate: start, endCoordinate: undefined })
// Error: startCoordinate and endCoordinate are required
```

## TextHelpers

Utility functions for text manipulation and processing.

### `uuidv4()`

Returns a randomly generated UUID v4 string.

**Example:**
```typescript
const id = TextHelpers.uuidv4()
console.log(id) // "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```

### `formatPosition(position)`

Returns a string position with appropriate suffix (st, nd, rd, th).

**Parameters:**
- `position`: `number` - The position number.

**Example:**
```typescript
console.log(TextHelpers.formatPosition(1))  // "1st"
console.log(TextHelpers.formatPosition(2))  // "2nd"
console.log(TextHelpers.formatPosition(3))  // "3rd"
console.log(TextHelpers.formatPosition(4))  // "4th"
console.log(TextHelpers.formatPosition(21)) // "21st"
```

### `truncateText(text, characterLimit)`

Returns truncated text with ellipsis if it exceeds the character limit.

**Parameters:**
- `text`: `string` - The text to truncate.
- `characterLimit`: `number` - Maximum number of characters.

**Example:**
```typescript
const short = TextHelpers.truncateText("Hello World", 5)
console.log(short) // "He..."

const long = TextHelpers.truncateText("Hello World", 20)
console.log(long) // "Hello World"
```

### `fileNameFromPath(path)`

Extracts the filename from a file path.

**Parameters:**
- `path`: `string` - The file path.

**Example:**
```typescript
const filename = TextHelpers.fileNameFromPath('/path/to/file.txt')
console.log(filename) // "file.txt"

const filename2 = TextHelpers.fileNameFromPath('C:\\Users\\file.pdf')
console.log(filename2) // "file.pdf"
```

### `replaceSpacesWithUnderscore(s?)`

Replaces spaces with underscores in a string.

**Parameters:**
- `s` (optional): `string` - The string to process.

**Example:**
```typescript
const result = TextHelpers.replaceSpacesWithUnderscore("hello world test")
console.log(result) // "hello_world_test"

const result2 = TextHelpers.replaceSpacesWithUnderscore()
console.log(result2) // ""
```

### `replaceUnderscoreWithSpaces(s?)`

Replaces underscores with spaces in a string.

**Parameters:**
- `s` (optional): `string` - The string to process.

**Example:**
```typescript
const result = TextHelpers.replaceUnderscoreWithSpaces("hello_world_test")
console.log(result) // "hello world test"
```

### `pluralizeOnCondition(word, condition)`

Returns pluralized version of the word if condition is true.

**Parameters:**
- `word`: `string` - The word to pluralize.
- `condition`: `boolean` - Whether to pluralize.

**Example:**
```typescript
const plural = TextHelpers.pluralizeOnCondition("item", true)
console.log(plural) // "items"

const singular = TextHelpers.pluralizeOnCondition("item", false)
console.log(singular) // "item"
```

### `convertSnakeToCamelCase(data)`

Converts snake_case to camelCase for strings, objects, or arrays of objects.

**Parameters:**
- `data`: `string | Object | Array<Object>` - The data to convert.

**Example:**
```typescript
// String conversion
const camelString = TextHelpers.convertSnakeToCamelCase("hello_world")
console.log(camelString) // "helloWorld"

// Object conversion
const camelObject = TextHelpers.convertSnakeToCamelCase({
  first_name: "John",
  last_name: "Doe",
  user_info: {
    phone_number: "123-456-7890"
  }
})
console.log(camelObject)
// {
//   firstName: "John",
//   lastName: "Doe",
//   userInfo: {
//     phoneNumber: "123-456-7890"
//   }
// }
```

### `convertCamelToSnakeCase(data)`

Converts camelCase to snake_case for strings, objects, or arrays of objects.

**Parameters:**
- `data`: `string | Object | Array<Object>` - The data to convert.

**Example:**
```typescript
// String conversion
const snakeString = TextHelpers.convertCamelToSnakeCase("helloWorld")
console.log(snakeString) // "hello_world"

// Object conversion
const snakeObject = TextHelpers.convertCamelToSnakeCase({
  firstName: "John",
  lastName: "Doe",
  userInfo: {
    phoneNumber: "123-456-7890"
  }
})
console.log(snakeObject)
// {
//   first_name: "John",
//   last_name: "Doe",
//   user_info: {
//     phone_number: "123-456-7890"
//   }
// }
```

### `convertCamelToKebabCase(word)`

Converts camelCase to kebab-case.

**Parameters:**
- `word`: `string` - The word to convert.

**Example:**
```typescript
const kebab = TextHelpers.convertCamelToKebabCase("helloWorld")
console.log(kebab) // "hello-world"

const kebab2 = TextHelpers.convertCamelToKebabCase("XMLHttpRequest")
console.log(kebab2) // "xml-http-request"
```

### `convertKebabToCamelCase(word)`

Converts kebab-case to camelCase.

**Parameters:**
- `word`: `string` - The word to convert.

**Example:**
```typescript
const camel = TextHelpers.convertKebabToCamelCase("hello-world")
console.log(camel) // "HelloWorld"

const camel2 = TextHelpers.convertKebabToCamelCase("xml-http-request")
console.log(camel2) // "XmlHttpRequest"
```

### `generateAcronym(term)`

Generates an acronym from a term.

**Parameters:**
- `term`: `string` - The term to convert to acronym.

**Example:**
```typescript
const acronym = TextHelpers.generateAcronym("Hyper Text Markup Language")
console.log(acronym) // "HTML"

const acronym2 = TextHelpers.generateAcronym("JavaScript Object Notation")
console.log(acronym2) // "JSON"
```

### `isAcronym(word)`

Validates if a word is an acronym (all uppercase).

**Parameters:**
- `word`: `string` - The word to validate.

**Example:**
```typescript
console.log(TextHelpers.isAcronym("HTML")) // true
console.log(TextHelpers.isAcronym("html")) // false
console.log(TextHelpers.isAcronym("JavaScript")) // false
```

### `acronymToKebabCase(word)`

Converts an acronym to kebab-case.

**Parameters:**
- `word`: `string` - The acronym to convert.

**Example:**
```typescript
const kebab = TextHelpers.acronymToKebabCase("HTML")
console.log(kebab) // "h-t-m-l"

const kebab2 = TextHelpers.acronymToKebabCase("API")
console.log(kebab2) // "a-p-i"

// Throws error if not an acronym
TextHelpers.acronymToKebabCase("html") // Error: The text passed: html is not an acronym.
```

### `handleNullDisplay(value, defaultValue?)`

Returns the value or a default string if the value is null or undefined.

**Parameters:**
- `value`: `string | null | undefined` - The value to display.
- `defaultValue` (optional): `string` - Default value. Defaults to "N/A".

**Example:**
```typescript
console.log(TextHelpers.handleNullDisplay("Hello")) // "Hello"
console.log(TextHelpers.handleNullDisplay(null)) // "N/A"
console.log(TextHelpers.handleNullDisplay(undefined)) // "N/A"
console.log(TextHelpers.handleNullDisplay(null, "No data")) // "No data"
```

### `capitalizeText(text?)`

Capitalizes the first letter of a text.

**Parameters:**
- `text` (optional): `string` - The text to capitalize.

**Example:**
```typescript
console.log(TextHelpers.capitalizeText("hello world")) // "Hello world"
console.log(TextHelpers.capitalizeText("HELLO")) // "Hello"
console.log(TextHelpers.capitalizeText()) // ""
```

### `enforceCharacterLimit({text, characterLimit, onCharacterLimit})`

Enforces a character limit and calls a callback when exceeded.

**Parameters:**
- `text`: `string` - The text to limit.
- `characterLimit`: `number` - Maximum characters allowed.
- `onCharacterLimit`: `() => void` - Callback when limit is exceeded.

**Example:**
```typescript
const result = TextHelpers.enforceCharacterLimit({
  text: "This is a very long text that exceeds the limit",
  characterLimit: 10,
  onCharacterLimit: () => console.log("Character limit exceeded!")
})
console.log(result) // "This is a" (truncated)
// Console: "Character limit exceeded!"
```

### `isValidEmail(email)`

Validates if an email address is properly formatted.

**Parameters:**
- `email`: `string` - The email to validate.

**Example:**
```typescript
console.log(TextHelpers.isValidEmail("user@example.com")) // true
console.log(TextHelpers.isValidEmail("invalid-email")) // false
console.log(TextHelpers.isValidEmail("user@domain.co.uk")) // true
console.log(TextHelpers.isValidEmail("")) // false
```

### `generateIDFromWord(text)`

Generates an ID from a word by converting to lowercase and replacing spaces with hyphens.

**Parameters:**
- `text`: `string` - The text to convert to ID.

**Example:**
```typescript
const id = TextHelpers.generateIDFromWord("Hello World Test")
console.log(id) // "hello-world-test"

const id2 = TextHelpers.generateIDFromWord("My Awesome Feature")
console.log(id2) // "my-awesome-feature"
```

### `generateWordFromId(id, customList?)`

Converts an ID back to a readable word format.

**Parameters:**
- `id`: `string` - The ID to convert.
- `customList` (optional): `Record<string, string>` - Custom mapping for specific IDs.

**Example:**
```typescript
const word = TextHelpers.generateWordFromId("hello-world-test")
console.log(word) // "Hello World Test"

const customWord = TextHelpers.generateWordFromId("api", { "api": "Application Programming Interface" })
console.log(customWord) // "Application Programming Interface"
```

### `generateSlugFromWordsWithID(id, ...words)`

Generates a URL-safe slug from an ID and additional words.

**Parameters:**
- `id`: `string` - The ID to include in the slug.
- `...words`: `string[]` - Additional words to include.

**Example:**
```typescript
const slug = TextHelpers.generateSlugFromWordsWithID("user", "profile", "settings")
console.log(slug) // "profile-settings-user"

const slug2 = TextHelpers.generateSlugFromWordsWithID("123", "hello world", "test")
console.log(slug2) // "hello%20world-test-123"
```

### `extractIDfromSlug(slug)`

Extracts the ID from a slug (last part after splitting by hyphens).

**Parameters:**
- `slug`: `string` - The slug to extract ID from.

**Example:**
```typescript
const id = TextHelpers.extractIDfromSlug("hello-world-test-123")
console.log(id) // "123"

const id2 = TextHelpers.extractIDfromSlug("user-profile-abc")
console.log(id2) // "abc"

// Throws error for empty slug
TextHelpers.extractIDfromSlug("") // Error: slug cannot be empty, null or undefined string
```

### `abbreviateNumber(number)`

Abbreviates large numbers with K, M, B suffixes.

**Parameters:**
- `number`: `number | undefined | null` - The number to abbreviate.

**Example:**
```typescript
console.log(TextHelpers.abbreviateNumber(500)) // "500"
console.log(TextHelpers.abbreviateNumber(1500)) // "1.5K"
console.log(TextHelpers.abbreviateNumber(1500000)) // "1.5M"
console.log(TextHelpers.abbreviateNumber(1500000000)) // "1.5B"
console.log(TextHelpers.abbreviateNumber(null)) // null
```

## ObjectHelpers

Utility functions for object manipulation and processing.

### `isPureObject(object)`

Checks if an object is a pure object (not array, date, or function).

**Parameters:**
- `object`: `any` - The object to check.

**Example:**
```typescript
console.log(ObjectHelpers.isPureObject({})) // true
console.log(ObjectHelpers.isPureObject([])) // false
console.log(ObjectHelpers.isPureObject(new Date())) // false
console.log(ObjectHelpers.isPureObject(() => {})) // false
console.log(ObjectHelpers.isPureObject("string")) // false
```

### `parseCookie(str)`

Parses a cookie string into an object.

**Parameters:**
- `str`: `string` - The cookie string to parse.

**Example:**
```typescript
const cookies = ObjectHelpers.parseCookie("name=John; age=30; city=New York")
console.log(cookies) // { name: "John", age: "30", city: "New York" }

const cookies2 = ObjectHelpers.parseCookie("session=abc123; theme=dark")
console.log(cookies2) // { session: "abc123", theme: "dark" }
```

### `filterObjectsByProperty(array, propertyName, propertyValue)`

Filters an array of objects based on a specific property and value.

**Parameters:**
- `array`: `T[]` - Array of objects to filter.
- `propertyName`: `keyof T` - Name of the property to filter on.
- `propertyValue`: `T[keyof T]` - Value to match.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "John", age: 35 }
]

const johns = ObjectHelpers.filterObjectsByProperty(users, "name", "John")
console.log(johns) // [{ id: 1, name: "John", age: 30 }, { id: 3, name: "John", age: 35 }]

const adults = ObjectHelpers.filterObjectsByProperty(users, "age", 30)
console.log(adults) // [{ id: 1, name: "John", age: 30 }]
```

### `containsSubObject(mainObject, subObject)`

Checks if the main object contains all key-value pairs from the sub-object.

**Parameters:**
- `mainObject`: `T` - The main object to check.
- `subObject`: `Partial<T>` - The sub-object to search for.

**Example:**
```typescript
const mainObj = { id: 1, name: "John", age: 30, city: "New York" }
const subObj = { name: "John", age: 30 }

console.log(ObjectHelpers.containsSubObject(mainObj, subObj)) // true

const subObj2 = { name: "Jane", age: 30 }
console.log(ObjectHelpers.containsSubObject(mainObj, subObj2)) // false
```

### `findObjectBySubObject(array, subObject)`

Finds the first object in an array that contains the specified sub-object.

**Parameters:**
- `array`: `T[]` - Array of objects to search.
- `subObject`: `Partial<T>` - The sub-object to search for.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", age: 30, city: "New York" },
  { id: 2, name: "Jane", age: 25, city: "Boston" },
  { id: 3, name: "Bob", age: 30, city: "Chicago" }
]

const result = ObjectHelpers.findObjectBySubObject(users, { age: 30, city: "New York" })
console.log(result) // { id: 1, name: "John", age: 30, city: "New York" }

const result2 = ObjectHelpers.findObjectBySubObject(users, { name: "Alice" })
console.log(result2) // null
```

### `filterObjectsBySubObject(array, subObject)`

Filters an array of objects based on containing the specified sub-object.

**Parameters:**
- `array`: `T[]` - Array of objects to filter.
- `subObject`: `Partial<T>` - The sub-object to search for.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", age: 30, city: "New York" },
  { id: 2, name: "Jane", age: 25, city: "Boston" },
  { id: 3, name: "Bob", age: 30, city: "Chicago" }
]

const results = ObjectHelpers.filterObjectsBySubObject(users, { age: 30 })
console.log(results) // [{ id: 1, name: "John", age: 30, city: "New York" }, { id: 3, name: "Bob", age: 30, city: "Chicago" }]
```

### `objectPropHasValue({object, propName, value})`

Checks if an object has a specific property with a specific value.

**Parameters:**
- `object`: `ObjectType` - The object to check.
- `propName`: `keyof ObjectType` - The property name.
- `value`: `ObjectType[keyof ObjectType]` - The expected value.

**Example:**
```typescript
const user = { id: 1, name: "John", age: 30 }

console.log(ObjectHelpers.objectPropHasValue({ object: user, propName: "name", value: "John" })) // true
console.log(ObjectHelpers.objectPropHasValue({ object: user, propName: "age", value: 25 })) // false
```

### `findEntry(array, predicate)`

Finds the first entry in an array that satisfies a predicate function.

**Parameters:**
- `array`: `EntryType[]` - Array to search.
- `predicate`: `(item: EntryType) => boolean` - Predicate function.

**Example:**
```typescript
const numbers = [1, 2, 3, 4, 5, 6]

const even = ObjectHelpers.findEntry(numbers, (n) => n % 2 === 0)
console.log(even) // 2

const greaterThan5 = ObjectHelpers.findEntry(numbers, (n) => n > 5)
console.log(greaterThan5) // 6

const greaterThan10 = ObjectHelpers.findEntry(numbers, (n) => n > 10)
console.log(greaterThan10) // null
```

### `convertArrayToMap(arrayData, keyProp)`

Converts an array of objects to a map using a specified key property.

**Parameters:**
- `arrayData`: `T[]` - Array of objects to convert.
- `keyProp`: `keyof T` - Property to use as the key.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 }
]

const userMap = ObjectHelpers.convertArrayToMap(users, "id")
console.log(userMap)
// {
//   "1": { id: 1, name: "John", age: 30 },
//   "2": { id: 2, name: "Jane", age: 25 },
//   "3": { id: 3, name: "Bob", age: 35 }
// }
```

## GenericHelpers

General utility functions for common operations.

### `delay(ms)`

Creates a delay (sleep) for the specified number of milliseconds.

**Parameters:**
- `ms`: `number` - Number of milliseconds to wait.

**Example:**
```typescript
// Using with async/await
async function example() {
  console.log("Starting...")
  await GenericHelpers.delay(2000) // Wait 2 seconds
  console.log("Done!")
}

// Using with promises
GenericHelpers.delay(1000).then(() => {
  console.log("1 second has passed")
})
```

### `getPreferredUriScheme(host)`

Determines the preferred URI scheme (http or https) for a given host.

**Parameters:**
- `host`: `string` - IP address or domain name.

**Example:**
```typescript
console.log(GenericHelpers.getPreferredUriScheme("example.com")) // "https"
console.log(GenericHelpers.getPreferredUriScheme("localhost")) // "http"
console.log(GenericHelpers.getPreferredUriScheme("127.0.0.1")) // "http"
console.log(GenericHelpers.getPreferredUriScheme("192.168.1.1")) // "http"
console.log(GenericHelpers.getPreferredUriScheme("10.0.0.1")) // "http"
```

## FileHelpers

Utility functions for file operations and validation.

### `checkFileExtension(filePath, validExtensions)`

Checks if a file path has one of the valid extensions.

**Parameters:**
- `filePath`: `string` - The file path to check.
- `validExtensions`: `string[]` - Array of valid file extensions.

**Example:**
```typescript
console.log(FileHelpers.checkFileExtension("document.pdf", ["pdf", "doc", "docx"])) // true
console.log(FileHelpers.checkFileExtension("image.jpg", ["png", "gif", "svg"])) // false
console.log(FileHelpers.checkFileExtension("data.geojson", ["geojson", "json"])) // true
console.log(FileHelpers.checkFileExtension("script.js", ["js", "ts", "jsx"])) // true
console.log(FileHelpers.checkFileExtension("file", ["txt", "md"])) // false (no extension)
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

### Development Setup

```bash
git clone https://github.com/akadenia/AkadeniaHelpers.git
cd AkadeniaHelpers
npm install
npm run build
npm test
```

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our semantic release process. **We prefer commit messages to include a scope in parentheses** for better categorization and changelog generation.

### Preferred Format
```
type(scope): description

[optional body]

[optional footer]
```

### Examples
```bash
## ✅ Preferred - with scope
feat(date): add new date formatting options
fix(text): resolve string validation issue
docs(readme): add troubleshooting section
chore(deps): update dependencies

## ❌ Less preferred - without scope
feat: add new date formatting options
fix: resolve string validation issue
docs: add troubleshooting section
chore: update dependencies
```

### Common Scopes
- `date` - Date manipulation functions
- `text` - Text processing functions
- `object` - Object manipulation functions
- `map` - Map and geographical functions
- `generic` - Generic utility functions
- `file` - File processing functions
- `docs` - Documentation updates
- `deps` - Dependency updates
- `test` - Test-related changes
- `build` - Build and build tooling
- `ci` - CI/CD configuration

### Commit Types
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

If you introduce a breaking change, please add `BREAKING CHANGE` in the pull request description.

## License

[MIT](https://github.com/akadenia/AkadeniaHelpers/blob/main/LICENSE)

## Support

For support, please open an issue on [GitHub](https://github.com/akadenia/AkadeniaHelpers/issues).
