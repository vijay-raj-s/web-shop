import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss';  
import tick from '../assets/images/tick.svg';
import Button from '@material-ui/core/Button';

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

    addToCart(){

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
                            <div> <img className="result-img" src={this.state.item.item_image} alt='item '></img> </div>
                            {this.state.item.presetMatches ? 
                                <div> 
                                    { this.state.item.presetMatches.time ?  <div className='preset-value'> Time  <img src={tick} alt='preset'/> </div> : null }
                                    { this.state.item.presetMatches.quality ?  <div className='preset-value'> Type <img src={tick} alt='preset'/> </div> : null }
                                    { this.state.item.presetMatches.type ?  <div className='preset-value' > Quality <img src={tick} alt='preset'/> </div> : null }
                                    { this.state.item.presetMatches.origin ?  <div className='preset-value'> Origin <img src={tick} alt='preset'/> </div> : null }
                                    { this.state.item.presetMatches.days ?  <div className='preset-value'> Days <img src={tick} alt='preset'/> </div> : null }    
                                </div>
                            : null}
                            
                        </div>
                        <div>
                             <div className='item-name'> {this.state.item.item_name} </div>
                        </div>
                    </div>  : null 
                }
            </div>
        );
    }
}

export default Resultbox;