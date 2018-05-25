var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var records = {};
  records.studentGrades = [];

  for (studentData in scores) {
    var score = getScore(scores[studentData]);
    var letterGrade = getLetterGrade(score);
    records.studentGrades.push(formatGrade(score, letterGrade));
  };

  var examsData = getExamsData(scores);
  records.exams = stats(examsData); 

  return records;
}

function getExamsData(scores) {
  var exams = [[], [], [], []];
  var i;
  for (i = 0; i <= 3; i++) {
    for (student in scores) {
      exams[i].push(scores[student].scores.exams[i])
    }
  }
  return exams;
}

function stats(exams) {
  var stats = [{}, {}, {}, {}];
  exams.forEach(function(exam, index) {
    stats[index].average = getAverage(exams[index]);
    stats[index].minimum = getMinimum(exams[index]);
    stats[index].maximum = getMaximum(exams[index]);
  })
  return stats;
}

function getAverage(numbers) {
  var total = numbers.reduce(function(total, grade) {
    return total + grade;
  });
  return Number((total / numbers.length).toFixed(1));
}


function getMinimum(numbers) {
  return numbers.reduce(function(value1, value2) {
    return value1 < value2 ? value1 : value2 ;
  });
}

function getMaximum(numbers) {
  return numbers.reduce(function(value1, value2) {
    return value1 > value2 ? value1 : value2 ;
  });
}

function getSum(numbers) {
  return numbers.reduce(function(value1, value2) {
    return value1 + value2;
  });
}

function getScore(studentData) {
  var examsScore = getAverage(studentData.scores.exams);
  var exercisesScore = getSum(studentData.scores.exercises);
  return Math.round(examsScore * 0.65 + exercisesScore * 0.35);
}

function getLetterGrade(score) {
  if (score >= 93) { 
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function formatGrade(score, letterGrade) {
  return (String(score) + ' (' + letterGrade + ')');
}

