$(window).keypress(function (e) {
  if (!$("#noteInput").is(":focus")) {
    e.preventDefault();
    if (e.keyCode === 0 || e.keyCode === 32) {
      jwplayer().play();
    } else if (e.keyCode === 102) {
      jwplayer().setFullscreen();
    } else if (e.keyCode === 99) {
      jwplayer().play(false);
      makeNote(jwplayer().getPosition());
    }
  }

  if ($("#noteInput").is(":focus")) {
    if (e.keyCode === 13) {
      saveNote();
    }
  }
});

$("#player").attr("onmouseover", "hovering()");
$("#player").attr("onmouseout", "idling()");

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

jwplayer().onDisplayClick(function() {

});

function hideControls() {
  // console.log("Hiding");
  jwplayer().setControls(false);
}

function showControls() {
  // console.log("Showing");
  jwplayer().setControls(true);
}
