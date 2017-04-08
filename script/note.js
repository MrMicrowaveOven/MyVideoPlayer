function makeNote(vidTime) {
  $("#noteForm").removeClass("invisible");
  var officialVidTime = Math.floor(vidTime * 100)/100;
  $("#noteTime").html(officialVidTime);
}

function saveNote() {
  var noteText = $("#noteInput").val();
  if (noteText !== "") {
    var noteTime = videoTime();

    $("#noteDisplay").html(
      $("#noteDisplay").html() + noteTime + ": " + noteText + "<br>"
    );

    $("#noteForm").addClass("invisible");
    jwplayer().play(true);
  }
}
