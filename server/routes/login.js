class User{
    constructor(username, birthdate, age, email, password, valid){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
};

var user1 = new User("Username1","28/2/1990",32,"first@email.com","Password1",false);
var user2 = new User("Username2","5/6/1996",26,"second@email.com","Password2",false);
var user3 = new User("Username3","13/9/1993",29,"third@email.com","Password3",false);

let users = [user1, user2, user3];

module.exports = function(req,res){
    var u = req.body.username;
    var p = req.body.password;
    let i = 0;
    console.log(users[1].username);

    for(;i < 3; i++){
        if((users[i].username == u) && (users[i].password == p)){
            users[i].valid = true;
            console.log(users[i].username);
            res.send({'username':users[i].username,'birthdate':users[i].birthdate,'age':users[i].age,'email':users[i].email,'valid':users[i].valid});
        }
    }
    if(i == 3){
        res.send({'username':'','birthdate':'','age':0,'email':'','valid':false});
    }
}
