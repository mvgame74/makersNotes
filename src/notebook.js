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

  showNotePreview() {
    return ((this.notes[(this.notes).length - 1]).note).substring(0, 20);
  }

  showNotes() {
    return (this.notes[(this.notes).length - 1]).note;
  }

  showNotesLength() {
    return (this.notes).length;
  }

  showFullNoteByID(id) {
    return this.notes[id].note
  }
} 
