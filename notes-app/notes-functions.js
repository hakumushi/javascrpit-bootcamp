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
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unamed note'
    }

    noteEl.className = 'note'

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
