//Hi Batch 10 we will discuss about enums :it is a data type :hold the set of const. values 
var cars;
(function (cars) {
    cars[cars["BMW"] = 0] = "BMW";
    cars[cars["Mrc"] = 1] = "Mrc";
    cars[cars["koniesegg"] = 2] = "koniesegg";
    cars[cars["lexus"] = 3] = "lexus";
})(cars || (cars = {}));
console.log(cars.lexus);
//Printing full ENUM :
console.log(cars);
var cars_engines;
(function (cars_engines) {
    cars_engines["bmw"] = "v2.0";
    cars_engines["merc"] = "v1.9";
    cars_engines["toyota"] = "v1.0";
})(cars_engines || (cars_engines = {}));
console.log(cars_engines.toyota);
//=========================
var cars_dimenon;
(function (cars_dimenon) {
    cars_dimenon[cars_dimenon["bmw"] = 0] = "bmw";
    cars_dimenon[cars_dimenon["merc"] = 1] = "merc";
    cars_dimenon[cars_dimenon["toyota"] = get_dimension(45)] = "toyota";
})(cars_dimenon || (cars_dimenon = {}));
function get_dimension(carmodel) {
    if (carmodel = 45) {
        return 900;
    }
    return -1;
}
console.log(cars_dimenon.toyota);
// enum with string 
var cars_color;
(function (cars_color) {
    cars_color["bmw"] = "blue";
    cars_color["merc"] = "orange";
    cars_color["toyota"] = "pink";
    //toyota = get_color('pink')
})(cars_color || (cars_color = {}));
;
console.log(cars_color.toyota);
//==================
var cars_catgeries;
(function (cars_catgeries) {
    cars_catgeries[cars_catgeries["seats"] = 4] = "seats";
    cars_catgeries["typretype"] = "pirelli";
    cars_catgeries["engineexhaust"] = "ok";
    cars_catgeries[cars_catgeries["doorfixes"] = 9] = "doorfixes";
    cars_catgeries[cars_catgeries["glassbreak"] = 10] = "glassbreak";
})(cars_catgeries || (cars_catgeries = {}));
console.log(cars_catgeries.doorfixes);
console.log(cars_catgeries.glassbreak);
