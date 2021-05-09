const Twitter = require('twitter');
const discord = require("./byb-bot.js").discord;
const canvas = require("./byb-bot.js").canvas;

let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

function getNormalizedDrawDims(image, final_width, final_height) {
    let draw_width;
	let draw_height;
	if (image.width > image.height) {
		draw_width = final_width;
		draw_height = (final_width / image.width) * image.height;
	} else {
		draw_width = (final_height / image.height) * image.width;
		draw_height = final_height;
    }
    
    return {
        width: draw_width,
        height: draw_height
    };
}

async function testTweet() {
    
    // client.post('statuses/update', { status: "I'm testing out the bot integration!" })
    //     .then((tweet) => console.log(tweet))
    //     .catch((err) => {
    //         throw err;
    //     });
}

async function tweetResult(discord_client, game_schedule_data, away_result_obj, home_result_obj) {
    
    let guild = await discord_client.guilds.cache.get("353992895457394689");
    // console.log(game_schedule_data);

    let isRoleID = false;
    let away_name;
    let home_name;

    isRoleID = game_schedule_data.away_role_id.startsWith("<@&");
    
    if (isRoleID) {
        away_name = (await guild.roles.cache.get(game_schedule_data.away_role_id.slice(3, -1))).name;
    }
    else {
        away_name = game_schedule_data.away_role_id;
    }

    isRoleID = game_schedule_data.home_role_id.startsWith("<@&");
    if (isRoleID) {
        home_name = (await guild.roles.cache.get(game_schedule_data.home_role_id.slice(3, -1))).name;
    }
    else {
        home_name = game_schedule_data.home_role_id;
    }

    // console.log(away_name);
    // console.log(home_name);

    // console.log(away_result_obj);
    // console.log(home_result_obj);

    let tweetText = `${away_name} [${game_schedule_data.away_coach_id}] @ ${home_name} [${game_schedule_data.home_coach_id}]`;
    // console.log(tweetText);

    const test_canvas = canvas.createCanvas(1280, 660);
	const ctx = test_canvas.getContext("2d");

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, test_canvas.width, test_canvas.height);

	const home_image = await canvas.loadImage(
		home_result_obj.images[0]
	);
	// console.log(background);
	const away_image = await canvas.loadImage(
		away_result_obj.images[0]
	);
	let final_width = 600;
	let final_height = 600;

	let draw_dims = getNormalizedDrawDims(
		away_image,
		final_width,
		final_height
	);

	let y_coord = (test_canvas.height - draw_dims.height) / 2;

	let x_coord = (test_canvas.width / 2 - draw_dims.width) / 2;

	ctx.drawImage(away_image, 20, y_coord, draw_dims.width, draw_dims.height);

	draw_dims = getNormalizedDrawDims(home_image, final_width, final_height);

	y_coord = (test_canvas.height - draw_dims.height) / 2;

	x_coord =
		(test_canvas.width / 2 - draw_dims.width) / 2 + test_canvas.width / 2;

	ctx.drawImage(
		home_image,
		test_canvas.width / 2 + 20,
		y_coord,
		draw_dims.width,
		draw_dims.height
	);

	let image_file = test_canvas.toBuffer();

	client
		.post("media/upload", { media: image_file })
		.then(function (media) {
			let status = {
				status: tweetText,
				media_ids: media.media_id_string,
			};

			client.post("statuses/update", status).catch((error) => {
				throw error;
			});
		})
		.catch((error) => {
			throw error;
		});
}

module.exports = {
    testTweet,
    tweetResult,
};

