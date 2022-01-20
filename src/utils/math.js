const add = (a, b) => {
    return parseFloat(a) + parseFloat(b);
};

const substract = (a, b) => {
    return parseFloat(a) - parseFloat(b);
};

const multiply = (a, b) => {
    return parseFloat(a) * parseFloat(b);
};

const divide = (a, b) => {
    return parseFloat(a) / parseFloat(b);
};

const equals = (a) => {
    return parseFloat(isNaN(a) || a === '' ? 0 : a);
};

export { add, substract, multiply, divide, equals };
