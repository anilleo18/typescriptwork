console.log("hello Ts Script");
var age = 45;
var emp_name = "kakmanu";
var isEmployeeoforg = true;
var salary = 90000;
console.log("hey the employee Deatils are :", age, emp_name, isEmployeeoforg, salary);
//I cant define integer other than String Values :
var secondemoname;
secondemoname = "puru";
secondemoname = "guru";
var lastname = "patnam";
var sole = "largesoul"; //Type intefernce will decide as string 
var city = null;
var country = undefined;
var gram = 65;
//Void data type will be used for function will not return any value :
//with out declaring return type :
function alpha() {
    console.log("hey is not declared return type fucntion");
}
alpha();
//with declaring void as return type :
function beta() {
    console.log("hey this declared fucntion");
}
beta();
// return type is String here :
function gamma() {
    console.log("hey we are returning string number ");
    return "alphadata-services";
}
//return type is Number here :
function delta() {
    console.log("hey we are returning number");
    return 33;
}
//retruning any value :
function anyormany() {
    return "Mt Testsuite ";
}
//Function is returning and calling a number 
function addidtion(a, b) {
    return a + b;
}
var addition_func_num = addidtion(90, 900);
console.log(addition_func_num);
function calc(a, b) {
    var mycalc = a * b;
    return mycalc;
}
var calc_tech = calc(90, 1000);
console.log(calc_tech);


