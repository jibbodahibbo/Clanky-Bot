const { MessageEmbed } = require('discord.js');
const allowed_channels = ['733773776357163079','741308777357377617','778266821006458950'];

module.exports = {
	name: 'shop',
	description: 'Buy things with clankycoins',
	execute(message, args) {


		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
		}
		const shop_embed={

			    "title": "Clanky's Shop",
			    "description": "Redeem Physical and Digital Prizes with your Clanky Coins",
			    "color": 10038562,
			        "thumbnail": {
			      "url": "https://static.wikia.nocookie.net/backyard_sports_leagues/images/3/38/Clanky.jpg/revision/latest/scale-to-width-down/130?cb=20210127180303"
			    },
			    "fields": [
					{
						"name": "!buy drink <@username>: 10 CC",
						"value":"The BYB-Bot will buy someone a drink!",
					  },
			      {
			        "name": "!buy congratsme : 50 CC",
			        "value":"The BYB-Bot will congratulate you with a gif.",
			      },
			            {
			        "name": "!buy joke : 100 CC",
			        "value": "The BYB-Bot will tell you a very rare backyard baseball themed joke.",
			      },
			       {
			        "name": "!buy insult <@username> : 200 CC",
			        "value": "The BYB-Bot will insult somebody for you publicly and in a DM",
			      },			       {
			        "name": "!buy card : 500 CC",
			        "value": "<@1076857450399014932> will make you a Digital Backyard Kid Card!",
			      },
						{
						 "name": "!buy article: 3,500 CC",
						 "value": "<@355931440061612035> will write a fandom article about a BBL player, event, or legend of your choosing.",
					 },
			      {
			        "name": "!buy mysterycards : 10,000 CC",
			        "value": "<@187776456519057409> will send you some assorted baseball cards (USA AND CANADA ONLY).",
			      }
			    ]
					}
		message.channel.send({ embed: shop_embed });

	},
};
