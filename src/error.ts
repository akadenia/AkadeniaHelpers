/**
 *
 * @function
 * @param {unknown} error - The error to be checked or sanitized
 * @returns {Error} - Proper error object
 */
export const sanitizeErrorIntoProperErrorObject = (error: unknown): Error => {
  if (typeof error === "object" && error !== null) {
    const description = "description" in error ? (error as { description: unknown }).description : undefined
    const message = "message" in error ? (error as { message: unknown }).message : undefined

    if (typeof description === "string") {
      return new Error(description)
    }

    if (typeof message === "string") {
      return new Error(message)
    }
  }

  if (error instanceof Error && typeof error.message === "string") {
    return error
  }

  if (typeof error === "string") {
    return new Error(error)
  }

  return new Error("An unknown error occurred")
}
