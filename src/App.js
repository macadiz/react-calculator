import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CalculatorPad from './CalculatorPad';
import NumberInput from './NumberInput';

function App() {
    const numberInputRef = useRef(null);

    const [operationsStack, setOperationsStack] = useState([]);
    const [nextOperation, setNextOperation] = useState(null);
    const [inputNumber, setInputNumber] = useState('');

    const onNumberChange = ({ target: { value } }) => {
        const onlyNumericCharacters = new RegExp(/^[.0-9]*$/g);
        (!isNaN(parseFloat(value)) || value === '') &&
            onlyNumericCharacters.test(value) &&
            onSetInputNumber(value === '' ? '0' : value);
    };

    const appendNumber = (value) => {
        const newValue = inputNumber + value.toString();
        onSetInputNumber(newValue);
    };

    const focusNumberInput = () => {
        numberInputRef &&
            numberInputRef.current &&
            numberInputRef.current.focus();
    };

    const onSetInputNumber = (value) => {
        if (parseFloat(value) <= Number.MAX_SAFE_INTEGER) {
            const numberWOInitialZeroes = value.replaceAll(/^0+/g, '');
            setInputNumber(
                numberWOInitialZeroes === '' ? 0 : numberWOInitialZeroes
            );
        }

        focusNumberInput();
    };

    const onOperationSelect = (operationToMake) => {
        focusNumberInput();
        const currentOperationStack = [...operationsStack];

        const lastOperationElement =
            currentOperationStack[currentOperationStack.length - 1];

        setNextOperation(operationToMake);

        if (
            !lastOperationElement ||
            lastOperationElement.operation.key === 'equals'
        ) {
            createNewOperation(inputNumber, operationToMake);
        } else {
            if (lastOperationElement.inputs.length === 1) {
                lastOperationElement.inputs.push(inputNumber);
            }
            setOperationsStack(currentOperationStack);
        }
    };

    const createNewOperation = (firstInput, operationToMake) => {
        const currentOperationStack = [...operationsStack];

        currentOperationStack.push({
            inputs: [firstInput],
            operation: operationToMake,
        });

        setOperationsStack(currentOperationStack);

        setInputNumber(0);
    };

    useEffect(() => {
        focusNumberInput();
    }, [numberInputRef]);

    useEffect(() => {
        const currentOperationsStack = [...operationsStack];

        if (operationsStack.length > 0) {
            const lastOperationElement =
                currentOperationsStack[currentOperationsStack.length - 1];

            if (
                lastOperationElement.inputs.length > 1 ||
                lastOperationElement.operation.key === 'equals'
            ) {
                const firstInput = lastOperationElement.inputs[0];
                const secondInput = lastOperationElement.inputs[1];
                lastOperationElement.output =
                    lastOperationElement.operation.operationFunction(
                        firstInput,
                        secondInput
                    );
                if (lastOperationElement.operation.key === 'equals') {
                    setInputNumber(lastOperationElement.output);
                } else {
                    createNewOperation(
                        lastOperationElement.output,
                        nextOperation
                    );
                }
            }
        }
    }, [operationsStack]);

    useEffect(() => {
        document.body.addEventListener('click', focusNumberInput);
        return () => {
            document.body.removeEventListener('click', focusNumberInput);
        };
    }, []);

    return (
        <div className="App">
            <div className="calculator-container">
                <NumberInput
                    ref={numberInputRef}
                    numberValue={inputNumber.toString()}
                    onNumberChange={onNumberChange}
                />
                <CalculatorPad
                    onNumberSelect={appendNumber}
                    onOperationSelect={onOperationSelect}
                />
            </div>
        </div>
    );
}

export default App;
