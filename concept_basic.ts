console.log("hello Ts Script");

let age: number = 45;
let emp_name: string = "kakmanu";
let isEmployeeoforg: boolean = true;
let salary: number = 90000;
console.log("hey the employee Deatils are :", age, emp_name, isEmployeeoforg, salary);

//I cant define integer other than String Values :
let secondemoname: string;
secondemoname = "puru"
secondemoname = "guru"
let lastname: string = "patnam"
let sole = "largesoul" //Type intefernce will decide as string 
let city: null = null;
let country: undefined = undefined;
let gram: any = 65;

//Void data type will be used for function will not return any value :

//with out declaring return type :
function alpha() {


    console.log("hey is not declared return type fucntion");
}

alpha();

//with declaring void as return type :
function beta(): void {
    console.log("hey this declared fucntion")
}
beta();

// return type is String here :



function gamma(): string {
    console.log("hey we are returning string number ")
    return "alphadata-services"
}


//return type is Number here :
function delta(): number {


    console.log("hey we are returning number")
    return 33;
}

//retruning any value :
function anyormany(): any {
    return "Mt Testsuite ";
}

//Function is returning and calling a number 
function addidtion(a: number, b: number): number {
    return a + b;
}
const addition_func_num = addidtion(90, 900);
console.log(addition_func_num);


function calc(a: number, b: number): number {

    const mycalc = a * b;

    return mycalc;

}

const calc_tech = calc(90, 1000);
console.log(calc_tech)

