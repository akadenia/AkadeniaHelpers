const DEFAULT_COMPARE_LOCATIONS_PRECISION = 6

// This function implements the Haversine formula to calculate distance between two points
// https://en.wikipedia.org/wiki/Haversine_formula
export const getDistanceBetweenPoints = (point1: number[] | undefined, point2: number[] | undefined): number | null => {
  if (!point1 || !point2) return null

  const [lat1, lon1] = point1
  const [lat2, lon2] = point2

  const earthRadius = 6371e3 // in metres
  const lat1InRadians = (lat1 * Math.PI) / 180 // φ, λ in radians
  const lat2InRadians = (lat2 * Math.PI) / 180
  const long1InRadians = ((lat2 - lat1) * Math.PI) / 180
  const long2InRadians = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(long1InRadians / 2) * Math.sin(long1InRadians / 2) +
    Math.cos(lat1InRadians) * Math.cos(lat2InRadians) * Math.sin(long2InRadians / 2) * Math.sin(long2InRadians / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return earthRadius * c // distance in metres
}

export const compareLocations = (
  location1: number[] | undefined,
  location2: number[] | undefined,
  precision = DEFAULT_COMPARE_LOCATIONS_PRECISION,
): boolean => {
  if (!location1 || !location2) {
    throw new Error("location1 and location2 are required")
  }
  return (
    location1[0].toFixed(precision) === location2[0].toFixed(precision) &&
    location1[1].toFixed(precision) === location2[1].toFixed(precision)
  )
}

export interface IGetBearingToCoordinate {
  startCoordinate: number[] | undefined
  endCoordinate: number[] | undefined
}

export const getBearingToCoordinate = ({ startCoordinate, endCoordinate }: IGetBearingToCoordinate) => {
  if (!startCoordinate || !endCoordinate) {
    throw new Error("startCoordinate and endCoordinate are required")
  }

  // Converts from degrees to radians
  const toRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180
  }

  // Converts from radians to degrees
  const toDegrees = (radians: number): number => {
    return (radians * 180) / Math.PI
  }

  const startLatitude = toRadians(startCoordinate[1])
  const startLongitude = toRadians(startCoordinate[0])
  const endLatitude = toRadians(endCoordinate[1])
  const endLongitude = toRadians(endCoordinate[0])

  const y = Math.sin(endLongitude - startLongitude) * Math.cos(endLatitude)
  const x =
    Math.cos(startLatitude) * Math.sin(endLatitude) -
    Math.sin(startLatitude) * Math.cos(endLatitude) * Math.cos(endLongitude - startLongitude)

  const bearing = Math.atan2(y, x)

  return (toDegrees(bearing) + 360) % 360
}
