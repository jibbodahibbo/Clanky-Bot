const Sequelize = require('sequelize');
const config = require('./config.json');


const sequelize = new Sequelize(config.database,config.user, config.password, {
	host: config.host,
	dialect: 'postgres',
	port: '5433',
	sslmode:'require'

});

const ClankyCoins = sequelize.define('clankycoins', {
  	user_id: {
      type: Sequelize.STRING,
      unique: true,
    },
  	username: Sequelize.STRING,
  	coins: {
  		type: Sequelize.INTEGER,
  		defaultValue: 0,
  		allowNull: false,
  	},
  	tag: Sequelize.STRING
  });

	const Schedule = sequelize.define('schedule', {
	  	away_coach_id: {
				type:Sequelize.STRING,
	    },
			away_role_id: {
				type:Sequelize.STRING,
			},
			home_coach_id: {
				type:Sequelize.STRING,
			},
			home_role_id: {
				type:Sequelize.STRING,
			},
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
module.exports={ClankyCoins, Schedule, Results, sequelize};
