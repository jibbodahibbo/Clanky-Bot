module.exports = {
	name: 'pickle',
	description: 'pickle',
	execute(message) {

		let gifs=[
		"https://images-ext-1.discordapp.net/external/T5bD1fRK4q8U246VgmEVJ5EmWYJK3w2q8ZLsBX4q6AU/https/i.imgur.com/3e1XEUB.mp4",
		"https://ibb.co/SD2g9HYP"
	]

	let rgif=gifs[Math.floor(Math.random() * gifs.length)];
		message.channel.send(rgif)},
};
