
//taking the number input
let num1 = prompt('Enter first number:');
let num2 = prompt('Enter second number:');
let opr = prompt('Please enter + - * /')

//using the switch statement
switch (opr) {
    case "+":
        var res = parseFloat(num1) + parseFloat(num2);
        //alert the result
        alert(`${num1} + ${num2} = ${res}`);
        break;
    case "-":
        var res = parseFloat(num1) - parseFloat(num2);
          //alert the result
        alert(`${num1} - ${num2} = ${res}`);
        break;
    case "*":
        var res = parseFloat(num1) * parseFloat(num2);
          //alert the result
        alert(`${num1} * ${num2} = ${res}`);
        break;
    case "/":
          //alert the result
        var res = parseFloat(num1) / parseFloat(num2);
        alert(`${num1} / ${num2} = ${res}`);
        break;
}
