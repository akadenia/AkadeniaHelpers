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

/**
 *
 * @function
 * @param {string | Date} date - The date string that needs to be returned as a Date object.
 * @returns {Date} - A date representing the new date object.
 */

export function parseDate(date: string | Date): Date {
  const outputDate = typeof date === "string" ? new Date(date) : date
  if (isNaN(outputDate.getTime())) {
    throw new Error(`Cannot parse date: ${JSON.stringify(date)}`)
  }
  return outputDate
}

/**
 *
 * @function
 * @param {string | Date} date - The date string that needs to be formatted
 * @param {boolean} appendTime - A boolean to determine if the time should be appended to the date
 * @returns {string} - A string representing the date in the short ordinal date
 */

export function getShortOrdinalDate(date: string | Date, appendTime?: boolean): string {
  const newDate = parseDate(date)
  const day = newDate.getUTCDate()
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const monthIndex = newDate.getUTCMonth()
  const year = newDate.getUTCFullYear()
  const hours = newDate.getUTCHours().toString().padStart(2, "0")
  const minutes = newDate.getUTCMinutes().toString().padStart(2, "0")
  const seconds = newDate.getUTCSeconds().toString().padStart(2, "0")

  const ordinalEndings = ["th", "st", "nd", "rd"]
  let suffix = ordinalEndings[0]
  if (day <= 3 && day > 0) {
    suffix = ordinalEndings[day]
  } else {
    // Determine the ordinal endings based on the last digit of the day
    suffix = ordinalEndings[day % 10] ?? suffix
  }

  if (appendTime) {
    return `${monthNames[monthIndex]} ${day}${suffix} ${year} ${hours}:${minutes}:${seconds}`
  } else {
    return `${monthNames[monthIndex]} ${day}${suffix} ${year}`
  }
}
