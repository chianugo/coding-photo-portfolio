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
  updateCursor(accent);
}

function updateCursor(accent) {
  let cursor = document.querySelector(".inner-cursor");

  if (accent === "0, 0, 0") {
    cursor.classList.add("invert");
  } else {
    cursor.classList.remove("invert");
  }
}

function getRandomColor() {
  const colors = [
    "255, 0, 0",
    "hsl(30deg 100% 50%)",
    "hsl(120deg 100% 50%)",
    "0, 0, 168",
    "74, 0, 128",
    "hsl(282deg 100% 51%)",
    "hsl(328deg 100% 54%)",
    "hsl(181deg 100% 51%)",
    "255, 154, 117",
    "hsl(280deg 61% 50%)",
    "hsl(300deg 100% 25%)",
    "255, 107, 181",
    "hsl(210deg 100% 56%)",
    "255, 217, 0",
    "hsl(120deg 61% 50%)",
    "hsl(9deg 100% 64%)",
    "hsl(248deg 53% 58%)",
    "255, 0, 255",
    "hsl(348deg 83% 47%)",
    "hsl(271deg 76% 53%)",
    "hsl(60deg 100% 50%)",
    "hsl(350deg 100% 88%)",
    "hsl(360deg 59% 41%)",
    "247, 213, 196",
    "83, 33, 131",
    "hsl(88deg 24% 19%)",
    "19, 9, 83",
    "97, 250, 176",
    "38, 15, 87",
    "hsl(122deg 67% 70%)",
    "221, 44, 71",
    "91, 6, 16",
    "0, 87, 151",
    "242, 105, 194",
    "11, 193, 254",
    "hsl(328deg 74% 52%)",
    "251, 251, 24",
    "51, 182, 12",
    "hsl(344deg 61% 65%)",
    "236, 241, 95",
    "188, 231, 13",
    "hsl(302deg 79% 70%)",
    "hsl(77deg 52% 63%)",
    "236, 186, 50",
    "77, 0, 51",
    "249, 125, 88",
    "0, 28, 92",
    "hsl(203deg 74% 56%)",
    "hsl(250deg 93% 75%)",
    "29, 58, 42",
    "hsl(122deg 82% 46%)",
    "177, 11, 108",
    "37, 98, 136",
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
  if (mainColor === "0, 0, 0") {
    mainColor = "255, 255, 255";
    accentColor = "0, 0, 0";
    blackButton.title = "Toggle Light Mode";
    blackButton.children[0].classList.add("fa-moon");
    blackButton.children[0].classList.remove("fa-sun");
    blackButton.setAttribute("data-tooltip", "Toggle Dark Mode");
  } else {
    mainColor = "0, 0, 0";
    accentColor = "255, 255, 255";
    blackButton.title = "Toggle Dark Mode";
    blackButton.children[0].classList.remove("fa-moon");
    blackButton.children[0].classList.add("fa-sun");
    blackButton.setAttribute("data-tooltip", "Toggle Light Mode");
  }
  setColors(mainColor, accentColor);
}

function applyColorCombination() {
  // Define color combinations
  const colorCombinations = [
    { main: "255, 153, 153", accent: "0, 0, 0" },
    { main: "0, 0, 0", accent: "255, 255, 0" },
    { main: "0, 71, 0", accent: "255, 194, 204" },
    { main: "255, 255, 255", accent: "122, 31, 31" },
    { main: "0, 44, 82", accent: "247, 213, 196" },
    { main: "223, 252, 95", accent: "83, 33, 131" },
    { main: "249, 154, 168", accent: "27, 9, 22" },
    { main: "200, 220, 122", accent: "32, 51, 15" },
    { main: "255, 107, 181", accent: "19, 9, 83" },
    { main: "0, 0, 168", accent: "97, 250, 176" },
    { main: "255, 154, 117", accent: "38, 15, 87" },
    { main: "255, 255, 255", accent: "221, 44, 71" },
    { main: "255, 255, 255", accent: "91, 6, 16" },
    { main: "255, 255, 255", accent: "0, 87, 151" },
    { main: "0, 0, 0", accent: "242, 105, 194" },
    { main: "0, 0, 0", accent: "11, 193, 254" },
    { main: "0, 0, 0", accent: "251, 251, 24" },
    { main: "0, 0, 0", accent: "51, 182, 12" },
    { main: "51, 53, 49", accent: "236, 241, 95" },
    { main: "56, 192, 255", accent: "7, 7, 3" },
    { main: "83, 2, 120", accent: "188, 231, 13" },
    { main: "20, 48, 118", accent: "188, 231, 13" },
    { main: "0, 0, 168", accent: "182, 210, 112" },
    { main: "0, 0, 168", accent: "236, 186, 50" },
    { main: "212, 185, 202", accent: "77, 0, 51" },
    { main: "74, 0, 128", accent: "249, 125, 88" },
    { main: "255, 0, 255", accent: "0, 28, 92" },
    { main: "255, 0, 0", accent: "5, 1, 25" },
    { main: "255, 217, 0", accent: "5, 1, 25" },
    { main: "255, 217, 0", accent: "29, 58, 42" },
    { main: "255, 217, 0", accent: "177, 11, 108" },
    { main: "255, 217, 0", accent: "37, 98, 136" },
    { main: "72, 65, 51", accent: "246, 245, 238" },
    { main: "hsl(0deg 0% 18%)", accent: "hsl(20deg 99% 57%)" },
    { main: "hsl(167deg 56% 66%)", accent: "hsl(259deg 100% 22%)" },
    { main: "hsl(202deg 60% 22%)", accent: "hsl(42deg 92% 53%)" },
    { main: "hsl(355deg 91% 75%)", accent: "hsl(347deg 100% 13%)" },
    { main: "hsl(5deg 7% 30%)", accent: "hsl(22deg 62% 81%)" },
    { main: "172, 219, 231", accent: "120, 136, 221" },
    { main: "51, 51, 51", accent: "145, 145, 145" },
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

let invertButton = document.getElementById("invertButton");
invertButton.addEventListener("click", toggleInvert);

colorButton.addEventListener("click", applyRandomColor);
blackButton.addEventListener("click", toggleMonochrome);
colorCombinationButton.addEventListener("click", applyColorCombination);

document.addEventListener("keydown", function (e) {
  let keyPressed = e.key;
  if (keyPressed === "x") {
    // console.log("x pressed");
    toggleInvert();
  }
  if (keyPressed === "a") {
    applyColorCombination();
  }
});
