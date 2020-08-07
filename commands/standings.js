const american_west = "ALW";
const american_east = "ALE";
const national_west = "NLW";
const national_east = "NLE";

const lulu = "Lulu";
const paste = "Paste";

const lulu_alw_range = "B2:E7";
const lulu_ale_range = "G2:J7";
const lulu_nlw_range = "B10:E14";
const lulu_nle_range = "G10:J14";
const paste_range = "B3:D14";

const bb_resources_id = "1waTChkjtCecz_3_dtEMTqnf_r8276NjB_zrzK-n7O6g"; // TODO: move to .env file
const s5_id = process.env.s5_sheet_id;

const lulu_url = `https://docs.google.com/spreadsheets/d/${s5_id}/edit#gid=658405520`;
const paste_url = `https://docs.google.com/spreadsheets/d/${s5_id}/edit#gid=953599581`;

const sheets = require("../byb-bot.js").sheets;
const discord = require("../byb-bot.js").discord;

async function queryStandings(league, range) {
    let sheetName = "";
    if (league == lulu) {
        sheetName = "LuluSched&Stand!";
    }
    else if (league == paste) {
        sheetName = "Paste Sched&Stand!";
    }

    return await sheets.spreadsheets.values.get(
		{
            auth: process.env.sheets_key,
			spreadsheetId: s5_id,
			range: sheetName + range,
		},

	);
}

function getStandingsRange(league, region) {
    let range = "";
    if (league == lulu) {
        switch (region) {
            case american_west:
                range = lulu_alw_range;
                break;
            case american_east:
                range = lulu_ale_range;
                break;
            case national_west:
                range = lulu_nlw_range;
                break;
            case national_east:
                range = lulu_nle_range;
                break;
            default:
                throw error;
        }
    }
    else if (league == paste) {
        range = paste_range;
    }

    return range;
}

function getURL(league) {
    if (league == lulu) {
        return lulu_url;
    }
    else if (league == paste) {
        return paste_url;
    }
}

async function getStandings(league, region) {
    let range = getStandingsRange(league, region);
    let result = await queryStandings(league, range).then((res) => res.data.values).catch((error) => {
        throw error;
        });

    let url = getURL(league);
    let title = "";
    if (league == lulu) {
        title = `${league} ${region} Standings`;
    }
    else if (league == paste) {
        title = `${league} Standings`;
    }

    let resultObj = {
        title: title,
        data: [],
        url: url,
    };
    let maxLength = 0;
    for (row of result) {
        maxLength = Math.max(maxLength, row[0].length);
    }
    resultObj.data.push(["R ", "TEAM".padEnd(maxLength, " "), "W ", "L "]);
    let rank = 1;
    for (row of result) {
        if (league == lulu) {
            resultObj.data.push([`${rank++}`.padEnd(2, " "), row[0].padEnd(maxLength, " "), row[2].padEnd(2, " "), row[3].padEnd(2, " ")]);
        }
        else if (league == paste) {
            resultObj.data.push([`${rank++}`.padEnd(2, " "), row[0].padEnd(maxLength, " "), row[1].padEnd(2, " "), row[2].padEnd(2, " ")]);
        }
    }
    return resultObj;
}

function isValidRegion(region) {
    let returnValue = false;
    switch (region) {
        case american_west:
            returnValue = true;
            break;
        case american_east:
            returnValue = true;
            break;
        case national_west:
            returnValue = true;
            break;
        case national_east:
            returnValue = true;
            break;
        default:
            returnValue = false;
            break;
    }

    return returnValue;
}

function isValidLeague(league) {
    let returnValue = false;
    switch (league) {
        case lulu:
            returnValue = true;
            break;
        case paste:
            returnValue = true;
            break;
        default:
            returnValue = false;
            break;
    }
    return returnValue;
}

function buildStandingsEmbed(standingsData) {
    let rowLength = 0;
    let cellPadding = " | ";
    for (item of standingsData.data[0]) {
        rowLength += item.length;
    }
    rowLength += standingsData.data[0].length * cellPadding.length;
    let rowBarrier = "".padEnd(rowLength - 1, "-");
    let descriptionText = "```";
    for (row of standingsData.data) {
        for (cell of row) {
            descriptionText += cell + cellPadding;
        }
        descriptionText += "\n" + rowBarrier + "\n";
    }
    descriptionText += "```";
    const standingsEmbed = new discord.MessageEmbed()
        // .setColor('#0099ff')
        .setTitle(`${standingsData.title}`)
        .setURL(standingsData.url)

        // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription(descriptionText)
        // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        // .addFields(
        //     { name: 'Regular field title', value: 'Some value here' },
        //     { name: '\u200B', value: '\u200B' },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        // )
        // .addField('Inline field title', 'Some value here', true)
        // .setImage('https://i.imgur.com/wSTFkRM.png')
        // .setTimestamp()
        // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png')
        ;

    return standingsEmbed;
}

async function buildStandingsMessage(league, region) {
    let resultObj = await getStandings(league, region);
    return buildStandingsEmbed(resultObj);

}

// testSheetsAPI();

module.exports = {
    name: "standings",
    description: "Standings",
    execute(message, args) {
        if (args.length > 0) {
            // check if lulu or paste
            let league = args[0][0].toUpperCase() + args[0].slice(1);

            if (!isValidLeague(league)) {
                message.reply(
                    `"\`${league}\`" is not a supported region. Try \`lulu\`, or \`paste\`.`
                );
                return;
            }

            if (league == lulu) {
                if (args.length > 1) {
                    // capitalize region
                    let region = args[1].toUpperCase();

                    if (!isValidRegion(region)) {
                        message.reply(
                            `"\`${region}\`" is not a supported region. Try \`ALE\`, \`ALW\`, \`NLE\`, or \`NLW\`.`
                        );
                        return;
                    }

                    buildStandingsMessage(league, region).then((responseMessage) => {
                        message.channel.send(responseMessage);
                    }).catch(error => { throw error });

                }
                else {
                    message.reply("`lulu` commands must have a region too. Try \`ALE\`, \`ALW\`, \`NLE\`, or \`NLW\`.");
                    return;
                }
            }
            else if (league == paste) {
                buildStandingsMessage(league, null).then((responseMessage) => {
                    message.channel.send(responseMessage);
                }).catch(error => { throw error });
            }


        }
        else {
            message.reply(
				"Your command was missing a league or region. It should look like `!standings lulu ALE`."
            );
            return;
        }

    }
}
