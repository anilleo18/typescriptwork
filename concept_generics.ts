let eskim0: string[];
const inuit: number[] = []  // FOR CONST WE NEED TO DECLARE 
const Bushmen: Array<String> = []//this is generinc way of declaring 


function tribe_one(val: any): any {
    return val
}

//using genrics we are decalaring any use this T type to take input and 
//return input rather than using any this is beter code 

function tribe_two<T>(val: T): T {
    return val;
}

//This is how generics are used ,create interface and use that interface type orelse you create your own type 

interface Gym {

    name: string,
    machines_num: number
}


function tribe_three<gym>(gym: Gym): Gym {

    return { name: "skudo", machines_num: 2 };
}


const lake = {
    name: "nigerianlake",
    continent: "Africa"
}
console.log(lake.name)


function indonesia_trbe<T>(name_tribes: Array<T>): T {
    console.log(name_tribes.length)
    return name_tribes[2];


}

//same above in arrow function:
const indoesia_tribals = <T>(tribals_names: Array<T>): T => {
    console.log(tribals_names.length)
    return tribals_names[2];
}

