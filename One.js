const btn = document.querySelectorAll(".button");
const body = document.body;

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
