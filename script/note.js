function makeNote(vidTime) {
  $("#noteForm").removeClass("hide");
  var officialVidTime = Math.floor(vidTime * 100)/100;
  $("#noteTime").html(officialVidTime);
}

function saveNote() {
  var noteTime = videoTime();

  var noteText = $("#noteInput").val();
  $("#noteDisplay").html(
    $("#noteDisplay").html() + noteTime + ": " + noteText + "<br>"
  );

  $("#noteForm").addClass("hide");
  jwplayer().play(true);
}
