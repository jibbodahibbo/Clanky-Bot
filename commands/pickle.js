module.exports = {
	name: 'pickle',
	description: 'pickle',
	execute(message) {

		let gifs=[
		"https://images-ext-1.discordapp.net/external/T5bD1fRK4q8U246VgmEVJ5EmWYJK3w2q8ZLsBX4q6AU/https/i.imgur.com/3e1XEUB.mp4",
		"https://ibb.co/SD2g9HYP",
		"https://images-ext-1.discordapp.net/external/0aCho8V3ihhYsCrnuFQMn8CdGvJGujfsA-QQHtjsbHo/https/media.tenor.com/yy9678NcS7QAAAPo/oh-no-nope.mp4",
		"https://tenor.com/view/pickle-pizza-no-pickles-pickles-do-not-belong-on-pizza-gif-17569780",
		"https://tenor.com/view/pickles-doyoulikepickles-little-rascals-gif-4739989",
		"https://cdn.discordapp.com/attachments/1310064588615712899/1452810792755007621/1766447357157.jpg?ex=69565fbc&is=69550e3c&hm=62d0b710a931075f03ea666da924db5e8809f93215a7fe119ac2dfb53b2287f7&"
	]

	let rgif=gifs[Math.floor(Math.random() * gifs.length)];
		message.channel.send(rgif)},
};
