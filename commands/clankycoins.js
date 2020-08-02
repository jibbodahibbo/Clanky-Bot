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
				}
			catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					return message.reply("You are already collecting coins");
					}
					console.log(e);
				return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
			}
		}


		if (message.member.roles.name == "Commisioner") {
			if (args.length>2){
					if (args[0]=="add"){
						const user = await ClankyCoins.update({ coins: user.coins+args[1] }, { where: { user_id: args[2] } });
						return message.reply(user.user_id + ' now has a coin total of ' + user.coins);
					}
					if (args[0]=="remove"){
						const user = await ClankyCoins.update({ coins: user.coins-args[1] }, { where: { user_id: args[2] } });
						return message.reply(user.user_id + ' now has a coin total of ' + user.coins);
					}
				}
					}
}


,};
