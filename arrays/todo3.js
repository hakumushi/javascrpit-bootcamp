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

const deleteTodo = function(todos, text){
    const index = todos.findIndex(function(item){
        return item.text.toLowerCase() === text.toLowerCase()   
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos, text){
    return todos.filter(function(todo){
        const isTheTextMatch = todo.text.toLowerCase().includes(text.toLowerCase())
        return isTheTextMatch && !todo.completed
    })
}

const sortTodos = function(todos){
    return todos.sort(function(a, b){
        if (a.completed && !b.completed){
            return 1
        }else if (!a.completed && b.completed) {
            return -1
        } else {
            return 0
        }
    })
}

console.log(sortTodos(todos))
