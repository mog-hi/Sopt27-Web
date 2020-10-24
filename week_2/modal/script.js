var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var close = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}
