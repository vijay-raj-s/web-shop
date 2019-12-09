import React, { Component } from 'react';
import './home.scss';
import {  Link } from "react-router-dom"; 
export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <h1>Order Coffee </h1>  
        <div><Link to='/survey'>Survey </Link></div>
        <div><Link to='/order'>Order</Link></div>  
      </div>
    )
  }
}
