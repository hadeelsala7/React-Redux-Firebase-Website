import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails/ProjectDetails'
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/SignUp';
import CreateProject from './components/projects/CreateProject/CreateProject'
function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/create' component={CreateProject} />

          </Switch> 
        </BrowserRouter>
      </div>
  );
}

export default App;
