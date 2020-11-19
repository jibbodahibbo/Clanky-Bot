const {google} = require("googleapis");

function authorize() {
	// var google = require("googleapis");
	const client = new google.auth.JWT({
		email: process.env.GOOGLE_CLIENT_EMAIL,
		key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		
	});

	return new Promise((resolve, reject) => {
		client.authorize((err, tokens) => {
			if (err) {
				reject(err);
			} else {
				google.options({
					auth: client,
				});
				resolve();
			}
		});
	});
}


module.exports = {
	authorize,
};
