import React from 'react';
import PropTypes from 'prop-types';
import ResultBox from './resultBox';
import Button from '@material-ui/core/Button';
import RightArrow from '../assets/images/rightArrow.svg';
import LeftArrow from '../assets/images/leftArrow.svg';

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
            this.props.resultBoxesNames.forEach(element => {
                items.push(<ResultBox item={element} />)
            });
            return items;
        }
        return (
            <div className="resultSlider" >
                <div className="arrow" >
                    <Button variant="contained" color="secondary" onClick={e => this.scrollSlider(true)}> <img className="button-width" src={LeftArrow} alt="leftArrow"/>  </Button>
                </div>
                <div className="resultContainer" id="resultContainer"> {resultboxComponents()}</div>
                    <div className="arrow" >
                        <Button variant="contained" color="secondary" onClick={e => this.scrollSlider(false)}><img className="button-width" src={RightArrow} alt="rightArrow"/> </Button>
                    </div>
                </div>
            
                );
            }
        }
        
export default ResultBoxes;