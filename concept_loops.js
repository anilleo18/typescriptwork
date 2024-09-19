var vechilenumbers = [111, 333, 44, 5555];
for (var _i = 0, vechilenumbers_1 = vechilenumbers; _i < vechilenumbers_1.length; _i++) {
    var eachelement = vechilenumbers_1[_i];
    console.log(eachelement);
}
//for in loop 
console.log("*****************");
for (var key in vechilenumbers) {
    console.log(key + "--------" + vechilenumbers[key]);
}
//of print value in array and in prints key position or index
var city = "Mumbai";
for (var _a = 0, city_1 = city; _a < city_1.length; _a++) {
    var keyvalue = city_1[_a];
    console.log(keyvalue);
}
var num = 20;
while (num < 30) {
    console.log("number is printing", num);
    ++num;
}
var cities = "chennai";
var flag_A = cities.includes('z');
do {
    console.log("one round in do loop ");
} while (10 > 20);
{
    console.log("hey one round");
}
;
