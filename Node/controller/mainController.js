const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

exports.homeController = (req, res) => {
    res.write('<h1>Changed</h1>');
    res.write('<p>testing module</p>');
    res.end();
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