let firstName = prompt(`Wat is je voornaam?`);
let lastName = prompt(`Wat is je Achternaam?`);
if (!firstName || !lastName) {
    console.log(`Vul zowel voornaam als achternaam in!`);
}

let age = prompt(`Wat is je leeftijd?`);
age = parseInt(age);

if( age > 12 && age <= 30) {
console.log(`Welkom ${firstName} ${lastName}, je bent ${age} jaar oud.`);
}
else {
    console.log(`U behoort niet tot de gezochte leeftijdsklasse!`);
}







