let players = require('../players.js');
const {Draft_j} = require('../dbInit');
const allowed_channels = ['741308777357377617'];
const coaches={
        "BB":['187776456519057409','JibboDaHibbo'],
        "JL":['377672560780902402:','JLund24'],
      }

const draft_cell_start = '';

let draft_num=0;
let draft_cell='';
let current_drafter = "BB"; //Should be a 2 char pair.



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








module.exports = {
	name: 'draft',
	description: 'Draft',
	async execute(message, args) {
		//Check for valid channel, or DM
		if (!allowed_channels.includes(message.channel.id)){
			return null;
		}
    if(message.member.roles.cache.find(role => role.name === 'Commissioner') || message.member.roles.cache.find(role => role.name === 'Codehead')){
      if(args[0]=='reset'){
        const reset = await Draft_j.destroy({where: {}, truncate: true} );
        	for (let j = 0; j<Object.keys(players.Players).length-1; j++){
            const cc = await Draft_j.create({
        			player: intToPair(j),
      		  });
          }
          draft_num=1;
          current_drafter="BB"; //Switch this to the start cell.
        return message.reply("Draft Has Been Reset.");
      }
    }





		let result="Unsuccessful Request, try again."; //Default response
    if (args.length==1 && args[0].length==2){
        let pair = args[0].toUpperCase();
    }else{
        let pair =	findPlayer(args[0]+' '+args[1]);
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
          draft_num+=1;

        }catch(e){
          return message.reply("That player has already been drafted, try again");
        }

				if (args.length==1 && args[0].length==2){
						let pair = args[0].toUpperCase();
						result =  pair+': '+players.Players[args[0]].Name +  ' has been drafted by' +"\n";
						result += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						result += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						result += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						result += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));
					}else{
					let pair =	findPlayer(args[0]+' '+args[1]);
						result = pair+': '+players.Players[pair].Name + ' has been drafted by' +"\n";
						result += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						result += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						result += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						result += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));
					}


//TODO add a PING to the end of the "result" message based on the google sheet for Draft S6 draft_num+draft_cell_start


		message.channel.send(result);
	},};
