let totalScore = 0;
let assignmentScores = [27, 16, 45]

for (let score of assignmentScores) {
    console.log(score);
}

console.log(totalScore);

let grade = "A";

//if (totalScore >= 92) {
//    grade = "A";
//}
//else if (85 <= totalScore && totalScore < 92) {
//    grade = "B";
//}
//else {
//   grade = "C";
//}

if (totalScore < 85) {
    grade = "C";
} else if (totalScore < 92) {
    grade = "B";
}

console.log(grade);