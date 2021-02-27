let players = require('../players.js');
const {Draft_j} = require('../dbInit');
const { Op } = require("sequelize");
const { googleAuth } = require('../byb-bot.js');
const auth = require('../auth.js');
const { google } = require('googleapis');
var fs = require("fs");
const { MessageEmbed } = require('discord.js');
let rawdata = fs.readFileSync("players.json");
const playerData = JSON.parse(rawdata);

const sheets = require("../byb-bot.js").sheets;
const discord = require("../byb-bot.js").discord;

const allowed_channels = ['741308777357377617','782331491656138783'];
const sheetsAPIKey =process.env.Sheets_APIKey
const draft_url = process.env.s6_sheet_id;
const bb_resources_id = "1waTChkjtCecz_3_dtEMTqnf_r8276NjB_zrzK-n7O6g";
const score_icon = ":green_square:";
const filler_icon = ":white_large_square:";
let bot_channel;


const coaches={
        "BB":['187776456519057409','JibboDaHibbo'],
        "JL":['377672560780902402','JLund24'],
        "69":['344305095577567233','MarcoMcGwire'],
        "C8":['355931440061612035','CrazyEi8ghts'],
        "NF":['342901488412000256','NickFolesIsMyDad'],
        "AE":['105512327293448192','Aesnop'],
        "13":['201134409863266305','Kiiiiiiiiiiiiis'],
        "XD":['207696852953333760','Gcool'],
        "EX":['252968570382843904','Eauxps I. Fourgott'],
        "WZ":['273653649522294784','Wizard'],
        "JY":['307010267001257996','Jyknight'],
        "GS":['355934424061181972','GSchlim'],
        "YY":['74323981670285312','Yurya'],
        "MB":['359717979732312064','Mbless'],
        "MV":['296815103985319936','Mavfatha'],
        "YT":['213203256606851072','Marco'],
        "26":['470389312291209246','TheyHateMe (T-Boz)'],
        "CW":['430920494351515650','Elchrisblanco'],
        "NO":['338726157233160194','Nodakkian'],
        "CK":['218371611588296706','Takenotes011'],
        "BA":['753099045651742731','Jorges Bank Account'],
        "JJ":['142464556151734272','Jarod Johnson'],
        "MM":['698632902778552380','shrewsbury91'],
        "JM":['779111772133130260','jmacdrums'],
      }

const draft_sheet_id = '1xtRDt9xoMIqbXeNAOP03lYKYdFe-oMhGZuTDCqxtRVM';
const draft_cell_start = '';



let draft_num = 1;
let draft_cell = 'A1';
let current_drafter = ""; //Should be a 2 char pair.
let draft_lock = true;



async function getFullDraft() {
  let sheetName = "DRAFT!";
  let range = "A1:A216"
  let result;
  try {
      result = await sheets.spreadsheets.values.get({
      auth: sheetsAPIKey,
      spreadsheetId: draft_sheet_id,
      range: sheetName + range,
    });
  } catch (err) {
    console.log(err);
  }

  let draftObj = [];
  console.log(result);
  for (row of result.data.values) {
    draftObj.push(row[0]);
  }
  console.log(draftObj);
}

async function getCurrentCoach() {
  let sheetName = "DRAFT!";
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
  if ('values' in result.data) {
    return result.data.values[0][0];
  }
  else {
    return "";
  }
  // console.log(result.data);
  // console.log(result.data.values);
  // return result.data.values[0][0];
}

async function writePlayerToDraft(playerName) {
  let sheetName = "DRAFT!";
  let range = "B" + draft_num;
  let result;

  let new_values = [[playerName]];
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
  }
	return playerData;
}

function getScoreString(score) {
  score_string = score_icon.repeat(score) + filler_icon.repeat(10 - score);
  return score_string;
}

