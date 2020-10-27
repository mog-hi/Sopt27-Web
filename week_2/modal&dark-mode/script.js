const modal = document.getElementById("myModal");
const modal_content = document.getElementById("modal-content");
const body = document.body;
const close = document.getElementById("close");
const btn = document.getElementById("myBtn");
const toggle = document.getElementById("toggle");

btn.onclick = function() {
  modal.style.display = "block";
}
toggle.onchange = () => {
  body.classList.toggle("dark-body");
  modal.classList.toggle("dark-modal");
  modal_content.classList.toggle("dark-modal-content");
}

close.onclick = function() {
  modal.style.display = "none";
}
