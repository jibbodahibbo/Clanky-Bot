const {ClankyCoins} = require('../dbInit');
const allowed_channels = ['741308777357377617','778266821006458950'];

//General purchase agreement
async function purchase(user, cost){
	console.log("puchase attempted");
	if (user.coins>=cost){
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
function getJoke(user){
	let jokes=["Why is Marky Dubois good in the outfield? || Because his frog is great at catching flies.||",
	"Pete Wheeler kept wondered why the ball kept getting bigger and bigger. ||Then it hit him.||",
	"Where does Tony Delveccio go when he needs a new uniform? ||New Jersey.||",
	"What runs around a baseball field but never moves? ||A fence, but also Jose Meisenheimer||",
	"On where does Dante Robinson eat his lunch? || Home Plate.||",
	"Why couldn’t Kimmy Eckman get soda  pop at the double header? ||Because the home team lost the opener.||",
	"Once Ronny Dobbs was pitching so bad, ||the crowd started singing Take Him Out of The Ball Game!||",
	"Lisa Crockett saw a giant mouse so she tried hitting it with a baseball bat,|| now she has a lifetime ban from Disneyland||",
	"What is Sally Dobbs favorite book? ||Artemis Fowl||",
	"Jocinda Smith's nickname",
	"What's Jorge Garcias favorite Movie? || Money Ball ||"
	]

	let rjokes=jokes[Math.floor(Math.random() * jokes.length)];
	let e={
	    "title": "I've got a good one "+user +"!",
	    "color": 10038562,
	    "description": rjokes
	  }
		return e;
}

//random gif selector.
function congratsMe(user){
	let gifs=[
		'https://media0.giphy.com/media/13ggM8kgGhrxao/giphy.gif',
		'https://media3.giphy.com/media/3PxTfzLmaquPgZf49V/200.gif',
		'https://www.totalprosports.com/wp-content/uploads/2013/12/dancing-penn-state-hockey-fan-dancing-sports-fan-gifs.gif',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYo_2xvMBHFNlEdC_DwCiZZGiz-1qVcD5Hyw&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0czZ1k3C9yllt4x-PJdf_UY-MweiOlYgcQ&usqp=CAU',
		'https://thumbs.gfycat.com/PartialTallAuklet-small.gif',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy12nu2wxWZqUkHEeZv2BjhZrFQdoeZZMi7A&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkpB6geRJQ15FYFKI9muVYTG3m_E3hiIF_A&usqp=CAU',
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

	let rgif=gifs[Math.floor(Math.random() * gifs.length)];
	let e={
	    "title": "Congratulations "+user +"!",
	    "color": 10038562,
	    "description": "You have redeemed a congratulatory gif for 300 CC.",
	    "image": {
	      "url":rgif
	    }
	  }
		return e;
}

function insult(user,other){
	let adjs=[
	'Blue',
	'Crazy',
	'Green',
	'Humongous',
	'Junior',
	'Little',
	'Mighty',
	'Red',
	'Super-Duper',
	'White',
	];
	let nouns=[
		"Lug",
		"Knucklhead",
		"Lunkhead",
		"Pud",
		"Scab",
		"Schmuck",
		"Wacko",
		"Yob",
		"Fart Knocker",
		"Dingus",
		"Dweeb"
	];


let radj=adjs[Math.floor(Math.random() * adjs.length)];
let rnoun=nouns[Math.floor(Math.random() * nouns.length)];
let e={
			"title": user+', you have redeemed an insult for 2,000 CC!',
			"color": 10038562,
			"description": '<@'+other+'> is a '+radj+' '+rnoun+'.',
		}
	return e;
}

function drink(user,other){
	let adjs=[
	'Blue',
	'Crazy',
	'Green',
	'Humongous',
	'Junior',
	'Little',
	'Mighty',
	'Red',
	'Super-Duper',
	'White',
	'Smokey',
	"palatable", "refreshing", "mysterious", "cloudy", "foul-smelling", "herbal", "potent", "restorative", "canned", 
	"soft", "fragrant", "hot", "italian", "soft", "creamy", "feminine", "fashionable", "exotic", "less", "sweeter", 
	"trendy", "iced", "heady", "black", "quiet", "acid", "nice", "companionable", "gassy", "sugared", "nipponese", "soft", 
	"small", "unfailingly", "regular", "peculiarly", "refreshing", "unfailingly", "regular", "weak", "sweet", "refreshing", 
	"flavored", "intoxicating", "synthetic", "orange", "alcoholic", "outsized", "pleasing", "refreshing", "bitter", "milky", 
	"tall", "iced", "tall", "wildest", "fruity", "preferred", "fruit-flavored", "popular", "soft", "warm", "nutritive", "non-alcoholic",
	 "sufficient", "smooth", "strong", "good-night", "iced", "tall"
	];
	let nouns=["Water", "Tea", "Coffee", "Juice", "Soda", "Milk", "Beer", "Wine", "Cocktail", "Smoothie", "Lemonade", "tea", "Energy drink", "Sports drink", "Sparkling water", "Cider", "Champagne", "Whiskey", "Rum"];


	let radj=adjs[Math.floor(Math.random() * adjs.length)];
	let rnoun=nouns[Math.floor(Math.random() * nouns.length)];

	if (other=="616733129155018757"){
			radj="can of";
			if (Math.random() < 0.5){
				rnoun="Pepsi";
			}else{
				rnoun="Coke";
			}
	}

	let e={
				"title": user+', you have purchased a drink for 10 CC!',
				"color": 10038562,
				"description": 'You gave <@'+other+'> a '+radj+' '+rnoun+'.',
			}
		return e;
}

async function getPurchaser(p){
//Attempt to find the user who is purchasing.
		try {
			const user = await ClankyCoins.findOne({ where: { username:p} });
			return user;
		}
		//If they don't exist, let them know they don't exist yet and to type !clankycoins.
		catch (e) {
			console.log(e);
			return message.reply('You may not be in the Clanky Coins Ledger, type !clankycoins to keep track of your coins.');
			}
}

module.exports = {
	name: 'buy',
	description: 'buy some things from the bot with clankycoins',
	async execute(message, args) {
		console.log("hello");

		let user=await getPurchaser(message.author.username);


			if(args[0]=="congratsme"){
				 if(await purchase(user, 50)){
					 	return message.reply({ embed:congratsMe(user.username)});
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }
			}

			if(args[0]=="joke"){
				 if(await purchase(user, 100)){
						return message.reply({ embed:getJoke(user.username)});
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }
			}

			if(args[0]=="insult"){
				 if(await purchase(user, 200)){
						return message.reply({ embed:insult(user.username,message.mentions.users.first())});
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }
			}

			if(args[0]=="drink"){
				if(await purchase(user, 10)){
					   return message.reply({ embed:drink(user.username,message.mentions.users.first())});
				}else{
					return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				}
		   }

			if(args[0]=="article"){
				 if(await purchase(user, 3500)){
						return message.reply("<@355931440061612035> will now write a BBL wiki article about a player, event or legend of your choosing.");
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }
			}


			if(args[0]=="cards"){
				 if(await purchase(user, 10000)){
						return message.reply("You have purchased assorted cards for 10,000 CC! <@187776456519057409> will contact you shortly!");
				 }else{
					 return message.reply('You only have '+ user.coins + ' Clanky Coins.')
				 }
			}
	}
};
