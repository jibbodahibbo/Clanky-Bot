let players = require('../players.js');
// let playerPool = require('../playerPool.js');
let playerPool = require('../players_master.js');
let playerVariants = require('../player_variants.js');
const {Draft_j} = require('../dbInit');
const { Op } = require("sequelize");
const { googleAuth } = require('../byb-bot.js');
const auth = require('../auth.js');
const { google } = require('googleapis');
var fs = require("fs");
const { MessageEmbed } = require('discord.js');
let rawdata = fs.readFileSync("players.json");
const playerData = JSON.parse(rawdata);
rawdata = fs.readFileSync("players_full.json");
const fullPlayerData = JSON.parse(rawdata);
rawdata = fs.readFileSync("draft_stock.json")
const draftStockData = JSON.parse(rawdata);

const sheets = require("../byb-bot.js").sheets;
const discord = require("../byb-bot.js").discord;

const allowed_channels = [
	"741308777357377617",
	"782331491656138783",
	"847513377811070997",
	"918362812223459339",
	"919379673178337290",
];
const sheetsAPIKey =process.env.Sheets_APIKey
const draft_url = process.env.s6_sheet_id;
const bb_resources_id = "1waTChkjtCecz_3_dtEMTqnf_r8276NjB_zrzK-n7O6g";
const player_profiles_id = "178tUs7GwTMLEZQS_CCYTdAsvCgVP4-rZ_q9336B5zso";
const score_icon = ":green_square:";
const filler_icon = ":white_large_square:";
let bot_channel;

const coach_data = {
	// BB: { id: "187776456519057409", username: "JibboDaHibbo", version: "03" },
	BB: { id: "fake role", username: "JibboDaHibbo", version: "03", team_name: "Mighty Tigers", team_color: "yellow"},
	MF: { id: "377672560780902402", username: "test_user", version: "01", team_name: "Boston Red Sox", team_color: 15138865},
};

const coaches = {
	C8: ["355931440061612035", "crazyei8hts"],
	MF: ["753099045651742731", "JorgesBankAccount"],
	CW: ["430920494351515650", "Elchrisblanco"],
	JL: ["377672560780902402", "jlund24"],
	BB: ["fake role id", "JibboDaHibbo"],
	// BB: ["187776456519057409", "JibboDaHibbo"],
	MM: ["698632902778552380", "shrewsbury91"],
	AE: ["105512327293448192", "Aesnop"],
	YY: ["74323981670285312", "Yurya"],
	13: ["201134409863266305", "kiiiiiiiiiiiiis"],
	WZ: ["273653649522294784", "Wizard"],
	JY: ["307010267001257996", "Jyknight"],
	IN: ["437956094023696385", "NateinDisney"],
	MV: ["296815103985319936", "Mavfatha"],
	EX: ["252968570382843904", "Eauxps I. Fourgott"],
	YT: ["213203256606851072", "Marco"],
	JJ: ["142464556151734272", "Jarod Johnson"],
	26: ["470389312291209246", "T-Boz"],
	JV: ["78596893797523456", "TheRealSisu"],
	N8: ["87804201056337920", "Natetastic28"],
	VS: ["135436127862652928", "Vissery"],
	SB: ["711388106749902849", "SilverBullet102"],
	TO: ["692170461047554048", "Toast"],
	SK: ["318469807282585640", "skolgamingnetwork"],
	MT: ["335400047070019585", "MelloMathTeacher"],
	H1: ["858756378411794432", "hitace"],
	RP: ["787658565137596426", "Repub92"],
	GS: ["355934424061181972", "GSchlim"],
	NO: ["338726157233160194", "Nodakkian"],
	TY: ["260446506559995905", "areyoutyler"],
	DW: ["350069739974033428", "DevanWolf"],
	MA: ["301887858938216449", "MartianMan"],
};

const teams = {
	C8: ["Crazy Athletics", "green"],
	BB: ["Mighty Tigers", "yellow"],
	YY: ["Green Monsters", "lime"],
	WZ: ["Chicago Cubs", "blue"],
	13: ["Boston Cubs", 39129],
	MF: ["Boston Red Sox", 15138865],
	MV: ["Baltimore Orioles", 15695665],
	AE: ["Minnesota Mariners", "teal"],
	EX: ["Super-Duper Melonheads", "pink"],
	N8: ["Atlanta Braves", 16711680],
	CW: ["Seattle Fishes", "blue"],
	JL: ["Baltimore Bombers", "black"],
	JY: ["San Diego Padres", "gray"],
	MM: ["Boston Reds", "red"],
	IN: ["Los Angeles Angels", 16065893],
	JV: ["Arizona Diamondbacks", "purple"],
	SB: ["Little Giants", "orange"],
	MT: ["Junior Athletics", "green"],
	26: ["Tampa Bay Devil Rays", "black"],
	JJ: ["Los Angeles Dodgers", "teal"],
	VS: ["Humongous Hornets", "blue"],
	SK: ["Florida Marlins", 48028],
	YT: ["Mighty Wombats", 7589],
	TO: ["Minnesota Twins", 255],
	H1: ["New York Yankees", "blue"],
	RP: ["Baltimore Bombers", "red"],
	GS: ["Toronto Blue Jays", "blue"],
	NO: ["Mighty Angels", "black"],
	TY: ["Texas Rangers", "blue"],
	DW: ["Milwaukee Cardinals", "red"],
	MA: ["Colorado Rockies", "purple"],
};

