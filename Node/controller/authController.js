const path = require('path');
const fs = require('fs');

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
    const currentUser = objectData.find(user => user.email === email)
    if(!currentUser){
        res.redirect('/login');
    } else {
        if(currentUser.password === password && currentUser.email === email){
            res.redirect(`/user/${currentUser.id}`)
        } else {
            res.redirect('/login')
        }
    }
}