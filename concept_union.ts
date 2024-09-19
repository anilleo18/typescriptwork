let arg_1: number = 90;
let arg_2: (number | string);
arg_2 = 999;
arg_2 = 'reddit'
let arg_3: (string | boolean | number) = true

let arg_anytype: any = "anything i can write number of string or boolean "

//any 
let language: any[] = ["fine", false, 8, null]

function get_User_Profile_Data(customer_IDalpha: (string | number)): any {

    if (typeof customer_IDalpha === 'number') {

        return 9000;
    } else if (typeof customer_IDalpha == 'string') {

        return "alphadataservices";
    }

}

const data = get_User_Profile_Data("beta");
console.log(data)

const data_num = get_User_Profile_Data(900);
console.log(data_num)


function dataset_type(a: any, b: any): any {

    if (a > b) {

        return a;
    } else {

        return "its an least number "


    }
}

const return_type_any = dataset_type(777, 999);
const return_type_expecting_num = dataset_type(1000, 999);
console.log(return_type_any);
console.log(return_type_expecting_num);

//function with void 

function user_lakes(lake: string): void {
    console.log("never return any thing ");
}

//Never is one type :

function alpha() { }//sample code for git repo 


