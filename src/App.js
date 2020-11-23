import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { useInit } from './features/use-init'
import { ProtectedRoute } from './components/protected-route'
import { Dashboard } from './pages/dashboard'
import { Login } from './pages/login'

export function App() {
  const inited = useInit()

  return (
    inited && (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    )
  )
}
