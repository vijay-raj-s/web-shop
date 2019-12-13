import React from 'react';
import PropTypes from 'prop-types';
import ResultBox from './resultBox';

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

    componentDidMount() {
       
    }

    componentWillReceiveProps(nextProps) {
       
    }


    //-- ####################################
    //-- Render
    //-- ####################################
    render() {
        const {
            resultBoxesNames
        } = this.props;

        const resultboxComponents = ()=>{
            const items = []
            this.props.resultBoxesNames.forEach(element => {
                items.push(<ResultBox coffeeName={element} />)
            });
            return items;
        }
        return (
        <div> {resultboxComponents()}</div>
        );
    }
}

export default ResultBoxes;