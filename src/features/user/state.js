import { atom, selector } from 'recoil'
import _ from 'lodash'
import { parseJWT } from './util'

export const tokenState = atom({
  key: 'tokenState',
  default: { token: null },
})

export const selectIsAuthenticated = selector({
  key: 'selectIsAuthenticated',
  get: ({ get }) => {
    const state = get(tokenState)
    if (!state.token) return false
    let parsed
    try {
      parsed = parseJWT(state.token)
    } catch (e) {
      parsed = null
    }

    if (
      _.isNil(parsed) ||
      _.isUndefined(parsed.exp) ||
      !_.isNumber(parsed.exp)
    ) {
      return false
    }

    const expires = parsed.exp
    const now = Math.floor(new Date().getTime() / 1000)

    if (expires <= now) {
      return false
    }

    return true
  },
})
