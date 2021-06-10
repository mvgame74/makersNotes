document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var note = document.querySelector('#note');
var notelist = document.querySelector('#notelist');
var notebook = new Notebook();

addToNotes.addEventListener('submit', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML += ('<li><a href="#' + (notebook.notes).length + '">' + (notebook.notes[(notebook.notes).length - 1]).note + '</a></li>');
  note.value = '';
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