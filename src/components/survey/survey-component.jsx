import React, { Component } from 'react';
import './survey.scss';
import SidebarComponent from '../layouts/sidebar/sidebar-component';
import HeaderComponent from '../layouts/header/header-component';
import Categories from './categories';

import Question from './question';
import ResultBoxes from './resultBoxes';
import _ from 'lodash'; 
//Just for testing this should be added by the JSON folder
const _categories = ["Type", "Time", "Origin", "Sustainablity", "Days"]

export default class SurveyComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      questionsList : []
    }

    this.fetchItems();
  }

  async fetchItems(){

    try { 
      const url = 'http://localhost:3001/items';
      const response = await fetch(url);
      const data = await response.json();
      data.map(e => {
        return e.percentage = 0; 
      })
      this.setState({ items: data});
    } catch (error) {
      console.log(error);
    }
 
  }

  setSurveyState(questionsList){
    
    let presets = {
      "type" : [],
      "time" : [],
      "origin": [],
      "quality" : [],
      "days" : []
    };

    questionsList.map(question => {
      
      question.answers.map(answer => {
        if(answer.isChecked){
          presets[question.question_type].push(answer.answer);
        }
        return null;
      })

      return null;
    })

    let items = this.state.items;
    
    items.map(item => {
      let match = 0;
      item.presetMatches = {}

      if( presets.type.includes(item.type) ){
        match += 1;
        item.presetMatches.type = true;
      }
      if( presets.time.includes(item.time) ){
        match += 1;
        item.presetMatches.time = true;
      }
      if( presets.quality.includes(item.quality) ){
        match += 1;
        item.presetMatches.quality = true;
      }
      if( presets.days.includes(item.days) ){
        match += 1;
        item.presetMatches.days = true;
      }
      if( presets.origin.includes(item.origin) ){
        match += 1;
        item.presetMatches.origin = true;
      }

      item.percentage = ((match/5) * 100);
      return null;
    })
    console.log(items);
    items = _.orderBy(items, ['percentage'], ['desc']);
    console.log(items);
    this.setState({
      items: items
    })
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
                    <Question setSurveyState={this.setSurveyState.bind(this)}/>
                    
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
