'use strict';

// Test library
function expect(a) {
  return { 
    toEqual: function(b) {
      (a === b) ? console.log("Pass") : console.log("Fail")
    },

    toBe: function(b) {
      (typeof a === typeof b) ? console.log("Pass") : console.log("Fail")
    }
  }
}

function it(label, callback) {
  console.log(label)
  callback() 
}

// Tests go below here

it('addNote creates a note object and pushes it into notes', () => {
  var notebook = new Notebook();
  notebook.addNote('hello');
  expect(notebook.notes[0].note).toEqual('hello')
})

it('Notes initialize with a note', () => {
  var note = new Note('hello');
  expect(note.note).toEqual('hello');
})

it('Notebook can hold lots of notes', () => {
  var notebook = new Notebook();
  for (let i = 0; i < 10; i++) {
    notebook.addNote('hello');
  }
  expect((notebook.notes).length).toEqual(10)
}) 