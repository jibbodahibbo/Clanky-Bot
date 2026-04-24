const fs = require('fs');
const path = require('path');

const clones = loadClones();

module.exports = {
	name: 'clone',
	description: 'clone',
	execute(message) {
		const args = message.content.trim().split(/\s+/).slice(1);
		if (!args.length) {
			message.channel.send('Usage: !clone Player Name');
			return;
		}

		const playerName = args.join(' ').trim();
		const cloneInfo = findClone(playerName);

		if (!cloneInfo) {
			message.channel.send(`Could not find clone information for \"${playerName}\".`);
			return;
		}

		const clone = normalizeValue(cloneInfo.clone);
		const clone01 = normalizeValue(cloneInfo.clone01);
		const clone03 = normalizeValue(cloneInfo.clone03);
		const nearClone = normalizeValue(cloneInfo.nearClone);

		if (!clone && !clone01 && !clone03 && !nearClone) {
			message.channel.send('This player does not have any clones.');
			return;
		}

		if (clone && !clone01 && !clone03 && !nearClone) {
			message.channel.send(`${cloneInfo.player} is a clone of ${clone}`);
			return;
		}

		if (!clone && clone01 && clone03 && !nearClone) {
			message.channel.send(`${cloneInfo.player} is a clone of ${clone01} in 01/02 and a clone of ${clone03} in 03`);
			return;
		}

		if (clone && !clone01 && !clone03 && nearClone) {
			message.channel.send(`${cloneInfo.player} is a clone of ${clone} and a near clone of ${nearClone}`);
			return;
		}

		if (!clone && !clone01 && !clone03 && nearClone) {
			message.channel.send(`${cloneInfo.player} is a near clone of ${nearClone}`);
			return;
		}

		const parts = [];
		if (clone) parts.push(`${cloneInfo.player} is a clone of ${clone}`);
		if (clone01 && clone03) parts.push(`a clone of ${clone01} in 01/02 and a clone of ${clone03} in 03`);
		else if (clone01) parts.push(`a clone of ${clone01} in 01/02`);
		else if (clone03) parts.push(`a clone of ${clone03} in 03`);
		if (nearClone) parts.push(`a near clone of ${nearClone}`);

		message.channel.send(parts.join(' and '));
	},
};

function loadClones() {
	const csvPath = path.join(__dirname, '..', 'Clones.csv');
	const raw = fs.readFileSync(csvPath, 'utf8');
	const lines = raw.split(/\r?\n/).filter(line => line.trim().length > 0);
	const clonesMap = new Map();

	for (let i = 1; i < lines.length; i += 1) {
		const fields = parseCsvLine(lines[i]);
		if (!fields.length) continue;

		const player = fields[0] ? fields[0].trim() : '';
		if (!player) continue;

		clonesMap.set(player.toLowerCase(), {
			player,
			clone: fields[1] || '',
			clone01: fields[2] || '',
			clone03: fields[3] || '',
			nearClone: fields[4] || '',
		});
	}

	return clonesMap;
}

function parseCsvLine(line) {
	const fields = [];
	let i = 0;

	while (i < line.length) {
		if (line[i] === '"') {
			i += 1;
			let field = '';
			while (i < line.length) {
				if (line[i] === '"') {
					if (line[i + 1] === '"') {
						field += '"';
						i += 2;
						continue;
					}
					i += 1;
					break;
				}
				field += line[i];
				i += 1;
			}
			fields.push(field);
			if (line[i] === ',') i += 1;
		} else {
			let start = i;
			while (i < line.length && line[i] !== ',') {
				i += 1;
			}
			fields.push(line.slice(start, i).trim());
			if (line[i] === ',') i += 1;
		}
	}

	return fields;
}

function normalizeValue(value) {
	if (!value) return '';
	const trimmed = value.trim();
	if (!trimmed || trimmed === '--') return '';
	return trimmed;
}

function findClone(name) {
	const lookup = name.toLowerCase().trim();
	if (clones.has(lookup)) return clones.get(lookup);
	return Array.from(clones.values()).find(entry => entry.player.toLowerCase() === lookup);
}
