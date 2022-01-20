import React from 'react';
import PropTypes from 'prop-types';

import './PadButton.css';

const PadButton = ({ value, onPadButtonSelect, type }) => {
    return (
        <button
            onClick={() => onPadButtonSelect(value)}
            className={`pad-button ${type}-button`}
        >
            {value}
        </button>
    );
};

PadButton.propTypes = {
    value: PropTypes.string,
    onPadButtonSelect: PropTypes.func,
    type: PropTypes.oneOf(['number', 'operation']),
};

export default PadButton;
