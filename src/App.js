import React from 'react'
import './index.css'
import EmployeePage from './Components/Administrator/EmployeePage'
import HomePage from './Components/Home/HomePage'
import EmployeeEdit from './Components/Administrator/EmployeeEdit'
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/Home/NavBar'

function App() {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/EmployeePage">
          <EmployeePage />
        </Route>
        <Route exact path="/EmployeeEdit">
          <EmployeeEdit />
        </Route>
        
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App