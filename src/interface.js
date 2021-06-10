document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var note = document.querySelector('#note');
var notelist = document.querySelector('#notelist');
var notebook = new Notebook();

addToNotes.addEventListener('submit', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML += ('<li><a href="#' + notebook.showNotesLength() + '">' + notebook.showNotePreview() + '...</a></li>');
  note.value = '';
})

notelist.addEventListener('click', () => {
 console.log(url)
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