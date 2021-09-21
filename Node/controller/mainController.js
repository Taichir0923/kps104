const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const nodemailTransport = require("nodemailer-sendgrid-transport");


const Student = require('../model/member');
const Article = require('../model/article')

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

const transport = nodemailer.createTransport(nodemailTransport({
    auth: {
        api_key: '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'
    }
}))

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
                    res.redirect('/');
                    return transport.sendMail({
                        to: "narada4027@gmail.com",
                        from: "cultsg.and.cultr@gmail.com",
                        subject: "сайн байна уу...",
                        html: `<div style="margin: auto; text-align:center; background-color: black; color: white">
                            <h1>Бүртгэл амжилттай...</h1>
                        </div>`
                    })
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

exports.getReadController = (req, res) => {
    const articleId = req.params.id;
    Article.findById(articleId)
        .then(article => {
            res.render('read-article', {
                pageTitle: article.title,
                article: article
            })
        })
        .catch(err => console.log(err))
}

// class User {
//     constructor(){
//         this.ner = ner;
//         this.cart = [];
//     }

//     addToCart(product){
//         this.cart.push(product)
//     }
// }