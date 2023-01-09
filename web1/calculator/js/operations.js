var result = 0;
var operating_1 = "";
var operating_2 = "";
var operator = "";

function addDigit(number) {
    if (operator === "") {
        operating_1 += number.innerHTML;
        document.getElementById("display").innerHTML = operating_1;
    }
    else {
        operating_2 += number.innerHTML;
        document.getElementById("display").innerHTML = operating_2;
    }
}

function setFloat() {
    if (operator === "") {
        operating_1 += ".";
        document.getElementById("display").innerHTML = operating_1;
    }
    else {
        operating_2 += ".";
        document.getElementById("display").innerHTML = operating_2;
    }
}

function setOperation(operation) {
    operator = operation.innerHTML;
    operating_1 = Number(operating_1);
    document.getElementById("display").innerHTML = operator;
}

function setResult() {
    operating_2 = Number(operating_2);
    switch (operator) {
        case '+':
            result = operating_1 + operating_2;
            break;
        case '-':
            result = operating_1 - operating_2;
            break;
        case '*':
            result = operating_1 * operating_2;
            break;
        case '/':
            result = operating_1 / operating_2;
            break;
    }
    document.getElementById("display").innerHTML = parseFloat(result.toFixed(6));
    operating_1 = result;
    operating_2 = "";
    operator = "";
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    result = 0;
    operating_1 = "";
    operating_2 = "";
    operator = "";
}