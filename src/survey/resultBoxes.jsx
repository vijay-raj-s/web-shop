import React from 'react';
import PropTypes from 'prop-types';
import ResultBox from './resultBox';
import Button from '@material-ui/core/Button'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class ResultBoxes extends React.Component {
    static displayName = 'ResultBoxes';

    static propTypes = {
        resultBoxesNames: PropTypes.array.isRequired
    };

    static defaultProps = {
        resultBoxesNames: []
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSelected: false
        }
    }

    scrollSlider(isLeft) {
        var ele = document.getElementById("resultContainer");
        if (isLeft) {
            ele.scrollLeft -= 280;
        } else {
            ele.scrollLeft += 280;
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

        const resultboxComponents = () => {
            const items = []
            this.props.resultBoxesNames.map(element => {
               return items.push(<ResultBox item={element} />)
            });
            return items;
        }
        return (
            <div className="resultSlider" >
                <div className="result-slider-arrow" >
                    <Button aria-label="Go to previous question" variant="contained" color="secondary" onClick={e => this.scrollSlider(true)} startIcon={<ChevronLeftIcon />}>   </Button>
                </div>
                <div className="resultContainer" id="resultContainer"> {resultboxComponents()}</div>
                <div className="result-slider-arrow" >
                    <Button aria-label="Go to Next question" variant="contained" startIcon={<ChevronRightIcon fontSize='large'/>} color="secondary" onClick={e => this.scrollSlider(false)}> </Button>
                </div>
            </div>
            
                );
            }
        }
        
export default ResultBoxes;