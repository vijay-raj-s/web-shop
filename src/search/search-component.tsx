import React, { Component } from 'react';
import './search.scss'; 
import { Button } from '@material-ui/core';
import close from '../assets/images/cancel.svg';
import search from '../assets/images/search.svg';
import price from '../assets/images/price-filter.svg';
import rating from '../assets/images/ratings.svg';

import _ from 'lodash'; 
import SearchListingComponent from './search-listing/search-listing-component';

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

  filterPrice(priceID){
    this.fetchItems().then(e => {
      let items;
      switch (priceID) {
        case 1:
          items = _.filter(this.state.items, o => { return o.price < 10; });  
          break;
        case 2:
          items = _.filter(this.state.items, o => { return (o.price > 10 && o.price < 20); });  
          break;
        case 3:
          items = _.filter(this.state.items, o => { return o.price > 20; });  
          break;
        default:
          break;
      }  
      debugger;
      
      this.setState({  
        items: items
      }); 
    })
    


    
  }

  render() {
    //const elements = ['one', 'two', 'three', 'one', 'two', 'three','one', 'two', 'three','one', 'two', 'three' ];
    const price_filter = [{
      'id' : 1, 
      'value' : 'less than 10€'
    },
    {
      'id' : 2, 
      'value' : 'between 10€ and 20€'
    },
    {
      'id' : 3, 
      'value' : 'greater than 20€'
    }]

    const rating_filter = [{
      'id' : 1, 
      'value' : '4 and above'
    },
    {
      'id' : 2, 
      'value' : 'between 2 and 4'
    },
    {
      'id' : 3, 
      'value' : 'less than 2'
    }]
    
    return (
      <div className="search-container">
         <div className='filters-section'>
             <div className='title'> Filters  <span className='clear-link' onClick={e => this.fetchItems()}>(Clear)</span></div>
             <div className='filters'>
                <div className='filter-heading'>
                  <div className='icon'>  <img src={price} alt='price' /> </div> 
                  <div className='label'> Price: </div>
                  </div>
                {
                  price_filter.map(element => {
                      return (<div className='filter-value' onClick={e => this.filterPrice(element.id)}> {element.value} </div>)
                  })
                }

                <div className='filter-heading'>
                  <div className='icon'>  <img src={rating} alt='price' /> </div> 
                  <div className='label'> Rating: </div>
                  </div>
                {
                  rating_filter.map(element => {
                      return (<div className='filter-value' onClick={e => this.filterPrice(element.id)}> {element.value} </div>)
                  })
                }
             </div>

          </div>
         <div className='search-listing'>
            <div className='search-bar-container'> 
                <div className='input-container'> 
                    <img className='search-icon' src={search} alt='search'/>
                    <input type="text" placeholder='Type something to search' value={this.state.searchText} onChange={e => this.searchChange(e.target.value)} onKeyPress={e => this.searchKeyPress(e)}/>
                    {
                      this.state.showClose?   <img className='close-icon' src={close} onClick={this.clearSearch.bind(this)} alt='search'/> : <div className='empty-close'> </div>
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
          <div className='description-section'> 
            Item description
          </div>
      </div>
    )
  }
}
