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
 * Format a file size to a human readable string
 * @param bytes The file size in bytes
 * @returns The formatted file size
 * @example
 * formatFileSize(1024) // "1.0 KB"
 * formatFileSize(1024 * 1024) // "1.0 MB"
 */
export const formatFileSize = (bytes: number | null): string => {
  if (!bytes || bytes <= 0) return "0 B"

  const units = ["B", "KB", "MB", "GB", "TB"]

  const unitIndex = Math.floor(Math.log2(bytes) / 10)
  const clampedIndex = Math.min(unitIndex, units.length - 1)

  const size = bytes / Math.pow(1024, clampedIndex)

  return `${size.toFixed(clampedIndex === 0 ? 0 : 1)} ${units[clampedIndex]}`
}
