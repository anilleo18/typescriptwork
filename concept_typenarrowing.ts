function detectmyvalue(value_given: number | string) {

    if (typeof value_given === "string") {
        return value_given.toLowerCase();
    }
    return value_given + 99;
}


// Interfaces with type narrowing 

interface tea {
    name: string
    color: string


}

interface cofee {
    name: string
    color: string
    isdecotioned: boolean
}

function isitrealdrink(drink_we_got: tea | cofee) {

    // if i write : drink_we_got.isdecotioned  it will give me error but its in coffe so i am norrowing 

    if ("isdecotioned" in drink_we_got) {

        return drink_we_got;
    }

    return null


}

const value_we_got_from_isitrealdrink = isitrealdrink({ name: "chkragold", color: "purecofee", isdecotioned: true })

console.log(typeof value_we_got_from_isitrealdrink);
console.log(value_we_got_from_isitrealdrink?.isdecotioned);
//? if it sending null if it not passed if conditioned we get null so "?" will be helpfull


