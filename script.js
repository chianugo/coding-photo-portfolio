const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  //   alert("Hello");
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

// Issue #2 fix. Should wait for dom content to be loaded before splitting text to ensure that id exists
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

function getRandomColor() {
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
    "#FF1493",
    "#00CED1",
    "#FF4500",
    "#9932CC",
    "#800080",
    "#FF69B4",
    "#1E90FF",
    "#FFD700",
    "#32CD32",
    "#FF6347",
    "#6A5ACD",
    "#FF00FF",
    "#DC143C",
    "#8A2BE2",
    "#000000",
    "#FFFF00",
    "#FFC0CB",
    "#A52A2A",
    "#EEA47F",
    "#8638CD",
    "#323D25",
    "#200f8e",
    "#0ff786",
    "#260f58",
    "#061e07",
    "#dc2c45",
    "#5a0610",
    "#0676cb",
    "#f26bc3",
    "#0ac0fe",
    "#df2c8c",
    "#fafb1a",
    "#34b70c",
    "#dc6f8c",
    "#e3eb1c",
    "#070703",
    "#bbe70e",
    "#ef77eb",
    "#b5d16f",
    "#ecba32",
    "#4b0032",
    "#f9805a",
    "#001c5d",
    "#04121b",
    "#05011a",
    "#1c3929",
    "#031e04",
    "#b10b6b",
    "#256288",
  ];

  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  return colors[Math.floor(Math.random() * colors.length)];
}

let mainColor = localStorage.getItem("mainColor") || getRandomColor();
// look into if i need to set || to white or some getRaandomAccent
let accentColor = localStorage.getItem("accentColor") || getRandomColor();

function setButtonColors() {
  buttons = document.getElementsById("button");
  buttons.forEach((button) => {
    button.style.backgroundColor = mainColor;
    button.style.borderColor = accentColor;
  });
}

function applyRandomColor() {
  mainColor = getRandomColor();
  localStorage.setItem("mainColor", mainColor);
  document.documentElement.style.setProperty("--main-color", mainColor);

  setButtonColors();

  var thisElements = document.getElementsByClassName("button");
  for (var i = 0; i < thisElements.length; i++) {
    thisElements[i].style.color = accentColor;
  }
}

function toggleMonochrome() {
  var probability = Math.random() < 0.5;
  if (mainColor === "#000000") {
    mainColor = "#ffffff";
    accentColor = "#000000";
  } else {
    mainColor = "#000000";
    accentColor = "#ffffff";
  }
  // else if (mainColor === 'ffffff'){
  //     mainColor = '#000000';
  //     accentColor = '#ffffff';
  // }
  // Split into four conditions because I only want the 50/50 chance if coming from color, else, it should just cycle
  // else if (probability < 0.5) {
  //     mainColor = '#ffffff';
  //     accentColor = '#000000';
  // }
  // else if (probability >= 0.5){
  //     mainColor = '#000000';
  //     accentColor = '#ffffff';
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);
  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("accentColor", accentColor);
  setButtonColors();

  var thisElements = document.getElementsByClassName("button");
  for (var i = 0; i < thisElements.length; i++) {
    thisElements[i].style.color = accentColor;
  }
}

