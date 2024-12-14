let data = {
    screen: document.querySelector('.screen'),
    currentValue: '',
    previousValue: '',
    operation: null,
    newNum: true
} 

let numbers = document.querySelectorAll('.number');
let modifiers = document.querySelectorAll('.modifier');
let operations = document.querySelectorAll('.operation');
let buttons = document.querySelectorAll('button');
let calculator = document.querySelector('body');

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i].textContent;

    numbers[i].addEventListener('click', () => numberClick(data, num));
}

for (let i = 0; i < modifiers.length; i++) {
    let mod = modifiers[i].textContent;

    modifiers[i].addEventListener('click', () => modifierClick(data, mod));
}

for (let i = 0; i < operations.length; i++) {
    let op = operations[i].textContent;
    
    operations[i].addEventListener('click', () => operationClick(data, op));
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', (e) => {
        if (e.button == 0) {buttons[i].style.opacity = '0.5';}
    })
    buttons[i].addEventListener('mouseup', (e) => {
        if (e.button == 0)  {buttons[i].style.opacity = '1';}
    })
}

calculator.addEventListener('keypress', (e) => keyup(e, data));
