const User = require('../model/user');
exports.registerUser = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const number = req.body.number;
    const password = req.body.password;
    const user = new User({
        username: username,
        email: email,
        number: number,
        password: password
    })

    user.save()
        .then(result => {
            res.json({message: 'Амжилттай бүртгэгдлээ'})
        })
        .catch(err => console.log(err))
}

exports.getUsers = (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
}

exports.updateUser = (req, res) => {
    const userId = req.body._id;
    const username = req.body.username;
    const email = req.body.email;
    const number = req.body.number;
    const password = req.body.password;
    User.findById(userId)
        .then(user => {
            user.username = username;
            user.email = email;
            user.number = number;
            user.password = password;
            return user.save()
        })
        .then(result => {
            res.json({
                message: 'Амжилттай шинэчлэгдлээ'
            })
        })
        .catch(err => console.log(err))
}

exports.deleteUser = (req, res) => {
    const userId = req.body._id;
    User.findByIdAndRemove(userId)
        .then(result => {
            res.json({
                message: 'Амжилттай устгагдлаа'
            })
        })
        .catch(err => console.log(err))
}