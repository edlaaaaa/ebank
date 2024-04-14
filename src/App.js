import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './Component/LoginForm'
import ProtectedRoute from './Component/ProtectedRoute'
import Home from './Component/Home'
import NotFound from './Component/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/e bank/login" Components={LoginForm} />
    <ProtectedRoute exact path="/" Components={Home} />
    <Route path="/not-found" Components={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
