const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs')


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
    if(req.session.isLoggedIn){
        const userId = req.params.id;
        console.log(req.cookies)
        Student.findOne({_id: userId})
        .then(student => {
            res.render('account', {
                pageTitle: 'loggedUser.name',
                user: student
            })
        })
    } else {
        res.redirect('/login')
    }
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

    Student.findOne({email: email})
        .then(user => {
            if(user){
                res.redirect('/register')
            } else {
                return bcrypt.hash(password, 12).then(hashedPass => {
                    const user = new Student({
                        name: username,
                        email: email,
                        password: hashedPass
                    })

                    return user.save()
                })
                .then(result => {
                    res.redirect('/')
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
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
    Student.findByIdAndRemove(userId)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
}