function alpha_obj1() {
    return {};
}
function alpha_obj2() {
    return { name: "anil", ispaid: true };
}
//calling an OBJ after is returned :
var rt_obj = alpha_obj2();
console.log(rt_obj.ispaid);
console.log(rt_obj.name);
function alpha_obj3(myname, paymentstatus) {
    return { name: myname, ispaid: paymentstatus };
}
var rt_obj1 = alpha_obj3("sunil", false);
console.log(rt_obj1.name);
console.log(rt_obj1.ispaid);
function createbillingcustomerrecord(mybill) {
    console.log(mybill.name);
    return { name: "harsha", ispaid: true, amount: 399 };
}
//in the above example we are using type bill which we 
//created on out own and using it in createbill fucntion nd calling that
// from createuser below line
createbillingcustomerrecord({ name: "sunil", ispaid: true, amount: 400 });
