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

const filters = {
    searchText: ''
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(element => {
        return element.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter((todo)=>{
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(element => {
        const todoEl = document.createElement('p')
        todoEl.textContent = element.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', e =>{
   console.log('add')
})

document.querySelector('#search-text').addEventListener('input', e =>{
    filters.searchText = e.target.value
    renderTodos(todos, filters)
 })
