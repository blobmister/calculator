function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function percent(a) {
    return a/100;
}

function switchPolarity(a) {
    return -a;
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
    }

    updateScreen(data);
}

function updateScreen(data) {
    let displayNum = data.currentValue;
    if (displayNum> 11) {
        displayNum = String(Number(displayNum).toExponential(6))
    }
    data.screen.textContent = data.currentValue;
}