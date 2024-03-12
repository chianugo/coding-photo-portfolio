const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);

    element.appendChild(outer);
  });
};

// Wait for dom content to be loaded before splitting text to ensure that id exists
document.addEventListener("DOMContentLoaded", function () {
  enhance("coding-portfolio-link");
});
document.addEventListener("DOMContentLoaded", function () {
  enhance("photo-portfolio-link");
});
document.addEventListener("DOMContentLoaded", function () {
  enhance("contact-link");
});
document.addEventListener("DOMContentLoaded", function () {
  enhance("email-link");
});

// Navigation bar function to hide if scrolling down and show if scrolling up
/*
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    document.querySelector(".navbar").style.top = "0";
  } else {
    // Scrolling down, hide the navbar
    document.querySelector(".navbar").style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
});
*/

let mainColor = localStorage.getItem("mainColor") || getRandomColor();
let accentColor = localStorage.getItem("accentColor") || getRandomColor();
setColors(mainColor, accentColor);

function setColors(main, accent) {
  document.documentElement.style.setProperty("--main-color", main);
  document.documentElement.style.setProperty("--accent-color", accent);
  localStorage.setItem("mainColor", main);
  localStorage.setItem("accentColor", accent);

  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = accent;
    buttons[i].style.backgroundColor = main;
  }
  updateCursor(main, accent);
}

function updateCursor(main, accent) {
  let cursor = document.querySelector(".inner-cursor");

  if (accent === "hsl(0deg 0% 0%)") {
    cursor.classList.add("invert");
  } else {
    cursor.classList.remove("invert");
  }
}

function getRandomColor() {
  const colors = [
    "hsl(360deg 100% 50%)",
    "hsl(30deg 100% 50%)",
    "hsl(120deg 100% 50%)",
    "hsl(240deg 100% 50%)",
    "hsl(275deg 100% 25%)",
    "hsl(282deg 100% 41%)",
    "hsl(328deg 100% 54%)",
    "hsl(181deg 100% 41%)",
    "hsl(16deg 100% 50%)",
    "hsl(280deg 61% 50%)",
    "hsl(300deg 100% 25%)",
    "hsl(330deg 100% 71%)",
    "hsl(210deg 100% 56%)",
    "hsl(51deg 100% 50%)",
    "hsl(120deg 61% 50%)",
    "hsl(9deg 100% 64%)",
    "hsl(248deg 53% 58%)",
    "hsl(300deg 100% 50%)",
    "hsl(348deg 83% 47%)",
    "hsl(271deg 76% 53%)",
    "hsl(60deg 100% 50%)",
    "hsl(350deg 100% 88%)",
    "hsl(360deg 59% 41%)",
    "hsl(20deg 77% 72%)",
    "hsl(271deg 60% 51%)",
    "hsl(88deg 24% 19%)",
    "hsl(248deg 81% 31%)",
    "hsl(151deg 94% 51%)",
    "hsl(259deg 71% 20%)",
    "hsl(122deg 67% 7%)",
    "hsl(351deg 72% 52%)",
    "hsl(353deg 87% 19%)",
    "hsl(206deg 94% 41%)",
    "hsl(321deg 84% 68%)",
    "hsl(195deg 99% 52%)",
    "hsl(328deg 74% 52%)",
    "hsl(60deg 97% 54%)",
    "hsl(106deg 88% 38%)",
    "hsl(344deg 61% 65%)",
    "hsl(62deg 84% 52%)",
    "#hsl(60deg 40% 2%)",
    "hsl(72deg 89% 48%)",
    "hsl(302deg 79% 70%)",
    "hsl(77deg 52% 63%)",
    "hsl(44deg 83% 56%)",
    "hsl(320deg 100% 15%)",
    "hsl(14deg 93% 66%)",
    "hsl(222deg 100% 18%)",
    "hsl(203deg 74% 6%)",
    "hsl(250deg 93% 5%)",
    "hsl(147deg 34% 17%)",
    "hsl(122deg 82% 6%)",
    "hsl(325deg 88% 37%)",
    "hsl(203deg 57% 34%)",
  ];

  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  return colors[Math.floor(Math.random() * colors.length)];
}

function applyRandomColor() {
  mainColor = getRandomColor();
  setColors(mainColor, accentColor);
}

function toggleMonochrome() {
  if (mainColor === "hsl(0deg 0% 0%)") {
    mainColor = "hsl(0deg 0% 100%)";
    accentColor = "hsl(0deg 0% 0%)";
    blackButton.title = "Toggle Light Mode";
  } else {
    mainColor = "hsl(0deg 0% 0%)";
    accentColor = "hsl(0deg 0% 100%)";
    blackButton.title = "Toggle Dark Mode";
  }
  setColors(mainColor, accentColor);
}

