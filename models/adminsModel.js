const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Admin = sequelize.define('admin', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			min: {
				args: 4,
				msg: 'Minimum 4 characters required in last name',
			},
			isLowercase: true,
			isEmail: { msg: 'It must be a valid Email address' },
		},
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			min: {
				args: 4,
				msg: 'Minimum 4 characters required in last name',
			},
		},
	},
});

module.exports = Admin;
