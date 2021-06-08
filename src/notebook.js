'use strict'; 

class Notebook {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    (this.notes).push(new Note(note))
  }
} 