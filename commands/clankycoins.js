const {ClankyCoins} = require('../dbInit');
module.exports = {
	name: 'clankycoins',
	description: 'Coins from clanky',

	async execute(message, args) {
if (args.length<1){
			try {
				// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
				const cc = await ClankyCoins.create({
					user_id: message.author.id,
					username: message.author.username,
					tag:message.author.tag,
					coins:0
				});


				return message.reply( cc.tag + ' added to the Clanky Coin Ledger');
				const users = await ClankyCoins.findAll();
				console.log(users.every(user => user instanceof ClankyCoins));
				console.log("All users:", JSON.stringify(users, null, 2));
				}
			catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					return message.reply("You are already collecting coins");
					}
					console.log(e);
				return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
			}
		}
		if (args.length>0){
				if (args[0]=="add"){

					return message.reply("added coins");
				}
		}

}


,};
