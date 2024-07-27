import knightMoves from "./knightTravails.js";

function prettyPrint(start, end) {
	try {
		const result = knightMoves(start, end);
		if (result === null) {
			console.log(`Can't see any path between ${start} -> ${end}`);
			return;
		}

		console.log(
			`You made it in ${result.length - 1} ${
				result.length - 1 === 1 ? "move" : "moves"
			}! Here's your path from ${start} -> ${end}`,
		);

		for (const e of result) {
			console.log(e);
		}
	} catch (e) {
		console.log(e.message);
	}
}

prettyPrint([0, 0], [1, 2]);
prettyPrint([0, 0], [3, 3]);
prettyPrint([3, 3], [0, 0]);
prettyPrint([0, 0], [7, 7]);
prettyPrint([3, 3], [4, 3]);
prettyPrint([0, 0], [5, 5]);
prettyPrint([0, 0], [1, 0]);
prettyPrint([0, 0], [0, 0]);
