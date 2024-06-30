function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    // Replace '%' with '%' (already handled correctly in JavaScript for modulo)
    expression = expression.replace('%', '%');

    // Replace '^' with '**' for exponentiation (using JavaScript's Math.pow function)
    //expression = expression.replace(/\^/g, '**');

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
