// You dont know any type of variable compiler will take job and assign type 
let Bike: string = "Ts13Eu5005";
let Bike_number: any = 123;
let finalbikenumber = <number>Bike_number;//here i am not allowing ts compiler to fix the job and i am making it a number always 
console.log(finalbikenumber);

let Bike_color: any = "hey color is white";
let colors = (Bike_color as String).length;
console.log(colors)

let flag: boolean = true;
if (flag) {
    console.log("hey its true");

}
else {

    console.log("flag is false");


}

let x: number = 90, y: number = 87, z: number = 999;
//< > <!
((x > y) && (x > z)) ? console.log("print x is greater") :
    ((y > z) && (y > x)) ? console.log("print y is greater") :
        console.log("both are equal");



let browser: string = "explorer";
(browser == "chrome") ? console.log("launch chrome") : (browser == "firefox") ? console.log("launch firefox") : console.log("launch edge");

//***************************Switch cases *******************************/

let vechile: string = "benz";

switch (vechile) {
    case "bmw":
        console.log("wash Bmw");
        break;

    case "benz":
        console.log("wash Benz");
        break;

    case "swift":
        console.log("wash swift");
        break;

    default:
        console.log("car wash no for any");
        break;
}

//













