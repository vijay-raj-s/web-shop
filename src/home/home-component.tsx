import React, { Component } from 'react';
import './home.scss';
import {  Route, Link, Switch } from "react-router-dom";
import SurveyComponent from '../survey/survey-component';
import OrderComponent from '../order/order-component';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <h1>Order Coffee </h1> 
        
        <div><Link to='/home/survey'>Survey </Link></div>
        <div><Link to='/home/order'>Order</Link></div>
        <Switch>
            <Route path="/home/" exact component={SurveyComponent} />
            <Route path="/home/survey" exact component={SurveyComponent} />
            <Route path="/home/order" exact component={OrderComponent} />  
        </Switch>
        <div><Link to='/login'>Logout</Link></div>
      </div>
    )
  }
}
