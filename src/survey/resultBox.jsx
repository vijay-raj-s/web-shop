import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss';  
import _ from 'lodash';


class Resultbox extends React.Component {
    static displayName = 'ResultBox';

    static propTypes = {
        coffeeName: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired
    };
 

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            isSelected: false
        }


        
    }

    componentDidMount() {
        debugger;
        this.setState({
            item : this.props.item
        });

        

    }

    componentWillReceiveProps(nextProps) {

    }


    //-- ####################################
    //-- Render
    //-- ####################################
    render() { 

        return (
            <div>
                {
                this.state.item ?
                    <div className="resultBox">
                    
                        <div className='result-percentage'>{this.state.percentage}%</div>
                        <div className="result-container">
                            <img className="result-img" src={this.state.item.item_image}></img>
                            
                        </div>
                    </div>  : null 
                }
            </div>
        );
    }
}

export default Resultbox;