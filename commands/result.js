const { Op } = require('sequelize')
const {Schedules, Results} = require('../dbInit');
const discord = require("../byb-bot.js").discord;
/**
 *
 * @param {*} args
 *  an object with structure:
 *   {
 *     "league": String ("lulu" or "paste"),
 *     "coach": String (2 character code),
 *     "game_num": Number,
 *   }
 *
 * @description checks the database to see if the other game result is already
 *  posted
 * @returns the data from the other game result if it exists, or null if it doesn't
 *  Other result data should have structure:
 *  {
 *     "league": String ("lulu" or "paste"),
 *     "coach": String (2 character code),
 *     "game_num": Number,
 *     "images": String[] (list of image urls)
 *  }
 */
async function getResultPair(args, test_response = false) {
    if (test_response) {
		return {
			league: "lulu",
			coach: "BB",
			game_num: 7,
			images: [
				"https://cdn.discordapp.com/attachments/730180658747670579/733442478102937690/Screen_Shot_2020-07-02_at_5.31.12_PM.png",
			],
		};
	}

    const sched = await Schedules.findOne(
    {where:{
      league: args.league ,
      game_num:args.game_num,
      [Op.or]: [{ away_coach_id: args.coach }, { home_coach_id: args.coach }]
      }
    });

    let opponent ="";
    if (sched.away_coach_id == args.coach){
      opponent=sched.home_coach_id;
    }else{
      opponent=sched.away_coach_id;
    }


  const other_result = await Results.findOne(
    {where:{
    league: args.league ,
    game_num:args.game_num,
    coach: opponent,
      }
    });


  const complete_game = await Schedules.update({ game_complete: true },
    { where:{
      league: args.league ,
      game_num:args.game_num,
      [Op.or]: [{ away_coach_id: other_result.coach }, { home_coach_id: other_result.coach }],
      [Op.or]: [{ away_coach_id: args.coach }, { home_coach_id: args.coach }]
      }
    });


  return other_result;
}

/**
 *
 * @param {*} args
 *  an object with structure:
 *   {
 *     "league": String ("lulu" or "paste"),
 *     "coach": String (2 character code),
 *     "game_num": Number,
 *     "images": String[] (list of image urls)
 *   }
 *
 * @description saves the current result to the database
 * @returns void (maybe true or false for success/failure to write to the db)
 */
async function saveResult(result, testing=false) {
    if (testing) {
        return;
    }
    else {
        const r = await Results.create({
			league: result.league,
			coach: result.coach,
			game_num: result.game_num,
			images: result.images,
		});
    }

}

/**
 *
 * @param {*} args
 *  an object with structure:
 *   {
 *     "league": String ("lulu" or "paste"),
 *     "coach": String (2 character code),
 *     "game_num": Number,
 *   }
 *
 * @description retrieves schedule data about a given game such as the roles of
 *  coaches, coach IDs, and who is home and away
 * @returns the schedule if it exists, or null if it doesn't
 *  Schedule data should have structure:
 *  {
 *     "away_coach_id": String (2 character code),
 *     "away_role_id": String,
 *     "home_coach_id": String (2 character code),
 *     "home_role_id": String,
 *  }
 */
async function getScheduleData(args, test_response = false) {
  if (test_response) {
		return {
			away_coach_id: "IN",
			away_role_id: "<@&735310865284333651>", // TODO: change to valid role id for this server
			home_coach_id: "BB",
			home_role_id: "<@&735310832090742865>", // TODO: change to valid role id for this server
		};
  }

    const sched = await Schedules.findOne(
    {where:{
    league: args.league ,
    game_num:args.game_num,
    [Op.or]: [{ away_coach_id: args.coach }, { home_coach_id: args.coach }]
    }
    });


    return {
        away_coach_id: sched.away_coach_id,
        home_coach_id: sched.home_coach_id,
        away_role_id: sched.away_role_id,
        home_role_id: sched.home_role_id,
        };

}

let results_channel_id = "709149765455052859"; // TODO: change to valid channel for this server

