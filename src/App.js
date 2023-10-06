import React, {useState} from 'react'
import './index.css'
import EmployeePage from './Components/Administrator/EmployeePage'
import HomePage from './Components/Home/HomePage'
import EmployeeEdit from './Components/Administrator/EmployeeEdit'
import EmployeeLogin from './Components/Employee/EmployeeLogin'
import TimeElapsed from './Components/Employee/TimeElapsed'
import TimeList from './Components/Employee/TimeList'
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from './Components/Home/NavBar'
import AdminLogin from './Components/Administrator/AdminLogin'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedInE, setLoggedInE] = useState(false);
  return (
    <div>
    <NavBar />
      <Switch>
      <Route  exact path="/EmployeeLogin">
          <EmployeeLogin isLoggedInE={isLoggedInE} setLoggedIn={setLoggedInE}/>
        </Route>
        <Route  path="/TimeElapsed">
        {isLoggedInE ? <TimeElapsed /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route  path="/TimeList">
        {isLoggedInE ?  <TimeList /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/EmployeePage">
        {isLoggedIn ? <EmployeePage /> : <Redirect to="/AdminLogin" />}
      </Route>
       
        <Route path="/EmployeeEdit">
        {isLoggedIn ? <EmployeeEdit /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route  path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App