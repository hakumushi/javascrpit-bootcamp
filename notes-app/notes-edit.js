const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(note =>{
    return note.id === noteId
})

if(note === undefined){
    location.assign('/index.html')
}

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')

titleElement.value = note.title
bodyElement.value = note.text

document.querySelector('#edit-form').addEventListener('submit', e => {
    e.preventDefault()
    note.title = titleElement.value
    note.text = bodyElement.value 

    saveNotes(notes)
    location.assign('/index.html')
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})
