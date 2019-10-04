const getSavedTodos = () => {
    const todosJson = localStorage.getItem('todos')
    return todosJson ? JSON.parse(todosJson) : []
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const generateSummaryDOM = incompleteTodos => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

const removeTodo = todoId => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId)

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (todoId) => {
    const todo = todos.find(todo => todo.id === todoId)

    if(todo){
        todo.completed = !todo.completed
    }
}

const generateTodoDOM = todo => {
    const todoEl = document.createElement('div')
    const textEl = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton  = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoEl.appendChild(checkbox)
    todoEl.appendChild(textEl)
    todoEl.appendChild(removeButton)

    textEl.textContent = todo.text
    return todoEl
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(element => {
        const searchTextMatch = element.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCmpletedMatch = !filters.hideComplete || !element.completed
        return searchTextMatch && hideCmpletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo)=> !todo.completed)

    document.querySelector('#todos').innerHTML = ''

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(element => {
        const todoEl = generateTodoDOM(element)
        document.querySelector('#todos').appendChild(todoEl)
    })
}
