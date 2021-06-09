var json = JSON.stringify(this.notes);

var fs = require('fs');
fs.writeFile('notes.json', json, 'utf8', callback);

fs.readFile('notes.json', 'utf8', function readFileCallback(err, data){
  if (err){
    console.log(err);
  } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push({id: 2, square:3}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
  }
});

<script>
        fetch("notes.json")
            .then(response => response.json())
            .then(data => {
              console.log(data[0].header);
              document.querySelector().innertext = data[0].header;
            })
      </script>
