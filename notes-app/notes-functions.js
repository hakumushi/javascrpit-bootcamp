// Read existing notes from localstorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    let notes = []
    if (notesJSON != null){
        notes = JSON.parse(notesJSON)
    }
    return notes
}

//  Save the notes to the localstorage
const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = noteId => {
    const noteIndex = notes.findIndex( note =>{
        return note.id === noteId
    })

    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const removeButton = document.createElement('button')


    // Setup the remove note button
    removeButton.textContent = 'x'
    noteEl.appendChild(removeButton)

    removeButton.addEventListener( 'click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)   
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unamed note'
    }

    textEl.className = 'note'
    textEl.style.padding = '5px'
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = (notes, filters) =>{
    const filteredNotes = notes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note)=>{
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
