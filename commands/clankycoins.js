const { ClankyCoins } = require('../dbInit');
const allowed_channels = ['733773776357163079', '741308777357377617', '778266821006458950'];

async function addUser(message) {
	try {
		const cc = await ClankyCoins.create({
			user_id: message.author.id,
			username: message.author.username,
			tag: message.author.tag,
			coins: 0,
		});
		return cc;
	} catch (e) {
		if (e.name === 'SequelizeUniqueConstraintError') {
			const user = await ClankyCoins.findOne({ where: { user_id: message.author.id } });
			return message.reply(`${user.username} has ${user.coins} clanky coins.`);
		}
		console.log(e);
		return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
	}
}

async function addUserByMention(message) {
	try {
		const mentionedUser = message.mentions.users.first();
		if (!mentionedUser) return message.reply("You need to mention a user.");

		const cc = await ClankyCoins.create({
			user_id: mentionedUser.id,
			username: mentionedUser.username,
			tag: mentionedUser.tag,
			coins: 0,
		});

		return message.reply(`${mentionedUser.tag} added to the Clanky Coin Ledger with 0 coins`);
	} catch (e) {
		if (e.name === 'SequelizeUniqueConstraintError') {
			const user = await ClankyCoins.findOne({ where: { user_id: message.mentions.users.first().id } });
			return message.reply(`${user.username} has ${user.coins} clanky coins.`);
		}
		console.log(e);
		return message.reply('Something went wrong with adding a user to the clanky coins ledger.');
	}
}

module.exports = {
	name: 'clankycoins',
	description: 'Coins from clanky',

	async execute(message, args) {
		// Ensure the bot only responds in the allowed channels
		if (!allowed_channels.includes(message.channel.id) && message.guild != null) {
			return;
		}

		// Check if the user has the required role
		if (!message.member || (!message.member.roles.cache.some(role => ['Commissioner', 'Codehead'].includes(role.name)))) {
			return message.reply('This is a commissioner-only command.');
		}

        if (args[0] === "ledger") {
            let msg = "\n";
            const ledger = await ClankyCoins.findAll();
        
            // Build the full ledger message
            ledger.forEach(user => {
                msg += `${user.user_id} ${user.username}: ${user.coins}\n`;
            });
        
            // Split the message into chunks of up to 1900 characters
            const messages = msg.match(/[\s\S]{1,1900}/g);
        
            // Send each chunk as a separate message
            for (const chunk of messages) {
                await message.reply(chunk);
            }
        }

		// Handle adding a user
		if (args.length < 1) {
			const cc = await addUser(message);
			return message.reply(`${cc.tag} added to the Clanky Coin Ledger`);
		}

		// Command: Add or remove coins from a mentioned user
		if (message.mentions.users.size > 0 && args.length > 2) {
			const mentionedUser = message.mentions.users.first();
			const user = await ClankyCoins.findOne({ where: { user_id: mentionedUser.id } });
			
			if (user) {
				const amount = parseInt(args[2], 10);
				if (isNaN(amount)) return message.reply("Invalid amount specified.");

				if (args[0] === "add") {
					await ClankyCoins.increment('coins', { by: amount, where: { user_id: mentionedUser.id } });
					return message.reply(`${mentionedUser.tag} now has a coin total of ${user.coins + amount}`);
				}

				if (args[0] === "remove") {
					await ClankyCoins.decrement('coins', { by: amount, where: { user_id: mentionedUser.id } });
					return message.reply(`${mentionedUser.tag} now has a coin total of ${user.coins - amount}`);
				}
			} else {
				// Create a new user if they don't exist
				await addUserByMention(message);
			}
		}

		// Help Command
		if (args[0] === "help") {
			return message.reply('!clankycoins @user : !clankycoins add @user 100 : !clankycoins remove @user 100');
		}
	},
};
