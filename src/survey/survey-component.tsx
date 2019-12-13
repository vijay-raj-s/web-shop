import React, { Component } from 'react';
import './survey.scss';
import SidebarComponent from '../layouts/sidebar/sidebar-component';
import HeaderComponent from '../layouts/header/header-component';
import Categories from './categories';
import Answers from './answers';
import Question from './question';

//Just for testing
const _categories = ["Time", "Sustainablity", "Origin", "Test", "Price"]
const _answers = ["Espresso", "Latte Macchiato", "Cafe", "Cappuchino", "Black Coffee", "Double Espresso"]
const _question = ["What is your favorite type of coffee?"]

export default class SurveyComponent extends Component {
  render() {
    return (
      <div className="order">
        <HeaderComponent></HeaderComponent>
        <div className='main'>
          <SidebarComponent></SidebarComponent>
          <div className='content-section'>
            <div className="survey">
              <div className="middle-box">
                <Question questionContent={_question} />
                <Answers answersContent={_answers} />
                <Categories categoryNames={_categories} />
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
