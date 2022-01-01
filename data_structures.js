let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
console.log(typeof listOfNumbers);
console.log(listOfNumbers[2 - 2]);
console.log(listOfNumbers.length);


let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel)
console.log(day1.events)

day1.wolf = false;

console.log(day1)

delete day1.wolf;

console.log(day1)

console.log("events" in day1)

console.log(day1)

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++) {
//         let entry = journal[i], index = 0;
//         if (entry.events.includes(event)) index += 1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }
// console.log(tableFor("pizza", JOURNAL));

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2, 11));

const ben = {name: "Ben", age: 29}
let {name, age} = ben
console.log(name);

data = JSON.stringify(day1)
console.log(data)
JSON.stringify(JSON.parse(data))