import decode from 'jwt-decode'

export function parseJWT(tok) {
  return decode(tok)
}
