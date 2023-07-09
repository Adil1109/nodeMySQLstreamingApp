const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('muvimama', 'root', '11092003adil', {
	host: '127.0.0.1',
	dialect: 'mysql',
});

module.exports = sequelize;
