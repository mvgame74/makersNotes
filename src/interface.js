document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var note = document.querySelector('#note');
var notelist = document.querySelector('#notelist');
var notebook = new Notebook();
var noteChoice = document.querySelector('#noteChoice');

addToNotes.addEventListener('submit', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML += ('<li><a href="#' + notebook.showNotesLength() + '">' + notebook.showNotePreview() + '...</a></li>');
  note.value = '';
})

// notelist.addEventListener('click', (event) => {
//   let id = (event.target.id) - 1
//   event.preventDefault();
//   console.log(notebook.showFullNoteByID(id))
// })

noteChoice.EventListener('onclick', (event) => {
  let id = (event.target.id) - 1
  event.preventDefault();
  noteChoice.innerHTML = ('<p>' + notebook.showFullNoteByID(id) + '</p>');
})


// addToNotes.addEventListener('submit', event => {
//   event.preventDefault();
//   if (note.value.length < 1) return ;
//   notelist.innerHTML += ('<li>' + note.value + '</li>');
//   note.value = '';
//   localStorage.setItem('notelistItems', notelist.innerHTML);
// }, false);

// var saved = localStorage.getItem('notelistItems');

// if (saved) {
//   notelist.innerHTML = saved;
// }

});