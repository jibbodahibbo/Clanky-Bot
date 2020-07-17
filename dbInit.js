const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: 'postgres',
	port: '5432'

});

const ClankyCoins = sequelize.define('clankycoins', {
	user_id: {
    Sequelize.STRING,
    unique: true
  },
	username: Sequelize.STRING,
	coins: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
	tag: Sequelize.STRING
});

module.exports={ClankyCoins, sequelize};
