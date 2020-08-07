let players = require('../players.js');
const allowed_channels = ['733773776357163079'];

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

//Loops through players, returns string of a list (probably should just return an array object but this is how I did it.) all the players with a certain value of a certain stat.
function findStat(stat, n){
	let player_result = "";

	if (stat == 'running'){
		for (let i = 0; i<Object.keys(players.Players).length-1; i++){
			if (players.Players[intToPair(i)].Running == parseInt(n)){
				player_result+= players.Players[intToPair(i)].Name +', ';
			}
		}
	}else if (stat == 'batting'){
		for (let i = 0; i<Object.keys(players.Players).length-1; i++){
			if (players.Players[intToPair(i)].Batting == parseInt(n)){
				player_result+= players.Players[intToPair(i)].Name;
				if (['Jocinda Smith', 'Annie Frazier', 'Felix Grant', 'Heather Quinn'].includes(players.Players[intToPair(i)].Name)){
					player_result+='*'
				}
				player_result+=', '

			}
		}
	}else if (stat == 'pitching'){
		for (let i = 0; i<Object.keys(players.Players).length-1; i++){
			if (players.Players[intToPair(i)].Pitching == parseInt(n)){
				player_result+= players.Players[intToPair(i)].Name +', ';
			}
		}
	}else if (stat == 'fielding'){
		for (let i = 0; i<Object.keys(players.Players).length-1; i++){
			if (players.Players[intToPair(i)].Fielding == parseInt(n)){
				player_result+= players.Players[intToPair(i)].Name +', ';
			}
		}
	}
	return player_result;
}



module.exports = {
	name: 'ratings',
	description: 'Ratings',
	execute(message, args) {

		if (!allowed_channels.includes(message.channel.id) || message.guild != null){
			return null;
		}


		let result="hmmm..";

		if ( ['running', 'batting', 'pitching', 'fielding'].includes( args[0].toLowerCase()) ){
					result = findStat(args[0].toLowerCase(),args[1]);
		}else{

				if (args.length==1 && args[0].length==2){
						let pair = args[0].toUpperCase();
						result =  pair+': '+players.Players[args[0]].Name +"\n";
						result += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						result += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						result += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						result += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));
					}else{
					let pair =	findPlayer(args[0]+' '+args[1]);
						result = pair+': '+players.Players[pair].Name +"\n";
						result += "Batting  :" + baseballs(parseInt(players.Players[pair].Batting)) +"\n";
						result += "Running:" + baseballs(parseInt(players.Players[pair].Running)) +"\n";
						result += "Pitching:" + baseballs(parseInt(players.Players[pair].Pitching)) +"\n";
						result += "Fielding:" + baseballs(parseInt(players.Players[pair].Fielding));
					}
				}


		message.channel.send(result);
	},};
