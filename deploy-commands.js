const dotenv = require("dotenv");
dotenv.config();

const { REST, Routes } = require("discord.js");
// const { clientId, guildId, token } = require("./config.json");
const fs = require("node:fs");
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith("schedules.js") || file.endsWith("ratings.js") || file.endsWith("status.js"));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	console.log("running");
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

console.log(token);
// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`
		);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands }
		);

		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`
		);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
