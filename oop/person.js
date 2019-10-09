const Person = function(fisrtName, lastName, age, likes = []) {
    this.fisrtName = fisrtName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.fisrtName} ${this.lastName} is ${this.age}.`

    this.likes.forEach(like => {
        bio += ` ${this.fisrtName} ${this.lastName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.fisrtName = names[0]
    this.lastName = names[names.length-1]
}

const me = new Person("Paulo", "Filho", 28, ["Music", "Anime"])
me.setName("Paulo Roberto França Filho")
console.log(me.getBio())

const person2 = new Person("Yuno", "Gasai", 26)
console.log(person2.getBio())
