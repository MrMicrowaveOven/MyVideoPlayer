var allNotes = [];

function makeNote(vidTime) {
  $("#noteForm").removeClass("invisible");
  var officialVidTime = Math.floor(vidTime * 100)/100;
  $("#noteTime").html(officialVidTime);
  $("#noteInput").focus();
}

function saveNote() {
  var noteText = $("#noteInput").val();
  if (noteText !== "") {
    var noteTime = videoTime();

    addNote(noteTime, noteText);

    $("#noteInput").val("");
    $("#noteForm").addClass("invisible");
    jwplayer().play(true);
  } else {
    $("#noteInput").val("Don't leave a blank note.");
  }
}

function clearAllNotes() {
  if (confirm("This will remove all notes.  Is this alright?")) {
    allNotes = [];
    $("#noteDisplayArea").html("");
  } else {
  }
}

function addNote(noteTime, noteText) {
  var noteHTML = $("<div class='noteDisplay'></div>").html(noteTime + ": " + noteText + "<br>");
  noteHTML.on("click", function() {
    moveVideoTo(noteTime);
  });
  $("#noteDisplayArea").append(noteHTML);
  allNotes.push({
    noteTime: noteTime,
    noteText: noteText
  });
}
