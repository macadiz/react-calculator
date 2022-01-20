import React from 'react';
import PropTypes from 'prop-types';
import operations from '../constants/operations';
import PadButton from '../PadButton';

import './OperationsGrid.css';

const OperationsGrid = ({ onOperationSelect }) => {
    return (
        <div className="operations-grid">
            {operations
                .filter((operation) => operation.key !== 'equals')
                .map((operation) => {
                    return (
                        <PadButton
                            key={`operation-button-${operation.label}`}
                            value={operation.label}
                            onPadButtonSelect={() =>
                                onOperationSelect(operation)
                            }
                            type="operation"
                        />
                    );
                })}
        </div>
    );
};

OperationsGrid.propTypes = {
    onOperationSelect: PropTypes.func,
};

export default OperationsGrid;
