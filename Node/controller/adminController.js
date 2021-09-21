const Article = require('../model/article');

exports.adminMainController = (req, res) => {
    if(req.session.isLoggedIn){
        Article.find()
            .then(articles => {
                res.render('admin', {
                    pageTitle: 'Удирдах хэсэг',
                    articles: articles
                })
            })
            .catch(err => console.log(err))
    } else {
        res.redirect('/login')
    }
}

exports.postAddArticle = (req, res) => {
    const title = req.body.title;
    const bdy = req.body.body;
    const category = req.body.category;
    const image = req.file;
    
    if(!image) res.redirect('/admin')

    const uri = image.path
    const article = new Article({
        title: title,
        article: bdy,
        category: category,
        created: new Date(),
        image: uri,
        userId: req.session.user._id
    })

    article.save()
        .then(result => {
            res.redirect('/admin')
        })
        .catch(err => console.log(err))
}