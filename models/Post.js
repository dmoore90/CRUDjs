const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Post = sequelize.define("Post", {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	content: Sequelize.STRING(300),
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

module.exports = Post;