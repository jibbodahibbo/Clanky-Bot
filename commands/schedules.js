const {Schedules} = require('../dbInit');
const { Op } = require('sequelize')
module.exports = {
	name: 'schedules',
	description: 'scheduling teams',

	async execute(message, args) {

		if (message.member.roles.name != "Commisioner") {
		 return null;
  	}

					try {
						// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
						if (args.length == 6){
						const ss = await Schedules.create({
		        	league:args[0],
							game_num:args[1],
		    			away_role_id:args[2],
		    			away_coach_id:args[3],
							home_role_id:args[4],
							home_coach_id:args[5]
						});

					console.log("sending confirmation message");

					return message.reply('added'+ss.league+ '' + ss.away_role_id);

					}else if (args[0]=='view'){
								console.log("show schedule")
								//// TODO:  Loop through and display the whole schedule with Gamenum and league info.
							// TODO: Loop through and display games only from a certain league
							//// TODO: Loop through and display games only from a certain league and game_num
							}else{
								console.log("sending Not confirmation message");
								return message.reply('Please try the format of !schedules [LEAGUE] [GAME#] [AWAY TEAM ROLE] [AWAY TEAM INITAL] [HOME TEAM ROLE] [HOME TEAM INITIAL]');
								return message.reply('Example ->  lulu 3 @Monsters BA @Twins MB');
								//	}
		//				}else{
								}

					}
					catch (e) {
							console.log(e);
							return message.reply('Something went wrong with adding a game.');
					}

}};