function buildPlayerInfoMessage(player) {
  let scoreString = ":green_square:";
  let fillerString = ":white_large_square:";
  

  let message = "";
  message += `**${player.name}** (${player.id})\n`;
  message += `\`BAT:\`⠀${getScoreString(player.batting)}⠀(${player.batting})\n`;
  message += `\`RUN:\`⠀${getScoreString(player.running)}⠀(${player.running})\n`;
  message += `\`PIT:\`⠀${getScoreString(player.pitching)}⠀(${player.pitching})\n`;
  message += `\`FLD:\`⠀${getScoreString(player.fielding)}⠀(${player.fielding})\n`;
  message += `\`ARM:\`⠀${getScoreString(player.arm * 2)}⠀(${player.arm * 2})\n\n`;

  message += `**Hand:** ${player.hand}⠀**Lock:** ${player.lock != "" ? player.lock : "n/a"}⠀**P Rank:** ${player.rank_pitcher != "" ? player.rank_pitcher : "n/a"}\n`;
  message += `**1B Rank:** ${player.rank_1b != "" ? player.rank_1b : "n/a"}⠀`;
  message += `**SS Rank:** ${player.rank_ss != "" ? player.rank_ss : "n/a"}⠀`;
  message += `**C Rank:** ${player.rank_catcher != "" ? player.rank_catcher : "n/a"}`;

  let playerEmbed = new MessageEmbed().setDescription(message).setFooter(`Draft pick #${draft_num} by ${coaches[current_drafter][1]}`);
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
	for (let i = 0; i<Object.keys(players.Players).length; i++){

			if (players.Players[intToPair(i)].Name == a){
				console.log("Match")
					return (intToPair(i));
			}
		}
				let playerpair=""
				let closest="";
				console.log("closest Match...")
				for (let i = 0; i<Object.keys(players.Players).length; i++){
					let newstring = players.Players[intToPair(i)].Name;

					if ( LD(a,closest) > LD(a,newstring) ){
						closest=newstring;
						playerpair=i;
						console.log(closest)
					}
			}
						return intToPair(playerpair);
	}

async function showTeamPlayers(message, args, client){
    const team_players = await Draft_j.findAll({
    where: {
      team: args[2],
    },
  });

  let team_list = coaches[args[2]][1] + " has drafted.."+"\n";
  for (let i=0; i<team_players.length; i++ ){
    team_list += players.Players[team_players[i].player].Name +", ";
  }

  client.users.cache.get(message.author.id)
    .send(team_list);
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

    let drafted_player_list="";
    for (let i=0; i<drafted_players.length; i++ ){
      drafted_player_list += "["+ drafted_players[i].pick_num +"]" + players.Players[drafted_players[i].player].Name +", ";
    }

    client.users.cache.get(message.author.id)
      .send(drafted_player_list);
}
    
async function getDraftStatus() {
  current_drafter = await getCurrentCoach();

  draft_status = `**Season 6 Draft**\n__Status__: ${
		draft_lock ? "Locked" : "Unlocked"
    }\n__Pick #__: ${draft_num}\n__Current Coach__: ${current_drafter}`;
  
  return draft_status;
}

