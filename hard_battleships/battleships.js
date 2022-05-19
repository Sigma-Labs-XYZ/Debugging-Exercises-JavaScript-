function validateBattlefield(field) {
	console.log(field);
	let ships = { battleship: 0, cruiser: 0, destroyer: 0, submarine: 0 };
	const correct = { battleship: 1, cruiser: 2, destroyer: 3, submarine: 4 };
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			let shipLength = 0;
			if (field[i][j] === 1) {
				const shipIndices = [[i, j]];
				shipLength += 1;
				field[i][j] = 0;
				if (j + 1 < field[i].length && field[i][j] === 1) {
					const limit = j < 7 ? 4 : field[i].length - j;
					for (let x = 1; x < limit; x++) {
						if (field[i][j + x] === 1) {
							shipIndices.push([i, j + x]);
							shipLength += 1;
							field[i][j + x] = 0;
						} else {
							break;
						}
					}
				} else if (i + 1 < field.length && field[i + 1][j] === 1) {
					const limit = i < 7 ? 4 : field.length - i;
					for (let y = 1; y < limit; y++) {
						if (field[k][i] === 1) {
							shipIndices.push([i + y, j]);
							shipLength += 1;
							field[i + y][j] = 0;
						} else {
							break;
						}
					}
				}
				// Perimeter check perimeterCheck(field, shipIndices)
				// console.log(shipCheck(shipLength), shipLength)
				ships[shipCheck(shipLength)] += 1;
			}
		}
		// console.log(field)
	}
	// console.log(ships)
	let correctShips = true;
	for (const ship in ships) {
		if (ships[ship] !== correct[ship]) {
			correctShips = false;
		}
	}

	return correctShips;
}

function shipCheck(n) {
	if (n === 4) return "battleship";
	if (n === 3) return "cruiser";
	if (n === 2) return "destroyer";
	if (n === 1) return "submarine";
}

function perimeterCheck(field, shipIndices) {
	const directions = [
		[-1, 1],
		[0, 1],
		[1, 1],
		[-1, 0],
		[1, 0],
		[-1, -1],
		[0, -1],
		[1, -1],
	];

	directions.forEach((direction) => {});
}
