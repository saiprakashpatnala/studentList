import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import Register from './components/Register'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </div>
)
export default App
