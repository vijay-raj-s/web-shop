import React, { Component } from 'react';
import './checkout.scss'; 
import TextField from '@material-ui/core/TextField';
import Delete from '../assets/images/cancel.svg';
import MasterCard from '../assets/images/mastercard.svg';
import Visa from '../assets/images/visa.svg';
import { Button } from '@material-ui/core';

interface CheckoutState{
  cartItems : any
} 
 

export default class CheckoutComponent extends Component <{}, CheckoutState>{

  constructor(props){
    super(props);
    this.state = {
      cartItems : []
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
      this.setState({ cartItems: data});
    } catch (error) {
      console.log(error);
    }
 
  }

  render() {
    return (
      <div className="checkout">
         <div className='items-section'> 
            <div className='checkout-label'> Checkout Items</div>
            <div className='checkout-table'> 
              {this.state.cartItems ? this.state.cartItems.map(item => {
                return (
                <div>
                    <div className='item-image'> <img className='image' src={item.item_image} alt='close' aria-label='item image' /> </div>
                    <div className='item-name'> {item.item_name} </div>
                    <div className='item-quantity'> <TextField className="product-quantity" size="small" defaultValue="1" type="number" InputLabelProps={{}} inputProps={{ min: "0", max: "10", step: "1" }}  variant="outlined"   /></div>
                    <div className='item-price'> {item.price} €</div>
                    <div className='item-remove'> <img className='remove-icon' src={Delete} alt='close' aria-label='remove item from cart' /></div>
                </div>)
              }) : null}
              
                 
            </div>
            <div className='checkout-total'> 
                <div></div>
            </div>
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
                        <input type='text' placeholder='Enter name' />  
                      </div>  
                  </div>
                  <div className='card-number'>
                    <div className='label'> Card Number </div>
                    <div className='input'>
                      <input type='text' placeholder='Enter name' />  
                    </div>    
                  </div>
                  <div className='card-expiry'>
                      <div className='label'> Expiry Date </div>
                      <div className='input'>
                        <input type='text' placeholder='Enter name' />  
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
