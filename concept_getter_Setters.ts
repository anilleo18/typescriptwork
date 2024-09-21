class Email {

    email_id: string;
    city: string = "hyderbad";
    private _counter: number = 10;
    constructor(email_id: string) {

        this.email_id = email_id
    }
    get getEpamemail_id(): string {

        return `hey Email id from Epam is ${this.email_id}`
    }
    get num_emails_counter(): number {

        return this._counter;
    }
    set num_emails_counter(counterformcustomer: number) {

        this._counter = counterformcustomer * 200 - 3.8
    }
}

const email = new Email("anilleo18@gmail.com");

console.log(email.getEpamemail_id);

//here i set the setter value and set method will take this only one value,
//it toook 3 done its only logic and hanovered to private variable counter 
//here getter method is calling private variable and giving us the output 
email.num_emails_counter = 3;
console.log("Accessing after seeter method", email.num_emails_counter);













