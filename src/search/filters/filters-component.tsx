import React, { Component } from 'react';
import './filters.scss'; 
import price from '../../assets/images/price-filter.svg';
import rating from '../../assets/images/ratings.svg';

import _ from 'lodash'; 

interface listingState {
  priceFilter? : any,
  ratingFilter? : any
}

interface listingProps{  
  setItems: Function,
  items? : any
}

export default class FiltersComponent extends Component <listingProps, listingState> {
  
  constructor(props){
    super(props);

    this.state = {
      priceFilter: null,
      ratingFilter : null
    }
  }

  componentDidMount(){
    this.fetchAllFilters();
  }

  
  async fetchAllFilters(){
    try { 
      const price_filters_url = 'http://localhost:3001/price_filter';
      const price_response = await fetch(price_filters_url);
      const price_data = await price_response.json(); 

      const rating_filters_url = 'http://localhost:3001/rating_filter';
      const rating_response = await fetch(rating_filters_url);
      const rating_data = await rating_response.json(); 
       
      this.setState({
        priceFilter: price_data,
        ratingFilter: rating_data
      }); 
    } catch (error) {
      console.log(error);
    }
  }

  async fetchItems(){
    try { 
      const url = 'http://localhost:3001/items';
      const response = await fetch(url);
      const data = await response.json(); 
      this.toggleFilterSelection(null);
      this.props.setItems(data);
    } catch (error) {
      console.log(error);
    }
  }

  toggleFilterSelection(index){
    let filter = this.state.priceFilter;
      _.forEach(filter, function(value) {
        value.selected = false;
      });

      if(index != null){
        filter[index].selected = true;
      }
      
      this.setState({
        priceFilter: filter
      });
  }

  filterPrice(priceID, index){ 
    this.fetchItems().then(e => {
      let items;
      this.toggleFilterSelection(index);

      switch (priceID) {
        case 1:
          items = _.filter(this.props.items, o => { return o.price < 10; });  
          
          break;
        case 2:
          items = _.filter(this.props.items, o => { return (o.price > 10 && o.price < 20); });  
          break;
        case 3:
          items = _.filter(this.props.items, o => { return o.price > 20; });  
          break;
        default:
          break;
      }   
      
      this.props.setItems(items);
    }) 
  }

  render() {
  
    return (
      <div className='filters-section'>
             <div className='title'> Filters  <span className='clear-link' onClick={e => this.fetchItems()}>(Clear)</span></div>
             <div className='filters'>
                <div className='filter-heading'>
                  <div className='icon'>  <img src={price} alt='price' /> </div> 
                  <div className='label'> Price: </div>
                  </div>
                {
                  this.state.priceFilter ? this.state.priceFilter.map((element , index) => {
                      return (<div className={'filter-value ' + (element.selected? 'filter-selected' : null )} onClick={e => this.filterPrice(element.id, index)}> {element.value} </div>)
                  }) : null
                }

                <div className='filter-heading'>
                  <div className='icon'>  <img src={rating} alt='price' /> </div> 
                  <div className='label'> Rating: </div>
                  </div>
                {
                  this.state.ratingFilter ? this.state.ratingFilter.map((element,index) => {
                      return (<div className='filter-value' onClick={e => this.filterPrice(element.id, index)}> {element.value} </div>)
                  }) : null
                }
             </div>

          </div>
    )
  }
}
