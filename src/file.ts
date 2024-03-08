/**
 * Check if a file path has a valid extension
 * @param filePath The file path to check
 * @param validExtensions The valid extensions
 * @returns true if the file path has a valid extension
 * @example
 * checkFileExtension("test.geojson", ["geojson", "json"]) // true
 * checkFileExtension("test.txt", ["md"]) // false
 */
export const checkFileExtension = (filePath: string, validExtensions: string[]): boolean => {
  const fileExtension = filePath.split(".").pop()
  return !!fileExtension && validExtensions.includes(fileExtension)
}
