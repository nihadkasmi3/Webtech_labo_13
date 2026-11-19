let answer = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt(`Raad het getal tussen 1 en 10:`));

if(guess === answer) {
    console.log(`Gefeliciteerd, je hebt het juiste getal geraden!`);
}
else {
    console.log(`Helaas, het juiste getal was ${answer}.`);
}








