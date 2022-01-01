const square = function(x) {
    return (x * x);
}

console.log(square(12))

const power = (base, exponent=2) => {
    return (base ** exponent)
}

console.log(power(2, 10));


let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    }

// y is not visible here
console.log(x + z);


function squares(x) {
    return x * x;
}

console.log(squares(50, true))

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

const square1 = (x) => x ** x;
console.log(square1(10))

const horn = () => {
    console.log("Toot");
};

console.log(horn());

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");

console.log(power(10))

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));


function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
    cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(70, 11);

function zeroPad(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
    numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    zeroPad(cows, "Cows");
    zeroPad(chickens, "Chickens");
    zeroPad(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);