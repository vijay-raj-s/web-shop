import React, { Component } from 'react';
import './header.scss'; 

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
         <div className='logo-container'> 
           <img className='logo' src=''/>
           <p> logo</p>
         </div>
         <div className='profile-cart-container'>
           <div> Welcome, Josephine </div>
           <div> profile </div>
           <div> cart </div>
         </div>
      </div>
    )
  }
}
