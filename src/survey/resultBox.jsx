import React from 'react';
import PropTypes from 'prop-types';
import './survey.scss';
import CafeImg from '../assets/images/gorilla_cafe.jpg';
import Button from '@material-ui/core/Button';



class Resultbox extends React.Component {
    static displayName = 'ResultBox';

    static propTypes = {
        coffeeName: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired
    };

    static defaultProps = {
        coffeeName: 'Default Coffee',
        precentage: 0
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
            <div className="resultBox">
                <div className='result-percentage'>{coffeeName}%</div>
                <div className="result-container">
                    <img className="result-img" src={CafeImg}></img>
                    <ul className="result-matches">
                        <li>
                            Test
                        </li>
                        <li>
                            Test2
                        </li>
                        <li>
                            Test3
                        </li>
                        <li>
                            <Button variant="contained" color="secondary">Card</Button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Resultbox;