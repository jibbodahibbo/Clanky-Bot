		const allowed_channels = ['733773776357163079','741308777357377617'];

module.exports = {
	name: 'help',
	description: 'Help on using this bot',
	execute(message, args) {


		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
		}

		message.channel.send('visit <https://backyardsportsleagues.fandom.com/wiki/BYB-BOT> for more information about this bot');

	},
};