function applyColorCombination() {
  // Define color combinations
  const colorCombinations = [
    { main: "hsl(360deg 100% 50%)", accent: "hsl(0deg 0% 0%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(60deg 100% 50%)" },
    { main: "hsl(120deg 100% 25%)", accent: "hsl(350deg 100% 88%)" },
    { main: "hsl(0deg 0% 100%)", accent: "hsl(360deg 59% 41%)" },
    { main: "hsl(208deg 100% 31%)", accent: "hsl(20deg 77% 72%)" },
    { main: "hsl(71deg 96% 68%)", accent: "hsl(271deg 60% 51%)" },
    { main: "hsl(351deg 89% 62%)", accent: "hsl(317deg 51% 7%)" },
    { main: "hsl(72deg 58% 67%)", accent: "hsl(92deg 55% 13%)" },
    { main: "hsl(330deg 100% 71%)", accent: "hsl(248deg 81% 31%)" },
    { main: "hsl(240deg 100% 50%)", accent: "hsl(151deg 94% 51%)" },
    { main: "hsl(16deg 100% 50%)", accent: "hsl(259deg 71% 20%)" },
    { main: "hsl(16deg 100% 50%)", accent: "hsl(254deg 93% 5%)" },
    { main: "hsl(16deg 100% 50%)", accent: "hsl(122deg 67% 7%)" },
    { main: "hsl(0deg 0% 100%)", accent: "hsl(351deg 72% 52%)" },
    { main: "hsl(0deg 0% 100%)", accent: "hsl(353deg 87% 19%)" },
    { main: "hsl(0deg 0% 100%)", accent: "hsl(206deg 94% 41%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(321deg 84% 68%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(195deg 99% 52%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(328deg 74% 52%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(60deg 97% 54%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(106deg 88% 38%)" },
    { main: "hsl(0deg 0% 0%)", accent: "hsl(344deg 61% 65%)" },
    { main: "hsl(94deg 4% 34%)", accent: "hsl(62deg 84% 52%)" },
    { main: "hsl(199deg 100% 36%)", accent: "hsl(60deg 40% 2%)" },
    { main: "hsl(281deg 96% 42%)", accent: "hsl(72deg 89% 48%)" },
    { main: "hsl(223deg 71% 27%)", accent: "hsl(302deg 79% 70%)" },
    { main: "hsl(240deg 100% 50%)", accent: "hsl(77deg 52% 63%)" },
    { main: "hsl(240deg 100% 50%)", accent: "hsl(44deg 83% 56%)" },
    { main: "hsl(323deg 24% 78%)", accent: "hsl(320deg 100% 15%)" },
    { main: "hsl(275deg 100% 25%)", accent: "hsl(14deg 93% 66%)" },
    { main: "hsl(300deg 100% 50%)", accent: "hsl(222deg 100% 18%)" },
    { main: "hsl(300deg 100% 50%)", accent: "hsl(203deg 74% 6%)" },
    { main: "hsl(360deg 100% 50%)", accent: "hsl(250deg 93% 5%)" },
    { main: "hsl(360deg 100% 50%)", accent: "hsl(273deg 60% 12%)" },
    { main: "hsl(51deg 100% 50%)", accent: "hsl(147deg 34% 17%)" },
    { main: "hsl(51deg 100% 50%)", accent: "hsl(122deg 82% 6%)" },
    { main: "hsl(51deg 100% 50%)", accent: "hsl(325deg 88% 37%)" },
    { main: "hsl(51deg 100% 50%)", accent: "hsl(203deg 57% 34%)" },
    { main: "hsl(78deg 52% 63%)", accent: "hsl(351deg 89% 62%)" },
    { main: "hsl(41deg 17% 57%)", accent: "hsl(53deg 31% 95%)" },
    { main: "hsl(0deg 0% 18%)", accent: "hsl(20deg 99% 57%)" },
    { main: "hsl(167deg 56% 66%)", accent: "hsl(259deg 100% 22%)" },
    { main: "hsl(202deg 60% 22%)", accent: "hsl(42deg 92% 53%)" },
    { main: "hsl(355deg 91% 75%)", accent: "hsl(347deg 100% 19%)" },
    { main: "hsl(5deg 7% 30%)", accent: "hsl(22deg 62% 81%)" },
    { main: "hsl(192deg 55% 79%)", accent: "hsl(231deg 60% 67%)" },
    { main: "hsl(0deg 0% 20%)", accent: "hsl(0deg 0% 57%)" },
  ];

  // Choose a random color combination
  const randomIndex = Math.floor(Math.random() * colorCombinations.length);
  const selectedCombination = colorCombinations[randomIndex];

  // Update mainColor and accentColor with the selected combination
  mainColor = selectedCombination.main;
  accentColor = selectedCombination.accent;

  setColors(mainColor, accentColor);
}

function toggleInvert() {
  [mainColor, accentColor] = [accentColor, mainColor];
  setColors(mainColor, accentColor);
}

let colorButton = document.getElementById("colorButton");

let blackButton = document.getElementById("blackButton");

let colorCombinationButton = document.getElementById("colorCombinationButton");

invertButton.addEventListener("click", toggleInvert);
let invertButton = document.getElementById("invertButton");

colorButton.addEventListener("click", applyRandomColor);
blackButton.addEventListener("click", toggleMonochrome);
colorCombinationButton.addEventListener("click", applyColorCombination);

// Function to simulate button click when arrow keys are pressed
function handleKeyPress(event) {
  const key = event.key.toLowerCase();

  if (key === "ArrowLeft" || key === "ArrowRight") {
    colorButton.click();
  } else if (key === "ArrowUp" || key === "ArrowDown") {
    blackButton.click();
  }
}

// Listen for the 'keydown' event on the document
document.addEventListener("keydown", handleKeyPress);
