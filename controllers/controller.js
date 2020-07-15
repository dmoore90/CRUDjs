const Post = require('../models/Post');

exports.getIndex = (req, res, next) => {
	// res.render('pages/index.ejs');
	Post.findAll()
	.then(posts => {
		res.render('pages/index.ejs',{
			posts: posts
		})
	})
	.catch(err => {
		console.log(err);
	})
}

exports.postIndex = (req, res, next) => {
	const post = req.body.content;
	Post.create({content: post})
		.then(result => {
			res.redirect('/');
		})
		.catch(err => {
			console.log(err);
		})
}

exports.getUpdatePage = (req, res, next) => {
	const posId = req.params.postId;
	Post.findByPk(posId).then(post => {
		if (!post) {
			return res.redirect('/');
		}
		res.render("pages/update_page.ejs", {
			post: post
		})
	})
	.catch(err => console.log(err));
}

// exports.getUpdatePage = (req, res) => {
// 	res.render('pages/update_page.ejs')
// }
exports.getTest = (req, res) => {
	res.render('pages/test.ejs');
}