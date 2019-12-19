import React from 'react';
import './survey.scss'; 
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Checkbox from '@material-ui/core/Checkbox';


class Answer extends React.Component {
    static displayName = 'Answer';
 

    constructor(props, context) {
        super(props, context);

        this.state = {
            error: null,
            isLoaded: false,
            itemsChecked: [],
            answers: []
        };
    }

    componentDidMount() { 
        debugger;
        this.setState({
            answers: this.props.answersContent
        });
    }

 

    componentDidUpdate(prevProps) {
        if (prevProps.answersContent !== this.props.answersContent) {
            this.setState({
                answers: this.props.answersContent
            });
        }
    }


    handleChange(answer, index){
        let answers = this.state.answers;
        answers[index].isChecked = !answers[index].isChecked; 
        this.props.setNewState(answers, this.props.questionIndex)
    }

    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        return (
           
           <div className='answer-list'>
            {
                this.state.answers ? this.state.answers.map((element, index ) => {
                    return (
                        <div className='answer-item'>
                            <FormGroup> 
                                <FormControlLabel
                                control={<Checkbox checked={element.isChecked} onChange={e => this.handleChange(element, index)} value={element.answer} />}
                                label={element.answer}
                                 />
                            </FormGroup>
                        </div>
                      ) 
                })  : null 
            } 
            </div>
        )
        
        
                
    }
}


export default Answer;