const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Span'
},{
    title: 'Habbits to work on',
    body: 'Excercise. Eating a bit better.'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]
// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach((p) => {
//     p.textContent = '******'
//     // console.log(p.textContent)
//     // p.remove()
// })

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) =>{
    const filteredNotes = notes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note)=>{
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) =>{
    console.log('Create')
})

document.querySelector('#remove-all').addEventListener('click', (e) =>{
    document.querySelectorAll('.note').forEach((element)=>{
        element.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
