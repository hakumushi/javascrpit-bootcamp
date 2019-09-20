const getSavedTodos = () => {
    const todosJson = localStorage.getItem('todos')

    let todos = []
    if (todosJson != null) {
        todos = JSON.parse(todosJson)
    }
    return todos
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

const generateTodoDOM = (element) => {
    const todoEl = document.createElement('p')
    todoEl.textContent = element.text
    return todoEl
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

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(element => {
        const todoEl = generateTodoDOM(element)
        document.querySelector('#todos').appendChild(todoEl)
    })
}
