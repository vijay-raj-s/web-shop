import React, { Component } from 'react';
import './search.scss'; 
import { Button } from '@material-ui/core';
import close from '../assets/images/cancel.svg';
import search from '../assets/images/search.svg';


import _ from 'lodash'; 
import SearchListingComponent from './search-listing/search-listing-component';
import FiltersComponent from './filters/filters-component';
import DescriptionComponent from './description/description-component';
 

interface searchState  {
  showClose: boolean,
  searchText?: string,
  items?: any,
  allItems? : any
}

export default class SearchComponent extends Component  <{}, searchState>{

  constructor(props){
    super(props);
    this.state = {
      showClose: false,
      searchText: '',
      items: null,
      allItems: null
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
      this.setState({ items: data});
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
        items: items 
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
        items: filteredItems 
      });  
  }
  

  render() {
    //const elements = ['one', 'two', 'three', 'one', 'two', 'three','one', 'two', 'three','one', 'two', 'three' ];
    
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
                  <Button variant="contained" color="primary" onClick={e => this.startSearch()}>
                      Search
                    </Button> 
                </div>
            </div>
           
              {
                this.state.items? <SearchListingComponent items={this.state.items}></SearchListingComponent>: null 
              }
               

          </div>
          <div className='empty-section'> </div>
          <DescriptionComponent> </DescriptionComponent>
      </div>
    )
  }
}
