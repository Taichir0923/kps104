const path = require('path');
const fs = require('fs');

const bcrypt = require('bcryptjs');

const Student = require('../model/member');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.getLoginController = (req, res) => {
    let message = req.flash("loginErr");
    if(req.session.isLoggedIn){
        res.redirect(`/admin`)
    } else {
        if(message.length !== 0){
            message = message[0]
        } else {
            message = null
        }
        console.log(message)
        res.render('login', {
            pageTitle: "Нэвтрэх хуудас",
            message: message
        })
    }
}

exports.postLoginController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    Student.findOne({email: email})
        .then(user => {
            if(!user){
                req.flash("loginErr", "Имэйл эсвэл нууц үг буруу байна.")
                return res.redirect('/login')
            } else {
                bcrypt.compare(password, user.password)
                    .then(matched => {
                        if(matched){
                            req.session.isLoggedIn = true;
                            req.session.user = user;
                            res.redirect(`/admin`);
                        } else {
                            req.flash("loginErr", "Имэйл эсвэл нууц үг буруу байна.")
                        }
                        res.redirect('/login')
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

// csurf = > req csrfToken() => 
// JWT - Json Web Token => passport
// passport


// express-session
// connect-mongodb-session.


/**
 * sender=cultsg.and.cultr@gmail.com
reciever=cultsg.and.cultr@gmail.com
subj=Бүртгэл
ap_key=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
 */