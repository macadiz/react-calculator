import { add, divide, equals, multiply, substract } from '../utils/math';

const operations = [
    {
        key: 'add',
        label: '+',
        operationFunction: add,
    },
    {
        key: 'substract',
        label: '-',
        operationFunction: substract,
    },
    {
        key: 'multiply',
        label: 'x',
        operationFunction: multiply,
    },
    {
        key: 'divide',
        label: '/',
        operationFunction: divide,
    },
    {
        key: 'equals',
        label: '=',
        operationFunction: equals,
    },
];

export default operations;
