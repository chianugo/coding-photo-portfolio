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
  button = document.getElementById("colorButton");
  button.style.backgroundColor = mainColor;
  button.style.borderColor = accentColor;

  blackButton = document.getElementById("blackButton");
  blackButton.style.backgroundColor = mainColor;
  blackButton.style.borderColor = accentColor;
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
  // }

  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("accentColor", accentColor);

  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);

  setButtonColors();

  var thisElements = document.getElementsByClassName("button");
  for (var i = 0; i < thisElements.length; i++) {
    thisElements[i].style.color = accentColor;
  }
}

document.documentElement.style.setProperty("--main-color", mainColor);
document.documentElement.style.setProperty("--accent-color", accentColor);

setButtonColors();

button.addEventListener("click", applyRandomColor);
blackButton.addEventListener("click", toggleMonochrome);

// Function to simulate button click when arrow keys are pressed
function handleKeyPress(event) {
  const key = event.key.toLowerCase();

  if (key === "ArrowLeft" || key === "ArrowRight") {
    button.click();
  } else if (key === "ArrowUp" || key === "ArrowDown") {
    blackButton.click();
  }
}

// Listen for the 'keydown' event on the document
document.addEventListener("keydown", handleKeyPress);

enhance("coding-portfolio-link");
enhance("photo-portfolio-link");
enhance("contact-link");
enhance("email-link");