// const draft_sheet_id = "1vaozO0ZZDEFSop2qEDZfFpTWKylMn8qbw2SrjbEh620";
const draft_sheet_id = "10Hq1AT5zzkwdgC2-tJue2BUv06Mmbn1_5tk111tTpAQ"; // <--- THIS IS THE S8 ONE
// const draft_sheet_id = "17--pYnuHJz9kGT9B1oNTuSx_-pUzQ9XDtpVJTpE8HuU"; // <--- This is jlund's copy
const draft_cell_start = '';

let draft_num = 1;
let draft_cell = 'A1';
let current_drafter = ""; //Should be a 2 char pair.
let draft_lock = true;

async function getNextOpenPick() {
  let sheetName = "DRAFT_TEST!";
  let range = "A1:B216";
  let result;
  let auth = await googleAuth.authorize();

  try {
		result = await sheets.spreadsheets.values.get({
			auth: auth,
			spreadsheetId: draft_sheet_id,
			range: sheetName + range,
		});
  } catch (err) {
		console.log(err);
  }

  let next_pick = draft_num;
  // console.log(result.data.values[0]);
  if (result.data.hasOwnProperty("values")) {
		for (let i = 0; i < result.data.values.length; i++) {
			if (result.data.values[i].length == 1) {
        next_pick = i + 1;
        break;
			}
		}
  }

  return next_pick;
}

async function getFullDraft() {
  let sheetName = "DRAFT_TEST!";
  let range = "A1:B216"
  let result;
  let auth = await googleAuth.authorize();
    
  try {
      result = await sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: draft_sheet_id,
      range: sheetName + range,
    });
  } catch (err) {
    console.log(err);
  }

  let draftObj = {};
  // console.log(result.data.values[0]);
  if (result.data.hasOwnProperty("values")) {
    for (let i = 0; i < result.data.values.length; i++) {
      if (result.data.values[i].length > 1) {
        draftObj[i + 1] = { pick_num: i + 1, team: result.data.values[i][0], "player": result.data.values[i][1] };
      }
    }
  }
  
  
  return draftObj;
}

async function getAllPicksFromDB() {
  let drafted_players;
  try {
      drafted_players = await Draft_j.findAll({
      where: {
        team: { [Op.not]: "undrafted" },
      },
    });
  } catch (e) {
    console.log(e);
    return {};
  }
  
  let draftObj = {}
  for (let i = 0; i < drafted_players.length; i++) {
      draftObj[drafted_players[i].pick_num] = { "pick_num": drafted_players[i].pick_num, "team": drafted_players[i].team, "player": drafted_players[i].player };
  }
  // console.log(draftObj);
  return draftObj;
}

async function getCurrentCoach() {
  let sheetName = "DRAFT_TEST!";
  let range = "A" + draft_num;
  let result;

  try {
    let auth = await googleAuth.authorize();
    result = await sheets.spreadsheets.values.get({
      // auth: sheetsAPIKey,
      auth: auth,
			spreadsheetId: draft_sheet_id,
			range: sheetName + range,
		});
  } catch (err) {
		console.log(err);
  }
  if (!result.hasOwnProperty("data")) {
    return "";
  }

  if ('values' in result.data) {
    return result.data.values[0][0];
  }
  else {
    return "";
  }
}

async function writePlayerToDraft(playerName, playerID) {
  let sheetName = "DRAFT_TEST!";
  let range = `B${draft_num}:C${draft_num}`;
  // let range = "B" + draft_num;
  let result;

  let new_values = [[playerName, playerID]];
  let resource = { values: new_values };
  try {
    let auth = await googleAuth.authorize();
		result = await sheets.spreadsheets.values.update({
			auth: auth,
			spreadsheetId: draft_sheet_id,
      range: sheetName + range,
      valueInputOption: "USER_ENTERED",
      resource: resource,
		});
  } catch (err) {
		console.log(err);
  }

  // return result.data.values[0][0];
}

