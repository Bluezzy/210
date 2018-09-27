// input : 3 integers greater to 0 and inferior to 180.
// output : type of triangle based on some rules

// RULES :
// invalid :  (sum(angle1, angle2, angle3) !== 180) || (angle1 <= 0) || (angle2 <= 0) || (angle3 <= 0)
// right : angle1 || angle2 || angle3 is exactly 90
// acute : all are less than 90
// obtuse : neither right not acute


// algorithm :
// 4 functions that return true or false :
//  - isInvalid should return true if the sum of their angles are not equal to 180,
//  - or if one of the angles is  <= 0.
//


function isInvalid(triangle) {
  return anglesSum(triangle) !== 180 || triangle.some(function(angle) { return angle <= 0; } );
}

function isRight(angles) {
  return angles.some(function(angle) { return angle === 90; } );
}

function isAcute(angles) {
  return angles.every(function(angle) { return angle < 90; } );
}

function triangle(angle1, angle2, angle3) {
  var triangle = [angle1, angle2, angle3];
  if (isInvalid(triangle)) { return 'invalid' }
    else if (isRight(triangle)) { return 'right' }
    else if (isAcute(triangle)) { return 'acute' } 
    else { return 'obtuse' }
}

function anglesSum(triangle) {
  return triangle.reduce(function(sum, angle) {
    return sum + angle;
  });
}