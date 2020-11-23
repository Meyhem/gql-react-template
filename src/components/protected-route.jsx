import { Redirect, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { selectIsAuthenticated } from '../features/user'

export const ProtectedRoute = props => {
  const isAuthenticated = useRecoilValue(selectIsAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return <Route {...props} />
}
