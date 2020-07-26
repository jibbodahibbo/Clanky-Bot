// TODO: implement db functions
const { Op } = require('sequelize')
const {Schedules, Results} = require('../dbInit');
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
  const sched = await Schedules.findOne(
    {where:{
    league: args.league ,
    game_num:args.game_num,
    [Op.or]: [{ away_role_id: args.caoch }, { home_role_id: args.coach }]
    }
    });

    let opponent ="";
    if (sched.away_role_id == args.coach){
      opponent=sched.home_role_id;
    }else{
      opponent=sched.away_role_id;
    }


  const other_result = await Results.findOne(
    {where:{
    league: args.league ,
    game_num:args.game_num,
    coach: opponent }
    });
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
    else {
        return other_result;
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
 *     "images": String[] (list of image urls)
 *   }
 *
 * @description saves the current result to the database
 * @returns void (maybe true or false for success/failure to write to the db)
 */
async function saveResult(result) {
  	const r = await Results.create({
  		league: result.league,
  		coach: result.coach,
  		game_num: result.game_num,
      images:result.images
  	});
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
  const sched = await Schedules.findOne(
    {where:{
    league: args.league ,
    game_num:args.game_num,
    [Op.or]: [{ away_role_id: args.caoch }, { home_role_id: args.coach }]
    }
    });
    if (test_response) {
        return {
        //    away_coach_id: "IN",  //Removing coach_id for now, want to make creation of schedules more streamlined for commisioner.
            away_role_id: "730220374884876390", // TODO: change to valid role id for this server
        //    home_coach_id: "BB", //Removing coach_id for now, want to make creation of schedules more streamlined for commisioner.
            home_role_id: "733703308421627905", // TODO: change to valid role id for this server
        };
    }
    else {
        return {
          away_role_id: sched.away_role_id,
          away_role_id: sched.home_role_id,
          };
        }
}

let results_channel_id = "733773776357163079"; // TODO: change to valid channel for this server

module.exports = {
    name: 'result',
    description: 'Result',
    async execute(message, args, client) {
        let coach_regex = RegExp("([A-Z][A-Z])");
        let coach = "";
        let league_regex = RegExp("(lulu|paste)", "i");
        let league = "";
        let game_num_regex = RegExp("G([0-9]+)", "i");
        let game_num = "";
        let game_score_regex = RegExp("([0-9]+)-([0-9]+)");
        let player_score = "";
        let computer_score = "";
        let images = [];

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
            message.reply(
                "`!result [lulu or paste] [coach initials] G[game number] [your score] - [their score]`"
            );
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
            message.reply(
                "`!result [lulu or paste] [coach initials] G[game number] [your score] - [their score]`"
            );
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
            message.reply(
                "`!result [lulu or paste] [coach initials] G[game number] [your score] - [their score]`"
            );
            return;
        }

        // extract score
        if (game_score_regex.test(message.content)) {
            let game_score_result = message.content.match(game_score_regex);
            player_score = game_score_result[1];
            computer_score = game_score_result[2];
        } else {
            message.reply(
                "Your result is missing a game number! Your message should look like this:"
            );
            message.reply(
                "`!result [lulu or paste] [coach initials] G[game number] [your score] - [their score]`"
            );
            return;
        }

        // extract images
        if (message.attachments.size > 0) {
            for (attachment of message.attachments.values()) {
                images.push(attachment.attachment);
            }
        } else {
            message.reply("Your result is missing a screenshot!");
            return;
        }

        // build result object
        let result_obj = {
            "league": league,
            "coach": coach,
            "game_num": game_num,
            "images": images
        };

        // save to db
        await saveResult(result_obj).catch((error) => {
            throw error;
        });

        // send result summary reply
        message.reply(
            `Saved your result:\n` +
            `**League:** ${league}\n` +
            `**Coach:** ${coach}\n` +
            `**Game:** ${game_num}\n` +
            `**Score:** ${player_score}-${computer_score}\n`
        );

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
                let away_result_obj = null;
                let home_result_obj = null;

                if (result_obj.coach == game_schedule_data.away_role_id) {
                    away_result_obj = result_obj;
                    home_result_obj = result_pair_obj;
                } else {
                    away_result_obj = result_pair_obj;
                    home_result_obj = result_obj;
                }


                let summary_message =
                    `
                **Game ${game_num} - ${game_schedule_data.away_role_id} vs. ${game_schedule_data.home_role_id}**\n` +
                    `Away: <@&${game_schedule_data.away_role_id}>\n`;

                for (image of away_result_obj.images) {
                    summary_message += `${image}\n`;
                }
                channel.send(summary_message).then(() => {
                    summary_message = `Home: <@&${game_schedule_data.home_role_id}>\n`;

                    for (image of home_result_obj.images) {
                        summary_message += `${image}\n`;
                    }

                    channel.send(summary_message);
                });


            }
            else {
                throw Error(`Schedule data was null for this query: ${schedule_data_query}`);
            }

        }
        // if it's not, do nothing
        else {

        }


    }
}
