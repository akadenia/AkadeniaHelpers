[**@akadenia/utilities**](README.md) • **Docs**

***

[@akadenia/utilities](README.md) / text

# text

## Functions

### capitalizeText()

> **capitalizeText**(`text`): `string`

#### Parameters

• **text**: `undefined` \| `string`

The string to be capitalized

#### Returns

`string`

The string in a capitalized form

#### Function

#### Source

[text.ts:146](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L146)

***

### convertCamelToSnakeCase()

> **convertCamelToSnakeCase**(`data`): `string` \| `Object` \| `Object`[]

#### Parameters

• **data**: `string` \| `Object` \| `Object`[]

The object or array of objects to convert key cases

#### Returns

`string` \| `Object` \| `Object`[]

- The object or array of objects with the keys in snake_case

#### Function

#### Source

[text.ts:130](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L130)

***

### convertKeyCasing()

> **convertKeyCasing**\<`T`\>(`input`, `type`): `T`

#### Type parameters

• **T** *extends* `string` \| `Object` \| `Object`[]

#### Parameters

• **input**: `T`

The string, object, or array of objects that needs to have its casing changed

• **type**: `"toSnakeCase"` \| `"toCamelCase"`

The type of casing the string, object, or array of objects should be converted to (snake_case or camelCase)

#### Returns

`T`

- A new string, object, or array of objects in the specified casing

#### Function

#### Source

[text.ts:12](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L12)

***

### convertSnakeToCamelCase()

> **convertSnakeToCamelCase**(`data`): `string` \| `Object` \| `Object`[]

#### Parameters

• **data**: `string` \| `Object` \| `Object`[]

The object or array of objects to convert key cases

#### Returns

`string` \| `Object` \| `Object`[]

- The object or array of objects with the keys in camelCase

#### Function

#### Source

[text.ts:121](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L121)

***

### enforceCharacterLimit()

> **enforceCharacterLimit**(`options`): `string`

Enforces a character limit on a given string.

#### Parameters

• **options**

The options for the function.

• **options.characterLimit**: `number`

The maximum number of characters allowed.

• **options.onCharacterLimit**

The function to call when the character limit is exceeded.

• **options.text**: `string`

The text to limit.

#### Returns

`string`

The original string if it is shorter than the character limit, or a truncated version of the string if it is longer.

#### Function

#### Source

[text.ts:160](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L160)

***

### fileNameFromPath()

> **fileNameFromPath**(`path`): `string`

#### Parameters

• **path**: `string`

The path of the file

#### Returns

`string`

- The file name

#### Function

#### Source

[text.ts:88](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L88)

***

### formatPosition()

> **formatPosition**(`position`): `string`

#### Parameters

• **position**: `number`

A position number.

#### Returns

`string`

- A string representing the position with the appropriate suffix (st, nd, rd, or th) e.g "1st", "2nd", "3rd", "4th", etc.

#### Function

#### Source

[text.ts:58](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L58)

***

### handleNullDisplay()

> **handleNullDisplay**(`value`, `defaultValue`): `string`

#### Parameters

• **value**: `undefined` \| `null` \| `string`

The string to be displayed

• **defaultValue**: `string`= `"N/A"`

#### Returns

`string`

The passed string or the default string if the passed string is null or undefined

#### Function

#### Source

[text.ts:139](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L139)

***

### isValidEmail()

> **isValidEmail**(`email`): `boolean`

Validate email if its a proper email or not

#### Parameters

• **email**: `string`

The email to be validated

#### Returns

`boolean`

The boolean value when the condition is met

#### Function

#### Source

[text.ts:182](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L182)

***

### pluralizeOnCondition()

> **pluralizeOnCondition**(`word`, `condition`): `string`

#### Parameters

• **word**: `string`

The word that needs to be pluralized

• **condition**: `boolean`

The condition that determines if the word needs to be pluralized

#### Returns

`string`

- The word with "s" added to the end if the condition is true

#### Function

#### Source

[text.ts:113](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L113)

***

### replaceSpacesWithUnderscore()

> **replaceSpacesWithUnderscore**(`s`?): `string`

#### Parameters

• **s?**: `string`

The string that needs to have spaces replaced with underscores

#### Returns

`string`

- The string with spaces replaced with underscores

#### Function

#### Source

[text.ts:96](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L96)

***

### replaceUnderscoreWithSpaces()

> **replaceUnderscoreWithSpaces**(`s`?): `string`

#### Parameters

• **s?**: `string`

The string that needs to have underscores replaced with spaces

#### Returns

`string`

- The string with underscores replaced with spaces

#### Function

#### Source

[text.ts:104](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L104)

***

### truncateText()

> **truncateText**(`text`, `characterLimit`): `string`

#### Parameters

• **text**: `string`

The text to be truncated

• **characterLimit**: `number`

The maximum number of characters that the text can have

#### Returns

`string`

- The truncated text with "..." added at the end if the text has exceeded the character limit

#### Function

#### Source

[text.ts:79](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L79)

***

### uuidv4()

> **uuidv4**(): `string`

#### Returns

`string`

- A randomly generated string.

#### Function

#### Source

[text.ts:44](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/text.ts#L44)
