module.exports = {
	name: 'fandom',
	description: 'grab a fandom page',
	execute(message, args) {
		message.channel.send('https://backyardsportsleagues.fandom.com/wiki/'+args[0]);
	},
};
