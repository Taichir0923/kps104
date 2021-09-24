const Post = require('../models/post');
exports.newPost = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const imageUrl = req.body.imageUrl;

    const post = new Post({
        title: title,
        content: content,
        imageUrl: imageUrl,
        created: new Date()
    })

    post.save()
        .then(result => {
            console.log(result)
            res.json({
                message: "Post created successfully"
            })
        })
        .catch(err => console.log(err))
}   