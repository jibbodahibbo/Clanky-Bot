const {ClankyCoins} = require('../dbInit');
const allowed_channels = ['733773776357163079','741308777357377617','778266821006458950'];

//General purchase agreement
async function purchase{(user, cost){
	console.log("puchase attempted");
	if (user.coins>=300){
		try {
			await ClankyCoins.decrement('coins', { by:cost, where: { username:user.username}});
		} catch (e) {
			console.log("err. issue with purchasing function." + e)
		}
		return true;
	}else{
		return false;
	}
}

//random gif selector.
function congratsme(){
	let gifs=[
		'https://media0.giphy.com/media/13ggM8kgGhrxao/giphy.gif',
		'https://media3.giphy.com/media/3PxTfzLmaquPgZf49V/200.gif',
		'https://www.totalprosports.com/wp-content/uploads/2013/12/dancing-penn-state-hockey-fan-dancing-sports-fan-gifs.gif',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYo_2xvMBHFNlEdC_DwCiZZGiz-1qVcD5Hyw&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0czZ1k3C9yllt4x-PJdf_UY-MweiOlYgcQ&usqp=CAU',
		'https://thumbs.gfycat.com/PartialTallAuklet-small.gif',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy12nu2wxWZqUkHEeZv2BjhZrFQdoeZZMi7A&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkpB6geRJQ15FYFKI9muVYTG3m_E3hiIF_A&usqp=CAU'
		'https://media0.giphy.com/media/xUOwGb1NwihZijPrLq/giphy-downsized.gif',
		'https://media1.giphy.com/media/1aglrTaaVvKdjNOLVv/giphy.gif',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PDqqhusRZHhY3htgDBBtuAcPsPZnaEOAYw&usqp=CAU',
		'https://thumbs.gfycat.com/FlimsyOilyKatydid.webp',
		'https://thumbs.gfycat.com/UnfitColorlessKingfisher.webp',
		'https://thumbs.gfycat.com/AdoredVapidHyena.webp',
		'https://thumbs.gfycat.com/SizzlingFreeFrog.webp',
		'https://thumbs.gfycat.com/SeriousMiserableArcherfish.webp',
		'https://thumbs.gfycat.com/BreakableAdorableFritillarybutterfly.webp'
	]

	return gifs[Math.floor(Math.random() * gifs.length)];
}

module.exports = {
	name: 'buy things',
	description: 'buy some things from the bot with clankycoins',
	async execute(message, args) {


		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
		}
		//Attempt to find the user who is purchasing.
		try {
			const user = await ClankyCoins.findOne({ where: { username:message.author.username } });
		}
		//If they don't exist, let them know they don't exist yet and to type !clankycoins.
		catch (e) {
			console.log(e);
			return message.reply('You may not be in the Clanky Coins Ledger, type !clankycoins to keep track of your coins.');
			}

			if(args[0]=="congratsme"){
				 if(await purchase(user.username, 300)){
					 	return message.reply(congratsme());
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }

			}

	}

	},
};
