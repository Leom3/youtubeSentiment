const socket = io();

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

function getUrl() {
  var url = document.getElementById("Url").value;
  var y = document.getElementsByClassName("search-box");

  if (y[0].style.display === "none") {
    y[0].style.display = "block";
  } else {
    y[0].style.display = "none";
  }
  socket.emit(getComments, url);
}

socket.on('receiveComments', (comments) => {
  $("body").html("");
});

$(".resetButton").click(() => {
  socket.emit("getComments", "");
});