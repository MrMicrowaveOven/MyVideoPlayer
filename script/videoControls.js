$(document).ready(function(){
  $(document).keypress(function (e) {
    if (!$("#noteInput").is(":focus")) {
      e.preventDefault();
      // console.log(e.key);
      if (e.key === " ") {
        jwplayer().play();
      } else if (e.key === "f") {
        jwplayer().setFullscreen();
      } else if (e.key === "c") {
        jwplayer().play(false);
        makeNote(jwplayer().getPosition());
      }
    }

    if ($("#noteInput").is(":focus")) {
      if (e.key === "Enter") {
        saveNote();
        $("#noteInput").blur();
      }
    }
  });
  $("#player").attr("onmouseover", "hovering()");
  $("#player").attr("onmouseout", "idling()");
})


function videoTime() {
  return Math.floor(jwplayer().getPosition() * 100)/100;
}

function moveVideoTo(time) {
  jwplayer().seek(time);
}

function hovering() {
  showControls();
}

function idling() {
  hideControls();
}

$(document).ready(function(){
  jwplayer().onDisplayClick(function() {

  });
});

function hideControls() {
  // console.log("Hiding");
  jwplayer().setControls(false);
}

function showControls() {
  // console.log("Showing");
  jwplayer().setControls(true);
}
