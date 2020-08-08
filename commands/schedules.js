const {Schedules} = require('../dbInit');
const { Op } = require('sequelize')
module.exports = {
	name: 'schedules',
	description: 'scheduling teams',

	async execute(message, args, client) {

	if (message.member.roles.cache.find(role => role.name == 'Commissioner')) {
		console.log("Is Commisioner")
					try {
						// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
						if (args.length == 6){
						const ss = await Schedules.create({
		        	league:args[0],
							game_num:args[1],
		    			away_role_id:args[2],
		    			away_coach_id:args[3],
							home_role_id:args[4],
							home_coach_id:args[5],
							game_complete: false
						});

					console.log("sending confirmation message");

					return message.reply('Added '+ss.league+ 'Game'+ ss.game_num + ss.away_role_id + ' at ' + ss.home_role_id);

					}else if (args[0]=='delete' && args.length==2){
						const deletion = await Schedules.destroy({ where: { id: parseInt(args[1]) } });
						return message.reply('Scheduled Item Deleted')

					}else if (args[0]=='view'){
								console.log("show schedule")
								const view_games = await Schedules.findAll({
									  where: {
									    league: args[1],
											game_num: args[2]
									  }
									});
									let response="";
									for(let i=0; i<view_games.length;i++){
										if (view_games[i].game_complete){
										response+=':white_check_mark:'
									}else{
										response+='       '
									}
										response+=view_games[i].away_role_id +' '+view_games[i].away_coach_id +' At '+view_games[i].home_role_id +' '+view_games[i].home_coach_id +' :id-> '+ view_games[i].id +'\n';
									}

									return message.channel.send(response);
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

}else{
	console.log("Not Commisioner");
	return null;
}
}
};
