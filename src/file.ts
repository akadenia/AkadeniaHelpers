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

/**
 * Get the files extensions form the types passed
 * It ignores any value tha is passed in the types array that is not a valid type
 * @param types The array of types passed
 * @returns The array of file extensions i.e. ["png"]
 * @example
 * getFileExtensionsFromTypes(["images/png", "images/jpeg"]) // ["png", "jpeg"]
 */
export const getFileExtensionsFromTypes = (types: string[]) => {
  if (!Array.isArray(types)) {
    throw new Error("types must be an array")
  }
  return types
    .filter((type) => type.includes("/"))
    .map((type) => type.trim().split("/").pop())
    .reduce((acc, type) => {
      if (type && !acc.includes(type)) {
        acc.push(type)
      }
      return acc
    }, [] as string[])
}

/**
 * Gets two arrays of the file preview urls and revokes the urls that are not in the new list
 * @param oldList The array of file preview urls for the old list
 * @param newList The array of file preview urls for the new list
 * @returns
 * @example
 * revokeDiffFilePreviewUrls([url1, url2], [url1]) => url2 is revoked
 */

export default function revokeDiffFilePreviewUrls(oldList: string[], newList: string[]) {
  if (!(Array.isArray(oldList) && Array.isArray(newList))) {
    throw new Error("oldList and newList must be arrays")
  }
  const differenceList = oldList.filter(
    (currentOldPreviewUrl) => !newList.some((currentNewPreviewUrl) => currentNewPreviewUrl === currentOldPreviewUrl),
  )
  differenceList.forEach((oldUrl) => {
    URL.revokeObjectURL(oldUrl)
  })
}
