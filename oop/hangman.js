const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach(letter => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.toGuess = function(letter){
    if(this.guessedLetters.length < this.remainingGuesses){
        this.guessedLetters.push(letter)
    } else {
        console.log('You cannot guess anymore!')
    }
}

const game1 = new Hangman('japanese people', 3)
game1.toGuess('j')
game1.toGuess('a')
game1.toGuess('p')
game1.toGuess('n')
console.log(game1.getPuzzle())
