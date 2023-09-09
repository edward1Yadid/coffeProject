///coffe webpage
const containerAnimation = document.getElementById("containerAnimationCoffe");
let count = 1;

const AnimationID = setInterval(() => {
  const div = document.createElement("div");
  div.id = `chiled${count}`;
  div.style.width = "220px";
  div.style.height = "110px";
  div.classList = "bubble";

  containerAnimation.appendChild(div);
  count++;

  if (count == 50) {
    clearInterval(AnimationID);
  }
}, 100);
