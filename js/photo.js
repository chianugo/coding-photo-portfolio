let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
const TOTAL_SLIDE_LENGTH = slides.length;
filterSelection("slide"); // Begin by showing all
plusSlides(0);

// Next/previous controls
function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  while (slides[slideIndex].classList.contains("hidden")) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
  }
  showSlides();

  // Load the next image when you go to the next slide
  const nextIndex = (slideIndex + 1) % slides.length;
  let prevIndex;
  if (slideIndex === 0) {
    prevIndex = slides.length - 1;
  } else {
    prevIndex = (slideIndex - 1) % slides.length;
  }
  const nextImage = slides[nextIndex].querySelector("img");
  const prevImage = slides[prevIndex].querySelector("img");
  if (nextImage.loading === "lazy" || prevImage.loading === "lazy") {
    // Change loading behavior to eager
    nextImage.loading = "eager";
    prevImage.loading = "eager";
  }
}

document.addEventListener("keydown", function (e) {
  var keyPressed = e.key;
  if (keyPressed === "ArrowLeft") {
    //Left Key Press
    // console.log("left");
    plusSlides(-1);
  } else if (keyPressed === "ArrowRight") {
    // Right Key Press
    // console.log("right");
    plusSlides(1);
  }
});

/*
Displays slides based on the current state (grid or non-grid).
If in non-grid mode, hides all slides except the current one.
If in grid mode, displays all slides and updates their slide numbers.
*/
function showSlides() {
  // Select the column element and check if it's in grid mode
  let column = document.querySelector(".column");
  let isGrid = column.classList.contains("grid");
  // Non-grid mode: Show only the current slide
  if (!isGrid) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }
  // Grid mode: Show all slides and update slide numbers
  else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
      const currentSlideNumber = slides[i].querySelector(".current-slide");
      currentSlideNumber.textContent = `${String(i + 1).padStart(
        String(TOTAL_SLIDE_LENGTH).length,
        "0"
      )}/${String(slides.length).padStart(
        String(TOTAL_SLIDE_LENGTH).length,
        "0"
      )}`;
    }
  }
  let currentSlideNumber = slides[slideIndex].querySelector(
    ":scope > .caption > .current-slide"
  );
  // pad strings with 0s until it equals slide length
  currentSlideNumber.textContent = `${String(slideIndex + 1).padStart(
    String(TOTAL_SLIDE_LENGTH).length,
    "0"
  )}/${String(slides.length).padStart(String(TOTAL_SLIDE_LENGTH).length, "0")}`;
}

function filterSelection(c) {
  // slides = document.getElementsByClassName("slide");
  // if (c == "all") c = "";
  // hide elemetns that are not active
  // slides[slideIndex].classList.add("hidden");

  for (let i = 0; i < slides.length; i++) {
    if (!slides[i].classList.contains(c)) {
      slides[i].classList.add("hidden");
      slides[i].style.display = "none";
    }
    // AddClass(slides[i], "hidden");
  }
  slides = document.getElementsByClassName(c);
  slideIndex = 0;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains(c)) {
      // RemoveClass(slides[i], "hidden");
      slides[i].classList.remove("hidden");
      // slides[i].style.display = "block";
    }
  }
  if (slides[slideIndex].classList.contains("hidden")) {
    plusSlides(1);
  }
  console.log(slides.length);
  showSlides();
}

// Add active class to the current (photo sidebar) button (underline it)
// const btnContainer = document.getElementById("side");
const btns = document.getElementsByClassName("side-btn");
// Loop through all buttons and add click event listeners
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove "active" class from all buttons
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("side-active");
    }
    // Add "active" class to the clicked button
    this.classList.add("side-active");
  });
}

function gridify() {
  // const column = document.getElementsByClassName("column");
  column = document.querySelector(".column");
  const cycleButtons = document.getElementsByClassName("stroke");
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("grid");
  column.classList.add("grid");
  console.log("gridify");
  for (let i = 0; i < cycleButtons.length; i++) {
    cycleButtons[i].style.display = "none";
  }
  showSlides();
}

function degridify() {
  // const column = document.getElementsByClassName("column");
  const column = document.querySelector(".column");
  const cycleButtons = document.getElementsByClassName("stroke");
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("grid");
  column.classList.remove("grid");
  console.log("degridify");
  for (let i = 0; i < cycleButtons.length; i++) {
    cycleButtons[i].style.display = "inline-block";
  }
  showSlides();
}

// Add active class to the current (grid) button (highlight it)
// var header = document.getElementById("myHeader");
const photobtns = document.getElementsByClassName("photobtn");
for (var i = 0; i < photobtns.length; i++) {
  photobtns[i].addEventListener("click", function () {
    for (var j = 0; j < photobtns.length; j++) {
      photobtns[j].classList.remove("grid-active");
    }
    // Add "active" class to the clicked button
    this.classList.add("grid-active");
  });
}

let allButton = document.getElementById("allButton");
let feteButton = document.getElementById("feteButton");
let portraitButton = document.getElementById("portraitButton");
let walkButton = document.getElementById("walkButton");
let concertButton = document.getElementById("concertButton");
let smallButton = document.getElementById("smallButton");
let youButton = document.getElementById("youButton");
let polaroidButton = document.getElementById("polaroidButton");
let otherButton = document.getElementById("otherButton");

allButton.addEventListener("click", () => {
  filterSelection("slide");
});
feteButton.addEventListener("click", () => {
  filterSelection("fete");
});
portraitButton.addEventListener("click", () => {
  filterSelection("portrait");
});
walkButton.addEventListener("click", () => {
  filterSelection("walk");
});
concertButton.addEventListener("click", () => {
  filterSelection("concert");
});
smallButton.addEventListener("click", () => {
  filterSelection("small");
});
youButton.addEventListener("click", () => {
  filterSelection("you");
});
polaroidButton.addEventListener("click", () => {
  filterSelection("polaroid");
});
otherButton.addEventListener("click", () => {
  filterSelection("other");
});
