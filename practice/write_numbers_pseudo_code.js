// requirements :
// a number from 0 to 6 digits - number.
// 0 -> 9 
//

// input : 17118 => '17118' => '017118' => ['017', '118'] => map [[0, 1, 7], [1, 1, 8]]

// at index 0:
// 0 => ''
// 1 => one
// 2 => two
// ...
// 9 => 9

// at index 1:
// 0 => ''
// 1 => ''
// 2 => twenty
// 3 => thirty
// 4 => fourty
// 5 => fifty
// 6 => sixty
// etc.

// at index 2:
// if digits[i - 1] === 1
//   0 => 'ten'
//   1 => 'eleven'
//   2 => 'thirteen'
//   3 => 'thirteen'
//   etc/
// else
//   0 => ''
//   1 => 'one'
//   etc.


// if nb of digits in input > 3, 'thousand'

//---------------------------------------------------------------------------

// ALGORITHM :

// 0. if 0, return 'zero'

// 1. set a variable named 'thousand' and set it to the boolean false. if String(input).length >3, set it to true.

// 2. format the number into an array of two arrays of corresponding digits, store in in a variable digits.

// 3. create a variable named result and assigned an empty array to it.

// 4. create two variables named firstHalf and secondHalf, set it to digits[0] and digits[1] respectively.

// 5. iterate through the firstHalf digits by keeping track of the index :
//    if index == 0, push hundredDigitNumbers(firstHalf[i]) to the result
//    if index == 1, push dozenDigitNumbers(firstHalf[i]) to the result.
//    if index == 2
//       - if firstHalf[1] === 1,
//              -  if firstHalf[i] = 0, result += 'ten'
//                 if firstHalf[i] = 1, result += 'eleven'
//                 if firstHalf[i] = 2, result += 'twelve'
//                 if firstHalf[i] = 3, result += 'thirteen' etc. 
//       - else push unitDigitNumbers(firstHalf[i]) to the result.

// 6. if thousand is true, firstHalf.push('thousand')
// 7. repeat step 5 with secondHalf.
// 8. return the result in a formatted type.


// -------------------------------------------------------------------------------