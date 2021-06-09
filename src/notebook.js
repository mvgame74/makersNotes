'use strict'; 

class Notebook {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    (this.notes).push(new Note(note))

    localStorage.note = JSON.stringify({text: "this is an example"});

    let note = JSON.parse( localStorage.note );
    alert( note.text ); 
  }
} 
