const Sequelize = require("sequelize");

const sequelize = new Sequelize("CRUD", "user", "pass", {
	host: 'localhost',
	dialect: "mysql",
})

module.exports = sequelize;