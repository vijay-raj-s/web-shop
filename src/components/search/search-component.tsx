import React, { Component } from 'react';
import './search.scss'; 
import { Button } from '@material-ui/core';
import close from '../../assets/images/cancel.svg';
import search from '../../assets/images/search.svg';
import axios from 'axios';


import _ from 'lodash'; 
import SearchListingComponent from './search-listing/search-listing-component';
import FiltersComponent from './filters/filters-component';
import DescriptionComponent from './description/description-component';
 

interface searchState  {
  showClose: boolean,
  searchText?: string,
  items?: any,
  allItems? : any,
  selectedItem?: any
}

interface searchProps{
  setCartItems: string
}

export default class SearchComponent extends Component  <searchProps, searchState>{

  constructor(props){
    super(props);
    debugger;
    this.state = {
      showClose: false,
      searchText: '',
      items: null,
      allItems: null,
      selectedItem: null
    }
    
  }

  componentDidMount(){
    this.fetchItems();
  } 

  async fetchItems(){
    try { 
      const url = 'http://localhost:3001/items';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ items: data, selectedItem: data[0]});
    } catch (error) {
      console.log(error);
    }
 
  }

  searchChange(value){
    let searchClose = this.state.showClose;
    value ? (searchClose = true) : (searchClose = false);
     
    this.setState({
      searchText: value,
      showClose: searchClose
    }); 
  }

  searchKeyPress(event){ 
    if(event.key === 'Enter'){ 
      this.startSearch();
    }
  }

  startSearch(){
    let searchText = this.state.searchText;
    
    if(searchText){ 
      let items = _.filter(this.state.items, object => {
        return _(object).some(string => {
          return _(string).toLower().includes(searchText);
        });
      });
      this.setState({  
        items: items,
        selectedItem: items[0] 
      }); 
    } else {
      this.fetchItems();
    }; 
  }

  clearSearch(){
    this.fetchItems();
    this.setState({
      searchText: "",
      showClose: false
    });
    
  }

  setItems(filteredItems){ 
      this.setState({  
        items: filteredItems,
        selectedItem: filteredItems[0]
      });  
  }
  
  setCurrentItem(item){
    this.setState({
      selectedItem: item
    })
  }

  async addItemForCheckout(item){
    let items = this.state.items;
    let checkoutItem = _.find(items, function(o) { return o.id === item.id });
    checkoutItem.isChecked = true;

    try{
      let url = 'http://localhost:3001/cartItems';
      let response = await axios.post(url, item);
      console.log(response);     
      this.setState({
        items: items
      })     
    }
    catch(error){
      alert('error posting');
    }
    
  }  

  setItemQuantity(item, quantity){
    let items = this.state.items; 
    let currentItem = _.find(items, function(o) { return o.id === item.id });
    currentItem.quantity = quantity;
    if(!currentItem.fixedPrice){
      currentItem.fixedPrice = currentItem.price;
    }
    currentItem.price = (currentItem.fixedPrice * quantity);
    items.map(e => {
      if(e.id === item.id){
        e = item;
      }
      return null;
    })
    debugger;

    this.setState({
      items: items
    })
  }

  render() {
     
    return (
      <div className="search-container">
         <FiltersComponent  setItems={this.setItems.bind(this)} items={this.state.items}></FiltersComponent>
         <div className='search-listing'>
            <div className='search-bar-container'> 
                <div className='input-container'> 
                    <img className='search-icon' src={search} alt='search'/>
                    <input type="text" placeholder='Type something to search' value={this.state.searchText} onChange={e => this.searchChange(e.target.value)} onKeyPress={e => this.searchKeyPress(e)}/>
                    {
                      this.state.showClose?   <img className='close-icon' src={close} onClick={e => this.clearSearch()} alt='search'/> : <div className='empty-close'> </div>
                    }
                   
                </div>
                <div className='button-container'> 
                  <Button variant="contained" color="primary" aria-label="Search for items" onClick={e => this.startSearch()}>
                      Search
                    </Button> 
                </div>
            </div>
           
              {
                this.state.items? <SearchListingComponent addItemForCheckout={this.addItemForCheckout.bind(this)} setCurrentItem={this.setCurrentItem.bind(this)} items={this.state.items}></SearchListingComponent>: null 
              }
               

          </div>
          <div className='empty-section'> </div>
          {
            this.state.selectedItem ? <DescriptionComponent setItemQuantity={this.setItemQuantity.bind(this)} setCartItems={this.addItemForCheckout.bind(this)} item={this.state.selectedItem}> </DescriptionComponent> : null
          }
          
      </div>
    )
  }
}
