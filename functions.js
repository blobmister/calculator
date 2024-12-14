function add(a, b) {
    return String(parseFloat(a) + parseFloat(b));
}

function subtract(a, b) {
    return String(parseFloat(a) - parseFloat(b));
}

function multiply(a, b) {
    return String(parseFloat(a) * parseFloat(b));
}

function divide(a, b) {
    return String(parseFloat(a)/parseFloat(b));
}


function operate(a, b, operation) {
    if (operation == '+') {
        return add(a, b);
    } else if (operation == '-') {
        return subtract(a, b);
    } else if (operation == '/') {
        return divide(a, b);
    } else if (operation == '*') {
        return multiply(a, b);
    }
}

function numberClick(data, numValue) {
    if (data.newNum) {
        if (numValue == '00') {
            numValue = '0';
        }

        if (numValue != '0') {
            data.newNum = false;
        }
        
        data.currentValue = numValue;

    } else  if (data.currentValue.length < 11) {
        if (!(data.currentValue == '0' && (numValue == '0' || numValue == '00'))) {
            data.currentValue = data.currentValue.concat(numValue);
        }
    }

    updateScreen(data);
}

function modifierClick(data, modifier) {
    if (modifier == 'AC') {
        data.currentValue = '';
        data.previousValue = '';
        data.currentOperation = null;
        data.newNum = true;
    } else if (modifier == '+/-') {
        data.currentValue = String(-data.currentValue);
    } else if (modifier == '%') {
        data.currentValue = String(data.currentValue/100);
    }

    updateScreen(data);
}

function operationClick(data, operation) {
    if (operation != '=' && data.operation == null) {
        data.previousValue = data.currentValue;
        data.operation = operation;
        data.newNum = true;
    } else if (operation != '=' && data.operation != null) {
        data.currentValue = String(operate(data.previousValue, data.currentValue, data.operation));
        data. previousValue = data.currentValue;
        data.newNum = true;
    } else if (operation == '=') {
        if (data.previousValue != null) {
            data.currentValue = String(operate(data.previousValue, data.currentValue, data.operation));
            data.newNum = true;
        }
        data.previousValue = null;
        data.operation = null;
    }

    updateScreen(data);
}

function updateScreen(data) {
    let displayNum = data.currentValue;
    if (displayNum.length > 11) {
        displayNum = String(Number(displayNum).toExponential(6))
    }
    data.screen.textContent = displayNum;
}