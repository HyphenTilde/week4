export class User2{
    username: String;
    birthdate: String;
    age: Number;
    email: String;
    valid: Boolean;

    constructor(username:string, birthdate:string, age:number, email:string, valid:boolean){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.valid = valid;
    }
};