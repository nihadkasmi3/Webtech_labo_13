const limit = 10;
let oddCount = 0;

for(let i = 1; i <= limit; i++) {
    const isEven = i % 2 === 0;
    const label = isEven ? "even" : "oneven";

    console.log(`${i} is ${label}`);

    if (!isEven) {
        oddCount++;
    }
}
const sentence = oddCount === 1 ? "Er is" : "Er zijn";
console.log(`${sentence} ${oddCount} oneven getal${oddCount === 1 ? "" : "len"}.`);












