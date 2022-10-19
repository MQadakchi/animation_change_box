const boxes = document.querySelectorAll(".boxes");
const tag = document.createElement("div");
tag.className = "box";
document.querySelector(".wrapper").appendChild(tag);

window.addEventListener("load", () => {
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      let top = e.target.offsetTop;
      let left = e.target.offsetLeft;
      tag.style.top = top + "px";
      tag.style.left = left + "px";
    });
  });
});
