const path = require('path');
const fs = require('fs');

const bcrypt = require('bcryptjs');

const Student = require('../model/member');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.getLoginController = (req, res) => {
    if(req.session.isLoggedIn){
        res.redirect(`/admin`)
    } else {
        res.render('login', {
            pageTitle: "Нэвтрэх хуудас"
        })
    }
}

exports.postLoginController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    Student.findOne({email: email})
        .then(user => {
            if(!user){
                res.redirect('/login')
            } else {
                bcrypt.compare(password, user.password)
                    .then(matched => {
                        if(matched){
                            req.session.isLoggedIn = true;
                            req.session.user = user;
                            res.redirect(`/admin`);
                        } else {
                            res.redirect('/login')
                        }
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
}

exports.postLogoutController = (req, res) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/login')
    })
}

// CSRF - Cross Site Request Forgery
// session
// JWT - Json Web Token
// passport


// express-session
// connect-mongodb-session