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
  var examsData = getExamsData(scores);
  records.exams = stats(examsData); 
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

function getStudentScore(studentData) {
  var examsScore = getAverage(studentData.scores.exams);
  var exercicesScore = getSum(studentData.scores.exercices);
  return Math.round(examsScore * 0.65 + exercicesScore * 0.35);
}


























/*

generateClassRecordSummary(studentScores);

// returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

*/