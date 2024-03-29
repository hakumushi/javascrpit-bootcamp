let gradeCalc = function (score, totalScore=100) {
    if (typeof score !== 'number' || typeof totalScore !== 'number'){
        throw Error('Please provide numbers only')
    } 
    let percent = (score * 100) / totalScore
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

try {
    let grade1 = gradeCalc(15, 20)
    console.log(grade1)
} catch (e) {
    console.log(e.message)
}
