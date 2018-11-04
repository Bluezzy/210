function includesOppositePair(directions) {
	return (directions.includes('NORTH') && directions.includes('SOUTH')) ||
	       (directions.includes('WEST') && directions.includes('EAST'));
}

function getOppositeDirection(direction) {
	if (direction === 'NORTH') { return 'SOUTH'; }
	if (direction === 'SOUTH') { return 'NORTH'; }
	if (direction === 'WEST') { return 'EAST'; }
	if (direction === 'EAST') { return 'WEST'; }
}

function dirReduc(arr) {
	var shortestPath = arr.slice();
	var currentDirection;
	var oppositeDirection;
	var oppositeDirectionIndex;
	while (includesOppositePair(shortestPath)) {
		currentDirection = shortestPath[0];
		oppositeDirection = getOppositeDirection(currentDirection);
		shortestPath.splice(0, 1);
		shortestPath.splice(shortestPath.indexOf(oppositeDirection), 1);
	}

	return shortestPath;
}

arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
