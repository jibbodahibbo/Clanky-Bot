const { MessageEmbed } = require("discord.js");
const fs = require("fs");
let rawdata = fs.readFileSync("players.json");
const playerData = JSON.parse(rawdata);

const score_icon = ":green_square:";
const filler_icon = ":white_large_square:";
const jlundID = "377672560780902402";

function getRandomPlayerID() {
	let keys = Object.keys(playerData);
	let randomKey = keys[Math.floor(Math.random() * keys.length)];
	return randomKey;
}

function getPlayerSpotlight() {
	// pick random player from players.json
	let playerID = getRandomPlayerID();

	// build embed
    let playerEmbed = buildPlayerInfoMessage(playerID);
	let now = new Date(Date.now());
    playerEmbed.setTitle(`**Player Spotlight - ${now.getMonth() + 1}/${now.getDate()}**`).setTimestamp();
    return playerEmbed;
}

function getScoreString(score) {
	score_string = score_icon.repeat(score) + filler_icon.repeat(10 - score);
	return score_string;
}

function buildPlayerInfoMessage(playerID) {
	let player = playerData[playerID];

	let birthday_string =
		"birthday_month" in player
			? `:birthday: ${player.birthday_month}/${player.birthday_day}\n`
			: "";
	let nickname_string = "nickname" in player ? `${player.nickname}` : "";

	let message = "";
	message += `__**${player.name}**__ (${player.id})\n`;
	message += nickname_string + "⠀" + birthday_string + "\n";
	message += `\`BAT:\`⠀${getScoreString(player.batting)}⠀(${
		player.batting
	})\n`;
	message += `\`RUN:\`⠀${getScoreString(player.running)}⠀(${
		player.running
	})\n`;
	message += `\`PIT:\`⠀${getScoreString(player.pitching)}⠀(${
		player.pitching
	})\n`;
	message += `\`FLD:\`⠀${getScoreString(player.fielding)}⠀(${
		player.fielding
	})\n`;
	message += `\`ARM:\`⠀${getScoreString(player.arm * 2)}⠀(${
		player.arm * 2
	})\n\n`;

	message += `**Hand:** ${player.hand}⠀**Lock:** ${
		player.lock != "" ? player.lock : "n/a"
	}⠀**P Rank:** ${player.rank_pitcher != "" ? player.rank_pitcher : "n/a"}\n`;
	message += `**1B Rank:** ${player.rank_1b != "" ? player.rank_1b : "n/a"}⠀`;
	message += `**SS Rank:** ${player.rank_ss != "" ? player.rank_ss : "n/a"}⠀`;
	message += `**C Rank:** ${
		player.rank_catcher != "" ? player.rank_catcher : "n/a"
	}`;

	let playerEmbed = new MessageEmbed().setDescription(message);
	// .setFooter(
	// 	`Draft pick #${draft_num} by ${coaches[current_drafter][1]}`
	// )
	playerEmbed.setColor(16312092);

	if ("headshot_image" in player) {
		playerEmbed.setThumbnail(player.headshot_image);
	}

	return playerEmbed;
}

module.exports = {
	getPlayerSpotlight,
	buildPlayerInfoMessage,
};
