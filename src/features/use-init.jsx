import { useEffect } from 'react'
import { useRecoilState, atom } from 'recoil'

import { tokenState } from './user/state'

const initedState = atom({
  key: 'inited',
  default: false,
})

export function useInit() {
  const [token, setToken] = useRecoilState(tokenState)
  const [inited, setInited] = useRecoilState(initedState)

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('JWT'))
    if (storedToken) {
      setToken(storedToken)
    }
    setInited(true)
  }, [setToken, setInited])

  useEffect(() => {
    localStorage.setItem('JWT', JSON.stringify(token))
  }, [token])

  return inited
}
