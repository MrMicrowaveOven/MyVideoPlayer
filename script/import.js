function applyFile() {
  var value = document.getElementById("notesFile").files[0];
  console.log(value);
  var reader = new FileReader();


  reader.onload = function(evt) {
    console.log(reader.result);
  };
  reader.readAsText(value);
}
