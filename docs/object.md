[**@akadenia/utilities**](README.md) • **Docs**

***

[@akadenia/utilities](README.md) / object

# object

## Functions

### containsSubObject()

> **containsSubObject**\<`T`\>(`mainObject`, `subObject`): `boolean`

Checks if the main object contains the sub object.

#### Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

extends Record<string, any> - The type of the main object.

#### Parameters

• **mainObject**: `T`

The main object to check.

• **subObject**: `Partial`\<`T`\>

The sub object to look for in the main object.

#### Returns

`boolean`

- True if the main object contains the sub object, false otherwise.

#### Source

[object.ts:52](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L52)

***

### convertArrayToMap()

> **convertArrayToMap**\<`T`\>(`arrayData`, `keyProp`): `object`

#### Type parameters

• **T** *extends* `object`

#### Parameters

• **arrayData**: `T`[]

• **keyProp**: keyof `T`

#### Returns

`object`

#### Source

[object.ts:121](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L121)

***

### filterObjectsByProperty()

> **filterObjectsByProperty**\<`T`\>(`array`, `propertyName`, `propertyValue`): `T`[]

Filters an array of objects based on a specified property and value.

#### Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

extends Record<string, any> - The type of objects in the array.

#### Parameters

• **array**: `T`[]

The array of objects to filter.

• **propertyName**: keyof `T`

The name of the property to filter on.

• **propertyValue**: `T`\[keyof `T`\]

The value of the property to filter on.

#### Returns

`T`[]

- The filtered array of objects.

#### Source

[object.ts:36](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L36)

***

### filterObjectsBySubObject()

> **filterObjectsBySubObject**\<`T`\>(`array`, `subObject`): `T`[]

Filters an array of objects based on the objects containing the given sub object

#### Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

extends Record<string, any>

#### Parameters

• **array**: `T`[]

The array of objects

• **subObject**: `Partial`\<`T`\>

The sub object used to search the array

#### Returns

`T`[]

- An array of objects containing the given sub object

#### Source

[object.ts:85](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L85)

***

### findEntry()

> **findEntry**\<`EntryType`\>(`array`, `predicate`): `null` \| `EntryType`

Finds the first entry in the array that satisfies the predicate.

#### Type parameters

• **EntryType**

The type of the entries in the array.

#### Parameters

• **array**: `EntryType`[]

The array of entries to search.

• **predicate**

The predicate function to use to search the array.

#### Returns

`null` \| `EntryType`

- The first entry that satisfies the predicate, or null if not found.

#### Source

[object.ts:118](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L118)

***

### findObjectBySubObject()

> **findObjectBySubObject**\<`T`\>(`array`, `subObject`): `T` \| `null`

Finds the object containing the given sub object in the array.

#### Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

extends Record<string, any> - The type of objects in the array.

#### Parameters

• **array**: `T`[]

The array of objects.

• **subObject**: `Partial`\<`T`\>

The sub object used to search the array.

#### Returns

`T` \| `null`

- The object containing the given sub object or null.

#### Source

[object.ts:73](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L73)

***

### isPureObject()

> **isPureObject**(`object`): `boolean`

#### Parameters

• **object**: `any`

The object to check if it is a pure object (not an array, date, or function)

#### Returns

`boolean`

- Whether or not the provided object is a pure object

#### Function

#### Source

[object.ts:7](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L7)

***

### objectPropHasValue()

> **objectPropHasValue**\<`ObjectType`\>(`__namedParameters`): `boolean`

Checks if the object has the key with the value.

#### Type parameters

• **ObjectType**

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.object**: `ObjectType`

• **\_\_namedParameters.propName**: keyof `ObjectType`

• **\_\_namedParameters.value**: `ObjectType`\[keyof `ObjectType`\]

#### Returns

`boolean`

- Whether or not the object has the key with the value

#### Example

```ts
const object = { a: 1, b: 2, c: 3 }
objectPropHasValue(object, 'a', 1) // true
objectPropHasValue(object, 'b', 3) // false
```

#### Source

[object.ts:101](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L101)

***

### parseCookie()

> **parseCookie**(`str`): `Object`

#### Parameters

• **str**: `string`

The string of cookies to parse

#### Returns

`Object`

- The object containing key-value pairs of the parsed cookies

#### Function

#### Source

[object.ts:17](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/object.ts#L17)
