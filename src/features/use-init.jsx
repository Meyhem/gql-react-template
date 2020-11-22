import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { tokenState } from './user/atoms'

export function useInit() {
  const [token, setToken] = useRecoilState(tokenState)
  const [inited, setInited] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('JWT'))

    if (storedToken) {
      setToken(storedToken)
    }

    setInited(true)
  }, [setToken])

  useEffect(() => {
    localStorage.setItem('JWT', JSON.stringify(token))
  }, [token])

  return inited
}
