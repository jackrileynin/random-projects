const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");
console.log(output);
let operation = [];

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        button.classList.toggle('changedButton');
        operation = output.value.split('');
        if (button.textContent === "C") {
            output.value = '';
            operation = [];
        } else if (button.textContent === "=") {
            const result = calculateResult();
            output.value = result;
            operation = [result]; //what is this?
        } else {
            output.value += button.textContent;
            operation.push(button.textContent);
        }
    });
});

function calculateResult() {
    const matched = operation.join('').match(/(\d+)\s*([+\-*/])\s*(\d+)/);
    if (matched) {
        const [_, num1, operator, num2] = matched;
        return defineOperation(operator, num1, num2);
    }
    return 0;
}

function defineOperation(operator, num1, num2) {
    switch (operator) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '*':
            return parseInt(num1) * parseInt(num2);
        case '/':
            return parseInt(num1) / parseInt(num2);
        default:
            return 0;
    }
}
