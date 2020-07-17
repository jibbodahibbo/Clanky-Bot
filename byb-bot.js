const fs = require('fs');
const Discord = require('discord.js');
const Sequelize = require('sequelize');

//const { prefix, token } = require('./config.json');
const players = require('./players.js');
const prefix='!';


const client = new Discord.Client();

const sequelize = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: 'postgres',
	port: '5432'

});

const ClankyCoins = sequelize.define('Clanky Coins', {
	id: Sequelize.TEXT,
	username: Sequelize.STRING,
	coins: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
	tag: Sequelize.STRING
});


client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
	ClankyCoins.sync();
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.token);
