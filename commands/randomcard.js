module.exports = {
	name: 'randomcard',
	description: 'A random card designed by AdamFromBuffalo will appear',
	execute(message) {

const imageLinks = [
  "https://ibb.co/GQxbMgRP",
  "https://ibb.co/xtMdfD14",
  "https://ibb.co/tpWQwZ3n",
  "https://ibb.co/5ht2qVC7",
  "https://ibb.co/27pC8djd",
  "https://ibb.co/0pdHc7CS",
  "https://ibb.co/TxNRpM2h",
  "https://ibb.co/b5qrGyJ1",
  "https://ibb.co/fVvnmVvb",
  "https://ibb.co/C5FKT9bc",
  "https://ibb.co/1t2Ykkvj",
  "https://ibb.co/QjPZ7xBb",
  "https://ibb.co/LXWfT8fn",
  "https://ibb.co/mFqHGBT1",
  "https://ibb.co/QFGNs1zh",
  "https://ibb.co/DHKbDHmR",
  "https://ibb.co/jZsgChvv",
  "https://ibb.co/67ztrpQc",
  "https://ibb.co/4wkW8SmZ",
  "https://ibb.co/60j2Y4gf",
  "https://ibb.co/WNN1Dp4w",
  "https://ibb.co/hR5wrTYp",
  "https://ibb.co/k2tM2Ryp",
  "https://ibb.co/ZzJPJv0Z",
  "https://ibb.co/gZVG4dr0",
  "https://ibb.co/dwGNC6Df",
  "https://ibb.co/3mYVmPXz",
  "https://ibb.co/WWqBjMJf",
  "https://ibb.co/HTqCqZfv",
  "https://ibb.co/mC0vQpRB",
  "https://ibb.co/TxV4NWWX",
  "https://ibb.co/KjRYWk8R",
  "https://ibb.co/qYs5HsD5",
  "https://ibb.co/Rk4cZRdQ",
  "https://ibb.co/C5z94dxv",
  "https://ibb.co/fdM1BN2Y",
  "https://ibb.co/1F8Xk3J"
];

var result = imageLinks[Math.floor(Math.random() * imageLinks.length)];


		message.channel.send(result);
	},
};
