export class Post {
    constructor(title, body, userId){
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.created = new Date();
    }
}
export class User {
    constructor(email, fullname, password, number, avatar){
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.number = number;
        this.avatar = avatar;
        this.id = Math.random().toString().split('.')[1];
    }
}