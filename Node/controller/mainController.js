const path = require('path');
const fs = require('fs');
const Member = require('../model/member');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.homeController = (req, res) => {
    Member.fetchUsers(users => {
        res.render('main', {
            pageTitle: "users",
            users: users
        })
    })
}

exports.loginContoller = (req, res) => {
    res.render('index', {
        pageTitle: "users",
        users: objectData
    });
}

exports.userController = (req, res) => {
    const userId = req.params.id;
    const loggedUser = objectData.find(user => user.id === +userId)
    // console.log(loggedUser)
    res.render('account', {
        pageTitle: loggedUser.name,
        user: loggedUser
    })
}

exports.getRegisterController = (req, res) => {
    res.render('signup', {
        pageTitle: "Бүртгэл"
    })
}

exports.postRegisterController = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const number = req.body.number;
    const password = req.body.password;
    const avatar = req.body.avatar;

    const user = new Member(username, email, number, avatar, password)

    user.save();

    console.log(user)

    res.redirect('/')
}


exports.getEditController = (req, res) => {
    const userId = req.params.id;
    Member.findById(userId, user => {
        res.render('edit', {
            pageTitle: "Засах",
            user: user
        })
    })
}

exports.postEditController = (req, res) => {
    const userId = req.body.userId;
    const username = req.body.username;
    const email = req.body.email;
    const number = req.body.number;
    const password = req.body.password;
    const avatar = req.body.avatar;

    const updatedUser = new Member(username, email, number, avatar, password);
    
    updatedUser.update(userId)

    res.redirect(`/`)
}


exports.postDeleteController = (req, res) => {
    const userId = req.body.userId;
    Member.deleteUser(userId);
    res.redirect('/')
}