var Icecreams = /** @class */ (function () {
    //if i deaclared constructor as private it can be called outside we get issue @line 27 
    function Icecreams(name_ice, city) {
        this.foriegn_icecreams = "HB";
        this.price = "Always 10 $";
        //Private is key word which doesnt allow use to access out side the class 
        this.owner_name = "Jackson";
        this.name_ice = name_ice;
        this.city = city;
    }
    Icecreams.prototype.flours = function (flavour) {
        console.log("name of icecream " + this.name_ice + "falour is :" + flavour);
        return "name of icecream " + this.name_ice + "falour is :" + flavour;
    };
    return Icecreams;
}());
var icepack = new Icecreams("Ben$jerry's", "Newyork");
var newflav = icepack.flours("cookiedough");
console.log(newflav);
console.log(icepack.foriegn_icecreams);
console.log(icepack.price);
//icepack.price=99; cant do this due to Read only property 
