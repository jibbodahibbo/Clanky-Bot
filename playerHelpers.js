const players = require("./players_master.js");
const playerVariants = require("./player_variants.js");
const { EmbedBuilder} = require("discord.js");
// LD
function LD(a, b) {
	if (a.length == 0) return b.length;
	if (b.length == 0) return a.length;

	var matrix = [];

	// increment along the first column of each row
	var i;
	for (i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	// increment each column in the first row
	var j;
	for (j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	// Fill in the rest of the matrix
	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) == a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1, // substitution
					Math.min(
						matrix[i][j - 1] + 1, // insertion
						matrix[i - 1][j] + 1
					)
				); // deletion
			}
		}
	}

	return matrix[b.length][a.length];
}

// takes in unverified text (user input) and returns if it's a recognized player
// returns empty string ("") if the name couldn't match
function findPlayerName(unverified_text) {
	verified_name = "";

	// if the name is recognized as a key (spelled correctly)
	if (players.data.hasOwnProperty(unverified_text)) {
		verified_name = unverified_text;
	}
	// if not, let's search for it
	else {
		let closest = "";

		for (a_player_name in players.data) {
			if (
				LD(unverified_text, closest) >
				LD(unverified_text, a_player_name)
			) {
				closest = a_player_name;
			} // end for loop
		}
		verified_name = closest;
	}

	return verified_name;
}

const highlight_stats = [
	"Bat Power",
	"Bat Contact",
	"Speed",
	"Stamina",
	"Coordination",
	"Arm Strength",
	"Height/S-Zone",
];

const offense_stats = ["Bat Power", "Bat Contact", "Speed", "Stamina"];

const defense_stats = [
	"Coordination",
	"Eye",
	"Arm Strength",
	"Throwing",
	"Speed",
    "Stamina",
    "Height/S-Zone"
];

const pitching_stats = [
	"Stamina",
	"Heat",
	"Slowball",
	"Left Hook",
	"Right Hook",
];

const ai_stats = ["Intelligence", "Attention", "Aggression"];

const statToAcr = {
	Stamina: "STA",
	Intelligence: "INT",
	Coordination: "GLV",
	Speed: "SPD",
	"Arm Strength": "ARM",
	Throwing: "ACC",
	"Bat Power": "POW",
	"Bat Contact": "CON",
	Eye: "VIS",
	Attention: "FOC",
	Aggression: "AGR",
	Heat: "HEA",
	Slowball: "SLO",
	"Left Hook": "L-H",
	"Right Hook": "R-H",
	"Height/S-Zone": "HGT",
};

function buildStatString(stat_name, stat_value) {
	let text = "";

	if (stat_name == "Height/S-Zone") {
		if (stat_value >= 5) {
            text += ":blue_square:";
		} else if (stat_value >= 4) {
            text += ":green_square:";
		} else if (stat_value >= 3) {
            text += ":yellow_square:";
		} else if (stat_value >= 2) {
            text += ":orange_square:";
		} else if (stat_value >= 1) {
            text += ":red_square:";
		} else {
            text += ":brown_square:";
		}
	} else if (stat_name == "Speed") {
		if (stat_value >= 100) {
			text += ":star:";
		} else if (stat_value >= 96) {
			text += ":blue_square:";
		} else if (stat_value >= 80) {
			text += ":green_square:";
		} else if (stat_value >= 60) {
			text += ":yellow_square:";
		} else if (stat_value >= 40) {
			text += ":orange_square:";
		} else if (stat_value >= 20) {
			text += ":red_square:";
		} else {
			text += ":brown_square:";
		}
	} else {
		if (stat_value == 100) {
			text += ":star:";
		} else if (stat_value > 100) {
			text += ":mechanical_arm:";
		} else if (stat_value >= 90) {
			text += ":blue_square:";
		} else if (stat_value >= 70) {
			text += ":green_square:";
		} else if (stat_value >= 50) {
			text += ":yellow_square:";
		} else if (stat_value >= 30) {
			text += ":orange_square:";
		} else if (stat_value >= 15) {
			text += ":red_square:";
		} else {
			text += ":brown_square:";
		}
	}

	text += ` \`${statToAcr[stat_name]}: ${stat_value.toString().padEnd(3)}\` `;
	return text;
}

