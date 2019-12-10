import React, { Component } from 'react';
import './header.scss'; 
import logo from '../../assets/images/LOGO.svg';
import profile from '../../assets/images/profile.svg';
import shoppingCart from '../../assets/images/shopping-cart.svg';
import Button from '@material-ui/core/Button';




interface headerState  {
  userLoggedIn: boolean
}


export default class HeaderComponent extends Component <{}, headerState>{

  constructor(props){
    super(props);
    this.state = {
      userLoggedIn : true
    }
  }

  render() {
    return (
      <div className="header">
         <div className='logo-container'> 
           <img className='icon' src={logo} alt='logo'/>
         </div>
         <div className='profile-cart-container'>
           {
             this.state.userLoggedIn ? <div className='user'><span> Welcome, Josephine  </span> <img className='icon' src={profile} alt='profile'/> </div>
              : <div className='login'> 
                  <Button variant="contained" color="secondary">
                    Login
                  </Button> 
            </div>
             
           }
           <div> <img className='icon' src={shoppingCart} alt='cart' /> </div>
         </div>
      </div>
    )
  }
}
