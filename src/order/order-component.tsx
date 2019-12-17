import React, { Component } from 'react';
import './order.scss';
import { Switch, Route } from 'react-router-dom';
import SearchComponent from '../search/search-component';
import HistoryComponent from '../history/history-component';
import CheckoutComponent from '../checkout/checkout-component';
import HeaderComponent from '../layouts/header/header-component';
import SidebarComponent from '../layouts/sidebar/sidebar-component';

interface OrderState{
  cartItems : number
}


export default class OrderComponent extends Component <{}, OrderState>{

  constructor(props){
    super(props);
    this.state = {
      cartItems: 0
    }
  }

  setCartItems(item){
    console.log('set items');
    debugger;
    this.setState({
      cartItems : item
    })
  }

  render() {
    return (
      <div className="order">
        <HeaderComponent></HeaderComponent>
        <div className='main'>
          <SidebarComponent></SidebarComponent>
          <div className='content-section'>
            
            <Switch>
                <Route path="/order/" exact component={SearchComponent} />
                <Route path="/order/search" exact render={(props) => 
                  <SearchComponent  {...props} setCartItems='1'/> 
                } />
                <Route path="/order/history" exact component={HistoryComponent} />  
                <Route path="/order/checkout" exact component={CheckoutComponent} />  
            </Switch>
          </div>

        </div>
        

        
        
      </div>
    )
  }
}
