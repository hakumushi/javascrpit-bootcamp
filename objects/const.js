const gradeCalc = function (score, totalScore=100) {
    const percent = (score * 100) / totalScore
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'E'
    }
    return `You got a ${letterGrade} (${percent}%)!`
}

const grade1 = gradeCalc(15, 20)

console.log(grade1)
