const { Schedules } = require("../dbInit");
const { Op } = require("sequelize");
const { discord } = require("../byb-bot");
module.exports = {
	name: "schedules",
	description: "scheduling teams",

	async execute(message, args, client) {
		if (
			message.member.roles.cache.find(
				(role) => role.name == "Commissioner"
			)
		) {
			console.log("Is Commissioner");
			try {
				// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
				if (args.length == 6) {
					const ss = await Schedules.create({
						league: args[0],
						game_num: args[1],
						away_role_id: args[2],
						away_coach_id: args[3],
						home_role_id: args[4],
						home_coach_id: args[5],
						game_complete: false,
					});

					// TEST DATA
					// const ss = {
					// 	league: args[0],
					// 	game_num: args[1],
					// 	away_role_id: args[2],
					// 	away_coach_id: args[3],
					// 	home_role_id: args[4],
					// 	home_coach_id: args[5],
					// 	game_complete: false,
					// 	id: "test_id"
					// };

			
					console.log("sending confirmation message");
					let scheduleAddMessageEmbed = new discord.MessageEmbed()
						.setDescription(`**${ss.league.toUpperCase()} Game ${ss.game_num}**
						${ss.away_role_id} (${ss.away_coach_id}) at ${ss.home_role_id} (${ss.home_coach_id})`)
						;

					return message.reply(`your schedule item was added *id# ${ss.id}*`, { embed: scheduleAddMessageEmbed });

				} else if (args[0] == "delete" && args.length == 2) {
					const deletion = await Schedules.destroy({
						where: { id: parseInt(args[1]) },
					});
					return message.reply("Scheduled Item Deleted");
				} else if (args[0] == "view") {
					console.log("show schedule");
					let view_games = await Schedules.findAll({
						where: {
							league: args[1],
							game_num: args[2],
						},
					});

					// TEST DATA
					// let view_games = [
					// 	{
					// 		game_num: 12,
					// 		game_complete: false,
					// 		away_role_id: "<@&735310865284333651>",
					// 		away_coach_id: "JL",
					// 		home_role_id: "<@&735310865284333651>",
					// 		home_coach_id: "JL",
					// 		id: "666",
					// 	},
					// 	{
					// 		game_num: 11,
					// 		game_complete: true,
					// 		away_role_id: "<@&735310865284333651>",
					// 		away_coach_id: "JL",
					// 		home_role_id: "<@&735310865284333651>",
					// 		home_coach_id: "JL",
					// 		id: "667",
					// 	},
					// 	{
					// 		game_num: 10,
					// 		game_complete: false,
					// 		away_role_id: "<@&735310865284333651>",
					// 		away_coach_id: "JL",
					// 		home_role_id: "<@&735310865284333651>",
					// 		home_coach_id: "JL",
					// 		id: "668",
					// 	},
					// ];
					let response = "";
					let scheduleViewEmbed = new discord.MessageEmbed()
					if (view_games.length == 0) {
						response = "There are no scheduled games for that league/week";
						return message.reply(response);
					}

					if (args[2]) {
						scheduleViewEmbed.setTitle(
							`${args[1].toUpperCase()} Schedule - Game ${args[2]}`
						);
					}
					else {
						scheduleViewEmbed.setTitle(
							`${args[1].toUpperCase()} Schedule`
						);
						view_games = view_games.sort((a, b) => parseInt(a.game_num) < parseInt(b.game_num) ? -1 : 1);
					}
					
					let scheduleData = [];
					for (let i = 0; i < view_games.length; i++) {
						let scheduleItemText = "";
						scheduleItemText += view_games[i].game_complete ? '✅' : '⭕️';
						
						scheduleItemText +=
							`  **Game ${view_games[i].game_num}**` +
							` ${view_games[i].away_role_id} (${view_games[i].away_coach_id})` +
							` at ${view_games[i].home_role_id} (${view_games[i].home_coach_id}) *id#${view_games[i].id}*`;
						scheduleData.push(scheduleItemText);
						// response +=
						// 	view_games[i].away_role_id +
						// 	" " +
						// 	view_games[i].away_coach_id +
						// 	" At " +
						// 	view_games[i].home_role_id +
						// 	" " +
						// 	view_games[i].home_coach_id +
						// 	" :id-> " +
						// 	view_games[i].id +
						// 	"\n";
					}
					scheduleViewEmbed.setDescription(scheduleData.join("\n"));
					scheduleViewEmbed.setFooter(`Requested by @${message.author.username}`);

					return message.channel.send({embed: scheduleViewEmbed});
				} else {
					console.log("sending Not confirmation message");
					return message.reply(
						"Please try the format of !schedules [LEAGUE] [GAME#] [AWAY TEAM ROLE] [AWAY TEAM INITAL] [HOME TEAM ROLE] [HOME TEAM INITIAL]"
					);
					return message.reply(
						"Example ->  lulu 3 @Monsters BA @Twins MB"
					);
					//	}
					//				}else{
				}
			} catch (e) {
				console.log(e);
				return message.reply(
					"Something went wrong with adding a game."
				);
			}
		} else {
			console.log("Not Commissioner");
			return null;
		}
	},
};
