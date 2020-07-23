const {Schedule} = require('../dbInit');
module.exports = {
	name: 'schedule',
	description: 'scheduling teams',

	async execute(message, args) {

		if (args.length<1){
					try {
						// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
						const ss = await Schedule.create({
		        	league:args[0],
							game_num:args[1],
		    			away_role_id:args[2],
		    			home_role_id:args[3]
						});
						console.log(args);
						console.log(args.length);
						if (args.length != 4){
							console.log(args);
							console.log(args.length);
							if (args[0]=="view"){
								console.log("show schedule")
								//// TODO:  Loop through and display the whole schedule with Gamenum and league info.
							// TODO: Loop through and display games only from a certain league
							//// TODO: Loop through and display games only from a certain league and game_num
							}else{
								console.log("sending Not confirmation message");
										return message.reply('Please try the format of !schedule [LEAGuE] [GAME#] [AWAYTEAM] [HOMETEAM]');
									}
						}else{
							console.log("sending confirmation message");
						return message.reply('added '+ss.away_role_id + ' @ ' + ss.home_role_id + ' to ' +ss.league+' game '+ ss.game_num);
						}
					}
					catch (e) {
							console.log(e);
							return message.reply('Something went wrong with adding a game.');
					}
		}
}};
