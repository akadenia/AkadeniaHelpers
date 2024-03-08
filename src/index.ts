import {
  convertCamelToSnakeCase,
  convertSnakeToCamelCase,
  fileNameFromPath,
  formatPosition,
  handleNullDisplay,
  pluralizeOnCondition,
  replaceSpacesWithUnderscore,
  replaceUnderscoreWithSpaces,
  truncateText,
  uuidv4,
  enforceCharacterLimit,
  capitalizeText,
} from "./text"
import * as DateHelpers from "./date"
import * as ObjectHelpers from "./object"
import * as MapHelpers from "./map"
import * as GenericHelpers from "./generic"
import * as FileHelpers from "./file"

const TextHelpers: {
  convertCamelToSnakeCase: typeof convertCamelToSnakeCase
  convertSnakeToCamelCase: typeof convertSnakeToCamelCase
  fileNameFromPath: typeof fileNameFromPath
  formatPosition: typeof formatPosition
  handleNullDisplay: typeof handleNullDisplay
  pluralizeOnCondition: typeof pluralizeOnCondition
  replaceSpacesWithUnderscore: typeof replaceSpacesWithUnderscore
  replaceUnderscoreWithSpaces: typeof replaceUnderscoreWithSpaces
  truncateText: typeof truncateText
  uuidv4: typeof uuidv4
  enforceCharacterLimit: typeof enforceCharacterLimit
  capitalizeText: typeof capitalizeText
} = {
  convertCamelToSnakeCase: convertCamelToSnakeCase,
  convertSnakeToCamelCase: convertSnakeToCamelCase,
  fileNameFromPath: fileNameFromPath,
  formatPosition: formatPosition,
  handleNullDisplay: handleNullDisplay,
  pluralizeOnCondition: pluralizeOnCondition,
  replaceSpacesWithUnderscore: replaceSpacesWithUnderscore,
  replaceUnderscoreWithSpaces: replaceUnderscoreWithSpaces,
  truncateText: truncateText,
  uuidv4: uuidv4,
  enforceCharacterLimit: enforceCharacterLimit,
  capitalizeText: capitalizeText,
}

export { ObjectHelpers, DateHelpers, MapHelpers, TextHelpers, GenericHelpers, FileHelpers }
