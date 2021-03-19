const fs = require('fs');
const Discord = require('discord.js');
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const googleAuth = require("./auth");
const Canvas = require('canvas');

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
	sequelize: sequelize
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
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.TOKEN);
