import React, { Component } from 'react';
import './survey.scss';
import SidebarComponent from '../layouts/sidebar/sidebar-component';
import HeaderComponent from '../layouts/header/header-component';
import Categories from './categories';

import Question from './question';
import ResultBoxes from './resultBoxes';

//Just for testing this should be added by the JSON folder
const _categories = ["Time", "Sustainablity", "Origin", "Test", "Price"]

export default class SurveyComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    }

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

  render() {
    return (
      <div className="order">
        <HeaderComponent></HeaderComponent>
        <div className='main'>
          <SidebarComponent></SidebarComponent>
          <div className='content-section'>
            <div className="survey">
              <div className="middle-box">
                <div className="question-container">
                  <Categories categoryNames={_categories} />
                  <div className="answer-question-container">
                    <Question />
                    
                  </div>
                </div>
                <div className="line"></div>
                 <ResultBoxes resultBoxesNames={this.state.items} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