function applyColorCombination() {
  // Define color combinations
  const colorCombinations = [
    { main: "#FF0000", accent: "#000000" },
    { main: "#000000", accent: "#FFFF00" },
    { main: "#008000", accent: "#FFC0CB" },
    { main: "#FFFFFF", accent: "#A52A2A" },
    { main: "#00539C", accent: "#EEA47F" },
    { main: "#E0FC5F", accent: "#8638CD" },
    { main: "#F44962", accent: "#0F050C" },
    { main: "#c8db79", accent: "#323D25" },
    { main: "#ff69b4", accent: "#200f8e" },
    { main: "#0000ff", accent: "#0ff786" },
    { main: "#ff4500", accent: "#260f58" },
    { main: "#ff4500", accent: "#07011a" },
    { main: "#ff4500", accent: "#061e07" },
    { main: "#ffffff", accent: "#dc2c45" },
    { main: "#ffffff", accent: "#5a0610" },
    { main: "#ffffff", accent: "#0676cb" },
    { main: "#000000", accent: "#f26bc3" },
    { main: "#000000", accent: "#0ac0fe" },
    { main: "#000000", accent: "#df2c8c" },
    { main: "#000000", accent: "#fafb1a" },
    { main: "#000000", accent: "#34b70c" },
    { main: "#000000", accent: "#dc6f8c" },
    { main: "#565a53", accent: "#e3eb1c" },
    { main: "#007fb8", accent: "#070703" },
    { main: "#9204d4", accent: "#bbe70e" },
    { main: "#143078", accent: "#ef77eb" },
    { main: "#0000ff", accent: "#b5d16f" },
    { main: "#0000ff", accent: "#ecba32" },
    { main: "#d5bbcb", accent: "#4b0032" },
    { main: "#4b0082", accent: "#f9805a" },
    { main: "#ff00ff", accent: "#001c5d" },
    { main: "#ff00ff", accent: "#04121b" },
    { main: "#ff0000", accent: "#05011a" },
    { main: "#ff0000", accent: "#200c30" },
    { main: "#ffd700", accent: "#1c3929" },
    { main: "#ffd700", accent: "#031e04" },
    { main: "#ffd700", accent: "#b10b6b" },
    { main: "#ffd700", accent: "#256288" },
    { main: "#b5d26f", accent: "#f44963" },
    { main: "#a3977e", accent: "#f6f5ee" },
  ];

  // Choose a random color combination
  const randomIndex = Math.floor(Math.random() * colorCombinations.length);
  const selectedCombination = colorCombinations[randomIndex];

  // Update mainColor and accentColor with the selected combination
  mainColor = selectedCombination.main;
  // alert(mainColor);
  accentColor = selectedCombination.accent;

  // Save the new colors to localStorage
  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("accentColor", accentColor);

  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);

  // Update the CSS variables and button colors
  setButtonColors();
}

localStorage.setItem("mainColor", mainColor);
localStorage.setItem("accentColor", accentColor);

document.documentElement.style.setProperty("--main-color", mainColor);
document.documentElement.style.setProperty("--accent-color", accentColor);

setButtonColors();

var thisElements = document.getElementsByClassName("button");
for (var i = 0; i < thisElements.length; i++) {
  thisElements[i].style.color = accentColor;
}

function toggleInvert() {
  // Toggle the invert state and save it to localStorage
  let invertState = localStorage.getItem("invertState");
  invertState = invertState === "true" ? "false" : "true";
  localStorage.setItem("invertState", invertState);

  // Swap mainColor and accentColor when the invertState is "true"
  if (invertState === "true") {
    [mainColor, accentColor] = [accentColor, mainColor];
  } else {
    [accentColor, mainColor] = [mainColor, accentColor];
  }

  // Update the CSS variables and button colors
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);
  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("accentColor", accentColor);
  setButtonColors();
}

// Initialize mainColor and accentColor from localStorage or generate random colors if not present
mainColor = localStorage.getItem("mainColor");
accentColor = localStorage.getItem("accentColor");

if (!mainColor || !accentColor) {
  mainColor = getRandomColor();
  accentColor = getRandomColor();
  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("accentColor", accentColor);
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);
}

invertButton.addEventListener("click", toggleInvert);

document.documentElement.style.setProperty("--main-color", mainColor);
document.documentElement.style.setProperty("--accent-color", accentColor);

setButtonColors();

var colorButton = document.getElementById("colorButton");

var blackButton = document.getElementById("blackButton");

var colorCombinationButton = document.getElementById("colorCombinationButton");

var invertButton = document.getElementById("invertButton");

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
