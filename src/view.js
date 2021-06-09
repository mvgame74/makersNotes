var listOfNotes = document.getElementById('listOfNotes');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
    ourRequest.onload = function() {
    //console.log(ourRequest.responseText)
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});
function renderHTML(data) {
  var htmlString = "";

  for(i=0; i<data.length; i++) {
    htmlString += "<p>" + data[i].text + '.</p>';      
  }

  listOfNotes.insertAdjacentHTML('beforeend', htmlString);
}
