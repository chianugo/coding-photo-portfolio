let innerCursor = document.querySelector(".inner-cursor");
let cursorHover = innerCursor.querySelector("span");

let mouseX = sessionStorage.getItem("mouseX") || 0;
let mouseY = sessionStorage.getItem("mouseY") || 0;

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
  sessionStorage.setItem("mouseX", mouseX);
  sessionStorage.setItem("mouseY", mouseY);
});

//items that should grow the cursor
let hoverables = Array.from(document.querySelectorAll("a"));

hoverables = hoverables.concat(Array.from(document.querySelectorAll("button")));
hoverables = hoverables.concat(
  Array.from(document.querySelectorAll(".button"))
);

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
differentables = differentables.concat(
  Array.from(document.querySelectorAll("li"))
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
      sessionStorage.getItem("accentColor") === "0, 0, 0" &&
      !innerCursor.classList.contains("invert")
    ) {
      innerCursor.classList.add("invert");
    }
    cursorHover.classList.remove("visible");
  });
});
