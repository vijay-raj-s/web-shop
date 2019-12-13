import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
    static displayName = 'Category';

    static propTypes = {
        categoryName: PropTypes.string.isRequired
    };

    static defaultProps = {
        categoryName: 'Default'
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
            categoryName
        } = this.props;

        return (
          <div className='category'>{categoryName}</div>
        );
    }
}

export default Category;