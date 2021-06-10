document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var note = document.querySelector('#note');
var notelist = document.querySelector('#notelist');
var notebook = new Notebook();
var noteChoice = document.querySelector('#noteChoice')

addToNotes.addEventListener('submit', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML += ('<li><a href="#' + notebook.showNotesLength() + '">' + notebook.showNotePreview() + '...</a></li>');

   //notelist.innerHTML += ('<li><a href="#' + notebook.showNotesLength() + '">' + notebook.showNotePreview() +
   //'...' + onclick="window.open(" + notebook.showNotes(); +", 'popup');' + '</a></li>');
  // noteChoice.innerHTML = notebook.showNotes();
  // console.log(notebook);
  note.value = '';
})

addToNotes.addEventListener('onclick', (event) => {
  event.preventDefault();
  notebook.addNote(note.value);
  notelist.innerHTML = ('<p>' + notebook.showNotes() + '</p>');
  note.value = '';
})

// $(window).load(function () {
//   $(".trigger_popup_fricc").click(function(){
//      $('.hover_bkgr_fricc').show();
//   });
//   $('.hover_bkgr_fricc').click(function(){
//       $('.hover_bkgr_fricc').hide();
//   });
//   $('.popupCloseButton').click(function(){
//       $('.hover_bkgr_fricc').hide();
//   });
// });

// notelist.addEventListener('click', () => {
//  console.log(url)
// })

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