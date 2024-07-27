function knightMoves(start, end) {
	const BOARD_SIZE = 8;

	for (const e of [...start, ...end]) {
		if (e >= BOARD_SIZE || e < 0) {
			throw new Error(
				"Invalid start and end. The board is in 8x8 dimension (0-7 indices)",
			);
		}
	}

	const possibleMoves = [
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
		[-1, -2],
		[-1, 2],
		[-2, -1],
		[-2, 1],
	];

	const set = new Set();
	const queue = [{ vertex: start, path: [] }];

	while (queue.length > 0) {
		const { vertex, path } = queue.shift();

		if (vertex[0] === end[0] && vertex[1] === end[1]) {
			path.push(vertex);
			return path;
		}

		for (const move of possibleMoves) {
			const nextMove = [vertex[0] + move[0], vertex[1] + move[1]];

			if (
				nextMove[0] >= BOARD_SIZE ||
				nextMove[0] < 0 ||
				nextMove[1] >= BOARD_SIZE ||
				nextMove[1] < 0
			)
				continue;

			if (set.has(JSON.stringify(nextMove))) continue;

			set.add(JSON.stringify(nextMove));
			queue.push({ vertex: nextMove, path: [...path, vertex] });
		}
	}

	return null;
}

export default knightMoves;
