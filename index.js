const bubbles = document.querySelector(".bubbles__box");

bubbles.addEventListener("click", (e) => {
  const sound = document.getElementById("Sound");
  sound.play();
  console.log(e, e.target, e.currentTarget.id);
  e.target.remove();
  // let t = document.querySelector(`#${e.target.offsetParent.id}`);
  // t.remove();бред
  paint();
});

function paint() {
  let markup = `<div 
  id=${(Math.random() * (100 - 1) + 1).toFixed()}
style="scale: ${(Math.random() * (1 - 0.1) + 0.1).toFixed(2)}; top: ${(
    Math.random() * (70 - 1) +
    1
  ).toFixed()}%; left: ${(Math.random() * (70 - 1) + 1).toFixed()}%"
class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`;
  bubbles.insertAdjacentHTML("beforeend", markup);
}

function windowStart() {
  for (let i = 0; i < 10; i++) {
    paint();
  }
}

document.addEventListener("DOMContentLoaded", windowStart);
