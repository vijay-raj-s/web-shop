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
                    
                        <div className='result-percentage'>{this.state.item.percentage}%</div>
                        <div className="result-container">
                            <div> <img className="result-img" src={this.state.item.item_image}></img> </div>
                            {this.state.item.presetMatches ? 
                                <div> 
                                    { this.state.item.presetMatches.time ?  <div> Time </div> : null }
                                    { this.state.item.presetMatches.quality ?  <div> Type </div> : null }
                                    { this.state.item.presetMatches.type ?  <div> Quality </div> : null }
                                    { this.state.item.presetMatches.origin ?  <div> Origin </div> : null }
                                    { this.state.item.presetMatches.days ?  <div> Days </div> : null }    
                                </div>
                            : null}
                            
                        </div>
                    </div>  : null 
                }
            </div>
        );
    }
}

export default Resultbox;