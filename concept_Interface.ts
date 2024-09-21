interface bus {

    name: string
    type_bus: string
    bus_reg?: string
    gettypresize(): string,
    getsleeptype(sleeperseats: number): string


}


//tommorow i want to insert one more elemet into git hub how can i do ?i can open old interface and add this 

interface bus {
    drivername: string
}

// const vechile: bus = {
//     name: "volvo", type_bus: "sleeper", drivername: "seenu", gettypresize: () => { return "" },
//     getsleeptype: (seat_number: 43) => {
//         return " "
//     }
// }

interface busstand extends bus {

    city: string


}

const busstand_in_mycity: busstand = {
    name: "volvo", type_bus: "sleeper", drivername: "seenu", gettypresize: () => { return "" },
    getsleeptype: (seat_number: 43) => {
        return " "
    },
    city: "Hyderabad"
}

//===============================================




