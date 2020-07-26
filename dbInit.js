const Sequelize = require('sequelize');
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
    //  unique: true,
    },
  	username: {
			type: DataTypes.STRING,
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
			}
	  });
			/**     "away_coach_id": String (2 character code),
		  *     "away_role_id": String,
		  *     "home_coach_id": String (2 character code),
		  *     "home_role_id": String,
			*/

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

			/**     "league": String ("lulu" or "paste"),
				*     "coach": String (2 character code),
				*     "game_num": Number,
				*     "images": String[] (list of image urls)
			**/
module.exports={ClankyCoins, Schedules, Results, sequelize};
