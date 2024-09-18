//===========================Arrays in TS===========================
let name_arr: string[] = ['anil', 'sunil', 'tom', 'john']
console.log(name_arr[2]);

for (let index = 0; index < name_arr.length; index++) {
    const element = name_arr[index];
    console.log(element)

}

console.log("***********************************************")


let employee_names: Array<string> = ['guptha', 'kirloskar', 'anil', 'sunil', 'tom', 'john'];
employee_names.forEach(element => {
    console.log(element)

});

let employe_salary: Array<number> = [9000, 734837, 873944, 243838, 5323969]

//Here we can write we can decalre as number or string or boolean elements inside array 

let employee_hobbies: Array<string | number | boolean> = [900, 66, 77, 'ggg', true];

let employee_favitems: Array<any> = [900, 66, 77, 'ggg', true];


console.log("***********************************************")

// First declaration later implemention 

let emp_cars: String[];
emp_cars = ['bmw', 'Benz', 'swift']

//Push method we can dynamically add elements to array 
emp_cars.push("alpharomeo");

for (let i = 0; i < emp_cars.length; i++) {
    console.log("hey cars are  :" + emp_cars[i]);

}

console.log("***********************************************")

for (let e in emp_cars) {

    console.log('hey all cars of our employees are printing from for each loop' + e + '====' + emp_cars[e])
}

console.log("***********************************************")

//Tuple : Fixed size and it maintains the order:here in tuple if you are declaring element size and order same should be maintained 

let user_Data: [number, string, boolean] = [90, 'anil', true];

//2 dimesionnal
let user_data_2d: [number, string][] = [[10, 'anil'], [20, 'sunil']];
console.log(user_data_2d[0][1])
user_data_2d.push([30, 'jitha']);
console.log(user_data_2d[2][1])


