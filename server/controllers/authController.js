const User = require('../model/user');

class Authentication {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({email: email})
            if(user.password === password){
                res.json({
                    user: user
                })
            } else {
                res.json({
                    message: 'Имэйл эсвэл нууц үг буруу байна..'
                })
            }
        } catch (err){
            res.json({
                message: err.message
            })
        }
    }
}

module.exports = new Authentication();