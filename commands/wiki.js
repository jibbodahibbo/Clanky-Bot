module.exports = {
	name: 'wiki',
	description: 'grab a wiki page',
	execute(message, args) {
		message.channel.send('https://backyardsportsleagues.miraheze.org/wiki/'+args[0]);
	},
};
