function alpha_obj1(): {} {
    return {};
}

function alpha_obj2(): { name: string, ispaid: boolean } {

    return { name: "anil", ispaid: true }

}

//calling an OBJ after is returned :
const rt_obj = alpha_obj2();
console.log(rt_obj.ispaid)
console.log(rt_obj.name)

function alpha_obj3(myname: string, paymentstatus: boolean): { name: string, ispaid: boolean } {

    return { name: myname, ispaid: paymentstatus }

}

const rt_obj1 = alpha_obj3("sunil", false);
console.log(rt_obj1.name);
console.log(rt_obj1.ispaid)


//very good use case kiddos 

type bill = {
    name: string,
    ispaid: boolean,
    amount: number
}

function createbillingcustomerrecord(mybill: bill): bill {

    console.log(mybill.name);
    return { name: "harsha", ispaid: true, amount: 399 }
}
//in the above example we are using type bill which we 
//created on out own and using it in createbill fucntion nd calling that
// from createuser below line
createbillingcustomerrecord({ name: "sunil", ispaid: true, amount: 400 })




