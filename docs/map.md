[**@akadenia/utilities**](README.md) • **Docs**

***

[@akadenia/utilities](README.md) / map

# map

## Interfaces

### IGetBearingToCoordinate

#### Properties

##### endCoordinate

> **endCoordinate**: `undefined` \| `number`[]

###### Source

[map.ts:41](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/map.ts#L41)

##### startCoordinate

> **startCoordinate**: `undefined` \| `number`[]

###### Source

[map.ts:40](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/map.ts#L40)

## Functions

### compareLocations()

> **compareLocations**(`location1`, `location2`, `precision`): `boolean`

#### Parameters

• **location1**: `undefined` \| `number`[]

• **location2**: `undefined` \| `number`[]

• **precision**: `number`= `DEFAULT_COMPARE_LOCATIONS_PRECISION`

#### Returns

`boolean`

#### Source

[map.ts:25](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/map.ts#L25)

***

### getBearingToCoordinate()

> **getBearingToCoordinate**(`__namedParameters`): `number`

#### Parameters

• **\_\_namedParameters**: [`IGetBearingToCoordinate`](map.md#igetbearingtocoordinate)

#### Returns

`number`

#### Source

[map.ts:44](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/map.ts#L44)

***

### getDistanceBetweenPoints()

> **getDistanceBetweenPoints**(`point1`, `point2`): `null` \| `number`

#### Parameters

• **point1**: `undefined` \| `number`[]

• **point2**: `undefined` \| `number`[]

#### Returns

`null` \| `number`

#### Source

[map.ts:5](https://github.com/akadenia/AkadeniaUtilities/blob/d36d1d1356c9fdf88467891933f4060f688c6d52/src/map.ts#L5)
