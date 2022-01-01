// let theNumber = Number(prompt("Pick a number"));

// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " +
//     theNumber * theNumber);
// }
// else {
//     console.log("Hey. Why didn't you give me a number?");
//     }


let result = 1;
let counter = 0;
while (counter <= 10) {
    result *= 2;
    counter ++;
}
console.log(result);    

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);

console.log(yourName);