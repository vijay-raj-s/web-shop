import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';

class Categories extends React.Component {
    static displayName = 'Categories';

    static propTypes = {
        categoryNames: PropTypes.array.isRequired
    };

    static defaultProps = {
        categoryNames: []
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
            categoryNames
        } = this.props;

        const categoryComponents = ()=>{
            const items = []
            this.props.categoryNames.forEach(element => {
                items.push(<Category categoryName={element} />)
            });
            return items;
        }
        return (
        <div> {categoryComponents()}</div>
        );
    }
}

export default Categories;