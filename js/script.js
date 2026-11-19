let year = prompt (`Wat is het jaartal?`)
year = parseInt(year)

if(year % 4 === 0) {
    console.log(`${year} is een schrikkeljaar!`);
}
else if(year % 100 === 0) {
    console.log(`${year} is een schrikkeljaar!`);
}
else if(year % 400 === 0) {
    console.log(`${year} is een schrikkeljaar!`);
}
else {
    console.log(`${year} is geen schrikkeljaar!`);
}







