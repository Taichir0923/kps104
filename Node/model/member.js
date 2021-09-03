const fs = require('fs');
const path = require('path');

const pth = path.join(path.dirname(process.mainModule.filename), 'data', 'members.json');

const getMembers = users => {
    fs.readFile(pth, (err, members) => {
        if(err){
            users([])
        } else {
            users(JSON.parse(members))
        }
    })
}

module.exports = class User {
    constructor(username, email, number, avatar, password){
        this.username = username;
        this.email = email;
        this.number = number;
        this.avatar = avatar;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    save(){
        getMembers(users => {
            users.push(this);
            fs.writeFile(pth, JSON.stringify(users), err => {
                console.log(err)
            })
        })
    }

    static fetchUsers(users){
        getMembers(users)
    }
}