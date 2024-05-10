[**@akadenia/utilities**](README.md) • **Docs**

***

[@akadenia/utilities](README.md) / date

# date

## Functions

### formatDateTime()

> **formatDateTime**(`date`, `options`, `localTimezone`): `string`

#### Parameters

• **date**: `string` \| `Date`

The date string that needs to be formatted

• **options**: `DateTimeFormatOptions`

The javascript date formatting options to be used

• **localTimezone**: `string` \| `Locale`= `"en-US"`

The local timezone to be used

#### Returns

`string`

- A string representing the date in the user's local timezone

#### Function

#### Source

[date.ts:37](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/date.ts#L37)

***

### getDateString()

> **getDateString**(`date`): `string`

#### Parameters

• **date**: `string` \| `Date`

The date string that needs to be formatted

#### Returns

`string`

- A string representing the date in the user's local timezone

#### Function

#### Source

[date.ts:26](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/date.ts#L26)

***

### getReadableDate()

> **getReadableDate**(`datetime`): `string`

#### Parameters

• **datetime**: `Date`= `undefined`

The datetime that needs to be formatted.

#### Returns

`string`

- A string representing the date in the format "yyyy-mm-dd"

#### Function

#### Source

[date.ts:18](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/date.ts#L18)

***

### getReadableDateTime()

> **getReadableDateTime**(`datetime`): `string`

#### Parameters

• **datetime**: `Date`= `undefined`

The datetime that needs to be formatted.

#### Returns

`string`

- A string representing the datetime in the format "yyyy-mm-dd hh:mm:ss"

#### Function

#### Source

[date.ts:7](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/date.ts#L7)
