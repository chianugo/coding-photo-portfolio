let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
const TOTAL_SLIDE_LENGTH = slides.length;
filterSelection("fete"); // Begin by showing fete
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
    plusSlides(-1);
  } else if (keyPressed === "ArrowRight") {
    // Right Key Press
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
  handleProjectDescription(c);
  for (let i = 0; i < slides.length; i++) {
    if (!slides[i].classList.contains(c)) {
      slides[i].classList.add("hidden");
      slides[i].style.display = "none";
    }
  }
  slides = document.getElementsByClassName(c);
  slideIndex = 0;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains(c)) {
      slides[i].classList.remove("hidden");
    }
  }
  if (slides[slideIndex].classList.contains("hidden")) {
    plusSlides(1);
  }
  console.log(slides.length);
  showSlides();
}

function handleProjectDescription(c) {
  let section = document.getElementsByClassName("project-description-wrapper");
  let projectName = document.getElementById("project-title");
  let projectDescription = document.getElementById("project-description");
  let projectYears = document.getElementById("years");
  if (c == "slide") {
    section[0].classList.add("hidden");
    projectDescription.innerHTML = "";
    projectYears.innerHTML = "";
  }
  if (c !== "slide") {
    section[0].classList.remove("hidden");
  }
  if (c == "fete") {
    projectName.innerHTML = "Fête";
    projectDescription.innerHTML =
      "/fɛt/ <br/>  Portrait photos of family, friends and even strangers taken at house parties";
    projectYears.innerHTML = "2021-Present";
  }
  if (c == "portrait") {
    projectName.textContent = "Portraits";
    projectDescription.innerHTML =
      "Natural light, and flash portraits of friends and family. <br /> <br /> Studio portraits coming soon!";
    projectYears.innerHTML = "2020-Present";
  }
  if (c == "walk") {
    projectName.innerHTML = "Photo Walks";
    projectDescription.innerHTML = "Photos taken out and about on the street";
    projectYears.innerHTML = "2021-Present";
  }
  if (c == "concert") {
    projectName.innerHTML = "Concerts";
    projectDescription.innerHTML =
      "Music can be a very transformative experience, oftentimes enhanced when shared in person with friends. This is a collection of photos taken at or around concerts";
    projectYears.innerHTML = "2021-Present";
  }
  if (c == "small") {
    projectName.innerHTML = "Small Town";
    projectDescription.innerHTML =
      "Photos documenting the small prison/college town of Lewisburg in all its beautiful mundaness";
    projectYears.innerHTML = "2021-2023";
  }
  if (c == "you") {
    projectName.innerHTML = "You Take One";
    projectDescription.innerHTML =
      '"You\'re always taking photos! Let me take one of you" - Arya Bedi, 2021 <br /> Portraits of Kiz';
    projectYears.innerHTML = "2020-Present";
  }
  if (c == "polaroid") {
    projectName.innerHTML = "Polaroids";
    projectDescription.innerHTML =
      "Photos taken on polaroid 600 or i-type film";
    projectYears.innerHTML = "2019-Present";
  }
  if (c == "job") {
    projectName.innerHTML = "Lagos Jobs";
    projectDescription.innerHTML =
      "Portraits showcasing the resilience of Lagosians and the breadth of jobs available in the metropolis ";
    projectYears.innerHTML = "2024-Present";
  }
  if (c == "other") {
    projectName.innerHTML = "All Others";
    projectDescription.innerHTML = "All other photos";
    projectYears.innerHTML = "-";
  }
}

// Add active class to the current (photo sidebar) button (underline it)
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
  const project = document.querySelector(".project-description-wrapper");
  column = document.querySelector(".column");
  const cycleButtons = document.getElementsByClassName("stroke");
  const sidebar = document.querySelector(".sidebar");
  project.classList.add("grid");
  sidebar.classList.add("grid");
  column.classList.add("grid");
  console.log("gridify");
  for (let i = 0; i < cycleButtons.length; i++) {
    cycleButtons[i].style.display = "none";
  }
  showSlides();
}

function degridify() {
  const project = document.querySelector(".project-description-wrapper");
  const column = document.querySelector(".column");
  const cycleButtons = document.getElementsByClassName("stroke");
  const sidebar = document.querySelector(".sidebar");
  project.classList.remove("grid");
  sidebar.classList.remove("grid");
  column.classList.remove("grid");
  console.log("degridify");
  for (let i = 0; i < cycleButtons.length; i++) {
    cycleButtons[i].style.display = "inline-block";
  }
  showSlides();
}

// Add active class to the current (grid) button (highlight it)
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

// Add event listeners to buttons for filtering image categories
// let allButton = document.getElementById("allButton");
let feteButton = document.getElementById("feteButton");
let portraitButton = document.getElementById("portraitButton");
let walkButton = document.getElementById("walkButton");
let concertButton = document.getElementById("concertButton");
let smallButton = document.getElementById("smallButton");
let youButton = document.getElementById("youButton");
let polaroidButton = document.getElementById("polaroidButton");
let jobButton = document.getElementById("jobButton");
let otherButton = document.getElementById("otherButton");

// allButton.addEventListener("click", () => {
//   filterSelection("slide");
// });
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
jobButton.addEventListener("click", () => {
  filterSelection("job");
});
otherButton.addEventListener("click", () => {
  filterSelection("other");
});

const filterSelect = document.getElementById("filterSelect");
filterSelect.addEventListener("change", () => {
  const selectedCategory = filterSelect.value;

  // Filter images based on the selected category
  filterSelection(selectedCategory);
});

window.addEventListener("load", checkViewPortWidth);

function checkViewPortWidth() {
  if (window.innerWidth <= 600) {
    gridify();
  }
}

window.addEventListener("resize", checkViewPortWidth);

window.addEventListener("load", gridify);
