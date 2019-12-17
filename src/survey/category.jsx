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

    //TO-DO finish this function
    markComplete(complete) {
        var ele = document.getElementsByClassName("category");
        if(complete == 1) {
        }
        if(complete == 2) {

        }
        else {

        }
    }

    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        const {
            categoryName
        } = this.props;

        return (
            <button className='category'>
              {categoryName}
            </button>
        );
    }
}

export default Category;