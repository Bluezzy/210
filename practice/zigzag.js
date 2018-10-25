// 'he°^ llo EvEry On°e*' => 'HELLOEVERYONE' 

// nb of rails : 3

// H . . . O . . . R . . . E
// . E . L . E . E . Y . N .
// . . L . . . V . . . O . .

// HOREELEEYNLVO

// input : string / n (number of Rails)
// output : 

// length of each rail is same as length of the input after being cleaned.

// Steps:
// 1. Clean the string and split it in an array of letters.
// 2. Initialize an array of n number of rails, with each the length of the cleaned string.
// 3. Put each letter on the string on the right rail at the right index
// 4. 'Read' from left to right, top to down and extract the letters.

// Data Structure :
// An array of rails array with n number of '.' elements.
// 



//  STEP 2

//'HELLOEVERYONE'.split() => length : 13
// nb of rails n = 3
// 1. initialize an array with n number of empty arrays as elements. => [[., ., ., etc.] [., ., ., etc.], [etc.]]


//  STEP 3



// H . . . O . . . R . . . E
// . E . L . E . E . Y . N .
// . . L . . . V . . . O . .
// 


// [0][0], [1][1], [2][2], [1][3] [0][4] [1][5] [2][6] [1][7] [0][8] ... [0][length - 1]


// xCordinates = zigzagPattern(n, length)
// yCoordinates = [0, 1, 2, ... length - 1]

// LOOP (y ++ until y === length - 1)
// rails[x][y] = letters[y]
// 
//    


// 4 rails
// x = 0, 1, 2, 3, 2, 1, 0, 1, 2, 3...
// y = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...

// 5 rails
// x = 0, 1, 2, 3, 4, 3, 2, 1, 0, 1...
// y = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...


// STEP 4
// HOREELEEYNLVO


// given a number n, and a limit,  set an array with this pattern :
// Example : n = 3, limit = 9 :
// [0, 1, 2, 1, 0, 1, 2, 1, 0]

// solution in zig.js