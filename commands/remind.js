const { Schedules, Results } = require("../dbInit");
const talk_channel_id = "843335522281586718";
const test_lab_channel_id = "741308777357377617";
const allowed_channels = [talk_channel_id, test_lab_channel_id];
const allowed_roles = ["Commissioner", "Admin", "Codehead"];



const coaches = {
	C8: ["355931440061612035", "crazyei8hts"],
	MF: ["753099045651742731", "JorgesBankAccount"],
	CW: ["430920494351515650", "Elchrisblanco"],
	JL: ["377672560780902402", "jlund24"],
	BB: ["187776456519057409", "JibboDaHibbo"],
	MM: ["698632902778552380", "shrewsbury91"],
	AE: ["105512327293448192", "Aesnop"],
	YY: ["74323981670285312", "Yurya"],
	13: ["201134409863266305", "kiiiiiiiiiiiiis"],
	WZ: ["273653649522294784", "Wizard"],
	JY: ["307010267001257996", "Jyknight"],
	IN: ["437956094023696385", "NateinDisney"],
	MV: ["296815103985319936", "Mavfatha"],
	EX: ["252968570382843904", "Eauxps I. Fourgott"],
	YT: ["213203256606851072", "Marco"],
	JJ: ["142464556151734272", "Jarod Johnson"],
	26: ["470389312291209246", "T-Boz"],
	JV: ["78596893797523456", "TheRealSisu"],
	28: ["87804201056337920", "Natetastic28"],
	VS: ["135436127862652928", "Vissery"],
	SB: ["711388106749902849", "SilverBullet102"],
	TO: ["692170461047554048", "Toast"],
	SK: ["318469807282585640", "skolgamingnetwork"],
	MT: ["335400047070019585", "MelloMathTeacher"],
	H1: ["860359469510426644", "hitace"],
};

module.exports = {
	name: "remind",
	description: "configuring reminders to submit games",
	async execute(message, args, client) {
		if (!message.member.roles.cache.find(role => allowed_roles.includes(role.name))) {
			return message.reply("This is an Admin/Commissioner only command.");
		}

		if (!allowed_channels.includes(message.channel.id)) {
			return message.reply("This command can only be sent in the #test-lab or #s7-talk channels");
		}

		if (args.length == 2) {
			let league = args[0];
			let game_num = args[1];
			let response_message = await message.channel.send("Checking the schedule...");
			try {
				view_games = await Schedules.findAll({
					where: {
						league: league,
						game_num: game_num,
					},
				});
			} catch (e) {
				console.log(e);
				return;
			}

			if (view_games.length == 0) {
				response = `There are no scheduled games for league: \`${args[1]}\` week: \`${args[2]}\``;
				response_message.edit(response);
				// return message.reply(response);
			}

			let coaches_missing = {};
			let schedule_info = [];

			await response_message.edit(`Checking results...`);
			let games_checked = 0;

			for (game of view_games) {
				// console.log(game);
				// for each coach
				away_result = await Results.findOne({
					where: {
						league: league,
						game_num: game_num,
						coach: game.away_coach_id,
					},
				});

				home_result = await Results.findOne({
					where: {
						league: league,
						game_num: game_num,
						coach: game.home_coach_id,
					},
				});

				if (away_result == null) {
					coaches_missing[game.away_coach_id] = {
						team_role: game.away_role_id,
						coach_user_id: coaches[game.away_coach_id][0],
						coach_username: coaches[game.away_coach_id][1]
					};
				}

				if (home_result == null) {
					coaches_missing[game.home_coach_id] = {
						team_role: game.home_role_id,
						coach_user_id: coaches[game.home_coach_id][0],
						coach_username: coaches[game.home_coach_id][1],
					};
				}

				// response_message.edit(
				// 	`Checking results (${++games_checked}/${view_games.length})...`
				// );
				
				// let game_status = "";
				// if (away_result == null && home_result == null) {
				// 	game_status = "⭕️";
				// } else if (away_result != null && home_result != null) {
				// 	game_status = "✅";
				// } else {
				// 	game_status = "🌗"
				// }

				// schedule_info.push({
				// 	game_status: game_status,
				// 	away_coach_id: game.away_coach_id,
				// 	away_role_id: game.away_role_id
				// });
				// console.log("away");
				// console.log(away_result);
				// console.log("home");
				// console.log(home_result);
			}
			// console.log(coaches_missing);
			let scheduleItemText = `**${league.toUpperCase()} - Game ${game_num}: Missing Results**`;
			for (coach in coaches_missing) {
				scheduleItemText += `\n${coaches_missing[coach].team_role} (${coach})`;
			}

			if (Object.keys(coaches_missing).length === 0) {
				scheduleItemText += "\n🎉 All coaches have submitted! 🎉";
			}

			
			let talk_channel = client.channels.cache.get(talk_channel_id);
			response_message.edit(`Results checked: ${view_games.length * 2}\nResults missing: ${Object.keys(coaches_missing).length}\nA reminder message has been sent.`);
			return talk_channel.send(scheduleItemText);
			
			
			
			// for (let i = 0; i < view_games.length; i++) {
				
			// 		scheduleItemText += view_games[i].game_complete ? "✅" : "⭕️";

			// 		scheduleItemText +=
			// 			`  **Game ${view_games[i].game_num}**` +
			// 			` ${view_games[i].away_role_id} (${view_games[i].away_coach_id})` +
			// 			` at ${view_games[i].home_role_id} (${view_games[i].home_coach_id}) *id#${view_games[i].id}*`;
			// 		scheduleData.push(scheduleItemText);
			// 	}

			// scheduleViewEmbed.setDescription(scheduleData.join("\n"));
			// scheduleViewEmbed.setFooter(
			// 	`Requested by @${message.author.username}`
			// );
			// return message.channel.send({ embed: scheduleViewEmbed });
			
			// return await response_message.edit(scheduleItemText);
			
		} else {
			let response =
				"To see which coaches still need to submit scores for a given league and week, ";
			response +=
				"send a command with this format:\n`!remind [league] [week/game #]`";
			// response += "\ne.g. `!remind s7 4`";
			return message.channel.send(response);
			// return message.reply(response);
		}

		message.channel.send(
			"visit <https://backyardsportsleagues.fandom.com/wiki/BYB-BOT> for more information about this bot"
		);
	},
};
