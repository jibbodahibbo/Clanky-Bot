const {Sequelize, DataTypes} = require('sequelize');
//const config = require('./config.json');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: 'postgres',
	dialectOptions: {
	ssl: {
		require: true, // This will help you. But you will see nwe error
		rejectUnauthorized: false // This line will fix new error
	}
},
	port: '5432'

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

			const Draft_j = sequelize.define('draft_j', {
			  	player:{
						type:DataTypes.STRING,
					},
					team:{
						type:DataTypes.STRING,
						defaultValue:'undrafted',
					},
					pick_num:{
						type:DataTypes.INTEGER,
					}
			  });




module.exports={ClankyCoins, Schedules, Results, Draft_j, sequelize};
