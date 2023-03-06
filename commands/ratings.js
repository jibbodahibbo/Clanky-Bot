let players = require('../players.js');
var fs = require("fs");
let rawdata = fs.readFileSync("players.json");

const playersJson = JSON.parse(rawdata);
const allowed_channels = ['733773776357163079','741308777357377617','778266821006458950'];
const draftratings = require(draft.js);

const canvas = require("../byb-bot.js").canvas;
const discord = require("../byb-bot.js").discord;
const { MessageEmbed } = require("discord.js");

const padding_value = 30;
const score_icon = ":green_square:";
const filler_icon = ":white_large_square:";

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
	for (let i = 0; i<Object.keys(playersJson).length-1; i++){

			if (playersJson[intToPair(i)].Name == a){
				console.log("Match")
					return (intToPair(i));
			}
		}
				let playerpair=""
				let closest="";
				console.log("closest Match...")
				for (let i = 0; i<Object.keys(playersJson).length-1; i++){
					let newstring = playersJson[intToPair(i)].name;

					if ( LD(a,closest) > LD(a,newstring) ){
						closest=newstring;
						playerpair=i;
						console.log(closest)
					}
			}
						return intToPair(playerpair);
	}

//Loops through players, returns string of a list (probably should just return an array object but this is how I did it.) all the players with a certain value of a certain stat.
function findStat(stat, n){
	let player_result = "";

	if (stat == 'running' || stat=='speed'){
		for (let i = 0; i<Object.keys(playersJson).length-1; i++){
			if (playersJson[intToPair(i)].running == parseInt(n)){
				player_result+= playersJson[intToPair(i)].name +', ';
			}
		}
	}else if (stat == 'batting' || stat == 'hitting'){
		for (let i = 0; i<Object.keys(playersJson).length-1; i++){
			if (playersJson[intToPair(i)].batting == parseInt(n)){
				player_result+= playersJson[intToPair(i)].name;
				if (['Jocinda Smith', 'Annie Frazier', 'Felix Grant', 'Heather Quinn'].includes(players.Players[intToPair(i)].Name)){
					player_result+='\\\*'
				}
				player_result+=', '

			}
		}
	}else if (stat == 'pitching'){
		for (let i = 0; i<Object.keys(playersJson).length-1; i++){
			if (playersJson[intToPair(i)].pitching == parseInt(n)){
				player_result+= playersJson[intToPair(i)].name +', ';
			}
		}
	}else if (stat == 'fielding'){
		for (let i = 0; i<Object.keys(playersJson).length-1; i++){
			if (playersJson[intToPair(i)].fielding == parseInt(n)){
				player_result+= playersJson[intToPair(i)].name +', ';
			}
		}
	}
	return player_result;
}

function buildPlayerInfoMessage(player) {
	let scoreString = ":green_square:";
	let fillerString = ":white_large_square:";

	let birthday_string =
		"birthday_month" in player
			? `:birthday: ${player.birthday_month}/${player.birthday_day}\n`
			: "";
	let nickname_string = ("nickname" in player) ? `${player.nickname}` : "";

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

	let playerEmbed = new MessageEmbed()
		.setDescription(message);
		// .setFooter(
		// 	`Draft pick #${draft_num} by ${coaches[current_drafter][1]}`
		// )
		
	if ("headshot_image" in player) {
		playerEmbed.setThumbnail(player.headshot_image);
	}

	return playerEmbed;
}

function getScoreString(score) {
	score_string = score_icon.repeat(score) + filler_icon.repeat(10 - score);
	return score_string;
}

function drawStat(ctx, stat_name, stat_value, x_start, y_start) {
	ctx.font = "bold 32px Sans-Serif";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	stat_name = stat_name.charAt(0).toUpperCase() + stat_name.slice(1);
	
	let bar_adjustment = 4;
	let bar_height_full = 20;
	// canvas_width = 1280
	// canvas_width / 2 - (x_start + padding_value * 2)
	// 640
	let bar_width_full = 640 - (x_start + (padding_value));
	// let bar_width_full = 500;
	let bar_horizontal_padding = 2;
	let bar_vertical_padding = 2;
	// x_start = 30 + name_width
	// y_start = draw_height + 30 + 30
	ctx.fillText(`${stat_name}:`, x_start, y_start);

	ctx.fillStyle = "white";
	ctx.fillRect(x_start + padding_value, y_start + bar_adjustment, bar_width_full, bar_height_full);
	ctx.fillStyle = "gray";
	let inner_width = bar_width_full - (bar_horizontal_padding * 2);
	ctx.fillRect(x_start + padding_value + bar_horizontal_padding, y_start + bar_adjustment + bar_vertical_padding, inner_width, bar_height_full - (bar_vertical_padding * 2));
	ctx.fillStyle = "#1FFF9A";
	let batting_width = inner_width / 10 * stat_value;
	ctx.fillRect(x_start + padding_value + bar_horizontal_padding, y_start + bar_adjustment + bar_vertical_padding, batting_width, 16);
}


