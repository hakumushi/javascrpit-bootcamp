let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideComplete: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', e =>{
    filters.searchText = e.target.value
    renderTodos(todos, filters)
 })

 document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault()
    todos.push({
       id: uuidv4(),
       text: e.target.elements.text.value, 
       completed: e.target.elements.completed.checked
      })
    saveTodos(todos)
    e.target.elements.text.value = ''
    e.target.elements.completed.checked = false
    renderTodos(todos, filters)
 })

 document.querySelector('#hide-completed').addEventListener('change', e => {
    filters.hideComplete = e.target.checked
    renderTodos(todos, filters)
 })
