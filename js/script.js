let firstNumber = prompt(`Geef getal 1 in`);
firstNumber = parseInt(firstNumber);

let secondNumber = prompt(`Geef getal 2 in`);
secondNumber = parseInt(secondNumber);

let operator = prompt(`Geef de operetor in`);

let result;

if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
    console.log(`Fout: ongeldige operator. Gebruik alleen +, -, * of /.`);
}
else {
      if(operator === "/" && secondNumber === 0) {
        console.log(`Fout: delen door 0 is niet toegestaan.`);
    }
    if(operator === "+") {
        result = firstNumber + secondNumber;
    }
    else if(operator === "-") {
        result = firstNumber - secondNumber;
    }
    else if(operator === "*") {
        result = firstNumber * secondNumber;
    }
    else if(operator === "/") {
        result = firstNumber / secondNumber;
    }
    console.log(`Resultaat: ${result}`);
}







