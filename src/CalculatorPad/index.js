import React from 'react';
import PropTypes from 'prop-types';
import NumbersGrid from '../NumbersGrid';
import OperationsGrid from '../OperationsGrid';

import './CalculatorPad.css';

const CalculatorPad = ({ onNumberSelect, onOperationSelect }) => {
    return (
        <div className="calculator-pad">
            <NumbersGrid
                onNumberSelect={onNumberSelect}
                onOperationSelect={onOperationSelect}
            />
            <OperationsGrid onOperationSelect={onOperationSelect} />
        </div>
    );
};

CalculatorPad.propTypes = {
    onNumberSelect: PropTypes.func,
    onOperationSelect: PropTypes.func,
};

export default CalculatorPad;
