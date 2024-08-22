## Getting Started

- [DateHelpers](#datehelpers)
  - [`DateHelpers.getReadableDateTime(datetime)`](#datehelpersgetreadabledatetimedatetime)
  - [`DateHelpers.getReadableDate(datetime)`](#datehelpersgetreadabledatedatetime)
  - [`DateHelpers.getDateString(date)`](#datehelpersgetdatestringdate)
  - [`DateHelpers.parseDate(date)`](#datehelpersparsedatedate)
  - [`DateHelpers.getShortOrdinalDate(date)`](#datehelpersgetshortordinaldatedate)
- [MapHelpers](#maphelpers)
  - [`MapHelpers.getDistanceBetweenPoints(point1, point2)`](#maphelpersgetdistancebetweenpointspoint1-point2)
  - [`MapHelpers.compareLocations(location1, location2, precision)`](#maphelperscomparelocationslocation1-location2-precision)
  - [`MapHelpers.getBearingToCoordinate({startCoordinate, endCoordinate})`](#maphelpersgetbearingtocoordinatestartcoordinate-endcoordinate)
- [TextHelpers](#texthelpers)
  - [`TextHelpers.uuidv4()`](#texthelpersuuidv4)
  - [`TextHelpers.formatPosition(position)`](#texthelpersformatpositionposition)
  - [`TextHelpers.truncateText(text, characterLimit)`](#texthelperstruncatetexttext-characterlimit)
  - [`TextHelpers.fileNameFromPath(path)`](#texthelpersfilenamefrompathpath)
  - [`TextHelpers.replaceSpacesWithUnderscore(s)`](#texthelpersreplacespaceswithunderscores)
  - [`TextHelpers.replaceUnderscoreWithSpaces(s)`](#texthelpersreplaceunderscorewithspacess)
  - [`TextHelpers.pluralizeOnCondition(word, condition)`](#texthelperspluralizeonconditionword-condition)
  - [`TextHelpers.convertSnakeToCamelCase(data)`](#texthelpersconvertsnaketocamelcasedata)
  - [`TextHelpers.convertCamelToSnakeCase(data)`](#texthelpersconvertcameltosnakecasedata)
  - [`TextHelpers.convertCamelToKebabCase(data)`](#texthelpersconvertcameltokebabcasedata)
  - [`TextHelpers.convertKebabToCamelCase(data)`](#texthelpersconvertkebabtocamelcasedata)
  - [`TextHelpers.generateAcronym(term)`](#texthelpersgenerateacronymterm)
  - [`TextHelpers.isAcronym(data)`](#texthelpersisacronymdata)
  - [`TextHelpers.acronymToKebabCase(data)`](#texthelpersacronymtokebabcasedata)
  - [`TextHelpers.handleNullDisplay(value, defaultValue="N/A")`](#texthelpershandlenulldisplayvalue-defaultvaluena)
  - [`TextHelpers.enforceCharacterLimit({text, characterLimit, onCharacterLimit})`](#texthelpersenforcecharacterlimittext-characterlimit-oncharacterlimit)
  - [`TextHelpers.isValidEmail(email)`](#texthelpersisvalidemailemail)
  - [`TextHelpers.generateIdFromWord(word)`](#texthelpersgenerateidfromwordword)
  - [`TextHelpers.generateWordFromId(id)`](#texthelpersgeneratewordfromidid)
  - [`TextHelpers.generateSlugFromWords(words)`](#texthelpersgenerateslugfromwordswords)
- [ObjectHelpers](#objecthelpers)
  - [`ObjectHelpers.isPureObject(any)`](#objecthelpersispureobjectany)
  - [`ObjectHelpers.parseCookie(str)`](#objecthelpersparsecookiestr)
  - [`ObjectHelpers.filterObjectsByProperty ( array, propertyName, propertyValue)`](#objecthelpersfilterobjectsbyproperty--array-propertyname-propertyvalue)
  - [`ObjectHelpers.containsSubObject(mainObject, subObject)`](#objecthelperscontainssubobjectmainobject-subobject)
  - [`ObjectHelpers.findObjectBySubObject(array, subObject)`](#objecthelpersfindobjectbysubobjectarray-subobject)
  - [`ObjectHelpers.filterObjectsBySubObject(array, subObject)`](#objecthelpersfilterobjectsbysubobjectarray-subobject)
  - [`ObjectHelpers.objectPropHasValue({object, key, value)}`](#objecthelpersobjectkeyhasvalueobject-key-value)
  - [`ObjectHelpers.findEntry(array, predicate)`](#objecthelpersfindentryarray-predicate)
- [GenericHelpers](#generichelpers)
  - [`GenericHelpers.delay(ms)`](#generichelpersdelayms)
  - [`GenericHelpers.getPreferredUriScheme(host)`](#generichelpersgetpreferredurischemehost)
- [FileHelpers](#filehelpers)
  - [`FileHelpers.checkFileExtension(filePath, validExtensions)`](#filehelperscheckfileextensionfilepath-validextensions)

# DateHelpers

Import the DateHelpers utility.

`import { DateHelpers } from "@akadenia/helpers`

## `DateHelpers.getReadableDateTime(datetime)`

Returns the date in `yyyy-mm-dd hh:mm:ss` format.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`datetime`|`Date`|`false`|The date to convert to readable date time. Default is current datetime. i.e. `new Date()`|

## `DateHelpers.getReadableDate(datetime)`

Returns the date in `yyyy-mm-dd` format.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`datetime`|`Date`|`false`|The date to convert to readable date time. Default is current datetime. i.e. `new Date()`|

## `DateHelpers.getDateString(date)`

Returns a string representing the date in the user's local timezone.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`date`|`string` or `Date`|`true`|The date string to convert to the string in the user's local timezone|

## `DateHelpers.parseDate(date)`

Returns a date representing the new date object.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`date`|`string`|`true`|The date string that needs to be returned as a date object|

## `DateHelpers.getShortOrdinalDate(date)`

Returns a string representing the date in short ordinal format.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`date`|`string`|`true`|The date string that needs to be formatted|

# MapHelpers

Import the MapHelpers utility.

`import { MapHelpers } from "@akadenia/helpers`

## `MapHelpers.getDistanceBetweenPoints(point1, point2)`

Returns the distance between two points in meters. Returns `null` if either point is invalid.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`point1`|`Array<number>`|false| The coordinates of the first point. i.e. `[lat, lng]` |
|`point2`|`Array<number>`|false|The coordinates of the second point. i.e. `[lat, lng]`|

## `MapHelpers.compareLocations(location1, location2, precision)`

Returns a boolean value that indicates whether or not the two locations are the same based on precision provided.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`location1`|`Array<number>`|false| The coordinates of the first location. i.e. `[lat, lng]` |
|`location2`|`Array<number>`|false|The coordinates of the second location. i.e. `[lat, lng]`|
|`precision`|`number`|false|The precision to compare the locations to. Default is `6`|

## `MapHelpers.getBearingToCoordinate({startCoordinate, endCoordinate})`

Returns the bearing to the end coordinate from the start coordinate in degrees.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`coordinates`|`object`|`true`|An object containing the start and end coordinates. i.e. `{startCoordinate: [lat, lng], endCoordinate: [lat, lng]}`|

# TextHelpers

Import the TextHelpers utility.

`import { TextHelpers } from "@akadenia/helpers`

## `TextHelpers.uuidv4()`

Returns a randomly generated string.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|

## `TextHelpers.formatPosition(position)`

Returns a string position for a provided number. eg. `"2nd"`, `"3rd"` etc.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`position`|`number`|`true`|A position number to add the appropriate suffix to|

## `TextHelpers.truncateText(text, characterLimit)`

Returns a string ending in an ellipsis `...` or returns the input string if maximum character limit isn't met.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`text`|`string`|`true`|The text to truncate|
|`characterLimit`|`number`|`true`|The target number of characters to truncate text to|

## `TextHelpers.fileNameFromPath(path)`

Returns a file name.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`path`|`string`|`true`|The path to extract the file name from|

## `TextHelpers.replaceSpacesWithUnderscore(s)`

Returns a string where the spaces have been replaced with underscores.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`s`|`string`|`false`|The text to replace spaces with underscores in|

## `TextHelpers.replaceUnderscoreWithSpaces(s)`

Returns a string where the underscores have been replaced with spaces.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`s`|`string`|`false`|The text to replace underscores with spaces in|

## `TextHelpers.pluralizeOnCondition(word, condition)`

Returns a pluralised version of the input string or returns the same string.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`word`|`string`|`true`|The word to pluralise|
|`condition`|`boolean`|`true`|The condition that determines whether to plurize the input word|

## `TextHelpers.convertSnakeToCamelCase(data)`

Returns the input object or array with all object keys recursively transformed to camelCase. Returns input object if type is invalid.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`Object` or `Array<Object>`|`true`|The object whose keys to transform|

## `TextHelpers.convertCamelToSnakeCase(data)`

Returns the input object or array with all object keys recursively transformed to snake_case. Returns input object if type is invalid.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`Object` or `Array<Object>`|`true`|The object whose keys to transform|

## `TextHelpers.convertCamelToKebabCase(data)`

Convert camel case to kebab case
The word returned as kebab case

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`string`|The word needed to be converted to kebab case from camel case|

## `TextHelpers.convertKebabToCamelCase(data)`

Convert kebab case to camel case
The word returned as camel case

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`string`|The word needed to be converted from kebab case to camel case|

## `TextHelpers.generateAcronym(term)`

Generate an acronym from a term
an acronym generated from the term

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`term`|`string`|The term to be converted to an acronym|

## `TextHelpers.isAcronym(data)`

Validate if a word is acronym
The boolean value when the condition is met

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`string`|The word that is being validated as acronym|


## `TextHelpers.acronymToKebabCase(data)`

Convert acronym to kebab case
The word returned as camel case

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`data`|`string`|The acronym to be converted to kebab case|


## `TextHelpers.handleNullDisplay(value, defaultValue="N/A")`

Returns the input string or the default string if the input value is null or undefined.
Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`value`|`string`|`true`|The string to display in the ui|
|`defaultValue`|`string`|`false`|The default string to display if the input value is null or undefined defaults to `N/A`|

## `TextHelpers.enforceCharacterLimit({text, characterLimit, onCharacterLimit})`

Returns the input string if the character limit is not exceeded or returns the truncated string when the character limit is exceeded. Calls the `onCharacterLimit` callback when the character limit is exceeded.
Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`text`|`string`|`true`|The string to truncate|
|`characterLimit`|`number`|`true`|The target number of characters to truncate text to|
|`onCharacterLimit`|`function`|`true`|The callback to call when the character limit is exceeded|

## `TextHelpers.isValidEmail(email)`

Returns true when the email is a proper email and returns false when the email is not a proper email
Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`email`|`string`|`true`|The email to be validated|

## `TextHelpers.generateIdFromWord(word)`

Generate ID from word
Returns the generated ID from the word

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`word`|`string`|`true`|The word needed to generate ID from|

## `TextHelpers.generateWordFromId(word)`

Get the word from the generated ID
Returns the word that is got from the id

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`word`|`string`|`true`|The id that is needed to get the word from|
|`customList`|`Record<string, string>`|`false`|The custom lists that has the id with the custom list of words|

## `TextHelpers.generateSlugFromWords(words)`

Get the slug from words
Returns the slug from the words

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`words`|`string[]`|`true`|The words that will be in the slug|

## `TextHelpers.extractIDfromSlug(slug)`

Extracts the id from the slug
Returns the id from the slug

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`slug`|`string`|`true`|The slug associated with the id|


# ObjectHelpers

Import the ObjectHelpers utility.

`import { ObjectHelpers } from "@akadenia/helpers`

## `ObjectHelpers.isPureObject(any)`

Returns a boolean indicating whether or not the input is a pure object.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`object`|`any`|`true`|The object to test for pureness|

## `ObjectHelpers.parseCookie(str)`

Returns an object containing the key-value pairs of the parsed cookies.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`str`|`string`|`true`|The string of cookies to parse|

## `ObjectHelpers.filterObjectsByProperty ( array, propertyName, propertyValue)`

Filter an array of objects based on a specific property and its corresponding value.
Returns an array containing all objects that have the specified property with the given value.

Template
T extends Record<string, any>

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`array`|`T[]`|`true`|An array of objects to be searched|
|`propertyName`|`keyof T`|`true`|The name of the property to match against|
|`propertyValue`|`T[keyof T]`|`true`|The value that the property should have to be considered|

## `ObjectHelpers.containsSubObject(mainObject, subObject)`

It compares the key-value pairs of the sub-object with the corresponding key-value pairs in the main object.
Returns true If all key-value pairs in the sub-object are found in the main object; otherwise, it returns false.

Template
T extends Record<string, any>

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`mainObject`|`T`|`true`|The main object to be checked|
|`subObject`|`Partial<T>`|`true`|The sub-object to be searched for|

## `ObjectHelpers.findObjectBySubObject(array, subObject)`

Searches an array of objects for an object that contains a specific sub-object.
Returns the first object found in the array that contains the sub-object or null
if no match is found.

Template
T extends Record<string, any>

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`array`|`T[]`|`true`|An array of objects to be searched|
|`array`|`Partial<T>`|`true`|The sub-object to be searched for in the array|

## `ObjectHelpers.filterObjectsBySubObject(array, subObject)`

Filters an array of objects based on the presence of a specific sub-object within each object.
Returns an array containing all objects from the input array that contain the specified sub-object.

Template
T extends Record<string, any>

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`array`|`T[]`|`true`|An array of objects to be filtered|
|`array`|`Partial<T>`|`true`|The sub-object to be searched for in the array|
## `ObjectHelpers.objectPropHasValue({object, key, value)}`
Checks if the object has the key with the value.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`object`|`Object`|`true`|The object to check|
|`key`|`string`|`true`|The key to check|
|`value`|`any`|`true`|The value to check|

## `ObjectHelpers.findEntry(array, predicate)`
Finds the first entry in the array that satisfies the predicate.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`array`|`Array<any>`|`true`|The array of entries to search|
|`predicate`|`(item: any) => boolean`|`true`|The predicate function to use to search the array|

# GenericHelpers

Import the GenericHelpers utility.

`import { GenericHelpers } from "@akadenia/helpers`

## `GenericHelpers.delay(ms)`

A "modern" sleep statement.

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`ms`|`number`|`true`|The number of milliseconds to wait|

## `GenericHelpers.getPreferredUriScheme(host)`

Get the preferred scheme for a host

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`host`|`string`|`true`|An IP address or a domain name|

# FileHelpers

## `FileHelpers.checkFileExtension(filePath, validExtensions)`

Check if a file path has a valid extension

Arguments
|Name|Type|Required|Description|
|--|--|--|--|
|`filePath`|`string`|`true`|The file path to check|
|`validExtensions`|`string[]`|`true`|The valid extensions|


## Contributing to this package

This package follows the commitlint and conventional commits standards. As such the commit messages should follow the following format:

```text
<type>(optional scope): <description> eg: feat: add new feature OR fix(map-loading): fix rendering on ipad devices
```

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test
- BREAKING CHANGE

## License

MIT
