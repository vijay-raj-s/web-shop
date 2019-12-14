import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss';

class Resultbox extends React.Component {
    static displayName = 'ResultBox';

    static propTypes = {
        coffeeName: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired
    };

    static defaultProps = {
        coffeeName: 'Default Coffee',
        precentage: 0
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
            coffeeName
        } = this.props;

        
        return (
          <div className='resultBox'>{coffeeName}%
          </div>
        );
    }
}

export default Resultbox;