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




export default class DescriptionComponent extends Component {

  render() {
    return (
      <div className="description-section">

        <div className="description-title">
          <div className="product-title">
            <label>GORILLA</label>
            <Icon component={FavoriteBorderIcon} className="product-favorite-off"></Icon>
            <Icon component={FavoriteIcon} className="product-favorite-on"></Icon>
          </div>
        </div>

        <div className="product-image">
          <img src="http://localhost:3000/assets/images/granbar_cafe.jpg" alt="Granbar_Cafe" />

        </div>
        <Rating className="product-rating" value={0} precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />} />

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
