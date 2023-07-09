const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Post = sequelize.define('post', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			min: {
				args: 5,
				msg: 'Minimum 5 characters required in last name',
			},
			isLowercase: true,
		},
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: {
			min: {
				args: 5,
				msg: 'Minimum 5 characters required in last name',
			},
		},
	},
	thumbnailLink: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: {
			min: {
				args: 5,
				msg: 'Minimum 5 characters required in last name',
			},
		},
	},
	videoLink: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: {
			min: {
				args: 5,
				msg: 'Minimum 5 characters required in last name',
			},
		},
	},
	externelLink: {
		type: Sequelize.TEXT,
		allowNull: true,
	},
});

module.exports = Post;
