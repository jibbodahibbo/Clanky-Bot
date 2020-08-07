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
				}
			catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					const user = await ClankyCoins.findOne({ where: { username: message.author.username} });
					return message.reply("You have "+ user.coins + " clanky coins.");
					}
					console.log(e);
				return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
			}
			return message.reply( cc.tag + ' added to the Clanky Coin Ledger');
		}


		if (message.member.roles.cache.find(role => role.name === 'Commissioner')) {
			console.log("Is Commish");
			console.log(message)
			// Add person to ledger by name.
			if (args.length==1){
					if (args[0] == 'help'){
						return message.reply('!clankycoins @user : !clankycoins add @user 100 : !clankycoins remove @user 100');

					}else if (message.mentions.users.first()){
							try {
								// Create clankycoin usser in ledger.
								const cc = await ClankyCoins.create({
									user_id: message.mentions.users.first().id,
									username: message.mentions.users.first().username,
									tag:message.mentions.users.first().tag,
									coins:0
								});
							}
							catch (e) {
								if (e.name === 'SequelizeUniqueConstraintError') {
									const user = await ClankyCoins.findOne({ where: { username: message.mentions.users.first().username } });
									return message.reply("You have "+ user.coins + " clanky coins.");
								}
									console.log(e);
									return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
							}
							const user = await ClankyCoins.findOne({ where: { username:message.mentions.users.first().username } });
							if (!user){
								return message.reply( message.mentions.users.first().tag + ' added to the Clanky Coin Ledger');
							}else{
								return message.reply( message.mentions.users.first().tag + ' has ' + user.coins + ' ClankyCoins');
								//I refuse to distinct between plural and singular here. don't @ me.
							}
				}
			}

			if (args.length>2){
					const user = await ClankyCoins.findOne({ where: { username:message.mentions.users.first().username } });
					if(user){
					if (args[0]=="add"){
						console.log("add");
						await ClankyCoins.increment('coins', { by: parseInt(args[2]), where: { username: message.mentions.users.first().username } });
						return message.reply(user.username + ' now has a coin total of ' + (user.coins + parseInt(args[2])) );
					}
					if (args[0]=="remove"){
						console.log("remove");
						await ClankyCoins.decrement('coins', { by: parseInt(args[2]), where: { username: message.mentions.users.first().username } });
					  return message.reply(user.username + ' now has a coin total of ' +  (user.coins - parseInt(args[2])));
					}
				}
				else{
					if (message.mentions.users.first()){
							try {
								// Create clankycoin usser in ledger.
								const cc = await ClankyCoins.create({
									user_id: message.mentions.users.first().id,
									username: message.mentions.users.first().username,
									tag:message.mentions.users.first().tag,
									coins:0
								});
							}
							catch (e) {
								if (e.name === 'SequelizeUniqueConstraintError') {
									const user = await ClankyCoins.findOne({ where: { username: message.mentions.users.first().username } });
									return message.reply("You have "+ user.coins + " clanky coins.");
								}
									console.log(e);
									return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
							}
					return message.reply( message.mentions.users.first().tag + ' added to the Clanky Coin Ledger with 0 coins');
				}

				}
				}
			}
		}


,};
