import React from 'react';
import PropTypes from 'prop-types';
import './NumberInput.css';

const NumberInput = React.forwardRef(({ numberValue, onNumberChange }, ref) => {
    return (
        <input
            ref={ref}
            className="number-input"
            value={numberValue}
            onChange={onNumberChange}
        />
    );
});

NumberInput.propTypes = {
    numberValue: PropTypes.string,
    onNumberChange: PropTypes.func,
};

export default NumberInput;
