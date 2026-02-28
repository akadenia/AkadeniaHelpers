<div align="center">
  <img src="https://cdn.akadenia.com/images/akadenia-webp/logo/horizontal-logo.svg" alt="Akadenia" width="200" />

  <h2><code>@akadenia/helpers</code></h2>

  <img src="https://cdn.akadenia.com/images/badges/npm-version-helpers.svg" alt="npm version" />
  <img src="https://cdn.akadenia.com/images/badges/license-mit.svg" alt="License: MIT" />
  <img src="https://cdn.akadenia.com/images/badges/typescript.svg" alt="TypeScript" />

  A zero-dependency TypeScript utility library covering the common ground every project needs — dates, strings, objects, geography, files, and more. Modular by design, so you only import what you use.

  [Documentation](https://akadenia.com/packages/akadenia-helpers) · [GitHub](https://github.com/akadenia/AkadeniaHelpers) · [Issues](https://github.com/akadenia/AkadeniaHelpers/issues)
</div>

## Installation

```bash
npm install @akadenia/helpers
```

## Usage

```typescript
import { DateHelpers, TextHelpers, ObjectHelpers, MapHelpers, GenericHelpers, FileHelpers } from '@akadenia/helpers'
```

## Table of Contents

- [DateHelpers](#datehelpers)
- [TextHelpers](#texthelpers)
- [ObjectHelpers](#objecthelpers)
- [MapHelpers](#maphelpers)
- [GenericHelpers](#generichelpers)
- [FileHelpers](#filehelpers)
- [Contributing](#contributing)

---

## DateHelpers

### `getReadableDateTime(datetime?)`

Returns the date in `yyyy-mm-dd hh:mm:ss` format.

**Parameters:**
- `datetime` (optional): `Date` — The date to convert. Defaults to current date.

**Example:**
```typescript
import { DateHelpers } from '@akadenia/helpers'

DateHelpers.getReadableDateTime()
// "2026-02-27 15:30:25"

DateHelpers.getReadableDateTime(new Date('2024-01-15T10:30:00Z'))
// "2024-01-15 10:30:00"
```

---

### `getReadableDate(datetime?)`

Returns the date in `yyyy-mm-dd` format.

**Parameters:**
- `datetime` (optional): `Date` — The date to convert. Defaults to current date.

**Example:**
```typescript
DateHelpers.getReadableDate()
// "2026-02-27"

DateHelpers.getReadableDate(new Date('2024-01-15T10:30:00Z'))
// "2024-01-15"
```

---

### `getDateString(date)`

Returns a locale-formatted date string.

**Parameters:**
- `date`: `string | Date` — The date to convert.

**Example:**
```typescript
DateHelpers.getDateString('2024-01-15')
// "1/15/2024" (locale-dependent)
```

---

### `formatDateTime(date, options, localTimezone?)`

Returns a formatted date string using `Intl.DateTimeFormat` options.

**Parameters:**
- `date`: `string | Date` — The date to format.
- `options`: `Intl.DateTimeFormatOptions` — Formatting options.
- `localTimezone` (optional): `string | Intl.Locale` — Locale. Defaults to `"en-US"`.

**Example:**
```typescript
DateHelpers.formatDateTime(
  new Date('2024-01-15T10:30:00Z'),
  { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' },
  'en-US'
)
// "January 15, 2024 at 10:30 AM"
```

---

### `parseDate(date)`

Parses a string or Date into a `Date` object. Throws on invalid input.

**Parameters:**
- `date`: `string | Date` — The date to parse.

**Example:**
```typescript
DateHelpers.parseDate('2024-01-15')
// Date object

DateHelpers.parseDate('invalid-date')
// throws Error: Cannot parse date: "invalid-date"
```

---

### `getShortOrdinalDate(date, appendTime?)`

Returns a date in short ordinal format, e.g. `"Feb 27th 2026"`.

**Parameters:**
- `date`: `string | Date` — The date to format.
- `appendTime` (optional): `boolean` — Whether to include time. Defaults to `false`.

**Example:**
```typescript
DateHelpers.getShortOrdinalDate('2024-01-15')
// "Jan 15th 2024"

DateHelpers.getShortOrdinalDate('2024-01-15T10:30:00Z', true)
// "Jan 15th 2024 10:30:00"
```

---

## TextHelpers

### `uuidv4()`

Generates a random UUID v4 string.

**Example:**
```typescript
TextHelpers.uuidv4()
// "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```

---

### `formatPosition(position)`

Returns a position number with the appropriate ordinal suffix.

**Parameters:**
- `position`: `number` — The position.

**Example:**
```typescript
TextHelpers.formatPosition(1)  // "1st"
TextHelpers.formatPosition(2)  // "2nd"
TextHelpers.formatPosition(3)  // "3rd"
TextHelpers.formatPosition(4)  // "4th"
TextHelpers.formatPosition(21) // "21st"
```

---

### `truncateText(text, characterLimit)`

Truncates text to the character limit, appending `"..."`.

**Parameters:**
- `text`: `string` — Text to truncate.
- `characterLimit`: `number` — Maximum number of characters.

**Example:**
```typescript
TextHelpers.truncateText("Hello World", 5)  // "He..."
TextHelpers.truncateText("Hello World", 20) // "Hello World"
```

---

### `fileNameFromPath(path)`

Extracts the filename from a file path.

**Parameters:**
- `path`: `string` — The file path.

**Example:**
```typescript
TextHelpers.fileNameFromPath('/uploads/documents/file.pdf') // "file.pdf"
```

---

### `replaceSpacesWithUnderscore(s?)`

Replaces spaces with underscores.

**Example:**
```typescript
TextHelpers.replaceSpacesWithUnderscore("hello world") // "hello_world"
```

---

### `replaceUnderscoreWithSpaces(s?)`

Replaces underscores with spaces.

**Example:**
```typescript
TextHelpers.replaceUnderscoreWithSpaces("hello_world") // "hello world"
```

---

### `pluralizeOnCondition(word, condition)`

Pluralizes a word when the condition is `true`. Handles common English rules (`-y → -ies`, `-s/-sh/-ch/-x → -es`).

**Parameters:**
- `word`: `string` — The word to pluralize.
- `condition`: `boolean` — Whether to pluralize.

**Example:**
```typescript
TextHelpers.pluralizeOnCondition("item", true)    // "items"
TextHelpers.pluralizeOnCondition("address", true) // "addresses"
TextHelpers.pluralizeOnCondition("library", true) // "libraries"
TextHelpers.pluralizeOnCondition("item", false)   // "item"
```

---

### `convertSnakeToCamelCase(data)`

Converts `snake_case` to `camelCase` for strings, objects, or arrays of objects (deep).

**Example:**
```typescript
TextHelpers.convertSnakeToCamelCase("hello_world")
// "helloWorld"

TextHelpers.convertSnakeToCamelCase({ first_name: "John", user_info: { phone_number: "123" } })
// { firstName: "John", userInfo: { phoneNumber: "123" } }
```

---

### `convertCamelToSnakeCase(data)`

Converts `camelCase` to `snake_case` for strings, objects, or arrays of objects (deep).

**Example:**
```typescript
TextHelpers.convertCamelToSnakeCase("helloWorld")
// "hello_world"

TextHelpers.convertCamelToSnakeCase({ firstName: "John", userInfo: { phoneNumber: "123" } })
// { first_name: "John", user_info: { phone_number: "123" } }
```

---

### `convertCamelToKebabCase(word)`

Converts `camelCase` to `kebab-case`.

**Example:**
```typescript
TextHelpers.convertCamelToKebabCase("helloWorld")     // "hello-world"
TextHelpers.convertCamelToKebabCase("XMLHttpRequest") // "xml-http-request"
```

---

### `convertKebabToCamelCase(word)`

Converts `kebab-case` to `CamelCase`.

**Example:**
```typescript
TextHelpers.convertKebabToCamelCase("hello-world")     // "HelloWorld"
TextHelpers.convertKebabToCamelCase("xml-http-request") // "XmlHttpRequest"
```

---

### `convertCamelCaseToReadableText(name)`

Converts `camelCase` to a space-separated readable string.

**Example:**
```typescript
TextHelpers.convertCamelCaseToReadableText("helloWorld")     // "Hello World"
TextHelpers.convertCamelCaseToReadableText("XMLHttpRequest") // "XML Http Request"
```

---

### `generateAcronym(term)`

Generates an acronym from the first letter of each word.

**Example:**
```typescript
TextHelpers.generateAcronym("Hyper Text Markup Language") // "HTML"
TextHelpers.generateAcronym("Application Programming Interface") // "API"
```

---

### `isAcronym(word)`

Returns `true` if the word is all uppercase (i.e. an acronym).

**Example:**
```typescript
TextHelpers.isAcronym("HTML")       // true
TextHelpers.isAcronym("JavaScript") // false
```

---

### `acronymToKebabCase(word)`

Converts an acronym to kebab-case. Throws if input is not an acronym.

**Example:**
```typescript
TextHelpers.acronymToKebabCase("HTML") // "h-t-m-l"
TextHelpers.acronymToKebabCase("API")  // "a-p-i"
TextHelpers.acronymToKebabCase("html") // throws Error
```

---

### `handleNullDisplay(value, defaultValue?)`

Returns the value, or a default string if `null` or `undefined`.

**Parameters:**
- `value`: `string | null | undefined`
- `defaultValue` (optional): `string` — Defaults to `"N/A"`.

**Example:**
```typescript
TextHelpers.handleNullDisplay("Hello")       // "Hello"
TextHelpers.handleNullDisplay(null)          // "N/A"
TextHelpers.handleNullDisplay(null, "—")     // "—"
```

---

### `capitalizeText(text?)`

Capitalizes the first letter, lowercases the rest.

**Example:**
```typescript
TextHelpers.capitalizeText("hello world") // "Hello world"
TextHelpers.capitalizeText("HELLO")       // "Hello"
TextHelpers.capitalizeText()              // ""
```

---

### `enforceCharacterLimit({ text, characterLimit, onCharacterLimit })`

Truncates text to the limit and calls a callback when the limit is hit.

**Example:**
```typescript
TextHelpers.enforceCharacterLimit({
  text: "This is a long text",
  characterLimit: 10,
  onCharacterLimit: () => console.log("Limit hit!"),
})
// "This is a" (and logs "Limit hit!")
```

---

### `isValidEmail(email)`

Validates an email address against RFC-compliant rules.

**Example:**
```typescript
TextHelpers.isValidEmail("user@example.com")    // true
TextHelpers.isValidEmail("user@domain.co.uk")   // true
TextHelpers.isValidEmail("invalid-email")        // false
TextHelpers.isValidEmail("")                     // false
```

---

### `generateIDFromWord(text)`

Converts a phrase to a lowercase hyphenated ID.

**Example:**
```typescript
TextHelpers.generateIDFromWord("My Awesome Feature") // "my-awesome-feature"
```

---

### `generateWordFromId(id, customList?)`

Converts a hyphenated ID back to a readable title. Supports a custom lookup map.

**Example:**
```typescript
TextHelpers.generateWordFromId("hello-world-test")
// "Hello World Test"

TextHelpers.generateWordFromId("api", { api: "Application Programming Interface" })
// "Application Programming Interface"
```

---

### `generateSlugFromWordsWithID(id, ...words)`

Generates a URL-safe slug combining words and an ID.

**Example:**
```typescript
TextHelpers.generateSlugFromWordsWithID("123", "Blog Post", "Tech")
// "blog-post-tech-123"
```

---

### `extractIDfromSlug(slug)`

Extracts the last segment of a hyphenated slug (the ID).

**Example:**
```typescript
TextHelpers.extractIDfromSlug("my-blog-post-42") // "42"
TextHelpers.extractIDfromSlug("")               // throws Error
```

---

### `abbreviateNumber(number)`

Abbreviates large numbers with K / M / B suffixes.

**Example:**
```typescript
TextHelpers.abbreviateNumber(500)         // "500"
TextHelpers.abbreviateNumber(1500)        // "1.5K"
TextHelpers.abbreviateNumber(1500000)     // "1.5M"
TextHelpers.abbreviateNumber(1500000000)  // "1.5B"
TextHelpers.abbreviateNumber(null)        // null
```

---

## ObjectHelpers

### `isPureObject(object)`

Returns `true` if the value is a plain object (not an array, Date, or function).

**Example:**
```typescript
ObjectHelpers.isPureObject({})          // true
ObjectHelpers.isPureObject([])          // false
ObjectHelpers.isPureObject(new Date())  // false
ObjectHelpers.isPureObject(() => {})    // false
```

---

### `parseCookie(str)`

Parses a `Cookie` header string into a key-value object.

**Example:**
```typescript
ObjectHelpers.parseCookie("name=John; age=30; city=New York")
// { name: "John", age: "30", city: "New York" }
```

---

### `filterObjectsByProperty(array, propertyName, propertyValue)`

Filters an array of objects by a specific property value.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" },
  { id: 3, name: "Bob",  role: "admin" },
]

ObjectHelpers.filterObjectsByProperty(users, "role", "admin")
// [{ id: 1, ... }, { id: 3, ... }]
```

---

### `containsSubObject(mainObject, subObject)`

Returns `true` if the main object contains all the key-value pairs of the sub-object.

**Example:**
```typescript
const user = { id: 1, name: "John", age: 30, city: "New York" }

ObjectHelpers.containsSubObject(user, { name: "John", age: 30 }) // true
ObjectHelpers.containsSubObject(user, { name: "Jane" })          // false
```

---

### `findObjectBySubObject(array, subObject)`

Finds the first object in an array containing the specified sub-object. Returns `null` if not found.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", city: "New York" },
  { id: 2, name: "Jane", city: "Boston" },
]

ObjectHelpers.findObjectBySubObject(users, { city: "Boston" })
// { id: 2, name: "Jane", city: "Boston" }

ObjectHelpers.findObjectBySubObject(users, { name: "Alice" })
// null
```

---

### `filterObjectsBySubObject(array, subObject)`

Filters an array of objects to those containing the specified sub-object.

**Example:**
```typescript
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob",  age: 30 },
]

ObjectHelpers.filterObjectsBySubObject(users, { age: 30 })
// [{ id: 1, ... }, { id: 3, ... }]
```

---

### `objectPropHasValue({ object, propName, value })`

Checks if a specific property on an object equals a given value.

**Example:**
```typescript
const user = { id: 1, name: "John", age: 30 }

ObjectHelpers.objectPropHasValue({ object: user, propName: "name", value: "John" }) // true
ObjectHelpers.objectPropHasValue({ object: user, propName: "age",  value: 25 })     // false
```

---

### `findEntry(array, predicate)`

Returns the first array entry satisfying the predicate, or `null`.

**Example:**
```typescript
ObjectHelpers.findEntry([1, 2, 3, 4], (n) => n % 2 === 0) // 2
ObjectHelpers.findEntry([1, 2, 3],    (n) => n > 10)       // null
```

---

### `convertArrayToMap(arrayData, keyProp)`

Converts an array of objects into a keyed map using a specified property.

**Example:**
```typescript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
]

ObjectHelpers.convertArrayToMap(users, "id")
// { "1": { id: 1, name: "John" }, "2": { id: 2, name: "Jane" } }
```

---

### `convertObjectKeysToKebabCase(obj)`

Converts all camelCase keys of an object to kebab-case. Returns `undefined` for `undefined` input.

**Example:**
```typescript
ObjectHelpers.convertObjectKeysToKebabCase({ firstName: "John", lastName: "Doe" })
// { "first-name": "John", "last-name": "Doe" }

ObjectHelpers.convertObjectKeysToKebabCase(undefined)
// undefined
```

---

## MapHelpers

### `getDistanceBetweenPoints(point1, point2)`

Calculates the distance between two `[lat, lng]` points using the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula). Returns metres, or `null` for undefined input.

**Example:**
```typescript
// New York → Los Angeles
MapHelpers.getDistanceBetweenPoints([40.7128, -74.006], [34.0522, -118.2437])
// ~3,944,419 metres (~3,944 km)

MapHelpers.getDistanceBetweenPoints([40.7128, -74.006], undefined)
// null
```

---

### `compareLocations(location1, location2, precision?)`

Compares two `[lat, lng]` coordinates within a decimal precision. Throws if either is `undefined`.

**Parameters:**
- `precision` (optional): `number` — Decimal places. Defaults to `6`.

**Example:**
```typescript
MapHelpers.compareLocations([51.5074, -0.1278], [51.5074, -0.1278])       // true
MapHelpers.compareLocations([51.5074, -0.1278], [51.5074001, -0.127801])  // true  (within 6 decimals)
MapHelpers.compareLocations([51.5074, -0.1278], [51.51,      -0.13], 2)   // false
```

---

### `getBearingToCoordinate({ startCoordinate, endCoordinate })`

Returns the compass bearing (0–360°) from start to end coordinate. Throws if either is `undefined`.

**Example:**
```typescript
// New York → Los Angeles
MapHelpers.getBearingToCoordinate({
  startCoordinate: [-74.006,    40.7128],
  endCoordinate:   [-118.2437,  34.0522],
})
// ~277.5 (roughly west)
```

---

## GenericHelpers

### `delay(ms)`

Async sleep for the specified number of milliseconds.

**Example:**
```typescript
await GenericHelpers.delay(1000) // wait 1 second
```

---

### `getPreferredUriScheme(host)`

Returns `"http"` for local/private hosts, `"https"` for everything else.

**Example:**
```typescript
GenericHelpers.getPreferredUriScheme("api.example.com") // "https"
GenericHelpers.getPreferredUriScheme("localhost")        // "http"
GenericHelpers.getPreferredUriScheme("192.168.1.1")      // "http"
GenericHelpers.getPreferredUriScheme("10.0.0.1")         // "http"
```

---

## FileHelpers

### `checkFileExtension(filePath, validExtensions)`

Returns `true` if the file has one of the allowed extensions.

**Example:**
```typescript
FileHelpers.checkFileExtension("report.pdf",  ["pdf", "docx"]) // true
FileHelpers.checkFileExtension("data.geojson", ["geojson"])    // true
FileHelpers.checkFileExtension("photo.txt",   ["jpg", "png"])  // false
```

---

### `formatFileSize(bytes)`

Formats a byte count into a human-readable size string.

**Example:**
```typescript
FileHelpers.formatFileSize(512)              // "512 B"
FileHelpers.formatFileSize(1024)             // "1.0 KB"
FileHelpers.formatFileSize(1024 * 1024 * 2) // "2.0 MB"
FileHelpers.formatFileSize(0)               // "0 B"
FileHelpers.formatFileSize(null)            // "0 B"
```

---

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

We follow [Conventional Commits](https://www.conventionalcommits.org/). Scope is required.

```text
type(scope): description
```

**Common scopes:** `date` · `text` · `object` · `map` · `generic` · `file` · `docs` · `deps` · `test` · `build` · `ci`

**Types:** `feat` · `fix` · `docs` · `style` · `refactor` · `test` · `chore`

## Requirements

- Node.js >= 20
- Zero runtime dependencies

## License

[MIT](LICENSE)
