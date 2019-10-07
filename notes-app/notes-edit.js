'use strict'

const titleElement = document.querySelector('#note-title')
const dateElement = document.querySelector('#last-edited')
const bodyElement = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(note =>{
    return note.id === noteId
})

if(!note){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.text
dateElement.textContent = generateLastEdited(note.updatedAt)

document.querySelector('#edit-form').addEventListener('submit', e => {
    e.preventDefault()
    note.title = titleElement.value
    note.text = bodyElement.value 
    note.updatedAt = moment().valueOf()

    saveNotes(notes)
    location.assign('/index.html')
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = getSavedNotes()
        note = notes.find(note =>{
            return note.id === noteId
        })

        if(!note){
            location.assign('/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.text
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})
