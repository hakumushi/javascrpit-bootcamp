const makeGuess =  function(guess){
    let min = 1
    let max = 5
    return guess == Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(makeGuess(2))