function buildSectionString(title, stats_list, player) {
	let text = title.length > 0 ? `**${title}**\n` : "\n";
	for (var i = 0; i < stats_list.length; i++) {
		text += buildStatString(stats_list[i], player[stats_list[i]]) + " ";
		if (i % 2 == 1) {
			text += "\n";
		}
	}
	text = text.trimEnd();
	text += "\n\n";
	return text;
}

function buildScaleString() {
    let text = "**Scale** (bad - perfect)\n";
    text += ":brown_square::red_square::orange_square::yellow_square::green_square::blue_square::star:";
    return text;
}

function buildPersonalInfoString(player) {
    let text = "";
    text += player["Nickname"].length > 0 ? player["Nickname"] : "";
    text += " ";
    text += player["B-Day Month"] != "N/A" ? `:birthday: ${player["B-Day Month"]} ${player["B-Day Day"]}` : "";
    text += "\n";
    return text;
}

function buildVersionString(player) {
    let text = "**Versions:** ";
    let versions = [];
    if (player["01"]) {
        versions.push("01");
    }

    if (player["03"]) {
        versions.push("03");
    }
    text += versions.join(", ");
    text += "\n";
    return text;
}

function buildPlayerRatingsMessage(player, options = {}) {
	let is_variant = false;
    let variant_key = "";
    let name = player["Name"];
    const current_variant = options["variant"] ?? null;
    const includeScale = options["includeScale"] ?? false;

    let available_variants = [];
    if (player["Variants"] != null) {
        available_variants = player["Variants"].split(", ");
    }

    if (current_variant) {
		is_variant = true;
        name = player["Name"] + ` (${options["variant"]})`;
        console.log(current_variant)
        console.log(name);
        player = playerVariants["data"][name];
	} else {
        if (
			available_variants.length > 0 &&
			available_variants.includes("01")
		) {
			name = player["Name"] + " (03)";
		}
    }

    // if (player["Variants"] != null) {
	// 	let variants = player["Variants"].split(", ");

	// 	if (player["Name"] === "Maria Luna") {
	// 		variant_key = `${player["Name"]} (Pink)`;
	// 		player = playerVariants.data[variant_key];
	// 		is_variant = true;
	// 	}

	// 	if (variants.includes("01")) {
	// 		variant_key = `${player["Name"]} (01)`;
	// 		player = playerVariants.data[variant_key];
	// 		is_variant = true;
	// 	}
	// }

    // if (options.hasOwnProperty("variant")) {
    //     is_variant = true;
    //     name = player["Name"] + `(${options["variant"]})`;
    //     switch (options["variant"]) {
    //         case "01":
    //             break;
    //         default:
    //             break;
    //     }
    // }

	

	let title = `__**${name}**__`;
    let clone_message =
        player["Clone"].length > 0 ? `**Clone:** ${player["Clone"]}\n` : "";
    let message = "";
    message += buildPersonalInfoString(player);
    message += buildVersionString(player);
    message += clone_message;
    message += "\n";
    message += buildSectionString("Offense".toUpperCase(), offense_stats, player);
	message += buildSectionString("Defense".toUpperCase(), defense_stats, player);
	message += buildSectionString("Pitching".toUpperCase(), pitching_stats, player);
    message += buildSectionString("AI Skills".toUpperCase(), ai_stats, player);
    
    message += includeScale ? buildScaleString() : "";

	let playerEmbed = new EmbedBuilder()
		.setTitle(title)
		.setDescription(message);

	playerEmbed.setThumbnail(player["Image URL"]);
	return playerEmbed;
}

module.exports = {
    findPlayerName,
    buildPlayerRatingsMessage
};
