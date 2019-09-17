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
    searchText: '',
    hideComplete: false
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(element => {
        const searchTextMatch = element.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCmpletedMatch = !filters.hideComplete || !element.completed
        return searchTextMatch && hideCmpletedMatch
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

document.querySelector('#search-text').addEventListener('input', e =>{
    filters.searchText = e.target.value
    renderTodos(todos, filters)
 })

 document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault()
    todos.push({text: e.target.elements.text.value, completed: e.target.elements.completed.checked})
    e.target.elements.text.value = ''
    e.target.elements.completed.checked = false
    renderTodos(todos, filters)
 })

 document.querySelector('#hide-completed').addEventListener('change', e => {
    filters.hideComplete = e.target.checked
    renderTodos(todos, filters)
 })
