/**
 * A "modern" sleep statement.
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 *  Get the preferred scheme for a host
 * @param host An IP address or a domain name
 * @return 'http' or 'https'
 */
export const getPreferredUriScheme = (host: string): "http" | "https" => {
  if (
    /^(127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}|localhost)(:\d+)?$/.test(
      host,
    )
  ) {
    return "http"
  }
  return "https"
}
