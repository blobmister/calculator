let data = {
    screen: document.querySelector('.screen'),
    currentValue: null,
    previousValue: null,
    currentOperation: null,
    newNum: true
} 

let numbers = document.querySelectorAll('.number');
let modifiers = document.querySelectorAll('.modifier');

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i].textContent;

    numbers[i].addEventListener('click', () => numberClick(data, num));
}

for (let i = 0; i < modifiers.length; i++) {
    let mod = modifiers[i].textContent;

    modifiers[i].addEventListener('click', () => modifierClick(data, mod));
}
