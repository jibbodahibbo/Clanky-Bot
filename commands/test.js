const fs = require("fs");


let coaches = {
    "c1": "Jyknight",
    "c2": "Mav",
    "c3": "",
    "c4": "",
    "c5": "Aesnop",
    "c6": "Vissery",
    "c7": "",
    "c8": "Yurya"
};

module.exports = {
	name: "test",
	description: "Catch all for quick test commands",
	async execute(message, args, client) {
		if (args.length == 0) {
			return message.reply("You didn't specify which test command!");
		}

		if (args[0] == "winterball") {
            for (coach in coaches) {
                
            }
			// for each coach, get all the players
            // sort by bidding price
            // for each player, build an embed

			message.channel.send("");
		}

        console.log(message);
	},
};
