import React from 'react';
import PropTypes from 'prop-types';
import PadButton from '../PadButton';
import './NumbersGrid.css';
import operations from '../constants/operations';

const NumbersGrid = ({ onNumberSelect, onOperationSelect }) => {
    const numbersArray = [...Array(9).keys()];

    return (
        <div className="numbers-grid">
            <div className="one-to-nine-grid">
                {numbersArray.map((number) => {
                    const finalNumber = number + 1;
                    return (
                        <PadButton
                            key={`number-button-${finalNumber}`}
                            value={finalNumber.toString()}
                            onPadButtonSelect={onNumberSelect}
                            type="number"
                        />
                    );
                })}
            </div>
            <div className="bottom-grid">
                <PadButton
                    value={'0'}
                    onPadButtonSelect={onNumberSelect}
                    type="number"
                />
                <PadButton
                    value={'.'}
                    onPadButtonSelect={onNumberSelect}
                    type="number"
                />
                <PadButton
                    value={'='}
                    onPadButtonSelect={() =>
                        onOperationSelect(
                            operations.find(
                                (operation) => operation.key === 'equals'
                            )
                        )
                    }
                    type="operation"
                />
            </div>
        </div>
    );
};

NumbersGrid.propTypes = {
    onNumberSelect: PropTypes.func,
    onOperationSelect: PropTypes.func,
};

export default NumbersGrid;