module.exports = {
	name: 'draft',
	description: 'Draft',
	async execute(message, args, client) {
		//Check for valid channel, or DM
		if (!allowed_channels.includes(message.channel.id) && message.guild != null){
			return null;
    }

    bot_channel = client.channels.cache.get("778266821006458950");

    if (args[0] == "fix"){
      try{
    const change_player = await Draft_j.update({ team: args[2], pick_num:parseInt(args[3]) },
      { where:{
        player:args[1],
        }
      });
      return message.reply(change_player.player + change_player.team + change_player.pick_num);
      } catch (e) {
      return message.reply("Couldn't find that player.");
    }
    }

    //View teams/playersdrafted
		if (args[0] == "view") {
			if (args[1] == "team") {
				await showTeamPlayers(message, args, client);
				return;
			}
			await showDraft(message, args, client);
			return null;
    }

    if (args[0] == "status") {
      return message.channel.send(await getDraftStatus());
    }

    ///Command for resetting the draft. (repopulates db table with players and sets team to 'undrafted' and draft_num to null)
    if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
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


	}

  // ANY COMMANDS BELOW HERE WILL BE BLOCKED IF THE DRAFT IS LOCKED
  if (draft_lock) {
      return message.reply("The draft is locked. Use `!draft unlock` to unlock it and try again. View commands will still work.");
  }


  if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
    if (args[0] == "reset") {
      const reset = await Draft_j.destroy({ where: {}, truncate: true });
      for (let j = 0; j < Object.keys(players.Players).length - 1; j++) {
        const cc = await Draft_j.create({
          player: intToPair(j),
        });
      }
      draft_num = 1;
      current_drafter = await getCurrentCoach();
      message.reply("Draft Has Been Reset.")
      return message.channel.send(await getDraftStatus());
  }

    if (args[0] == 'set') {
        if (Number.isInteger(parseInt(args[1]))) {
          draft_num = parseInt(args[1]);
          current_drafter = await getCurrentCoach();   //Replace with sheet cell magic
          let result ='';
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
          await writePlayerToDraft('');
          current_drafter= await getCurrentCoach();
          let result= 'Draft Pick '+ draft_num + ' has been undone' + "\n "+current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock with pick #" +draft_num +".";
          return  message.channel.send(result);

      }
    }

    //// TODO: Change Players team


    if (args[0] == "test") {
      console.log(draft_num);
      console.log(current_drafter);
      // current_drafter = await getCurrentCoach();
      // await writePlayerToDraft("I wrote this from the bot");
      // let playerData = await getPlayersFromSheetsHelper();
      // console.log(playerData);
      // getPlayersFromSheetsHelper().then((response) => {
      //     console.log(response);
      //     var json = JSON.stringify(response);
      //     fs.writeFile("players.json", json, "utf8", () => { });
      // });
      return client.users.cache.get(message.author.id).send(buildPlayerInfoMessage(playerData["LD"]));
      // return message.channel.send(buildPlayerEmbed(playerData["AB"]));

      // return message.reply(current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock");
    }

		let result="Unsuccessful Request, try again."; //Default response

    current_drafter = await getCurrentCoach();
    if (current_drafter == "") {
      draft_lock = true;
      return message.reply("The draft is complete and now locked. Use `!draft unlock` to unlock it.");
    }

    //Draft Procedure, first check to see if they are drafting by Char Pair, or by full Name.
    let pair='XX'
    if (args.length==1 && args[0].length==2){
        pair = args[0].toUpperCase();
    }else{
      if (args.length == 3){
           pair =	findPlayer(args[0]+' '+args[1]+ ' ' + args[2]);
      }else if (args.length== 2){
            pair =	findPlayer(args[0]+' '+args[1]);
      }else{
            pair =	findPlayer(args[0]);
      }
    }
          try{
          	const player_to_draft = await Draft_j.findOne({
          		where: {
          		     player: pair,
          		},
          	});
            if (player_to_draft.team!='undrafted'){
              return message.reply("That player has already been drafted, try again");
            }

        const draft_player = await Draft_j.update({ team: current_drafter, pick_num:draft_num },
          { where:{
            player:pair,
            team:'undrafted',
            }
          });

          } catch (e) {
          return message.reply("Couldn't find that player.");
        }

				if (args.length==1 && args[0].length==2){
						let pair = args[0].toUpperCase();
						result =  pair+': *'+players.Players[args[0]].Name +  '* has been drafted by '+ coaches[current_drafter][1] +"\n";
            stat_report = players.Players[args[0]].Name +"\n";
						stat_report += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						stat_report += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						stat_report += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						stat_report += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));

            await writePlayerToDraft(players.Players[args[0]].Name);

					}else{
            let pair='';
            if (args.length == 3){
					       pair =	findPlayer(args[0]+' '+args[1]+ ' ' + args[2]);
            }else if (args.length== 2){
                  pair =	findPlayer(args[0]+' '+args[1]);
            }else{
                  pair =	findPlayer(args[0]);
            }

						result = pair+': *'+players.Players[pair].Name + '* has been drafted by '+ coaches[current_drafter][1] +"\n";
            stat_report = players.Players[pair].Name +"\n";
						stat_report += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						stat_report += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						stat_report += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						stat_report += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));

              await writePlayerToDraft(players.Players[pair].Name);
					}

    // bot_channel.send(stat_report);
    bot_channel.send(buildPlayerInfoMessage(playerData[pair]));

          // write to spreadsheet

          draft_num += 1;
          current_drafter = await getCurrentCoach();   //Replace with sheet cell magic
          if (current_drafter!=""){
            result+= "\n "+current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock with pick #" +draft_num +".";
          } else {
            draft_lock = true
            result += "🎊 The draft has concluded and is now locked. 🎊";
          }


		message.channel.send(result);
	},};
