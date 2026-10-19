"use strict";
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const result = document.getElementById('result');
function calculate(operation) {
    const val1 = num1Input.value;
    const val2 = num2Input.value;
    if (val1 === '' || val2 === '') {
        result.innerText = 'Enter valid numbers in both boxes.';
        result.style.color = 'orange';
        return;
    }
    const n1 = Number(val1);
    const n2 = Number(val2);
    let res = 0;
    switch (operation) {
        case 'add':
            res = n1 + n2;
            break;
        case 'subtract':
            res = n1 - n2;
            break;
        case 'multiply':
            res = n1 * n2;
            break;
        case 'divide':
            if (n2 === 0) {
                result.innerText = 'Cant divide by zero.';
                result.style.color = 'red';
                return;
            }
            res = n1 / n2;
            break;
    }
    result.innerText = `Result: ${res}`;
    result.style.color = 'green';
}
const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
btnAdd.addEventListener('click', () => calculate('add'));
btnSubtract.addEventListener('click', () => calculate('subtract'));
btnMultiply.addEventListener('click', () => calculate('multiply'));
btnDivide.addEventListener('click', () => calculate('divide'));
