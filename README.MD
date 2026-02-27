<div align="center">
  <img src="https://cdn.akadenia.com/images/akadenia-webp/logo/horizontal-logo.svg" alt="Akadenia" width="200" />

  ## @akadenia/helpers

  <img src="https://cdn.akadenia.com/images/badges/npm-version-helpers.svg" alt="npm version" />
  <img src="https://cdn.akadenia.com/images/badges/license-mit.svg" alt="License: MIT" />
  <img src="https://cdn.akadenia.com/images/badges/typescript.svg" alt="TypeScript" />

  A zero-dependency TypeScript utility library covering the common ground every project needs — dates, strings, objects, geography, files, and more. Modular by design, so you only import what you use.

  [Documentation](https://akadenia.com/packages/akadenia-helpers) · [GitHub](https://github.com/akadenia/AkadeniaHelpers) · [Issues](https://github.com/akadenia/AkadeniaHelpers/issues)
</div>

---

## Installation

```bash
npm install @akadenia/helpers
```

## Usage

```typescript
import { DateHelpers, TextHelpers, ObjectHelpers, MapHelpers, GenericHelpers, FileHelpers } from "@akadenia/helpers"
```

---

## DateHelpers

```typescript
import { DateHelpers } from "@akadenia/helpers"

DateHelpers.getReadableDateTime()                    // "2026-02-27 15:30:00"
DateHelpers.getReadableDateTime(new Date("2024-01-15T10:30:00Z"))

DateHelpers.getReadableDate()                        // "2026-02-27"

DateHelpers.getDateString(new Date())                // "2/27/2026" (locale-aware)

DateHelpers.formatDateTime(date, {
  weekday: "long", month: "long", day: "numeric"
})                                                   // "Thursday, February 27"

DateHelpers.parseDate("2026-02-27")                  // Date object (throws on invalid)

DateHelpers.getShortOrdinalDate("2026-02-27")        // "Feb 27th 2026"
DateHelpers.getShortOrdinalDate("2026-02-01", true)  // "Feb 1st 2026 00:00:00"
```

---

## TextHelpers

```typescript
import { TextHelpers } from "@akadenia/helpers"

// Case conversion (works on strings, objects, and arrays)
TextHelpers.convertSnakeToCamelCase("first_name")           // "firstName"
TextHelpers.convertCamelToSnakeCase("firstName")            // "first_name"
TextHelpers.convertCamelToKebabCase("backgroundColor")      // "background-color"
TextHelpers.convertKebabToCamelCase("background-color")     // "backgroundColor"
TextHelpers.convertCamelCaseToReadableText("myButtonLabel")  // "My Button Label"

// Object key conversion
TextHelpers.convertSnakeToCamelCase({ first_name: "Alice" }) // { firstName: "Alice" }
TextHelpers.convertCamelToSnakeCase([{ firstName: "Alice" }]) // [{ first_name: "Alice" }]

// String utilities
TextHelpers.uuidv4()                                         // "a1b2c3d4-..."
TextHelpers.truncateText("Hello world", 8)                   // "Hello..."
TextHelpers.capitalizeText("hello")                          // "Hello"
TextHelpers.pluralizeOnCondition("library", true)            // "libraries"
TextHelpers.pluralizeOnCondition("class", true)              // "classes"
TextHelpers.abbreviateNumber(1500000)                         // "1.5M"
TextHelpers.abbreviateNumber(42000)                          // "42K"
TextHelpers.formatPosition(1)                                // "1st"
TextHelpers.formatPosition(22)                               // "22nd"

// Validation
TextHelpers.isValidEmail("user@example.com")                 // true
TextHelpers.isValidEmail("not-an-email")                     // false

// Slug / ID utilities
TextHelpers.generateIDFromWord("My Feature Name")            // "my-feature-name"
TextHelpers.generateWordFromId("my-feature-name")            // "My Feature Name"
TextHelpers.generateSlugFromWordsWithID("42", "Blog Post")   // "blog-post-42"
TextHelpers.extractIDfromSlug("my-blog-post-42")             // "42"
TextHelpers.generateAcronym("Application Programming Interface") // "API"

// Acronym utilities
TextHelpers.isAcronym("NASA")                                // true
TextHelpers.acronymToKebabCase("NASA")                       // "n-a-s-a"

// Other
TextHelpers.handleNullDisplay(null)                          // "N/A"
TextHelpers.handleNullDisplay(null, "—")                     // "—"
TextHelpers.replaceSpacesWithUnderscore("hello world")       // "hello_world"
TextHelpers.replaceUnderscoreWithSpaces("hello_world")       // "hello world"
TextHelpers.fileNameFromPath("/uploads/documents/file.pdf")  // "file.pdf"
TextHelpers.enforceCharacterLimit({ text, characterLimit: 100, onCharacterLimit: () => {} })
```

---

## ObjectHelpers

```typescript
import { ObjectHelpers } from "@akadenia/helpers"

// Type checking
ObjectHelpers.isPureObject({})           // true
ObjectHelpers.isPureObject([])           // false
ObjectHelpers.isPureObject(new Date())   // false

// Array of objects
ObjectHelpers.filterObjectsByProperty(users, "role", "admin")
ObjectHelpers.findObjectBySubObject(users, { role: "admin", active: true })
ObjectHelpers.filterObjectsBySubObject(users, { active: true })
ObjectHelpers.findEntry(items, (item) => item.id === 42)
ObjectHelpers.objectPropHasValue({ object: user, propName: "role", value: "admin" })

// Conversion
ObjectHelpers.convertArrayToMap(users, "id")     // { "1": {...}, "2": {...} }
ObjectHelpers.convertObjectKeysToKebabCase({ backgroundColor: "red" }) // { "background-color": "red" }

// Cookies
ObjectHelpers.parseCookie("name=Alice; token=abc123")  // { name: "Alice", token: "abc123" }

// Sub-object matching
ObjectHelpers.containsSubObject({ a: 1, b: 2 }, { a: 1 })   // true
```

---

## MapHelpers

```typescript
import { MapHelpers } from "@akadenia/helpers"

// Haversine distance between two [lat, lng] points (returns metres)
MapHelpers.getDistanceBetweenPoints([51.5074, -0.1278], [48.8566, 2.3522]) // ~341,573 m

// Compare coordinates with configurable precision
MapHelpers.compareLocations([51.5074, -0.1278], [51.5074, -0.1278])         // true

// Compass bearing from start to end coordinate
MapHelpers.getBearingToCoordinate({
  startCoordinate: [-0.1278, 51.5074],
  endCoordinate: [2.3522, 48.8566],
})  // degrees 0–360
```

---

## GenericHelpers

```typescript
import { GenericHelpers } from "@akadenia/helpers"

// Async sleep
await GenericHelpers.delay(1000) // wait 1 second

// Detect local vs public host → returns 'http' or 'https'
GenericHelpers.getPreferredUriScheme("localhost")      // "http"
GenericHelpers.getPreferredUriScheme("192.168.1.1")    // "http"
GenericHelpers.getPreferredUriScheme("api.example.com") // "https"
```

---

## FileHelpers

```typescript
import { FileHelpers } from "@akadenia/helpers"

// Validate file extension
FileHelpers.checkFileExtension("data.geojson", ["geojson", "json"])  // true
FileHelpers.checkFileExtension("photo.txt", ["jpg", "png"])          // false

// Human-readable file size
FileHelpers.formatFileSize(1024)              // "1.0 KB"
FileHelpers.formatFileSize(1024 * 1024 * 2)  // "2.0 MB"
FileHelpers.formatFileSize(0)                 // "0 B"
```

---

## Requirements

- Node.js >= 20
- Zero runtime dependencies

## License

[MIT](LICENSE)
