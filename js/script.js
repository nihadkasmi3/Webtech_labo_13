const baseNumber = 7;
const numberOfIterations = 10;
let output = "";

for(let i = 1; i<= numberOfIterations; i++) {
    if(i > 10) {
        output += `${i * baseNumber},`;
    }
    else {
        output += `${i * baseNumber}`;
    }
}
console.log(output);








