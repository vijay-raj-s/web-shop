import React from 'react';
import './App.scss';
import {  Route, Switch } from "react-router-dom";
import HomeComponent from './home/home-component';
import LoginComponent from './login/login-component';
import RegisterComponent from './register/register-component';
import OrderComponent from './order/order-component';
import SurveyComponent from './survey/survey-component';

const App: React.FC =  ()  => {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={HomeComponent} /> 
            <Route path="/home" component={LoginComponent} />  
            <Route path="/register" exact component={RegisterComponent} />
            <Route path="/order" component={OrderComponent} />
            <Route path="/survey" exact component={SurveyComponent} />
            <Route path="/order" exact component={OrderComponent} />
            
        </Switch>     
    </div>
  );
}

export default App;
