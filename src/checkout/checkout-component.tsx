import React, { Component } from 'react';
import './checkout.scss'; 
import TextField from '@material-ui/core/TextField';
import Delete from '../assets/images/cancel.svg';
import MasterCard from '../assets/images/mastercard.svg';
import Visa from '../assets/images/visa.svg';
import { Button } from '@material-ui/core';
import axios from 'axios';

interface CheckoutState{
  cartItems : any,
  totalPrice: number
} 
 

export default class CheckoutComponent extends Component <{}, CheckoutState>{

  constructor(props){
    super(props);
    this.state = {
      cartItems : [],
      totalPrice: 0
    }
    
  }

  componentDidMount(){
    this.fetchItems();
  } 

  async fetchItems(){
    try { 
      const url = 'http://localhost:3001/cartItems';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ cartItems: data},
        () => {
          this.calculateTotalPrice();
        });
    } catch (error) {
      console.log(error);
    }
 
  }

  async deleteItems(index){
    let id = this.state.cartItems[index].id;
    debugger;
    try {
      let response = await axios.delete('http://localhost:3001/cartItems/' + id);
      console.log(response);
      this.fetchItems();
    }catch(error){
      alert('Error Removing Item');
    }
  }

  addItemQuantity(index, e){
    let items = this.state.cartItems;
    let quantity = e.target.value; 
    items[index].quantity = quantity;
    if(!items[index].fixedPrice){
      items[index].fixedPrice = items[index].price;
    }
    items[index].price = (items[index].fixedPrice * quantity)
    this.setState({
      cartItems: items
    },
    () => {
      this.calculateTotalPrice();
    })
  }

  calculateTotalPrice(){
    let total = 0;
    this.state.cartItems.map(e => {
      return total += e.price;
    })

    this.setState({
      totalPrice: total
    });
  }

  render() {
    return (
      <div className="checkout">
         <div className='items-section'> 
            <div className='checkout-label'> Checkout Items</div>
            <div className='checkout-table'> 
              {this.state.cartItems &&  this.state.cartItems.length ? this.state.cartItems.map((item, index) => {
                return (
                <div className='table-row'>
                    <div className='item-image'> <img className='image' src={item.item_image} alt='close' aria-label='item image' /> </div>
                    <div className='item-name'> {item.item_name} </div>
                    <div className='item-quantity'> <TextField value={item.quantity} onChange={e => this.addItemQuantity(index, e)} className="product-quantity" size="small" defaultValue="1" type="number" InputLabelProps={{}} inputProps={{ min: "0", max: "10", step: "1" }}  variant="outlined"   /></div>
                    <div className='item-price'> {item.price} €</div>
                    <div className='item-remove'> <img onClick={e => this.deleteItems(index)} className='remove-icon' src={Delete} alt='close' aria-label='remove item from cart' /></div>
                </div>)
              }) : <div className='no-items'> No items in cart</div>}
              
                 
            </div>
            {this.state.cartItems &&  this.state.cartItems.length ?
            <div className='checkout-total'> 
                <div></div>
                <div></div>
                <div className='label'> Total Price: </div>
                <div className='total-price'>{this.state.totalPrice} €</div>
                <div></div>
            </div> 
            : null}
         </div>
         <div className='card-details-section'>
              <div className='card-details'> 
                  <div className='heading'> 
                      <div> Card Details</div>
                  </div>
                  <div className='card-type'>
                      <img className='master' src={MasterCard} alt='mastercard' />
                      <img className='visa' src={Visa} alt='Visa' />  
                  </div>
                  <div className='card-name'>
                      <div className='label'> Name on the card </div>
                      <div className='input'>
                        <input aria-label='Enter Name on card' type='text' placeholder='Enter name' />  
                      </div>  
                  </div>
                  <div className='card-number'>
                    <div className='label'> Card Number </div>
                    <div className='input'>
                      <input aria-label='Enter card number' type='text' placeholder='Enter Card Number' />  
                    </div>    
                  </div>
                  <div className='card-expiry'>
                      <div className='label'> Expiry Date </div>
                      <div className='input'>
                        <input aria-label='Enter Expiry Date' type='text' placeholder='Enter Expiry Date' />  
                      </div>    
                  </div>
                  <div className='checkout-button'>
                    <Button variant="contained" color="primary" aria-label="Login">
                      Checkout
                    </Button> 
                  </div>
              </div>
         </div>
      </div>
    )
  }
}
