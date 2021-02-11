var jsonDB = require('node-json-db').JsonDB;
var config = require('node-json-db/dist/lib/JsonDBConfig').Config;
var db = new jsonDB(new config("myDataBase", true, true, '/'));


class User {
    constructor(id, firstName, lastName, DOB, email, password, interests){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName; 
        this.DOB = new Date(DOB);
        this.email = email;
        this.password = password;
        this.interests = interests;
    }
    create(){
        db.push("/users[]", this);
    }
    static login(email, password){
        var users = db.getData('/users');
        for(let i = 0; i < users.length; i++){
            if(users[i].email === email && users[i].password === password) return users[i];
        }
        return false;
    }
    logout(){

    }
    delete(){

    }
    update(){

    }
    view(){

    }
    listFriends(){
        
    }

}

module.exports = User;