import React, { Component } from 'react';
import './sidebar.scss'; 
import { Link } from 'react-router-dom';

export default class SidebarComponent extends Component {
  render() {
    return (
      <div className="sidebar">
          <div><Link to='/order/search'>Search </Link></div>
          <div><Link to='/order/history'>Order history</Link></div>
          <div><Link to='/order/checkout'>Checkout</Link></div> 
      </div>
    )
  }
}
