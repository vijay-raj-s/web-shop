import React, { Component } from 'react';
import './home.scss';
import {  Link } from "react-router-dom"; 
import logo from '../assets/images/LOGO.svg';
import survey from '../assets/images/survey.svg';
import orderFood from '../assets/images/order-food.svg';


export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home-container">
        <div className='logo-container'> 
          <img src={logo} alt='logo'/> 
        </div>

        <div className='title-container'> 
           Welcome Coffee Lovers!
        </div>

        <div className='path-container'>
          <Link to='/survey' role='navigation' aria-label='Try our survey'>
          <div className='path-selection'>
            
                <div className='path'>
                    <div>
                      <img src={survey} className='image' alt='survey'/>
                      <div className='path-label'> Try something new! </div>
                    </div>
                </div>
           
          </div>
          </Link>
          <Link to='/order' role='navigation' aria-label='Go to Order Coffee page'>
          <div className='path-selection'> 
                <div className='path'> 
                  <div>
                  <img src={orderFood} className='image' alt='order food'/>
                  <div className='path-label'> Order Now! </div>
                  </div>
                  
                </div> 
          </div>  
          </Link>
        </div> 
          
      </div>
    )
  }
}
