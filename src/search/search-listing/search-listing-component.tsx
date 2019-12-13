import React, { Component } from 'react';
import './search-listing.scss'; 
import { Button } from '@material-ui/core';

interface listingState {
  items? : any
}

interface listingProps{
  items: any
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

  // shouldComponentUpdate(nextProps) {
  //     return this.state.items !== nextProps.items;
  // }

  render() {
    return (
      <div className='item-listing'>
      {
       
       this.state.items ? this.state.items.map((post, index) => {
         return (
          <div className='item-container'>
            <div className='item-main'> 
                <div className='image-container'> 
                    <img  src={post.item_image} alt={post.item_name} />
                </div>
                <div className='item-price'>
                    <span>€ {post.price} </span>
                </div> 

            </div>
            <div className='item-details'> 
                <div className='item-title'> 
                    {post.item_name}
                </div>
                <div className='item-rating'> 
                    {post.rating}
                </div> 
                <div className='add-to-cart'> 
                  <Button variant="contained" color="secondary">
                    Add to cart
                  </Button>
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
