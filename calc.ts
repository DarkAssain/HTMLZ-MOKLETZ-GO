"use strict";

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const result = document.getElementById('result') as HTMLHeadingElement;

function calculate(operation: string): void {
    const val1: string = num1Input.value;
    const val2: string = num2Input.value;

    if (val1 === '' || val2 === '') {
        result.innerText = 'Enter valid numbers in both boxes.';
        result.style.color = 'orange';
        return;
    }

    const n1: number = Number(val1);
    const n2: number = Number(val2);
    let res: number = 0;

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

const btnAdd = document.getElementById('btnAdd') as HTMLButtonElement;
const btnSubtract = document.getElementById('btnSubtract') as HTMLButtonElement;
const btnMultiply = document.getElementById('btnMultiply') as HTMLButtonElement;
const btnDivide = document.getElementById('btnDivide') as HTMLButtonElement;

btnAdd.addEventListener('click', () => calculate('add'));
btnSubtract.addEventListener('click', () => calculate('subtract'));
btnMultiply.addEventListener('click', () => calculate('multiply'));
btnDivide.addEventListener('click', () => calculate('divide'));