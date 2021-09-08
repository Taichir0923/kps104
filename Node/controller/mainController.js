const path = require('path');
const fs = require('fs');
const Student = require('../model/member');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.homeController = (req, res) => {
    Student.find()
    .then(students => {
        res.render('main', {
            pageTitle: "users",
            users: students
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
    Student.findOne({_id: userId})
    .then(student => {
        console.log(student)
        res.render('account', {
            pageTitle: 'loggedUser.name',
            user: student
        })
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

    const user = new Student({
        name: username
    })

    user.save()
    .then(result => {
        console.log(result)
        res.redirect('/')
    })
}


exports.getEditController = (req, res) => {
    const userId = req.params.id;
    Student.findById(userId)
    .then(student => {
        res.render('edit', {
            pageTitle: "Засах",
            user: student
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

    Student.findById(userId)
    .then(student => {
        student.name = username
        return student.save()
    })
    .then(result => {
       console.log(result);
       res.redirect(`/user/${result._id}`)
    })
}


exports.postDeleteController = (req, res) => {
    const userId = req.body.userId;
    Member.deleteUser(userId);
    res.redirect('/')
}