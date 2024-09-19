// You dont know any type of variable compiler will take job and assign type 
var Bike = "Ts13Eu5005";
var Bike_number = 123;
var finalbikenumber = Bike_number; //here i am not allowing ts compiler to fix the job and i am making it a number always 
console.log(finalbikenumber);
var Bike_color = "hey color is white";
var colors = Bike_color.length;
console.log(colors);
var flag = true;
if (flag) {
    console.log("hey its true");
}
else {
    console.log("flag is false");
}
var x = 90, y = 87, z = 999;
//< > <!
((x > y) && (x > z)) ? console.log("print x is greater") :
    ((y > z) && (y > x)) ? console.log("print y is greater") :
        console.log("both are equal");
var browser = "explorer";
(browser == "chrome") ? console.log("launch chrome") : (browser == "firefox") ? console.log("launch firefox") : console.log("launch edge");
//***************************Switch cases *******************************/
var vechile = "benz";
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
