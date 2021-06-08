'use strict';

// Test library
function expect(a) {
  return { 
    toEqual: function(b) {
      (a === b) ? console.log("Pass") : console.log("Fail")
    }
  }
}

function it(label, callback) {
  console.log(label)
  callback() 
}

// Tests go below here

