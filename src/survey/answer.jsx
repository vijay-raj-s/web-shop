import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss';


class Answer extends React.Component {
    static displayName = 'Answer';

    static propTypes = {
        answerName: PropTypes.string.isRequired
    };

    static defaultProps = {
        answerName: 'Default Answer'
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/survey")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentWillReceiveProps(nextProps) {

    }

    //TO-DO pass the answers so the answer.jsx can use them
    showAnswers(){
        const {
            items
        } = this.state;
        for(var i = 0; i < items[3].answers.length; i++ ){

        }
        return <div className="answer"> </div>
    }

    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        const {
            error,
            isLoaded,
            items
        } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>{this.showAnswers()}</div>
            );
        }
    }
}


export default Answer;