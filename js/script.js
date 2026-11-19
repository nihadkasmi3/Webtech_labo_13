let firstNumber = prompt(`Geef getal 1 in`);
firstNumber = parseInt(firstNumber);

let secondNumber = prompt(`Geef getal 2 in`);
secondNumber = parseInt(secondNumber);

let operator = prompt(`Geef de operator in`);

let result;

switch(operator) {
    case "+":
        result = firstNumber + secondNumber;
        console.log(`Resultaat: ${result}`);
        break;

    case "-":
        result = firstNumber - secondNumber;
        console.log(`Resultaat: ${result}`);
        break;

    case "*":
        result = firstNumber * secondNumber;
        console.log(`Resultaat: ${result}`);
        break;

    case "/":
        if(secondNumber === 0) {
            console.log(`Fout: delen door 0 is niet toegestaan.`);
        }
        else {
            result = firstNumber / secondNumber;
            console.log(`Resultaat: ${result}`);
        }
        break;

    default:
        console.log(`Fout: ongeldige operator. Gebruik alleen +, -, * of /.`);
}








