class Icecreams {

    //Almost all varaible are public if we are not declaring anything 

    public name_ice: string

    public city: string;

    foriegn_icecreams: string = "HB"

    readonly price: string = "Always 10 $"


    //Private is key word which doesnt allow use to access out side the class 
    private owner_name: string = "Jackson"

    //if i deaclared constructor as private it can be called outside we get issue @line 27 
    constructor(name_ice: string, city: string) {

        this.name_ice = name_ice;

        this.city = city;
    }

    flours(flavour: string): string {

        console.log("name of icecream " + this.name_ice + "falour is :" + flavour);
        return "name of icecream " + this.name_ice + "falour is :" + flavour;

    }

}

const icepack = new Icecreams("Ben$jerry's", "Newyork");
const newflav = icepack.flours("cookiedough");
console.log(newflav);

console.log(icepack.foriegn_icecreams);
console.log(icepack.price);

//icepack.price=99; cant do this due to Read only property 