async function getPlayersFromSheetsHelper(data, context) {
  let auth = await googleAuth.authorize();
	let response = await sheets.spreadsheets.values
		.get({
			auth: auth,
			spreadsheetId: bb_resources_id,
			range: "rosters2003!A2:S265",
		})
    .then((res) => res.data.values);

  let personal_info = await sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: player_profiles_id,
    range: "03!A2:I63"
  })
  .then((res) => res.data.values);

  console.log(personal_info);

  let bbCharToImageURL = {
    "B": "https://i.ibb.co/SfKDrCf/AB-Generic-HS.png",
    "C": "https://i.ibb.co/PMVVHw3/AC-Generic-HS.png",
    "D": "https://i.ibb.co/Vt9n0F9/AD-Generic-HS.png",
    "E": "https://i.ibb.co/jGmbTJt/AE-Generic-HS.png",
    "F": "https://i.ibb.co/7WKNZNS/AF-Generic-HS.png",
    "G": "https://i.ibb.co/5r0FTRK/AG-Generic-HS.png",
    "H": "https://i.ibb.co/QF5njpC/AH-Generic-HS.png",
    "I": "https://i.ibb.co/NVMXDbZ/AI-Generic-HS.png",
    "J": "https://i.ibb.co/xMFHmnB/AJ-Generic-HS.png",
    "K": "https://i.ibb.co/gTd1qmB/AK-Generic-HS.png",
    "L": "https://i.ibb.co/f1bXXwf/AL-Generic-HS.png",
    "M": "https://i.ibb.co/PGWVQzb/AM-Generic-HS.png"
};

  let playerData = {};
  for (value of response) {
    playerData[value[1]] = {
      rank: value[0],
      id: value[1],
      id_num: value[2],
      name: value[3],
      batting: value[4],
      running: value[5],
      pitching: value[6],
      fielding: value[7],
      arm: value[8],
      hand: value[9],
      face: value[10],
      total: value[11],
      overall: value[12],
      price: value[13],
      lock: value[14],
      rank_pitcher: value[15],
      rank_1b: value[16],
      rank_ss: value[17],
      rank_catcher: value[18],
    };

    if (playerData[value[1]]["face"].length == 1) {
      playerData[value[1]]["headshot_image"] = bbCharToImageURL[playerData[value[1]]["face"]];
    }
  }

  for (value of personal_info) {
    let birthday = value[2].split("/");
    playerData[value[0]]["birthday_month"] = birthday[0];
    playerData[value[0]]["birthday_day"] = birthday[1];
    playerData[value[0]]["nickname"] = value[3];
    playerData[value[0]]["bats"] = value[4];
    playerData[value[0]]["throws"] = value[5];
    playerData[value[0]]["bio"] = value[6];
    playerData[value[0]]["headshot_image"] = value[7];
    playerData[value[0]]["bio_image"] = value[8];
  }
	return playerData;
}

function getScoreString(score) {
  score_string = score_icon.repeat(score) + filler_icon.repeat(10 - score);
  return score_string;
}

