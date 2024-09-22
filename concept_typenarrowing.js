function detectmyvalue(value_given) {
    if (typeof value_given === "string") {
        return value_given.toLowerCase();
    }
    return value_given + 99;
}
function isitrealdrink(drink_we_got) {
    // if i write : drink_we_got.isdecotioned  it will give me error but its in coffe so i am norrowing 
    if ("isdecotioned" in drink_we_got) {
        return drink_we_got;
    }
    return null;
}
var value_we_got_from_isitrealdrink = isitrealdrink({ name: "chkragold", color: "purecofee", isdecotioned: true });
console.log(typeof value_we_got_from_isitrealdrink);
console.log(value_we_got_from_isitrealdrink === null || value_we_got_from_isitrealdrink === void 0 ? void 0 : value_we_got_from_isitrealdrink.isdecotioned);
//? if it sending null if it not passed if conditioned we get null
