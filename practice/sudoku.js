// Rules :
//
// Each row and each column must contain all numbers from 1 to 9,
// and they must appear only once.

//input : we assume that a sudoku board is an array of 9 subarrays, each one with 9 numbers from 1 to 9.
// output : boolean

// A ) VALID LINE ALGORITHM (input : array of numbers)
// 1. Sort the line.
// 2. Return false if the length is not equal to 9.
// 3. Iterate over the elements of the line 
//      - Return false if line[currentIndex] !== currentIndex + 1;
// 4.return true

// B ) GET COLUMNS ALGORITHM (input : sudoku grid, array of 8 subbarays with 9 numbers)
// 1. Set columns as an array of 9 empty sub-arrays.
// 2. Iterate through the column indexes.
//    - insinde each step of column index iteration, Iterate through the rows (elements of the grid)
//      using rowIndex from 0 to 8.
//      - for each element, do columns[columnIndex].push(grid[rowIndex][columnIndex])
//  3. return columns

// C ) VALID GRID ALGORITHM (input : sudoku grid)
// 1. iterate over the grid elements (the rows) :
//    - return false if the current line is not valid.
// 2. get columns from the grid and iterate over each column :
//    - return false if the current line is no valid.
// 3. return true

function validSolution(board) {
	var i;
	var currentLine;
	var columns = getColumns(board);

	for (i = 0; i <= 8; i++) {
		currentLine = board[i];
		if (!isValid(currentLine)) { return false; }
	}

	for (i = 0; i <= 8; i++) {
		currentLine = columns[i];
		if (!isValid(currentLine)) { return false; }
	}

	return true;
}

function getColumns(board) {
	var columns = [[], [], [], [], [], [], [], [], []];
	var columnIndex = 0;
	var rowIndex = 0;

	for (columnIndex = 0; columnIndex <= 8; columnIndex++) {
		for (rowIndex = 0; rowIndex <= 8; rowIndex++) {
			columns[columnIndex][rowIndex] = board[rowIndex][columnIndex];
		}
	}

	return columns;
}

function isValid(line) {
	if (line.length !== 9) { return false; }

	line = line.sort();
	var i;

	for (i = 0; i <= 8; i++) {
		if (line[i] !== i + 1) { return false; }
	}

	return true;
}





