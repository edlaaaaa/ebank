import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './Component/LoginForm'

import Home from './Component/Home'
import NotFound from './Component/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
