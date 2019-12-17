import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Icon from '@material-ui/core/Icon';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import EuroIcon from '@material-ui/icons/Euro';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './description.scss';

interface ProductState  {
  favoriteState: boolean,
  productRate: any,
}

interface ProductProps{
  item: any,
  setCartItems: Function
}


export default class DescriptionComponent extends Component <ProductProps, ProductState>{

  constructor(props){
    super(props);
    this.state = {
      favoriteState: false,
      productRate: 0,
    }
  }

  favoriteChange(){
    this.setState({
      favoriteState: !this.state.favoriteState
    })
    this.render();
  }

  ratingValue(newValue){
    this.setState({
      productRate: newValue,
    })
    this.render();
  }

  addToCart(){
    this.props.setCartItems(this.props.item);
  }
  
  render() {
    return (
      <div className="description-section">

        <div className="description-title">
          <div className="product-title">
            <label>{this.props.item.item_name}</label>
            {!this.state.favoriteState && <div className="product-favorite-off">
            <Icon component={FavoriteBorderIcon} onClick={e => this.favoriteChange()}></Icon>
            </div>}
            {this.state.favoriteState && <div className="product-favorite-on">
            <Icon component={FavoriteIcon} onClick={e => this.favoriteChange()}></Icon>
            </div>}
          </div>
        </div>

        <div className="product-image">
          <img src={this.props.item.item_image} alt="Granbar_Cafe" />

        </div>
        <Rating className="product-rating" value={this.state.productRate} precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />}
        onChange={(event, newValue) => this.ratingValue(newValue)}/>

        <div className="product-price-amount">
          <div className="product-price">
          <Icon component={EuroIcon} ></Icon>
            <label>{this.props.item.price} </label>
            <TextField className="product-quantity" size="small" defaultValue="1" type="number" InputLabelProps={{}} inputProps={{ min: "0", max: "10", step: "1" }}  variant="outlined"   />
          </div>
        </div>

        <div className="product-description">
          <label className="product-description-category">Weight</label>
          <label className="product-description-detail">{this.props.item.weight} g</label>
        </div>

        <div className="product-description">
          <label className="product-description-category">Origin</label>
          <label className="product-description-detail">{this.props.item.origin}</label>
        </div>


        <div className="product-add-to-cart">
          {
            this.props.item.isChecked ? <div className='added-label'> Added to cart </div> : <Button className="product-add-to-cart-btn" color="secondary" onClick={e => this.addToCart()} variant="contained" startIcon={<AddShoppingCartIcon />}>Add to Cart</Button> 
          }
          
        </div>

      </div>
    )
  }
}

