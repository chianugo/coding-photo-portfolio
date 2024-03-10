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

//items that should grow the cursor
let hoverables = Array.from(document.querySelectorAll("a"));

hoverables = hoverables.concat(Array.from(document.querySelectorAll("button")));

hoverables.forEach((hoverable) => {
  hoverable.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  hoverable.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

//items that should not grow the cursor but show text underneath it
let differentables = Array.from(document.querySelectorAll("p"));

differentables = differentables.concat(
  Array.from(document.querySelectorAll("form"))
);
differentables = differentables.concat(
  Array.from(document.querySelectorAll(".header"))
);

differentables.forEach((differentable) => {
  differentable.addEventListener("mouseover", () => {
    innerCursor.classList.add("different");
  });
  differentable.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("different");
  });
});
