var Email = /** @class */ (function () {
    function Email(email_id) {
        this.city = "hyderbad";
        this._counter = 10;
        this.email_id = email_id;
    }
    Object.defineProperty(Email.prototype, "getEpamemail_id", {
        get: function () {
            return "hey Email id from Epam is ".concat(this.email_id, ",").concat(Email.alpha);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Email.prototype, "num_emails_counter", {
        get: function () {
            return this._counter;
        },
        set: function (counterformcustomer) {
            this._counter = counterformcustomer * 200 - 3.8;
        },
        enumerable: false,
        configurable: true
    });
    Email.alpha = "hebrew";
    return Email;
}());
var email = new Email("anilleo18@gmail.com");
console.log(email.getEpamemail_id);
//here i set the setter value and set method will take this only one value,
//it toook 3 done its only logic and hanovered to private variable counter 
//here getter method is calling private variable and giving us the output 
email.num_emails_counter = 3;
console.log("Accessing after seeter method", email.num_emails_counter);
