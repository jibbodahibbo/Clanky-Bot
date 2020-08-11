const {Sequelize, DataTypes} = require('sequelize');
//const config = require('./config.json');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: 'postgres',
	port: '5432',

});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

const ClankyCoins = sequelize.define('clankycoins', {
  	user_id: {
      type: DataTypes.STRING,
      unique: true,
    },
  	username: {
			type: DataTypes.STRING,
			unique: true,
		},
  	coins: {
  		type: DataTypes.INTEGER,
  		defaultValue: 0,
  		allowNull: false,
  	},
  	tag: {
		type:DataTypes.STRING
	}
  });

	const Schedules = sequelize.define('schedules', {
	  	league: {
				type:DataTypes.STRING,
	    },
			game_num: {
				type:DataTypes.INTEGER,
			},
			away_role_id: {
				type:DataTypes.STRING,
			},
			away_coach_id: {
				type:DataTypes.STRING,
			},
			home_role_id: {
				type:DataTypes.STRING,
			},
			home_coach_id: {
				type:DataTypes.STRING,
			},
			game_complete:{
				type:DataTypes.BOOLEAN,
				defaultValue: false
			},
			game_complete_away:{
				type:DataTypes.BOOLEAN,
				defaultValue: false
			}
	  });


		const Results = sequelize.define('results', {
		  	league:{
					type:DataTypes.STRING,
				},
				coach:{
					type: DataTypes.STRING,
				},
				game_num:{
						type: DataTypes.INTEGER,
				},
				images:{
					type: DataTypes.ARRAY(Sequelize.STRING),
				}
		  });

			const tableName = 'schedules';

			sequelize.queryInterface.describeTable(tableName)
			  .then(sequelize.tableDefinition => {
			    if (!sequelize.tableDefinition.game_complete_away) return Promise.resolve();

			    return sequelize.queryInterface.addColumn(
			      tableName,
			      'game_complete_away',
			      { 		type:DataTypes.BOOLEAN,
									defaultValue: false }
			    );
			  });



module.exports={ClankyCoins, Schedules, Results, sequelize};
