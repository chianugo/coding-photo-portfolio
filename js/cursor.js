let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  // console.log(x, y);
  innerCursor.style.left = `${x}px`;
  // outerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  // outerCursor.style.top = `${y}px`;
}

let hoverables = Array.from(document.querySelectorAll("a"));

hoverables = hoverables.concat(Array.from(document.querySelectorAll("button")));

console.log(hoverables);

hoverables.forEach((hoverable) => {
  hoverable.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  hoverable.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});
