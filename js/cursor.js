let innerCursor = document.querySelector(".inner-cursor");
let cursorHover = innerCursor.querySelector("span");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;

//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;
// }

let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;
const SPEED = 0.5;

function animate() {
  let distX = mouseX - x;
  let distY = mouseY - y;

  x += distX * SPEED;
  y += distY * SPEED;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

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
differentables = differentables.concat(
  Array.from(document.querySelectorAll(".grid"))
);

differentables.forEach((differentable) => {
  differentable.addEventListener("mouseover", () => {
    innerCursor.classList.add("different");
  });
  differentable.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("different");
  });
});

const images = document.querySelectorAll("img[data-hover]");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    if (innerCursor.classList.contains("invert")) {
      innerCursor.classList.remove("invert");
    }
    cursorHover.classList.add("visible");
    cursorHover.innerHTML = image.getAttribute("data-hover");
  });
  image.addEventListener("mouseout", () => {
    if (
      localStorage.getItem("accentColor") === "hsl(0deg 0% 0%)" &&
      !innerCursor.classList.contains("invert")
    ) {
      innerCursor.classList.add("invert");
    }
    cursorHover.classList.remove("visible");
  });
});