module.exports = {
    name: 'result',
    description: 'Result',
    async execute(message, args, client) {
        let coach_regex = RegExp("([A-Z][A-Z])");
        let coach = "";
        let league_list = ["lulu", "paste","rp"];
        let league_list_string = league_list.join("|")
        let league_regex = RegExp(`(${league_list_string})`, "i");
        let league = "";
        let game_num_regex = RegExp("G([0-9]+)", "i");
        let game_num = "";
        let game_score_regex = RegExp("([0-9]+)-([0-9]+)");
        let player_score = "";
        let computer_score = "";
        let images = [];
        const enforcing_score = false;
        const example_command = "`!result [lulu or paste] [coach initials] G[game number] [your score] - [their score]`";
        const color_unrecorded = 13632027;
        const color_recorded = 4289797;
        const color_pending = 16312092;

        // make sure this is a dm. If not, let the user know they need to send a dm
        if (message.guild !== null) {
			message.reply(
				"`!result` commands can only be sent directly to this bot"
            );
            client.users.cache
				.get(message.author.id)
				.send("You can send `!result` commands to me here!");
			return;
		}

        // extract coach
        if (coach_regex.test(message.content)) {
           coach = message.content.match(coach_regex);
            coach = args[1];
       } else {
           message.reply(
                "Your result is missing a coach! Your message should look like this:"
            );
            message.reply(example_command);
            return;
        }
        // extract league
        if (league_regex.test(message.content)) {
            league = message.content.match(league_regex);
            league = league[1];
        } else {
            message.reply(
                "Your result is missing a league! Your message should look like this:"
            );
            message.reply(example_command);
            return;
        }
        // extract game number
        if (game_num_regex.test(message.content)) {
            game_num = message.content.match(game_num_regex);
            game_num = game_num[1];
        } else {
            message.reply(
                "Your result is missing a game number! Your message should look like this:"
            );
            message.reply(example_command);
            return;
        }

        // extract score
        if (game_score_regex.test(message.content)) {
            let game_score_result = message.content.match(game_score_regex);
            player_score = game_score_result[1];
            computer_score = game_score_result[2];
        } else {
            if (enforcing_score) {
                message.reply(
					"Your result is missing a score! Your message should look like this:"
				);
				message.reply(example_command);
				return;
            }
        }

        // extract images
        if (message.attachments.size > 0) {
            for (attachment of message.attachments.values()) {
                images.push(attachment.attachment);
            }
        } else {
            await message.reply("Your result still needs a screenshot! Reply with one to add it.");
            const authorFilter = response => {
                return response.author.id === message.author.id && response.attachments.size > 0;
            };
            let screenshotResponses;
            try {
                screenshotResponses = await message.channel.awaitMessages(authorFilter, { max: 1, time: 300000, errors: ['time'] });
                images.push(screenshotResponses.first().attachments.first().attachment);

            } catch (errorScreenshotResponses) {
                message.reply("I didn't get a message with a screenshot. Try submitting your result again.");
                return;
            }

        }

        // build result object
        let result_obj = {
            "league": league,
            "coach": coach,
            "game_num": game_num,
            "images": images
        };

        // send result summary reply
        // message.reply(
        //     `Saved your result:\n` +
        //     `**League:** ${league}\n` +
        //     `**Coach:** ${coach}\n` +
        //     `**Game:** ${game_num}\n` +
        //     `**Score:** ${player_score}-${computer_score}\n`
        // );
        let resultSummaryEmbed = new discord.MessageEmbed()
            .setColor(color_pending)
			.addFields(
				{ name: "League", value: league, inline: true },
				{ name: "Coach", value: coach, inline: true },
				{ name: "Game", value: game_num, inline: true },
				{ name: "Score", value: `${player_score}-${computer_score}` }
			)
			.setImage(result_obj.images[0])
            .setTimestamp();

        let resultSummaryMessage = await message.author.send(
            "This is your result. React with ✅ if it looks right, or ❌ to cancel. Submitting in 15 seconds...",
            { embed: resultSummaryEmbed });

        await resultSummaryMessage.react("✅");
        await resultSummaryMessage.react("❌");

        const filter = (reaction, user) => {

            return (reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id;
        };

        let collected;
        try {
            collected = await resultSummaryMessage.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] });
        } catch (errorCollected) {
            collected = errorCollected;
            collected.set('✅', {});
            // resultSummaryMessage.reactions.removeAll();
        }

        if (collected.has("✅")) {
            // save to db
            await resultSummaryMessage.edit("Sending...");
            await saveResult(result_obj).catch((error) => {
                throw error;
            });

            await resultSummaryMessage.edit("Your result was recorded",
                {
                    embed: resultSummaryEmbed.setColor(color_recorded),
                    reactions: {}
                }
            );

        }
        else if (collected.has("❌")) {
            await resultSummaryMessage.edit("This result was canceled", {
				embed: resultSummaryEmbed.setColor(color_unrecorded),
				reactions: {},
            });
            return;
        }

        // check db for result pair
        let result_pair_query = {
            "league": league,
            "coach": coach,
            "game_num": game_num,
        };

        let result_pair_obj = await getResultPair(result_pair_query);

        // if it's there, build and send a summary to the results channel
        if (result_pair_obj != null) {
            const channel = client.channels.cache.get(results_channel_id);

            // get additional game data from schedule
            let schedule_data_query = {
                "league": result_obj.league,
                "coach": result_obj.coach,
                "game_num": result_obj.game_num
            };
            let game_schedule_data = await getScheduleData(schedule_data_query)
                .catch((error) => {
                    throw error;
                });

            if (game_schedule_data != null) {
                let away_result_obj = game_schedule_data.away_role_id;
                let home_result_obj = game_schedule_data.home_role_id;

                if (result_obj.coach == game_schedule_data.away_coach_id) {
                    away_result_obj = result_obj;
                    home_result_obj = result_pair_obj;
                } else {
                    away_result_obj = result_pair_obj;
                    home_result_obj = result_obj;
                }

                let awayMessage =
					`**Game ${game_num} - ${game_schedule_data.away_role_id} vs. ${game_schedule_data.home_role_id}**\n` +
					`Away: ${game_schedule_data.away_role_id}`;

                const awayObject = {
                    "image": {
                        "url": away_result_obj.images[0]
                    },
                    "timestamp": new Date().getTime()
                };
                let homeMessage = `Home: ${game_schedule_data.home_role_id}`;
                const homeObject = {
                    "image": {
                        "url": home_result_obj.images[0]
                    },
                    "timestamp": new Date().getTime()
                };
                channel.send(awayMessage, {embed: awayObject}).then(() => {
                    channel.send(homeMessage, {embed: homeObject});
                });


            }
            else {
                throw Error(`Schedule data was null for this query: ${schedule_data_query}`);
            }

        }else{
          channel.send('**'+ result_obj.league + ' Game ' + resultobj.game_num +'** has been submitted by **'+message.author.id +'**');
        }
        // if it's not, do nothing
        else {

        }


    }
}
