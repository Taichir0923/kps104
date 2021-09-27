const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
class UserController {
    userReg(req, res){
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({email: email})
            .then(user => {
                if(user) {
                    return res.json({message: "Email exists"});
                }
                return bcrypt.hash(password, 12)
                .then(pass => {
                    const usr = new User({
                        username: username,
                        email: email,
                        password: pass
                    })

                    return usr.save()
                })
                .then(result => {
                    res.json({
                        message: "Amjilttai burtgegdlee"
                    })
                })
                .catch(err => console.log(err))
            })
    }

    userLogin(req, res){
        const {email, password} = req.body;

        User.findOne({email: email})
            .then(user => {
                if(!user) return res.json({
                    message: "Email or password is wrong!"
                })

                bcrypt.compare(password, user.password)
                    .then(matched => {
                        if(matched){

                            const token = jwt.sign({
                                user: user
                            }, "user-secret" , {expiresIn: '1h'})
                            return res.json({
                                userId: user._id,
                                token: token
                            })
                        } else {
                            return res.json({
                                message: "Email or password is wrong!"
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
    }

    userInfo(req, res){
        const userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.json({user: user})
            })
    }
}

module.exports = new UserController()