const fs = require('fs');
const Discord = require('discord.js');
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const googleAuth = require("./auth");
const Canvas = require('canvas');
const cron = require("cron");
const playerSpotlight = require('./playerSpotlight.js');
const botchat_channel = "778266821006458950";
const testlab_channel = "741308777357377617";
const jlundID = "377672560780902402";

// for jlund's local config
// const dotenv = require('dotenv');
// dotenv.config();

//const Sequelize = require('sequelize');
const {ClankyCoins, Schedules, Results, Draft_j, sequelize} = require('./dbInit.js');
//const { prefix, token } = require('./config.json');
const players = require('./players.js');
const prefix = process.env.PREFIX;


const client = new Discord.Client();

module.exports = {
	client: client,
	sheets: sheets,
	discord: Discord,
	googleAuth: googleAuth,
	canvas: Canvas,
	sequelize: sequelize,
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
	ClankyCoins.sync();
	Schedules.sync();
	Results.sync();
	Draft_j.sync();

	// fires every day at 10 am
	let playerSpotlightJob = new cron.CronJob("0 0 10 * * *", () => {
		client.channels
			.fetch(botchat_channel).then((channel) => {
				channel.send(playerSpotlight.getPlayerSpotlight());
			});
	});

	// playerSpotlightJob.start();
});

// Override old message handler

var newMC = require('discord.js');
delete newMC['client.actions.MessageCreate.handle'];

newMC.client.actions.MessageCreate.handle = function(data){

  const client = this.client;
  const channel = this.getChannel(data);
  if (channel) {
    if (!channel.isTextBased() || channel.messages==null) return {};
    console.log("NEW MC");
    const existing = channel.messages.cache.get(data.id);
    if (existing) return { message: existing };
    const message = channel.messages._add(data);
    channel.lastMessageId = data.id;

    /**
     * Emitted whenever a message is created.
     * @event Client#messageCreate
     * @param {Message} message The created message
     */
    client.emit(Events.MessageCreate, message);

    return { message };
  }

  return {};
}
module.exports = newMC;
//

try {
	client.on('message', async message => {
		console.log(message.content);
		if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	console.log(command, args);
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
} catch (error) {
	console.error(error);
}
client.login(process.env.TOKEN);
