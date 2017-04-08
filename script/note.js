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

    $("#noteDisplay").html(
      $("#noteDisplay").html() + noteTime + ": " + noteText + "<br>"
    );

    $("#noteInput").val("");
    $("#noteForm").addClass("invisible");
    jwplayer().play(true);
  } else {
    $("#noteInput").val("Don't leave a blank note.");
  }
}
