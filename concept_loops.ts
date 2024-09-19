let vechilenumbers: number[] = [111, 333, 44, 5555];

for (let eachelement of vechilenumbers) {

    console.log(eachelement);
}

//for in loop 
console.log("*****************")

for (const key in vechilenumbers) {
    console.log(key + "--------" + vechilenumbers[key]);
}

//of print value in array and in prints key position or index

let city: string = "Mumbai";

for (const keyvalue of city) {
    console.log(keyvalue)
}

let num: number = 20;
while (num < 30) {
    console.log("number is printing", num);
    ++num;
}
let cities: string = "chennai";

const flag_A: boolean = cities.includes('z')

do {
    console.log("one round in do loop ")

} while (10 > 20) {
    console.log("hey one round")
};