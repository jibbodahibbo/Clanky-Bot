const ClankyCoins = require('../byb-bot.js');
module.exports = {
	name: 'clankycoins',
	description: 'Coins from clanky',

	async execute(message, args) {


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
					return message.reply('That person already exists.');
					}
					console.log(e);
				return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
			}
		}
,};
