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
	Post.findByPk(posId)
	.then(post => {
		if (!post) {
			return res.redirect('/');
		}
		res.render("pages/update_page.ejs", {
			post: post
		})
	})
	.catch(err => console.log(err));
}

exports.postUpdatePage = (req, res, next) => {
	const posId = req.body.postId;
	console.log(posId);
	const updatedCont = req.body.content;
	Post.findByPk(posId)
		.then(post => {
			post.content = updatedCont;
			return post.save();
		})
		.then(result => {
			console.log('Updated Content');
			res.redirect('/');
		})
		.catch(err => console.log(err));
}

exports.postDeletePost = (req, res, next) => {
	const posId = req.body.postId;
	console.log(posId);
	Post.destroy({ where: { id: posId }})
		.then(result => {
			console.log('content deleted');
			res.redirect('/');
		})
		.catch(err => console.log(err));
}