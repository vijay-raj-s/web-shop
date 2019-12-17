import React, { Component } from 'react';

class Question extends React.Component {
    static displayName = 'Question';

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
                    console.log(result);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    //To-Do switch question
    switchQuestion(nextQuestion) {
        const {items} = this.state;
        return items[nextQuestion].question;
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="question">
                    <h3>{this.switchQuestion(0)}</h3>
                </div>
            );
        }
    }

}

export default Question;