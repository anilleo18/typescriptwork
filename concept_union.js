var arg_1 = 90;
var arg_2;
arg_2 = 999;
arg_2 = 'reddit';
var arg_3 = true;
var arg_anytype = "anything i can write number of string or boolean ";
//any 
var language = ["fine", false, 8, null];
function get_User_Profile_Data(customer_IDalpha) {
    if (typeof customer_IDalpha === 'number') {
        return 9000;
    }
    else if (typeof customer_IDalpha == 'string') {
        return "alphadataservices";
    }
}
var data = get_User_Profile_Data("beta");
console.log(data);
var data_num = get_User_Profile_Data(900);
console.log(data_num);
function dataset_type(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return "its an least number ";
    }
}
var return_type_any = dataset_type(777, 999);
var return_type_expecting_num = dataset_type(1000, 999);
console.log(return_type_any);
console.log(return_type_expecting_num);
//function with void 
function user_lakes(lake) {
    console.log("never return any thing ");
}
//Never is one type :
function alpha() { } //sample code for git repo 
