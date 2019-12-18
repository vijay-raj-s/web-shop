import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss'; 
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash'; 


class Answer extends React.Component {
    static displayName = 'Answer';

    static propTypes = {
        answerName: PropTypes.string.isRequired
    }; 

    constructor(props, context) {
        super(props, context);

        this.state = {
            error: null,
            isLoaded: false,
            itemsChecked: [],
        };
    }

    componentDidMount() {
        debugger;
        
        this.props.answersContent.map(element => {
            element.isChecked = false
        });

        
    }

    componentWillReceiveProps(nextProps) { 
    }


    handleChange(answer, index){
        let items = this.state.itemsChecked;
        this.props.answersContent[index].isChecked = !this.props.answersContent[index].isChecked; 
        if(!answer.isChecked){
            items.push(answer);
        }else{
            let index = _.indexOf(items);
            items.splice(index, 1);
        }
        debugger;
        this.setState({
            itemsChecked: items
        })

    }

    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        return (
           
           <div className='answer-list'>
            {
                this.props.answersContent ? this.props.answersContent.map((element, index ) => {
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