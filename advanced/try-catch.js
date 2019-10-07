const getTip = amount => {
    if (typeof amount !== 'number'){
        throw Error('Argument must be a number')
    } 
    return amount * .25
}

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log(e.message)
}
