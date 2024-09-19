function f1(): number {

    return 98;
}

function f2(a: number, b: number): string {
    return '';
}
f2(90, 88);


function isActiveUser(flag: boolean): boolean {

    flag = false;
    if (flag) {

        return flag;

    }



    return flag;
}
//Arrow functions :************* 
let info = (): number => {

    console.log("hey pass the info ");
    return 99;
}

// () => {
//     console.log("Arrow fucntion with out any name "); This is not a good practise better store in one variable like above
// }

let supper = () => console.log("print the supper ");

info();
supper();

let super_add = (a: number, b: number): number => {
    return a + b;
}

console.log(super_add(8, 88));

let super_k = (a: number, b: number): number => a + b;// we can write in this way with out retun key word and {}




class skate {

    fistname: string
    age: number
    d_age: number = 90;

    constructor(fistname: string, age: number) {

        this.fistname = fistname;
        this.age = age
    }

    skaters = () => {
        console.log("skater fistname" + this.fistname + "======" + this.age);
    }

    alpha(a: number): void {
        console.log("hey this is normal function")
    }


}

const sk = new skate("anil", 88);
sk.skaters();
sk.alpha(99);

//Optional and default params :



function profile_info(messg: string, age?: number): string {

    return messg + "---" + age;
}

console.log("hey hi i am not provising any number due to i gave atleast one symbol isnde other param")

console.log(profile_info("anil"));


function Account_info(mesg: string = "welcome", age: number): string {

    return mesg + "-----" + age
}

console.log(Account_info("hey hello", 36));
console.log(Account_info(undefined, 36));






// function alphamode(age: number): Promise<string> {
//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             if (age > 20) {
//                 resolve("hey age is god age");
//             } else {
//                 reject(new Error("hey it's a wrong age"));
//             }
//         }, 2000);
//     });
// }

// alphamode(90)
//     .then(result => {
//         console.log("hey the result is " + result);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });


//Help of map function :
const hero = ["spider", "ironman", "fireman"];
hero.map((hero: string): any => { console.log(`hey my hero here is` + hero) })


function justprint(mesg: string): void {
    console.log("hey just print ")
}

function fail(error_mesg: string): never {
    throw new Error(error_mesg)
}







