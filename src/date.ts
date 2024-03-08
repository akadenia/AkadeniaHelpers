/**
 *
 * @function
 * @param {Date} datetime - The datetime that needs to be formatted.
 * @returns {string} - A string representing the datetime in the format "yyyy-mm-dd hh:mm:ss"
 */
export const getReadableDateTime = (datetime = new Date()) => {
  const dateString = new Date(datetime.getTime() - datetime.getTimezoneOffset() * 60000)
  return dateString.toISOString().replace("T", " ").substring(0, 19)
}

/**
 *
 * @function
 * @param {Date} datetime - The datetime that needs to be formatted.
 * @returns {string} - A string representing the date in the format "yyyy-mm-dd"
 */
export const getReadableDate = (datetime = new Date()) => getReadableDateTime(datetime).substring(0, 10)

/**
 *
 * @function
 * @param {string | Date} date - The date string that needs to be formatted
 * @returns {string} - A string representing the date in the user's local timezone
 */
export const getDateString = (date: string | Date): string => new Date(date).toLocaleDateString()

/**
 *
 * @function
 * @param {string | Date} date - The date string that needs to be formatted
 * @param {Intl.DateTimeFormatOptions} options - The javascript date formatting options to be used
 * @param {string | Intl.Locales | undefined} localTimezone - The local timezone to be used
 * @returns {string} - A string representing the date in the user's local timezone
 */

export const formatDateTime = (
  date: string | Date,
  options: Intl.DateTimeFormatOptions,
  localTimezone: string | Intl.Locale = "en-US",
): string => new Date(date).toLocaleDateString(localTimezone, options)
