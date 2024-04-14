import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './Components/LoginForm'
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

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
