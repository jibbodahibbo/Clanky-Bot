const {ClankyCoins} = require('../dbInit');
const allowed_channels = ['733773776357163079','741308777357377617','778266821006458950'];


async function addUser(message){
	try {
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
			return message.reply(user.username + " has "+ user.coins + " clanky coins.");
			}
		console.log(e);
		return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
		}
	return cc;
}

async function addUserByMention(message){
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
			return message.reply(user.username + " has "+ user.coins + " clanky coins.");
		}
			console.log(e);
			return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
	}
	const user = await ClankyCoins.findOne({ where: { username:message.mentions.users.first().username } });
	if (!user){
		return message.reply( message.mentions.users.first().tag + ' added to the Clanky Coin Ledger');
	}else{
		return message.reply( message.mentions.users.first().tag + ' has ' + user.coins + ' ClankyCoins');
		//I refuse to distinguish between plural and singular here. don't @ me.
	}
}

module.exports = {
	name: 'clankycoins',
	description: 'Coins from clanky',

	async execute(message, args) {

		//Check for valid channel, or DM
	/*	if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			console.log("incorrect channel");
			return null;
		}
*/
		if (args[0]=="ledger"){
				let msg=""
				const ledger = await ClankyCoins.findAll();
				for (var i = 0; i < 10; i++) {
					msg+=ledger[i].username +" "+ ledger[i].coins+ "\n";
				}
				return message.reply(msg);
		}

		if (args.length<1){
					let cc = await addUser(message);
					return message.reply( cc.tag + ' added to the Clanky Coin Ledger');
				}


		if (message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')) {
			///Help Command
			if (args.length==1){
					if (args[0] == 'help'){
						return message.reply('!clankycoins @user : !clankycoins add @user 100 : !clankycoins remove @user 100');

			///Adding user by mention.
					}else if (message.mentions.users.first()){
						await addUserByMention(message);
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
								return message.reply( message.mentions.users.first().tag + ' added to the Clanky Coin Ledger with 0 coins');
							}
							catch (e) {
								if (e.name === 'SequelizeUniqueConstraintError') {
									let usertag=message.mentions.users.first().tag;
									const user = await ClankyCoins.findOne({ where: { username: message.mentions.users.first().username } });
									return message.reply(user.username + " has "+ user.coins + " clanky coins.");
								}
									console.log(e);
									return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
								}
					}

				}
				}

			}else{
				return message.reply('This is a commissioner only command.');
			}

		}


,};
