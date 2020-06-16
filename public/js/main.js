const socket = io();
var userName = "";
var turn = 0;
let isHost = false;
let currentVote = -1;

window.onbeforeunload = function() {
  return "If you leave this page, you won'll have to wait for the next!";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

socket.on('receiveComments', (players) => {
  $("body").html("");
});

$(".resetButton").click(() => {
  socket.emit("reset", "");
});