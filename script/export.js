function sendTextFile() {
  var now = new Date();
  // var dataObject = {};
  var dataString = "";
  allNotes.forEach(function(note) {
    dataString += note.noteTime + ',"' + note.noteText + '"\n';
    // dataObject[note.noteTime] = note.noteText;
  });
  save("VideoNotes-" + now, dataString);
}

function save(filename, data) {
  var blob = new Blob([data], {type: 'text/csv'});
  if(window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
