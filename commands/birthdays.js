var fs = require("fs");
let rawdata = fs.readFileSync("players.json");
const playerData = JSON.parse(rawdata);

let daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];

function getWeekStartAndEnd(seedDate) {
    seedDate.setHours(0, 0, 0, 0);
	curr = new Date(seedDate);

	// get current date
	var first = curr.getDate() - curr.getDay();
	// First day is the  day of the month - the day of the week
	var last = first + 6;
	// last day is the first day + 6
	firstday = new Date(curr.setDate(first));
    lastday = new Date(curr.setDate(curr.getDate() + 7));
    
    return { "firstDay": firstday, "lastDay": lastday };
}

function findBirthdaysWithinCurrentWeek(seedDate) {
    
    seedDate.setHours(0, 0, 0, 0);
    let weekDates = getWeekStartAndEnd(seedDate);
    let firstDay = weekDates["firstDay"];
    let lastDay = weekDates["lastDay"];
    
    let birthdaysThisWeek = [];
    for (player in playerData) {
        let currentPlayer = playerData[player];
        
        let playerBirthday = new Date(seedDate.getFullYear(),
            currentPlayer["birthday_month"] - 1, currentPlayer["birthday_day"]);
        
        if (playerBirthday >= firstDay && playerBirthday <= lastDay) {
            // their birthday is this week
            birthdaysThisWeek.push(currentPlayer);
        }
        
    }

    return birthdaysThisWeek;
}

function buildBirthdayMessage(birthdayPlayers, seedDate) {
    let messageString = "";
    let weekDates = getWeekStartAndEnd(seedDate);
	let firstDay = weekDates["firstDay"];
    let lastDay = weekDates["lastDay"];


    birthdayPlayers = birthdayPlayers.sort(function (a, b) {
        let aBirthday = new Date(
			seedDate.getFullYear(),
			a["birthday_month"] - 1,
			a["birthday_day"]
        );
        
        let bBirthday = new Date(
			seedDate.getFullYear(),
			b["birthday_month"] - 1,
			b["birthday_day"]
        );
        
        return aBirthday < bBirthday ? -1 : 1;
    });

    messageString += `:birthday:  __**Birthdays for ${firstDay.getMonth() + 1}/${firstDay.getDate()} (Sun) - `;
    messageString += `${lastDay.getMonth() + 1}/${lastDay.getDate()} (Sun)**__  :birthday:\n`;

    for (player of birthdayPlayers) {
        let playerBirthday = new Date(
			seedDate.getFullYear(),
			player["birthday_month"] - 1,
			player["birthday_day"]
		);
        messageString += `${player.name} - ${player.birthday_month}/${player.birthday_day}`;
        messageString += ` - ${daysOfWeek[playerBirthday.getDay()]}\n`;
    }
    messageString = messageString.slice(0, -1);
    return messageString;
}

module.exports = {
	name: "birthdays",
	description: "Query for upcoming birthdays",
	execute(message, args, client) {
        if (args.length == 0) {
            let birthdaysThisWeek = findBirthdaysWithinCurrentWeek(new Date());
            if (birthdaysThisWeek.length > 0) {
				let birthdayMessage = buildBirthdayMessage(
					birthdaysThisWeek,
					date
				);
				return message.channel.send(birthdayMessage);
			} else {
				return message.channel.send(`There's no birthdays this week.`);
			}
        }
        else if (args.length == 1) {
            let dateValues = args[0].split("/");
            if (dateValues.length != 2) {
                return message.reply("Enter dates with the format month/day.\nE.g. `!birthdays 1/11` for Jan 11th.");
            }
            let date = new Date();
            date.setMonth(dateValues[0] - 1);
            date.setDate(dateValues[1]);
            let birthdaysThisWeek = findBirthdaysWithinCurrentWeek(date);
            if (birthdaysThisWeek.length > 0) {
                let birthdayMessage = buildBirthdayMessage(
					birthdaysThisWeek,
					date
				);
				return message.channel.send(birthdayMessage);
            }
            else {
                return message.channel.send(`There's no birthdays that week.`);
            }
            
        }
	},
};
