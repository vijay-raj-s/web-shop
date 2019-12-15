import React from 'react';
import PropTypes from 'prop-types';
import Answer from './answer';
import './survey.scss';


class Answers extends React.Component {
    static displayName = 'Answers';

    static propTypes = {
        answersContent: PropTypes.array.isRequired
    };

    static defaultProps = {
        answersContent: []
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSelected: false
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        const {
            answersContent
        } = this.props;

        const answersComponents = () => {
            const items = []
            this.props.answersContent.forEach(element => {
                items.push(<Answer answerName={element} />)
            });
            return items;
        }
        return (

            <form>
                <ul className="answerUl">
                    {answersComponents().map(function(item) {
                    return <li className="answerList"><input type="radio" name="answer" value={item} />{item}</li>
                    }
                    )}
                </ul>
            </form>
        );
    }
}

export default Answers;