import React, { Component } from 'react';
import './search-listing.scss'; 
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface listingState {
  items? : any
}

interface listingProps{
  items: any,
  setCurrentItem: Function, 
  addItemForCheckout: Function
}

export default class SearchListingComponent extends Component <listingProps, listingState> {

  constructor(props){
    super(props);
    
    this.state = {
      items : this.props.items
    }
  }

  componentDidMount(){
    this.setState ({
      items : this.props.items
    }); 
  }

  componentWillReceiveProps(nextProps) {
      this.setState({items: nextProps.items});
  }
  
  addToCart(item){
    this.props.addItemForCheckout(item);
  }

  render() {
    return (
      <div className='item-listing'>
      {
       
       this.state.items ? this.state.items.map((item, index) => {
         return (
          <div className='item-container' onClick={e => this.props.setCurrentItem(item)}>
            <div className='item-main'> 
                <div className='image-container'> 
                    <img  src={item.item_image} alt={item.item_name} />
                </div>
                <div className='item-price'>
                    <span>€ {item.price} </span>
                </div> 

            </div>
            <div className='item-details'> 
                <div className='item-title'> 
                    {item.item_name}
                </div>
                <div className='item-rating'> 
                <Rating className="product-rating" size="small"  value={item.rating} readOnly precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />}
        /> 
                </div> 
                <div className='add-to-cart'> 
                  {
                    item.isChecked ? <div className='added-label'> Added to Cart </div> : <Button variant="contained" color="secondary" onClick={e => this.addToCart(item)}>
                    Add to cart
                  </Button> 
                  }
                  
                  
                </div>
            </div> 
        </div>
         )
       }) : null
       
     }
     </div>
    )
  }
}
