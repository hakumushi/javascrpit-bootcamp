const square = num => num * num

const squareLong = num => {
    return num * num
}

console.log(square(5))

const people = [{
    name: "Paulo",
    age: 28
},{
    name: "Jess",
    age: 31
},{
    name: "Amina",
    age: 27
}]

const under30 = people.filter( pessoa => pessoa.age < 30 )
console.log(under30)

const age27 = people.find( pessoa => pessoa.age === 27 )
console.log(age27)
