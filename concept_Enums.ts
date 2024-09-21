//Hi Batch 10 we will discuss about enums :it is a data type :hold the set of const. values 

enum cars {
    'BMW',
    "Mrc",
    "koniesegg",
    "lexus"
}

console.log(cars.lexus);

//Printing full ENUM :

console.log(cars);

enum cars_engines {
    bmw = "v2.0",
    merc = "v1.9",
    toyota = "v1.0"
}
console.log(cars_engines.toyota)


//=========================
enum cars_dimenon {
    bmw,
    merc,
    toyota = get_dimension(45)
}

function get_dimension(carmodel: number): number {

    if (carmodel = 45) {
        return 900;
    }

    return -1;

}

console.log(cars_dimenon.toyota);

// enum with string 
enum cars_color {
    bmw = "blue",
    merc = "orange",
    toyota = 'pink'
    //toyota = get_color('pink')
};

console.log(cars_color.toyota);

//==================
enum cars_catgeries {
    seats = 4,
    typretype = 'pirelli',
    engineexhaust = 'ok',
    doorfixes = 9,
    glassbreak
}
console.log(cars_catgeries.doorfixes);
console.log(cars_catgeries.glassbreak)


enum seats {

    Aisle = 100,
    window,
    middle


}

if (seats.Aisle == 100) { }
else if (seats.middle == 102) { }


const seat_type = seats.Aisle