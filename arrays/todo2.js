const todos = ['Study english', 'Go to the office', 'Read the emails', 'Grab the lunch', 'Go to the class']

todos.splice(2, 1)
todos.push('Go to the gym')
todos.shift()


console.log(`You have ${todos.length} todos!`)
todos.forEach(function(item, index){
    const num = index + 1
    console.log(`${num}. ${item}`)
})

console.log('\nFor sample')
for(let index = 0; index < todos.length; index++){
    const num = index + 1
    const todo = todos[index]
    console.log(`${num}. ${todo}`)
}
