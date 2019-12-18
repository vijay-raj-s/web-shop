import React from 'react';
import PropTypes from 'prop-types'; 
import Button from '@material-ui/core/Button';

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

    setQuestionIndex(){

    }

    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        const {
            categoryNames
        } = this.props;

        return (
        <div className="category-container"> 
            {categoryNames.map(name => {
                return (<Button variant="contained" color="primary" onClick={e => this.setQuestionIndex(true)}> 
                            {name}
                        </Button>)
            })}
        </div>
        );
    }
}

export default Categories;