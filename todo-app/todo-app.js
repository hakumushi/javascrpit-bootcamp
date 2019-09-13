// const ps = document.querySelectorAll('p')

// ps.forEach((p) => {
//     if (p.textContent.includes('the')){
//         p.remove()
//     }
// })

const todos = [{ 
    text: 'Study english', 
    completed: false 
},{ 
    text: 'Go to the office', 
    completed: true 
},{ 
    text: 'Read the emails', 
    completed: true 
},{ 
    text: 'Grab the lunch', 
    completed: true 
},{ 
    text: 'Go to the class', 
    completed: false 
}]

const incompleteTodos = todos.filter((todo)=>{
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach((todo) => {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
