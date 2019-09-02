const isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc23!@#$%^&'))
console.log(isValidPassword('asdfppassword'))
