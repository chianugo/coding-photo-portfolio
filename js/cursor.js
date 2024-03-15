let innerCursor = document.querySelector(".inner-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
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

// let cursor = document.querySelector("div.cursors");
let balls = document.querySelectorAll("div.cursors div");

let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {
  let currentX = 0;
  let currentY = 0;

  let SPEED = 0.25 - index * 0.015;
  console.log(SPEED);

  function animate() {
    currentX += (aimX - currentX) * SPEED;
    currentY += (aimY - currentY) * SPEED;

    ball.style.left = `${currentX}px`;
    ball.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("mousemove", function (e) {
  aimX = e.pageX;
  aimY = e.pageY;
});
