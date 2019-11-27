import React from 'react';
import './App.scss';
import {  Route, Switch } from "react-router-dom";
import HomeComponent from './home/home-component';
import LoginComponent from './login/login-component';
import RegisterComponent from './register/register-component';

const App: React.FC =  ()  => {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/home" component={HomeComponent} />  
            <Route path="/register" exact component={RegisterComponent} />
        </Switch>     
    </div>
  );
}

export default App;
