document.addEventListener("DOMContentLoaded", () => {

var addToNotes = document.querySelector('#add-note');
var noteItem = document.querySelector('#note');
var notelist = document.querySelector('#notelist')

addToNotes.addEventListener('submit', event => {
  event.preventDefault();
  if (noteItem.value.length < 1) return ;
  notelist.innerHTML += ('<li>' + noteItem.value + '</li>');
  noteItem.value = '';
  localStorage.setItem('notelistItems', notelist.innerHTML);
}, false);

});