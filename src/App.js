import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { Login } from './pages/login'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  )
}
