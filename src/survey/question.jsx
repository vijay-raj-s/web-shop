import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
    static displayName = 'Question';

    static propTypes = {
        questionContent: PropTypes.string.isRequired
    };

    static defaultProps = {
        questionContent: 'Can you answer this default question?'
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
    render() {
        const {
            questionContent
        } = this.props;

        return (
          <div className='question'>{questionContent}</div>
        );
    }
}

export default Question;