const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  } else if (e.target.classList.contains("minus")) {
    count.innerHTML--;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "Green";
  } else if (count.innerHTML < 0) {
    count.style.color = "Red";
  } else {
    count.style.color = "Black";
  }
}
