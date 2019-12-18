import React, { Component } from 'react';
import './header.scss'; 
import logo from '../../assets/images/LOGO.svg';
import profile from '../../assets/images/profile.svg';
import shoppingCart from '../../assets/images/shopping-cart.svg';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Axios from 'axios';


interface HeaderState  {
  userLoggedIn: boolean,
  itemsCount: number
}



export default class HeaderComponent extends Component <{}, HeaderState>{

  constructor(props){
    super(props);
    this.state = {
      userLoggedIn : true,
      itemsCount: 0
    }

    this.startPolling();
  }

  async startPolling(){
    setInterval(e => { 
      let url = 'http://localhost:3001/cartItems'; 
      Axios.get(url)
      .then(res => {
        const count = res.data.length;
        this.setState({ itemsCount : count });
      })
    }, 1000);

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
           <div>
           <Badge badgeContent={this.state.itemsCount} color="secondary">
            
              <img className='icon' src={shoppingCart} alt='cart' />  
           </Badge>
          </div>
         </div>
      </div>
    )
  }
}
