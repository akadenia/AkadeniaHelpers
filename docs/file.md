[**@akadenia/utilities**](README.md) • **Docs**

***

[@akadenia/utilities](README.md) / file

# file

## Functions

### checkFileExtension()

> **checkFileExtension**(`filePath`, `validExtensions`): `boolean`

Check if a file path has a valid extension

#### Parameters

• **filePath**: `string`

The file path to check

• **validExtensions**: `string`[]

The valid extensions

#### Returns

`boolean`

true if the file path has a valid extension

#### Example

```ts
checkFileExtension("test.geojson", ["geojson", "json"]) // true
checkFileExtension("test.txt", ["md"]) // false
```

#### Source

[file.ts:10](https://github.com/akadenia/AkadeniaUtilities/blob/8752f6ca9da937529f0c4b35a3f4cafa61a4f5c5/src/file.ts#L10)
