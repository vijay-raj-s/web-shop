import React from 'react';
import PropTypes from 'prop-types';

class Resultbox extends React.Component {
    static displayName = 'ResultBox';

    static propTypes = {
        coffeeName: PropTypes.string.isRequired
    };

    static defaultProps = {
        coffeeName: 'Default Coffee'
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
          <div className='resultBox'>{coffeeName}</div>
        );
    }
}

export default Resultbox;