$(window).keypress(function (e) {
  // console.log(e.keyCode);
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault();
    jwplayer().play();
  } else if (e.keyCode === 102) {
    e.preventDefault();
    jwplayer().setFullscreen();
  } else if (e.keyCode === 99) {
    e.preventDefault();
    jwplayer().play(false);
    makeNote(jwplayer().getPosition());
  }
});

$("#player").attr("onmouseover", "hovering()");
$("#player").attr("onmouseout", "idling()");

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
