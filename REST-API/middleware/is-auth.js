const jwt = require('jsonwebtoken')
class MiddleWare {
    idAuth(req, res, next){
        // console.log(req.headers.authorization)
        const token = req.headers.authorization.split(' ')[1];

        // console.log(token)
        let decodedToken;
        decodedToken = jwt.verify(token, 'user-secret')
        if(!decodedToken){
            console.log('no')
        }
        req.userId = decodedToken.userId;
        next()
    }
}

module.exports = new MiddleWare()