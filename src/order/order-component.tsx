import React, { Component } from 'react';
import './order.scss';
import { Link, Switch, Route } from 'react-router-dom';
import SearchComponent from '../search/search-component';
import HistoryComponent from '../history/history-component';
import CheckoutComponent from '../checkout/checkout-component';
import HeaderComponent from '../layouts/header/header-component';
import SidebarComponent from '../layouts/sidebar/sidebar-component';

export default class OrderComponent extends Component {
  render() {
    return (
      <div className="order">
        <HeaderComponent></HeaderComponent>
        <div className='main'>
          <SidebarComponent></SidebarComponent>
          <div className='content-section'>
            
            <Switch>
                <Route path="/order/search" exact component={SearchComponent} />
                <Route path="/order/history" exact component={HistoryComponent} />  
                <Route path="/order/checkout" exact component={CheckoutComponent} />  
            </Switch>
          </div>

        </div>
        

        
        
      </div>
    )
  }
}
