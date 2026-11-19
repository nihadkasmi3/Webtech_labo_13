const secretNumber = "15";
let input;

do {
   parseInt(prompt(`Raad het getal tussen 0 en 30:`));
   if(isNaN(input)) {
      console.log(`Geen geldige invoer`);
}
   if(input === secretNumber) {
      console.log(`Gefeliciteerd, je hebt het goed geraden!`);
   }
   else if (input < secretNumber) {
    console.log(`${input} is te laag, probeer hoger`);
   }
   else if(input > secretNumber){
    console.log(`${input} is te hoog, probeer lager`);
   }
}
while(input !== secretNumber);









