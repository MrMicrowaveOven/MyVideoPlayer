function applyFile() {
  var value = document.getElementById("notesFile").files[0];
  console.log(value);
  var reader = new FileReader();


  reader.onload = function(evt) {
    displayNewNotes(reader.result);
  };
  reader.readAsText(value);
}

function displayNewNotes(text) {
  if (clearAllNotes()) {
    var notes = text.split("\n");
    notes.forEach(function(note) {
      if (note !== "") {
        var noteDivider = note.indexOf(",");
        var noteTime = note.slice(0, noteDivider);
        var noteText = note.slice(noteDivider + 1);
        addNote(noteTime, noteText);
      }
    });
  } else {
  }
}
