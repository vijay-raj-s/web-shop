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

interface productState  {
  favoriteState: boolean,
  productRate: any,
}


export default class DescriptionComponent extends Component <{}, productState>{

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

  
  render() {
    return (
      <div className="description-section">

        <div className="description-title">
          <div className="product-title">
            <label>GORILLA</label>
            {!this.state.favoriteState && <div className="product-favorite-off">
            <Icon component={FavoriteBorderIcon} onClick={e => this.favoriteChange()}></Icon>
            </div>}
            {this.state.favoriteState && <div className="product-favorite-on">
            <Icon component={FavoriteIcon} onClick={e => this.favoriteChange()}></Icon>
            </div>}
          </div>
        </div>

        <div className="product-image">
          <img src="http://localhost:3000/assets/images/granbar_cafe.jpg" alt="Granbar_Cafe" />

        </div>
        <Rating className="product-rating" value={this.state.productRate} precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />}
        onChange={(event, newValue) => this.ratingValue(newValue)}/>

        <div className="product-price-amount">
          <div className="product-price">
          <Icon component={EuroIcon} ></Icon>
            <label>18,60  </label>
            <TextField className="product-quantity" size="small" defaultValue="1" type="number" InputLabelProps={{}} variant="outlined" />
          </div>
        </div>

        <div className="product-description">
          <label className="product-description-category">Weight</label>
          <label className="product-description-detail">1000 g</label>
        </div>

        <div className="product-description">
          <label className="product-description-category">Origin</label>
          <label className="product-description-detail">Brooklyn, NY</label>
        </div>


        <div className="product-add-to-cart">
          <Button className="product-add-to-cart-btn" color="secondary" variant="contained" startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
        </div>

      </div>
    )
  }
}

