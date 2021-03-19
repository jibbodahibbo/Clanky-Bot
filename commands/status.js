const sequelize = require("../byb-bot.js").sequelize;
const { MessageEmbed } = require("discord.js");
let jlundID = "377672560780902402";
let jibboID = "187776456519057409";

let emojis = {"happy": ":grinning:", "confused": ":face_with_raised_eyebrow:", "like celebrating": ":partying_face:", "angry": ":rage:", "like crying": ":sob:", "shocked": ":scream:", "dead inside": ":expressionless:", "evil": ":smiling_imp:", "robotic": ":robot:", "clowned": ":clown:"};

function getRandomEmoji() {
    let keys = Object.keys(emojis);
    let randomKey = keys[Math.floor(Math.random()*keys.length)];
    let value = emojis[randomKey];
    return [randomKey, value];
}

module.exports = {
    name: "status",
    description: "Query for current bot status",
    async execute(message, args, client) {
        if (args.length == 0) {
            let statusMessageEmbed = new MessageEmbed()
                .setTitle("**BYB-BOT Status**");
            
            let botStatusText;
            botStatusText = ":green_circle:⠀**Bot is up**";
            
            // check if we can query database
            let dbStatusText;
            let dbDown = false;
            try {
                await sequelize.authenticate();
                console.log('Connection has been established successfully.');
                dbStatusText = ":green_circle:⠀**Database is up**";
                
            } catch (error) {
                console.error('Unable to connect to the database:', error);
                dbStatusText = ":red_circle:⠀**Database is down**";
                dbDown = true;
            }

            let jibboStatus = getRandomEmoji();
            let jlundStatus = getRandomEmoji();
            let jibboStatusText = `${jibboStatus[1]}⠀**jibbo is feeling ${jibboStatus[0]}**`;
            let jlundStatusText = `${jlundStatus[1]}⠀**jlund is feeling ${jlundStatus[0]}**`;

            let messageText = botStatusText;
            messageText += "\n" + dbStatusText;
            // messageText += jibboStatusText + "\n";
            // messageText += jlundStatusText;

            let notifyText;
            if (dbDown) {
                notifyText = "\n\nReact with :rotating_light: to notify the botmasters";
                messageText += notifyText;
            }

            statusMessage = await message.channel.send({
                embed: statusMessageEmbed
                    .setDescription(messageText)
            });

            if (dbDown) {
                await statusMessage.react("🚨");
                const filter = (reaction, user) => {
                    return (
                        (reaction.emoji.name === "🚨") &&
                        user.id === message.author.id
                    );
                };

                let collected;
                try {
                    collected = await statusMessage.awaitReactions(filter, {
                        max: 1,
                        time: 30000,
                        errors: ["time"],
                    });
                } catch (errorCollected) {
                    collected = errorCollected;
                    // collected.set("✅", {});
                    // resultSummaryMessage.reactions.removeAll();
                }

                if (collected.has("🚨")) {
                    // send message to jlund and jibbo
                    client.users.cache
				        .get(jlundID)
				        .send("BYB-BOT is having issues");

                    client.users.cache
				        .get(jibboID)
				        .send("BYB-BOT is having issues");
        
                    await statusMessage.edit({
                        embed: statusMessageEmbed
                                    .setDescription(messageText.replace(notifyText, ""))
                                    .setTimestamp()
                                    .setFooter("jibbo and jlund have been notified"),
                    });
                    // await statusMessage.reactions.removeAll();
                }
            }

            


        }
    },
};
