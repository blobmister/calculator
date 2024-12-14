function add(a, b) {
    return a+b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a/b
}


function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation == '+') {
        return String(add(a, b));
    } else if (operation == '-') {
        return String(subtract(a, b));
    } else if (operation == '/') {
        return String(divide(a, b));
    } else if (operation == '*') {
        return String(multiply(a, b));
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
        data.operation = null;
        data.newNum = true;
    } else if (modifier == '+/-') {
        data.currentValue = String(-data.currentValue);
    } else if (modifier == '%') {
        data.currentValue = String(data.currentValue/100);
    } else if (modifier == 'backspace') {
        data.currentValue = data.currentValue.slice(0, -1);
    }

    updateScreen(data);
}

function operationClick(data, operation) {
    debugger;
    if (operation != '=' && data.operation == null) {
        data.previousValue = data.currentValue;
        data.operation = operation;
        data.newNum = true;
    } else if (operation != '=' && data.operation != null) {
        data.currentValue = String(operate(data.previousValue, data.currentValue, data.operation));
        data. previousValue = data.currentValue;
        data.operation = operation;
        data.newNum = true;
    } else if (operation == '=') {
        if (data.previousValue != '') {
            data.currentValue = String(operate(data.previousValue, data.currentValue, data.operation));
            data.newNum = true;
        }
        data.previousValue = '';
        data.operation = null;
    }

    updateScreen(data);
    debugger;
}

function updateScreen(data) {
    let displayNum = data.currentValue;
    if (displayNum.length > 11) {
        displayNum = String(Number(displayNum).toExponential(6))
    }
    data.screen.textContent = displayNum;
}

function keyup(e, data) {
    e.preventDefault();
    if (!isNaN(Number(e.key)) || e.key == '.') {
        numberClick(data, e.key);
    } else if (['=', '+', '-', '/', '*'].includes(e.key)) {
        operationClick(data, e.key);
    } else if (e.key === 'Enter') {
        operationClick(data, '=');
    } else if (e.key === 'Escape') {
        modifierClick(data, 'AC');
    } else if (e.key === 'Backspace') {
        modifierClick(data, 'backspace');
    }
}