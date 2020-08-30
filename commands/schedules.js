
const { Schedules } = require("../dbInit");
const { Op } = require("sequelize");
const { discord } = require("../byb-bot");

//Creates a schdule item using 6 parameters, returns the item from the db.
async function createScheduleItem(args){
	const ss = await Schedules.create({
		league: args[0],
		game_num: args[1],
		away_role_id: args[2],
		away_coach_id: args[3],
		home_role_id: args[4],
		home_coach_id: args[5],
		game_complete: false,
	});
	return ss;
}


module.exports = {
	name: "schedules",
	description: "scheduling teams",
	async execute(message, args, client) {

		if (message.member.roles.cache.find(role => role.name == 'Commissioner') || message.member.roles.cache.find(role => role.name == 'Codehead')) {
			try {

				///For adding a scheduled Item.
				if (args.length == 6) {
					let ss = await createScheduleItem(args);
					let scheduleAddMessageEmbed = new discord.MessageEmbed()
						.setDescription(`**${ss.league.toUpperCase()} Game ${ss.game_num}**
						${ss.away_role_id} (${ss.away_coach_id}) at ${ss.home_role_id} (${ss.home_coach_id})`)
						;
					return message.reply(`your schedule item was added *id# ${ss.id}*`, { embed: scheduleAddMessageEmbed });
				}
				///For Deleting a scheduled Item
				else if (args[0] == "delete" && args.length == 2) {
					const deletion = await Schedules.destroy({
						where: { id: parseInt(args[1]) },
					});
					return message.reply("Scheduled Item Deleted");
				}
				///For viewing a schedule
				else if (args[0] == "view") {
					let view_games;
					let scheduleViewEmbed = new discord.MessageEmbed();
					///Grabs the schedule for the entire league.
					if (args.length == 2) {
						view_games = await Schedules.findAll({
							where: {
								league: args[1],
							}
						});
						scheduleViewEmbed.setTitle(
							`${args[1].toUpperCase()} Schedule`
						);
						view_games = view_games.sort((a, b) =>
							parseInt(a.game_num) < parseInt(b.game_num) ? -1 : 1
						);

					} else {
						view_games = await Schedules.findAll({
							where: {
								league: args[1],
								game_num: args[2],
							},
						});
						scheduleViewEmbed.setTitle(
							`${args[1].toUpperCase()} Schedule - Game ${args[2]}`
						);
					}


				let response = "";
					if (view_games.length == 0) {
						response = "There are no scheduled games for that league/week";
						return message.reply(response);
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
					}

					scheduleViewEmbed.setDescription(scheduleData.join("\n"));
					scheduleViewEmbed.setFooter(`Requested by @${message.author.username}`);
					return message.channel.send({ embed: scheduleViewEmbed });

				} else { /// No valid command arguments
					return message.reply(
						"Please try the format of !schedules [LEAGUE] [GAME#] [AWAY TEAM ROLE] [AWAY TEAM INITAL] [HOME TEAM ROLE] [HOME TEAM INITIAL]"
					);
				}
			} catch (e) {  //Error catch.
				console.log(e);
				return message.reply(
					"Something went wrong with adding a game."
				);
			}
		}
		else {
			console.log("Not Commissioner");
			return null;
		}     //Not commissioner

	}
};
