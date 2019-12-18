import React, { Component } from 'react';
import Answer from './answer';
import Button from '@material-ui/core/Button';
import RightArrow from '../assets/images/rightArrow.svg';
import LeftArrow from '../assets/images/leftArrow.svg';

class Question extends Component {
    static displayName = 'Question';

    constructor(props, context) {
        super(props, context);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            questionIndex : 0
        };
    }

    componentDidMount() {
        this.fetchSurvey();
    }

    async fetchSurvey(){
        try{
            let url = "http://localhost:3001/survey";
            let response = await fetch(url);
            let data = await response.json();
            data.map(question => {
               question.answers.map(answer =>{
                   answer.isChecked = false
               })
            });
            this.setState({
                isLoaded: true,
                items: data
            });
            
        }catch(error){
            this.setState({
                isLoaded: false 
            });
        } 
    }
 


    nextQuestion(){
        let questionIndex = this.state.questionIndex;
        if( questionIndex < this.state.items.length ){ 
            questionIndex += 1;
            this.setState({
                questionIndex : questionIndex
            })
        }; 
        
    }

    previousQuestion(){
        let questionIndex = this.state.questionIndex;
        if( questionIndex > 0 ){ 
            questionIndex -= 1;
            this.setState({
                questionIndex : questionIndex
            })
        }; 
    }

    setNewState(answersList, index){
        let items = this.state.items;
        items[index].answers = answersList;
        this.setState({
            items: items
        },() => {
            this.props.setSurveyState(items);
        })
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="question">
                    <h3>{this.state.items[this.state.questionIndex].question}</h3>
                    { this.state.questionIndex  > 0 ? <div className='previous arrow'> <Button variant="contained" color="primary" onClick={e => this.previousQuestion()}><img className="button-width" src={LeftArrow} alt="leftArrow"/> </Button></div> : null }
                    <div className='answer-container'><Answer answersContent={this.state.items[this.state.questionIndex].answers} questionIndex={this.state.questionIndex} setNewState={this.setNewState.bind(this)}/> </div>
                    { this.state.questionIndex  < (this.state.items.length - 1)? <div className='next arrow'> <Button variant="contained" color="primary" onClick={e => this.nextQuestion()}><img className="button-width" src={RightArrow} alt="rightArrow"/> </Button></div>  : null }
                </div>
            );
        }
    }

}

export default Question;