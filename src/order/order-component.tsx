import React, { Component } from 'react';
import './order.scss';
import { Link, Switch, Route } from 'react-router-dom';
import SearchComponent from '../search/search-component';
import HistoryComponent from '../history/history-component';
import CheckoutComponent from '../checkout/checkout-component';

export default class OrderComponent extends Component {
  render() {
    return (
      <div className="order">
        <h1>search Coffees </h1>  
        <div><Link to='/order/search'>Search </Link></div>
        <div><Link to='/order/history'>Order history</Link></div>
        <div><Link to='/order/checkout'>Checkout</Link></div> 

        <Switch>
            <Route path="/order/search" exact component={SearchComponent} />
            <Route path="/order/history" exact component={HistoryComponent} />  
            <Route path="/order/checkout" exact component={CheckoutComponent} />  
        </Switch>
      </div>
    )
  }
}