const statToAcr = {
	Stamina: "STA",
	Intelligence: "INT",
	Coordination: "GLV",
	Speed: "SPD",
	"Arm Strength": "ARM",
	"Throwing": "ACC",
	"Bat Power": "POW",
	"Bat Contact": "CON",
	Eye: "VIS",
	Attention: "FOC",
	Aggression: "AGR",
	Heat: "HEA",
	Slowball: "SLO",
	"Left Hook": "L-H",
  "Right Hook": "R-H",
  "Height/S-Zone": "HGT"
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
      text += ":blue_square:"
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

const highlight_stats = ["Bat Power", "Bat Contact", "Speed", "Stamina", "Coordination", "Arm Strength", "Height/S-Zone"];

const offense_stats = ["Bat Power", "Bat Contact", "Speed", "Stamina"];

const defense_stats = [
	"Coordination",
	"Eye",
	"Arm Strength",
	"Throwing",
	"Speed",
	"Stamina",
];

const pitching_stats = [
	"Stamina",
	"Heat",
	"Slowball",
	"Left Hook",
	"Right Hook",
];

const ai_stats = ["Intelligence", "Attention", "Aggression"];

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

function buildPlayerDraftMessage(player) {
  
  // let message = `**Available for**: ${player["01"] ? "01, " : ""}${player["03"] ? "03" : ""}\n`;
  let is_variant = false;
  let variant_key = "";

  if (player["Variants"] != null) {
    let variants = player["Variants"].split(", ");

    if (player["Name"] === "Maria Luna") {
      variant_key = `${player["Name"]} (Pink)`;
      player = playerVariants.data[variant_key];
      is_variant = true;
    }

    if (variants.includes("01") && coach_data[current_drafter]["version"] === "01") {
      variant_key = `${player["Name"]} (01)`;
      player = playerVariants.data[variant_key];
      is_variant = true;
    }
  }

  let title = `[#${draft_num}] __**${is_variant ? variant_key : player["Name"]}**__ :arrow_right: *${teams[current_drafter][0]} (${current_drafter})*`;
  let clone_message = player["Clone"].length > 0 ? `Clone: ${player["Clone"]}` : "";
  let message = clone_message + buildSectionString("", highlight_stats, player);
	// message += buildSectionString("Defense".toUpperCase(), defense_stats, player);
	// message += buildSectionString("Pitching".toUpperCase(), pitching_stats, player);
	// message += buildSectionString("AI Skills".toUpperCase(), ai_stats, player);
  // message += `__**${player.name}**__\n`;

  // let s7_pick_num = draftStockData[player.id]["Draft S7"];
  // let avg_pick_num = draftStockData[player.id]["Avg Draft pick"];

  // message += `**S7 pick:** ${s7_pick_num} | **AVG pick:** ${avg_pick_num}`;
  // if (draft_num < s7_pick_num) {
  //   message += `Picked `
  // } else if (draft_num > s7_pick_num) {

  // } else {

  // }

  let playerEmbed = new MessageEmbed()
		.setTitle(title)
		.setColor(teams[current_drafter][1])
		.setDescription(message)
		.setFooter(`Draft pick #${draft_num} by ${coach_data[current_drafter]["username"]}`)
		.setTimestamp();

  
		playerEmbed.setThumbnail(player["Image URL"]);
		//   playerEmbed.setThumbnail("https://i.ibb.co/tLWPDDY/Bombers-Custom.png");
		//   playerEmbed.setImage(
		// 	"https://cdn.discordapp.com/attachments/733832887769628694/918688317539770408/Screen_Shot_2021-12-09_at_7.18.46_PM.png"
		// );
  

  return playerEmbed;
}

function buildPlayerInfoMessage(player) {
  let scoreString = ":green_square:";
  let fillerString = ":white_large_square:";

  let birthday_string =
		"birthday_month" in player
			? `:birthday: ${player.birthday_month}/${player.birthday_day}\n`
			: "";
  let nickname_string = "nickname" in player ? `${player.nickname}` : "";

  let message = "";
  message += `__**${player.name}**__ (${player.id})\n`;
  message += nickname_string + " " + birthday_string + "\n";
  message += `\`BAT:\` ${getScoreString(player.batting)} (${player.batting})\n`;
  message += `\`RUN:\` ${getScoreString(player.running)} (${player.running})\n`;
  message += `\`PIT:\` ${getScoreString(player.pitching)} (${player.pitching})\n`;
  message += `\`FLD:\` ${getScoreString(player.fielding)} (${player.fielding})\n\n`;
  // message += `\`ARM:\` ${getScoreString(player.arm * 2)} (${player.arm * 2})\n\n`;

  message += `**Hand:** ${player.hand} **Lock:** ${player.lock != "" ? player.lock : "n/a"} **P Rank:** ${player.rank_pitcher != "" ? player.rank_pitcher : "n/a"}\n`;
  message += `**1B Rank:** ${player.rank_1b != "" ? player.rank_1b : "n/a"} `;
  message += `**SS Rank:** ${player.rank_ss != "" ? player.rank_ss : "n/a"} `;
  message += `**C Rank:** ${player.rank_catcher != "" ? player.rank_catcher : "n/a"}`;

  let title = `[#${draft_num}] **_${teams[current_drafter][0]} (${current_drafter})_** pick`;
  let playerEmbed = new MessageEmbed()
    .setTitle(title)
    .setColor(teams[current_drafter][1])
    // .setDescription(message)
    .setFooter(`Draft pick #${draft_num} by ${coaches[current_drafter][1]}`)
    .setTimestamp();

  if ("headshot_image" in player) {
    playerEmbed.setThumbnail(player.headshot_image);
  //   playerEmbed.setThumbnail("https://i.ibb.co/tLWPDDY/Bombers-Custom.png");
  //   playerEmbed.setImage(
	// 	"https://cdn.discordapp.com/attachments/733832887769628694/918688317539770408/Screen_Shot_2021-12-09_at_7.18.46_PM.png"
	// );
  }

  return playerEmbed;
}

function baseballs(num){
	let bb=""
	for (var i=0; i<num;i++){
		bb+=":baseball:"
	}
	return bb;
}
//convert letter Pairs to int.
function pairToInt(pair){
  num1=pair.charAt(0).charCodeAt(0) - 65;
  num2=pair.charAt(1).charCodeAt(0) - 65;
  num= (num1*16)+num2;
  return num;
}
function intToPair(num){
		  n2 = num % 16;
		  n1 = Math.floor(num/16);
		  chr1 = String.fromCharCode(65 + n1)
		  chr2=  String.fromCharCode(65 + n2)
		  pair= chr1+chr2;
		  return pair;
}

//Levenschtein distance
function LD(a,b){
            if(a.length == 0) return b.length;
            if(b.length == 0) return a.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for(i = 0; i <= b.length; i++){
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for(j = 0; j <= a.length; j++){
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for(i = 1; i <= b.length; i++){
                for(j = 1; j <= a.length; j++){
                if(b.charAt(i-1) == a.charAt(j-1)){
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                            Math.min(matrix[i][j-1] + 1, // insertion
                                                    matrix[i-1][j] + 1)); // deletion
                }
                }
            }

        return matrix[b.length][a.length];
    };

//Compare player names to the argument, find best match.
function findPlayer(a){
	console.log("finding Player...")
	for (let i = 0; i<Object.keys(playerPool.Players).length; i++){

			if (playerPool.Players[intToPair(i)].Name == a){
				console.log("Match")
					return (intToPair(i));
			}
		}
				let playerpair=""
				let closest="";
				console.log("closest Match...")
				for (let i = 0; i<Object.keys(playerPool.Players).length; i++){
					let newstring = playerPool.Players[intToPair(i)].Name;

					if ( LD(a,closest) > LD(a,newstring) ){
						closest=newstring;
						playerpair=i;
						console.log(closest)
					}
			}
						return intToPair(playerpair);
}
  
// takes in unverified text (user input) and returns if it's a recognized player
function findPlayerName(unverified_text) {
  verified_name = "";

  // if the name is recognized as a key (spelled correctly)
  if (playerPool.data.hasOwnProperty(unverified_text)) {
    verified_name = unverified_text;
  }
  // if not, let's search for it
  else {
    let closest = "";

    for (a_player_name in playerPool.data) {
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

async function showTeamPlayers(message, args, client){
    const team_players = await Draft_j.findAll({
    where: {
      team: args[2],
    },
    });
  
  if (team_players.length == 0) {
		team_list = `${args[2]} has not drafted any players yet.`;
  } else {
    let team_list = coaches[args[2]][1] + " has drafted: " + "\n";
    
    for (let i = 0; i < team_players.length; i++) {
		  team_list += team_players[i].player + ", ";
    }
    team_list = team_list.substring(0, team_list.length - 2);
    client.users.cache.get(message.author.id).send(team_list);
  }

  
  
  }

async function showDraft(message, args, client){
      let drafted_players = await Draft_j.findAll({
      where: {
      team: {[Op.not]:'undrafted'},
      },
    });

    drafted_players = drafted_players.sort((a, b) =>
      parseInt(a.pick_num) < parseInt(b.pick_num) ? -1 : 1
    )

  let drafted_player_list = "";
  if (drafted_players.length > 0) {
    for (let i=0; i<drafted_players.length; i++ ){
      drafted_player_list += "["+ drafted_players[i].pick_num +"] " + drafted_players[i].player +", ";
    }
    drafted_player_list = drafted_player_list.substring(0, drafted_player_list.length - 2);
  } else {
    drafted_player_list = "No players have been drafted yet."
  }

  // truncate player string if necessary
  drafted_player_list = drafted_player_list.substring(0, Math.min(drafted_player_list.length, 1999));
  
    client.users.cache.get(message.author.id)
      .send(drafted_player_list);
}

async function getDraftStatus() {
  current_drafter = await getCurrentCoach();

  draft_status = `**Season 9 Draft**\n__Status__: ${
		draft_lock ? ":lock: Locked" : ":unlock: Unlocked"
    }\n__Pick #__: ${draft_num}\n__Current Coach__: ${current_drafter} | ${coaches[current_drafter][1]} | ${teams[current_drafter][0]}`;

  return draft_status;
}

async function getDraftAudit(message) {
  let audit_progress_message = await message.channel.send(
    "Auditing draft..."
  );
  let sheetsDraftObj = await getFullDraft();
  // await audit_progress_message.edit("Syncing draft: Getting database data...");
  let dbDraftObj = await getAllPicksFromDB();
  // await audit_progress_message.edit(
  //   "Syncing draft: Checking and fixing any issues..."
  // );
  let errors = { mismatch: [], missing: [] };
  for (let [key, sheets_pick] of Object.entries(sheetsDraftObj)) {
    if (key === "next_open_pick") {
      continue;
    }

    if (dbDraftObj.hasOwnProperty(sheets_pick["pick_num"])) {
      let db_pick = dbDraftObj[sheets_pick["pick_num"]];
      if (
        db_pick["team"] != sheets_pick["team"] ||
        db_pick["player"] != sheets_pick["player"]
      ) {
        let error_string = `DB Pick #${db_pick["pick_num"]} (${db_pick["team"]} | ${db_pick["player"]}) does not match Spreadsheet Pick #${sheets_pick["pick_num"]} (${sheets_pick["team"]} | ${sheets_pick["player"]})`;
        errors["mismatch"].push({ db: db_pick, ss: sheets_pick });
        console.log(error_string);
      }
    } else {
      // update db with pick data from sheet
      console.log(`DB missing pick #${sheets_pick["pick_num"]}: ${sheets_pick["team"]} ${sheets_pick["player"]}`);
      errors["missing"].push({ ss: sheets_pick });
      
    }
  }

  let reply_message = "**Draft Audit**\n";
  reply_message += `DB Picks: ${Object.keys(dbDraftObj).length} | SS Picks: ${Object.keys(sheetsDraftObj).length}`;
  reply_message += `\n${errors["mismatch"].length > 0 ? ":red_square:" : ":green_square:"} ${errors["mismatch"].length} mismatched picks`;
  reply_message += `\n${errors["missing"].length > 0 ? ":red_square:" : ":green_square:"} ${errors["missing"].length} missing picks (in db)`;
  if (errors["mismatch"].length > 0 || errors["missing"].length > 0) {
    reply_message += "\n*Use `!draft sync` to fix the above issues*";
  }

  await audit_progress_message.edit(reply_message);
  return;
}

async function syncDraft(message) {
  let sync_progress_message = await message.channel.send("Syncing draft | Getting spreadsheet data...");
  let sheetsDraftObj = await getFullDraft();
  await sync_progress_message.edit("Syncing draft | Getting database data...");
  let dbDraftObj = await getAllPicksFromDB();
  await sync_progress_message.edit(
    "Syncing draft | Checking for/fixing any issues..."
  );
  let errors = { mismatch: [], missing: [] };
  for (let [key, sheets_pick] of Object.entries(sheetsDraftObj)) {
    if (key === "next_open_pick") {
      continue;
    }

    if (dbDraftObj.hasOwnProperty(sheets_pick["pick_num"])) {
      let db_pick = dbDraftObj[sheets_pick["pick_num"]];
      if (
        db_pick["team"] != sheets_pick["team"] ||
        db_pick["player"] != sheets_pick["player"]
      ) {
        let error_string = `DB Pick #${db_pick["pick_num"]} (${db_pick["team"]} | ${db_pick["player"]}) does not match Spreadsheet Pick #${sheets_pick["pick_num"]} (${sheets_pick["team"]} | ${sheets_pick["player"]})`;
        errors["mismatch"].push({ db: db_pick, ss: sheets_pick });
        console.log(error_string);
        try {
          const old_player = await Draft_j.update(
            { team: "undrafted", pick_num: null },
            {
              where: {
                team: db_pick["team"],
                pick_num: db_pick["pick_num"],
              },
            }
          );
          let player_name = findPlayerName(sheets_pick["player"]);
          const change_player = await Draft_j.update(
            {
              team: sheets_pick["team"],
              pick_num: sheets_pick["pick_num"],
            },
            {
              where: {
                player: player_name,
              },
            }
          );

          // return message.reply(`Pick #${args[2]} is now ${player_name} (${args[1]})`);
        } catch (e) {
          await sync_progress_message.edit("Syncing failed.");
          return message.reply(
            "There was an error trying to sync the draft and spreadsheet."
          );
        }
      }
    } else {
      // update db with pick data from sheet
      console.log(
        `DB missing pick #${sheets_pick["pick_num"]}: ${sheets_pick["team"]} ${sheets_pick["player"]}`
      );
      errors["missing"].push({ ss: sheets_pick });
      let player_name = findPlayerName(sheets_pick["player"]);
      try {
        const change_player = await Draft_j.update(
          {
            team: sheets_pick["team"],
            pick_num: sheets_pick["pick_num"],
          },
          {
            where: {
              player: player_name,
            },
          }
        );
      } catch (e) {
        await sync_progress_message.edit("Syncing failed.");
        return message.reply(
          "There was an error trying to sync the draft and spreadsheet."
        );
      }
    }
  }
  let reply_message = "Draft is synced.";

  await sync_progress_message.edit(reply_message);
  await getDraftAudit(message);
  return;
}

module.exports = {
	name: 'draft',
	description: 'Draft',
	async execute(message, args, client) {
		//Check for valid channel, or DM
		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
    }
		//TODO Update to S9 RBBL Draft Channel
    bot_channel = client.channels.cache.get("741308777357377617");
		
    if (args[0] == "fix") {
      let player_name = "";
      if (args.length < 4 || args.length > 6) {
        return message.reply("That fix command wasn't formatted correctly. It should be `!draft fix [coach_id] [pick_num] [player_name]`");
      } else if (args.length == 4) {
        player_name = args[3];
      } else if (args.length == 5) {
        player_name = args[3] + " " + args[4];
      } else if (args.length == 6) {
        player_name = args[3] + " " + args[4] + " " + args[5];
      }
      
      try {
        const old_player = await Draft_j.update({ team: "undrafted", pick_num: null },
          {
            where: {
              team: args[1], pick_num: parseInt(args[2])
            }
          });
        player_name = findPlayerName(player_name);
    const change_player = await Draft_j.update({ team: args[1], pick_num:parseInt(args[2]) },
      { where:{
        player: player_name,
        }
      });
        
        return message.reply(`Pick #${args[2]} is now ${player_name} (${args[1]})`);
      } catch (e) {
      return message.reply("Couldn't find that player.");
    }
    }

    if (args[0])

    //View teams/playersdrafted
		if (args[0] == "view") {
			if (args[1] == "team") {
				await showTeamPlayers(message, args, client);
				return;
      } else {
        await showDraft(message, args, client);
		    return null;
      }
			
    }

    if (args[0] == "status") {
      return message.channel.send(await getDraftStatus());
    }

    ///Command for resetting the draft. (repopulates db table with players and sets team to 'undrafted' and draft_num to null)
    if (message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')) {
      if (args[0] == "lock") {
        draft_lock = true;
        return message.reply(
          "The draft is now locked. Use `!draft unlock` to unlock it. View commands will still work."
        );
      }

      if (args[0] == "unlock") {
        draft_lock = false;

        message.reply("The draft is now unlocked.")
        return message.channel.send(await getDraftStatus());
      }

      if (args[0] == "audit") {
        await getDraftAudit(message);
        return;
      }

      if (args[0] == "sync") {
        await syncDraft(message);
        return;
      }


    }

  // ANY COMMANDS BELOW HERE WILL BE BLOCKED IF THE DRAFT IS LOCKED
  if (draft_lock) {
      return message.reply("The draft is locked. Use `!draft unlock` to unlock it and try again. View commands will still work.");
  }


  if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
    if (args[0] == "reset") {
      let resetting_msg = await message.reply("The draft is resetting...");
      const reset = await Draft_j.destroy({ where: {}, truncate: true });
      let total = Object.keys(playerPool.data).length;

      for (let j = 0; j < Object.keys(playerPool.data).length; j++) {
        const cc = await Draft_j.create({
          player: Object.keys(playerPool.data)[j],
        });
        // console.log(Object.keys(playerPool.data)[j]);
        
        if (j % 25 == 0) {
          resetting_msg.edit(`The draft is being reset... (${j}/${total})`);
        }
			}
      resetting_msg.edit("The draft has been reset.");
      draft_num = 1;
      current_drafter = await getCurrentCoach();
      // message.reply("Draft Has Been Reset.")
      return message.channel.send(await getDraftStatus());
  }

    if (args[0] == 'set') {
      if (args.length > 1 && args[1] == "auto") {
        draft_num = await getNextOpenPick();
        current_drafter = await getCurrentCoach();
        let result = '';
        if (current_drafter == "") {
          return message.reply("There is no coach specified at pick #" + draft_num + ".\nTry setting the draft to a different pick or use `!draft lock` to lock the draft.");
        } else {
          return message.reply(`Draft set to pick #${draft_num}.\n${current_drafter} <@${coaches[current_drafter][0]}> is now on the clock.`)
        }
      } else if (Number.isInteger(parseInt(args[1]))) {
        draft_num = parseInt(args[1]);
        current_drafter = await getCurrentCoach();   //Replace with sheet cell magic
        let result = '';
        if (current_drafter == "") {
          return message.reply("There is no coach specified at pick #" + draft_num + ".\nTry setting the draft to a different pick or use `!draft lock` to lock the draft.");
        } else {
          return message.reply(`Draft set to pick #${draft_num}.\n${current_drafter} <@${coaches[current_drafter][0]}> is now on the clock.`)
        }

      }
    }
  }

    ///Command for Undoing. (decrements, removes cell information, updates db)
    if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
      if (args[0] == 'undo') {
        if (draft_num==1){
          return message.channel.send("You cannot undo picks that haven't happened yet.")
        }
        draft_num-=1;

        const undraft_player = await Draft_j.update({ team: 'undrafted', pick_num:null },
          { where:{
            pick_num:draft_num
            }
          });
          await writePlayerToDraft('', '');
          current_drafter= await getCurrentCoach();
          let result= 'Draft Pick #'+ draft_num + ' has been undone' + "\n "+current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock with pick #" +draft_num +".";
          return  message.channel.send(result);

      }
    }

    //// TODO: Change Players team


    if (args[0] == "test") {
      let audit_progress_message = await message.channel.send("Syncing draft: Getting spreadsheet data...");
      let sheetsDraftObj = await getFullDraft();
      await audit_progress_message.edit("Syncing draft: Getting database data...");
      let dbDraftObj = await getAllPicksFromDB();
      await audit_progress_message.edit("Syncing draft: Checking and fixing any issues...");
      let errors = { "mismatch": [], "missing": [] };
      for (let [key, sheets_pick] of Object.entries(sheetsDraftObj)) {
        if (key === "next_open_pick") {
          continue;
        }

        if (dbDraftObj.hasOwnProperty(sheets_pick["pick_num"])) {
          let db_pick = dbDraftObj[sheets_pick["pick_num"]];
          if (db_pick["team"] != sheets_pick["team"] || db_pick["player"] != sheets_pick["player"]) {
            let error_string = `DB Pick #${db_pick["pick_num"]} (${db_pick["player"]}) does not match Spreadsheet Pick #${sheets_pick["pick_num"]} (${db_pick["player"]})`;
            errors["mismatch"].push({ "db": db_pick, "ss": sheets_pick });
            
            // update pick in db

            try {
              const old_player = await Draft_j.update({ team: "undrafted", pick_num: null },
                {
                  where: {
                    team: db_pick["team"], pick_num: db_pick["pick_num"]
                  }
                });
              let player_name = findPlayerName(sheets_pick["player"]);
              const change_player = await Draft_j.update({ team: sheets_pick["team"], pick_num: sheets_pick["pick_num"] },
                {
                  where: {
                    player: player_name,
                  }
                });

              // return message.reply(`Pick #${args[2]} is now ${player_name} (${args[1]})`);
            } catch (e) {
              await audit_progress_message.edit("Syncing failed.");
              return message.reply("There was an error trying to sync the draft and spreadsheet.");
            }
          }
        } else {
          // update db with pick data from sheet
          console.log(`DB missing pick #${sheets_pick["pick_num"]}`);
          errors["missing"].push({ "ss": sheets_pick });
          let player_name = findPlayerName(sheets_pick["player"]);
          try {
            const change_player = await Draft_j.update(
              {
                team: sheets_pick["team"],
                pick_num: sheets_pick["pick_num"],
              },
              {
                where: {
                  player: player_name,
                },
              }
            );
          } catch (e) {
            await audit_progress_message.edit("Syncing failed.");
            return message.reply("There was an error trying to sync the draft and spreadsheet.");
          }
          
        }
      }

      await audit_progress_message.edit("The draft spreadsheet and database are synced.");

      // let reply_message = "**__Draft Audit__**\n";
      // reply_message += `${errors["mismatch"].length > 0 ? ":red_square:" : ":green_square:"} ${errors["mismatch"].length} mismatched picks`;
      // reply_message += `\n${errors["missing"].length > 0 ? ":red_square:" : ":green_square:"} ${errors["missing"].length} missing picks (in db)`;
      // if (sheetsDraftObj.hasOwnProperty("next_open_pick")) {
      //   if (draft_num != sheetsDraftObj["next_open_pick"]) {
      //     reply_message += `\n:red_square: Current pick #${draft_num} does not match spreadsheet (${sheetsDraftObj["next_open_pick"]})`;
      //   } else {
      //     reply_message += `\n:green_square: Current pick #${sheetsDraftObj["next_open_pick"]} matches the spreadsheet`;
      //   }

      // } else {
      //   reply_message += `\n:green_square: The draft is complete in the spreadsheet`;
      // }

      // message.channel.send(reply_message);
      return;
    }

    let result = "Unsuccessful Request, try again."; //Default response

    current_drafter = await getCurrentCoach();
    if (current_drafter == "") {
      draft_lock = true;
      return message.reply("The draft is complete and now locked. Use `!draft unlock` to unlock it.");
    }

    //Draft Procedure, first check to see if they are drafting by Char Pair, or by full Name.

    //Disabling ability to draft by pair.
    /*  let pair='XX'
      if (args.length==1 && args[0].length==2){
          pair = args[0].toUpperCase();
      }else{ */
    if (args.length == 3) {
      drafted_name = (args[0] + ' ' + args[1] + ' ' + args[2]);
    } else if (args.length == 2) {
      drafted_name = (args[0] + ' ' + args[1]);
    } else {
      drafted_name = (args[0]);
    }
    /*  } */
    try {


      // fix any typos
      drafted_name = findPlayerName(drafted_name);
      if (drafted_name === "") {
        return message.reply("Could not find that player. Try using their full name.");
      }

      const pick_to_draft = await Draft_j.findOne({
        where: {
          pick_num: draft_num
        }
      });

      if (pick_to_draft != null) {
        return message.reply(`This pick (#${draft_num}) has already been made! Make sure the bot is set to the right pick.`);
      }

      const player_to_draft = await Draft_j.findOne({
        where: {
          player: drafted_name,
        },
      });
      if (player_to_draft.team != 'undrafted') {
        return message.reply(`${drafted_name} has already been drafted by ${player_to_draft.team} (pick #${player_to_draft.pick_num}), try again`);
      }
      // check if player is available for the coach's version
      else if (!playerPool.data[drafted_name][`${coach_data[current_drafter]["version"]}`]) {
        return message.reply(
          `${drafted_name} is not available for ${coach_data[current_drafter]["version"]}, try again.`
        );
      }



      const draft_player = await Draft_j.update({ team: current_drafter, pick_num: draft_num },
        {
          where: {
            player: drafted_name,
            team: 'undrafted',
          }
        });

    } catch (e) {
      return message.reply("There was an error updating the database. Please try again.");
    }

				if (false && args.length==1 && args[0].length==2){
          let pair = args[0].toUpperCase();
          result = "";
						// result =  pair+': *'+playerPool.Players[args[0]].Name +  '* has been drafted by '+ coaches[current_drafter][1] +"\n";
            stat_report = playerPool.Players[args[0]].Name +"\n";
						stat_report += "Batting  :" + baseballs(parseInt(playerPool.Players[pair].Batting)) +"\n";
						stat_report += "Running:" + baseballs(parseInt(playerPool.Players[pair].Running)) +"\n";
						stat_report += "Pitching:" + baseballs(parseInt(playerPool.Players[pair].Pitching)) +"\n";
						stat_report += "Fielding:" + baseballs(parseInt(playerPool.Players[pair].Fielding));

            await writePlayerToDraft(playerPool.Players[args[0]].Name, args[0]);

					}else{
            let name = drafted_name;
            // if (args.length == 3) {
					  //      name =	findPlayerName(args[0]+' '+args[1]+ ' ' + args[2]);
            // } else if (args.length== 2) {
            //       name = findPlayerName(args[0]+' '+args[1]);
            // } else {
            //       name = findPlayerName(args[0]);
            // }
            result = "";
						// result = pair+': *'+playerPool.Players[pair].Name + '* has been drafted by '+ coaches[current_drafter][1] + ` (see #bot-chat)` +"\n";
            stat_report = name +"\n";
						stat_report += "Batting  :" + baseballs(parseInt(playerPool.data[name].B)) +"\n";
						stat_report += "Running:" + baseballs(parseInt(playerPool.data[name].R)) +"\n";
						stat_report += "Pitching:" + baseballs(parseInt(playerPool.data[name].P)) +"\n";
						stat_report += "Fielding:" + baseballs(parseInt(playerPool.data[name].F));

              await writePlayerToDraft(name, playerPool.data[name].ID);
					}

    //  bot_channel.send(stat_report);
    bot_channel.send(buildPlayerDraftMessage(playerPool.data[drafted_name]));

          // write to spreadsheet

          draft_num += 1;
          current_drafter = await getCurrentCoach();   //Replace with sheet cell magic
          if (current_drafter!=""){
            result+= current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock with pick #" +draft_num +".";
          } else {
            draft_lock = true;
            result += "🎊 The draft has concluded and is now locked. 🎊";
          }


		message.channel.send(result);
  },
};
