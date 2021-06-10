'use strict'; 

class Notebook {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    if (note.length < 1) { throw new Error('Type something!') }
    (this.notes).push(new Note(note))

    // localStorage.note = JSON.stringify({text: "this is an example"});

    // let note = JSON.parse( localStorage.note );
    // alert( note.text ); 
  }

  showNotes(notelist) {
    for (let i = 0; i < (this.notes).length; i++) {
      
    }
  }
} 
