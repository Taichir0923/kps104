exports.getLoginController = (req, res) => {
    res.render('login', {
        pageTitle: "Нэвтрэх хуудас"
    })
}

exports.postLoginController = (req, res) => {
    const email = req.body.email;
    console.log(email);
    res.redirect('/usersList');
}