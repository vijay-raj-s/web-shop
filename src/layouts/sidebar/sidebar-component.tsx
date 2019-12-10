import React, { Component } from 'react';
import './sidebar.scss'; 
import { Link } from 'react-router-dom';
import search_icon from '../../assets/images/search.svg';
import order_history_icon from '../../assets/images/history.svg'; 

export default class SidebarComponent extends Component {
  render() {
    return (
      <div className="sidebar">
          <Link to='/order/search'>
          <div> 
            <img src={search_icon} alt='search' className='nav-icon' /> 
          </div>
          </Link>
          <Link to='/order/history'> 
          <div>
            <img src={order_history_icon} alt='Order history' className='nav-icon' /> 
          </div>
          </Link>
          <Link to='/order/checkout'>
          <div>
            <img src={order_history_icon} alt='checkout' className='nav-icon' /> 
          </div> 
          </Link>
      </div>
    )
  }
}
