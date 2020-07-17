
module.exports = {
	name: 'clankycoins',
	description: 'Coins from clanky',
	(async function(){
		execute(message, args) {

			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

			try {
				// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
				const cc = await ClankyCoins.create({
					user_id: message.author.id,
					username: message.author.username,
					tag:message.author.tag,
					coins:0
				});
				return message.reply(`${cc.tag} added to the Clanky Coin Ledger`);
				}
			catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					return message.reply('That person already exists.');
					}
				return message.reply('Something went wrong with adding a tag.');
			}
		}

	}
,};
