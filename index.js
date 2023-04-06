let bubbles = document.querySelector(".bubbles__box");
console.log(bubbles);
bubbles.addEventListener("click", () => {
  let sound = document.getElementById("Sound");
  sound.play();
});
