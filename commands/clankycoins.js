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
					const user = await ClankyCoins.findOne({ where: { username: args[1] } });
					return message.reply("You have "+ user.coins + " clanky coins.");
					}
					console.log(e);
				return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
			}
		}


		if (message.member.roles.cache.find(role => role.name === 'Commissioner')) {
			console.log("Is Commish");
			console.log(message)
			if (args.length>2){
					const user = await ClankyCoins.findOne({ where: { username: args[1] } });

					if(user){
					if (args[0]=="add"){
						console.log("add");
						await ClankyCoins.increment('coins', { by: parseInt(args[2]), where: { username: args[1] } }).reload();
						return message.reply(user.username + ' now has a coin total of ' + user.coins);
					}
					if (args[0]=="remove"){
						console.log("remove");
						await ClankyCoins.decrement('coins', { by: parseInt(args[2]), where: { username: args[1] } }).reload();
					  return message.reply(user.username + ' now has a coin total of ' + user.coins);
					}
				}
				}
					}
}


,};
