function generateRandomString(length) {
	return(Math.random() + 1).toString(36).substring(7);
  }
module.exports = {
	name: 'passcode',
	description: 'Generates a passcode',
	execute(message) {
		message.channel.send(generateRandomString(6));
	},
};
