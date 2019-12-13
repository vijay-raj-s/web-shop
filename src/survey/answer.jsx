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
            answerName
        } = this.props;

        return (
          <div className='answer'>{answerName}</div>
        );
    }
}

export default Answer;