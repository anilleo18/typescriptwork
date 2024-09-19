function f1() {
    return 98;
}
function f2(a, b) {
    return '';
}
f2(90, 88);
function isActiveUser(flag) {
    flag = false;
    if (flag) {
        return flag;
    }
    return flag;
}
//Arrow functions :************* 
var info = function () {
    console.log("hey pass the info ");
    return 99;
};
// () => {
//     console.log("Arrow fucntion with out any name "); This is not a good practise better store in one variable like above
// }
var supper = function () { return console.log("print the supper "); };
info();
supper();
var super_add = function (a, b) {
    return a + b;
};
console.log(super_add(8, 88));
var super_k = function (a, b) { return a + b; }; // we can write in this way with out retun key word and {}
var skate = /** @class */ (function () {
    function skate(fistname, age) {
        var _this = this;
        this.d_age = 90;
        this.skaters = function () {
            console.log("skater fistname" + _this.fistname + "======" + _this.age);
        };
        this.fistname = fistname;
        this.age = age;
    }
    skate.prototype.alpha = function (a) {
        console.log("hey this is normal function");
    };
    return skate;
}());
var sk = new skate("anil", 88);
sk.skaters();
sk.alpha(99);
//Optional and default params :
function profile_info(messg, age) {
    return messg + "---" + age;
}
console.log("hey hi i am not provising any number due to i gave atleast one symbol isnde other param");
console.log(profile_info("anil"));
function Account_info(mesg, age) {
    if (mesg === void 0) { mesg = "welcome"; }
    return mesg + "-----" + age;
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
var hero = ["spider", "ironman", "fireman"];
hero.map(function (hero) { console.log("hey my hero here is" + hero); });
function justprint(mesg) {
    console.log("hey just print ");
}
function fail(error_mesg) {
    throw new Error(error_mesg);
}
