const path = require('path');
const fs = require('fs');

const bcrypt = require('bcryptjs');

const Student = require('../model/member');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.getLoginController = (req, res) => {
    res.render('login', {
        pageTitle: "Нэвтрэх хуудас"
    })
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
                        console.log(matched)
                        if(matched){
                            res.cookie('loggedIn', 'true')
                            res.redirect(`/user/${user._id}`)
                        } else {
                            res.redirect('/login')
                        }
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
}