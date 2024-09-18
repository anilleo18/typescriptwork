//===========================Arrays in TS===========================
var name_arr = ['anil', 'sunil', 'tom', 'john'];
console.log(name_arr[2]);
for (var index = 0; index < name_arr.length; index++) {
    var element = name_arr[index];
    console.log(element);
}
console.log("***********************************************");
var employee_names = ['guptha', 'kirloskar', 'anil', 'sunil', 'tom', 'john'];
employee_names.forEach(function (element) {
    console.log(element);
});
var employe_salary = [9000, 734837, 873944, 243838, 5323969];
//Here we can write we can decalre as number or string or boolean elements inside array 
var employee_hobbies = [900, 66, 77, 'ggg', true];
var employee_favitems = [900, 66, 77, 'ggg', true];
console.log("***********************************************");
// First declaration later implemention 
var emp_cars;
emp_cars = ['bmw', 'Benz', 'swift'];
//Push method we can dynamically add elements to array 
emp_cars.push("alpharomeo");
for (var i = 0; i < emp_cars.length; i++) {
    console.log("hey cars are  :" + emp_cars[i]);
}
console.log("***********************************************");
for (var e in emp_cars) {
    console.log('hey all cars of our employees are printing from for each loop' + e + '====' + emp_cars[e]);
}
console.log("***********************************************");
//Tuple : Fixed size and it maintains the order:here in tuple if you are declaring element size and order same should be maintained 
var user_Data = [90, 'anil', true];
//2 dimesionnal
var user_data_2d = [[10, 'anil'], [20, 'sunil']];
console.log(user_data_2d[0][1]);
user_data_2d.push([30, 'jitha']);
console.log(user_data_2d[2][1]);
