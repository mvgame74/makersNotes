document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var note = document.querySelector('#note');
var notelist = document.querySelector('#notelist');
var modalContent = document.querySelector('#modal-content')
var modal = document.querySelector("#myModal");
var notebook = new Notebook();

addToNotes.addEventListener('submit', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML += (`<li><a href=""><div id="${notebook.showNotesLength()}">${notebook.showNotePreview()}...</div></a></li>`);
  note.value = '';
})

notelist.addEventListener('click', (event) => {
  var id = (event.target.id - 1)
  event.preventDefault();
  modalContent.innerText = notebook.showFullNoteByID(id)
  modal.style.display = "block";
})

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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