const Sequelize = require('sequelize');
//const config = require('./config.json');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: 'postgres',
	port: '5432',

});

const ClankyCoins = sequelize.define('clankycoins', {
  	user_id: {
      type: Sequelize.STRING,
    //  unique: true,
    },
  	username: {
			type: Sequelize.STRING,
		},
  	coins: {
  		type: Sequelize.INTEGER,
  		defaultValue: 0,
  		allowNull: false,
  	},
  	tag: {
		type:Sequelize.STRING
	}
  });

	const Schedules = sequelize.define('schedules', {
	  	league: {
				type:Sequelize.STRING,
	    },
			game_num: {
				type:Sequelize.INTEGER,
			},
			away_role_id: {
				type:Sequelize.STRING,
			},
			away_coach_id: {
				type:Sequelize.STRING,
			},
			home_role_id: {
				type:Sequelize.STRING,
			},
			home_coach_id: {
				type:Sequelize.STRING,
			}
	  });
			/**     "away_coach_id": String (2 character code),
		  *     "away_role_id": String,
		  *     "home_coach_id": String (2 character code),
		  *     "home_role_id": String,
			*/

		const Results = sequelize.define('results', {
		  	league:{
					type:Sequelize.STRING,
				},
				coach:{
					type: Sequelize.STRING,
				},
				game_num:{
						type: Sequelize.INTEGER,
				},
				images:{
					type: Sequelize.ARRAY(Sequelize.STRING),
				}
		  });

			/**     "league": String ("lulu" or "paste"),
				*     "coach": String (2 character code),
				*     "game_num": Number,
				*     "images": String[] (list of image urls)
			**/
module.exports={ClankyCoins, Schedules, Results, sequelize};
