import React, { Component, Fragment, useState } from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar'
import Users from './Components/Users/Users'
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './Components/Pages/About'
import User from './Components/Users/User';
import GithubState from './Components/Context/github/GithubState'
import AlertState from './Components/Context/alert/alertState'
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound'

const App = () => 
{
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='app'>
            <Navbar title="GitHub finder" />
            <div className='container'>
              <Alert ></Alert>
              <Switch>              
                <Route path='/user/:login' component={User} />
                <Route exact path='/about' component={About} />
                <Route path='/' component={Home} />  
                <Route component={NotFound}  />            
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
