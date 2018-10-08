// Input : string Numbers representing rolls in frames format (separatede by space)
// Output : total score based on ten-pin rules

// Frame Score Function (frame, nextFrame, nextNextFrame):

// - for each frame, determine its single frame score(see line 13).
// - if the frame is 'X'
//     - add the score of the nextFrame.
//     - if the frame is 'X' again,
//         - add the score of the first roll of the next frame.
// - if the frame ends with '/'
//      -add the value of the first roll of the next frame (frame[0])

// Single Frame Score(frame) :
// if frame === undefined return 0.
// else return rollValue(frame.split('')[0]) + (rollValue(frame.split('')[1]) || 0)

// Roll Values : '1' => 1,  '2' => 2 ... 'X' => 10, '/' => 10

// Data Structure :

// ['11', '11', '3/', ... , 'X3']

// Algorithm :

// 1. split the raw string(' ') to an array of frames
// 2. Initialize a variable named 'currentScore' and set it to the value 0.
// 3. iterate through each frame :
//     - increment currentScore with the frame value based on the current frame and the 2 next frames.
// 4. 

function rollValue(singleRoll) {
  if (singleRoll === 'X' || singleRoll === '/') {
    return 10 
  } else {
    return (Number(singleRoll) || 0);
  }
}

function singleFrameScore(frame) {
  if (frame === undefined) { return 0; };
  var score = 0;

  var roll1 = frame.split('')[0] || '0';
  var roll2 = frame.split('')[1] || '0';

  score += (rollValue(roll1) + rollValue(roll2));
  if (score >= 10) { score = 10 };

  return score;
}

function frameScore(frame1, frame2, frame3) {
  if (frame1 === undefined) { return 0; }

  var score = singleFrameScore(frame1);
  if (frame1 === 'X') {
    score += singleFrameScore(frame2);
    if (frame2 === 'X') {
      score += rollValue(frame3[0]);
    }
    else if (frame2.startsWith('XX')) {
      return 30;
    }
  } else if (frame1.endsWith('/')) {
    score += rollValue(frame2[0])
  }

  return score;
}

function lastFrameScore(lastFrame) {
  var noSpareRegex = /^[^\/]*$/;
  if (noSpareRegex.test(lastFrame)) { 
    if (lastFrame.length = 3) {
      return rollValue(lastFrame[0]) + rollValue(lastFrame[1]) + rollValue(lastFrame[2])
    } else {
      return rollValue(lastFrame[0]) + rollValue(lastFrame[1]);
    }
  } else { 
    return 10 + rollValue(lastFrame[2]); 
  }
}

function bowlingScore(frames) {
  frames = frames.split(' ');
  var lastFrame = frames[frames.length - 1];
  var regularFrames = frames.slice();
  var currentScore = 0;
  var i;

  for (i = 0; i < regularFrames.length - 1; i++) {
    currentScore += frameScore(frames[i], frames[i + 1], frames[i + 2])
  }

  return currentScore + lastFrameScore(lastFrame);
}

frame1 = "27 1/ 3/ X 34 X 3/ X 90 XXX"
frame2 = "X X X X X X X X X XXX"
frame3 = "70 1/ 90 X 35 2/ 54 42 72 12"
frame4 = "X 3/ 12 3/ 42 52 63 9/ X 1/X"