module.exports = {
	name: 'ratings',
	description: 'Ratings',
	async execute(message, args) {
		//Check for valid channel, or DM
		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
		}


		let result="hmmm..";

		if (args[0] == "test") {
			const test_canvas = canvas.createCanvas(1280, 720);
			const ctx = test_canvas.getContext("2d");
			
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, test_canvas.width, test_canvas.height);
			ctx.strokeStyle = "white";
			ctx.lineWidth = 20;
			ctx.stroke();
			ctx.strokeRect(0,0,1280, 720);
			const background = await canvas.loadImage("https://i.ibb.co/W0w9QNw/Achmed-Khan-HS.png");
			console.log(background);
			let final_width = 600;
			let final_height = 350;
			let draw_width;
			let draw_height;
			if(background.width > background.height){
				draw_width = final_width;
				draw_height = final_width / background.width * background.height;
			} else {
				draw_width = final_height / background.height * background.width;
				draw_height = final_height;
			} 

			ctx.drawImage(background, 30, 30, draw_width, draw_height);

			let player_info = {
				"name": "Achmed Khan",
				"batting": 10,
				"running": 7,
				"pitching": 2,
				"fielding": 5,
				"arm": 6,
				"nickname": "Axeman",
        		"bats": "R",
        		"throws": "R",
				"birthday_month": "7",
				"birthday_day": "11",
			};

			// Name
			let name = "Achmed Khan";
			ctx.font = "72px Sans-Serif";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(name, ((test_canvas.width - (30 + draw_width)) / 2) + 30 + draw_width, 92);		
			
			// Nickname and Birthday
			ctx.font = "32px Sans-Serif";
			ctx.textAlign = "left";
			ctx.fillText(player_info["nickname"], draw_width + padding_value * 2, 130);

			ctx.textAlign = "right";
			ctx.fillText(`${player_info["birthday_month"]}/${player_info["birthday_day"]}`, test_canvas.width - padding_value * 2, 130);

			// Stats
			let batting_stat = 9;
			let stat_name = "batting";
			let stat_value = player_info["batting"];

			ctx.font = "bold 32px Sans-Serif";
			ctx.fillStyle = "white";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			let name_width = ctx.measureText("Running:").width;

			drawStat(ctx, stat_name, player_info[stat_name], name_width + padding_value, draw_height + padding_value * 2);
			let padding_between_stats = 40;
			drawStat(ctx, "running", player_info["running"], name_width + padding_value, draw_height + padding_value * 2 + padding_between_stats);
			drawStat(ctx, "pitching", player_info["pitching"], name_width + padding_value, draw_height + padding_value * 2 + (padding_between_stats * 2));
			drawStat(ctx, "fielding", player_info["fielding"], name_width + padding_value, draw_height + padding_value * 2 + (padding_between_stats * 3));
			drawStat(ctx, "arm", player_info["arm"], name_width + padding_value, draw_height + padding_value * 2 + (padding_between_stats * 4));
			
			
			const attachment = new discord.MessageAttachment(test_canvas.toBuffer(), "test-image.png");

			return message.reply(attachment);
		}

		if ( ['running', 'batting', 'pitching', 'fielding', 'speed','hitting'].includes( args[0].toLowerCase()) ){
					result = findStat(args[0].toLowerCase(),args[1]);

		}else{

				if (args.length==1 && args[0].length==2){
					let pair = args[0].toUpperCase();
					result = buildPlayerInfoMessage(playersJson[pair]);
						// result =  pair+': '+playersJson[args[0]].Name +"\n";
						// result += "Batting  :" + baseballs(parseInt(playersJson[pair].batting)) +"\n";
						// result += "Running:" + baseballs(parseInt(playersJson[pair].running)) +"\n";
						// result += "Pitching:" + baseballs(parseInt(playersJson[pair].pitching)) +"\n";
						// result += "Fielding:" + baseballs(parseInt(playersJson[pair].fielding));
					}else{
					let pair = findPlayer(args[0] + ' ' + args[1]);
					result = buildPlayerInfoMessage(playersJson[pair]);
						// result = pair+': '+playersJson[pair].name +"\n";
						// result += "Batting  :" + baseballs(parseInt(playersJson[pair].batting)) +"\n";
						// result += "Running:" + baseballs(parseInt(playersJson[pair].running)) +"\n";
						// result += "Pitching:" + baseballs(parseInt(playersJson[pair].pitching)) +"\n";
						// result += "Fielding:" + baseballs(parseInt(playersJson[pair].fielding));
					}
				}
				let league ="";
				message.channel.send(draftratings.buildPlayerDraftMessage(league, playerPool.data[drafted_name]));
		message.channel.send(result);
		
	},};
