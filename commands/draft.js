let players = require('../players.js');
const {Draft_j} = require('../dbInit');

const sheets = require("../byb-bot.js").sheets;
const discord = require("../byb-bot.js").discord;

const allowed_channels = ['741308777357377617'];
const sheetsAPIKey =process.env.Sheets_APIKey
const draft_url = process.env.s6_sheet_id;


const coaches={
        "BB":['187776456519057409','JibboDaHibbo'],
        "JL":['377672560780902402','JLund24'],
      }

const draft_sheet_id = '1xtRDt9xoMIqbXeNAOP03lYKYdFe-oMhGZuTDCqxtRVM';

const draft_cell_start = '';



let draft_num = 1;
let draft_cell = 'A1';
let current_drafter = "BB"; //Should be a 2 char pair.


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

async function getNextCoach() {
  let sheetName = "DRAFT!";
  let range = "A" + draft_num;
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
  console.log(result.data.values);
  return result.data.values[0][0];
}

async function writePlayerToDraft(playerName) {
  let sheetName = "DRAFT!";
  let range = "A" + draft_num;
  let result;

  let new_values = [[payerName]];

  try {
		result = await sheets.spreadsheets.values.update({
			auth: sheetsAPIKey,
			spreadsheetId: draft_sheet_id,
			range: sheetName + range,
		});
  } catch (err) {
		console.log(err);
  }

  return result.data.values[0][0];
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
	for (let i = 0; i<Object.keys(players.Players).length-1; i++){

			if (players.Players[intToPair(i)].Name == a){
				console.log("Match")
					return (intToPair(i));
			}
		}
				let playerpair=""
				let closest="";
				console.log("closest Match...")
				for (let i = 0; i<Object.keys(players.Players).length-1; i++){
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

  let team_list="";
  for (let i=0; i<team_players.length; i++ ){
    team_list += players.Players[team_players.player] +", ";
  }

  client.users.cache.get(message.author.id)
    .send(team_list);
  }






module.exports = {
	name: 'draft',
	description: 'Draft',
	async execute(message, args, client) {
		//Check for valid channel, or DM
		if (!allowed_channels.includes(message.channel.id)){
			return null;
		}

    //Show teams/playersdrafted
    if (args[0]=="show"){
      if (args[1]=="team"){
          await showTeamPlayers(message, args, client);
  			return;
      }
      return null;
    }

    //Change Players team

    ///Command for resetting the draft. (repopulates db table with players and sets team to 'undrafted' and draft_num to null)
    if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
      if(args[0]=='reset'){
        const reset = await Draft_j.destroy({where: {}, truncate: true} );
        	for (let j = 0; j<Object.keys(players.Players).length-1; j++){
            const cc = await Draft_j.create({
        			player: intToPair(j),
      		  });
          }
          draft_num=1;
          current_drafter="BB"; //// TODO: Switch this to the start cell for Sheets.
        return message.reply("Draft Has Been Reset.");
      }


    }

    if (args[0] == "test") {
      current_drafter = await getNextCoach();
      return message.reply(current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock");
    }


		let result="Unsuccessful Request, try again."; //Default response

    //Draft Procedure, first check to see if they are drafting by Char Pair, or by full Name.
    let pair='XX'
    if (args.length==1 && args[0].length==2){
        pair = args[0].toUpperCase();
    }else{
        pair =	findPlayer(args[0]+' '+args[1]);
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

        }catch(e){
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


					}else{
					let pair =	findPlayer(args[0]+' '+args[1]);
						result = pair+': *'+players.Players[pair].Name + '* has been drafted by '+ coaches[current_drafter][1] +"\n";
            stat_report = players.Players[pair].Name +"\n";
						stat_report += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						stat_report += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						stat_report += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						stat_report += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));

					}
          let bot_channel = client.channels.cache.get('778266821006458950');
          bot_channel.send(stat_report);


          //Ping next coach
          draft_num += 1;
          current_drafter = await getNextCoach();   //Replace with sheet cell magic
          result+= "\n "+current_drafter+" <@" + coaches[current_drafter][0] +"> is now on the clock with pick #" +draft_num +".";



		message.channel.send(result);
	},};
