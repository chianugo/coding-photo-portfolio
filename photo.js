// let slideIndex = 0;
// let slides = document.getElementsByClassName("slide");
let slideIndex;
let slides;
filterSelection("slide"); // Begin by showing all
// plusSlides(0);

// Next/previous controls
function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  while (slides[slideIndex].classList.contains("hidden")) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
  }
  // console.log(slideIndex + 1 + " /" + slides.length);
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
    console.log("left");
    plusSlides(-1);
  } else if (keyPressed === "ArrowRight") {
    // Right Key Press
    console.log("right");
    plusSlides(1);
  }
});

// Sets a display of none to every slide except the current one
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  let currentSlideNumber = slides[slideIndex].querySelector(
    ":scope > .caption > .current-slide"
  );
  currentSlideNumber.textContent = " " + (slideIndex + 1) + "/" + slides.length;
}

function filterSelection(c) {
  // slides = document.getElementsByClassName("slide");
  // if (c == "all") c = "";
  // hide elemetns that are not active
  slides = document.getElementsByClassName(c);
  slideIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    console.log(slides.length);
    if (!slides[i].classList.contains(c)) {
      slides[i].classList.add("hidden");
    }
    // AddClass(slides[i], "hidden");
    if (slides[i].classList.contains(c)) {
      // RemoveClass(slides[i], "hidden");
      slides[i].classList.remove("hidden");
    }
  }
  if (slides[slideIndex].classList.contains("hidden")) {
    plusSlides(1);
  }

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

// Get the elements with class="column"
const elements = document.getElementsByClassName("column");

// Declare a loop variable

// Full-width images
function one() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
  // showSlides(slideIndex);
}

// Four images side by side
function four() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
  // showSlides(slideIndex);
}

// Add active class to the current (grid) button (highlight it)
// var header = document.getElementById("myHeader");
const photobtns = document.getElementsByClassName("photobtn");
for (var i = 0; i < photobtns.length; i++) {
  photobtns[i].addEventListener("click", function () {
    // var current = document.getElementsByClassName("active");
    for (var j = 0; j < photobtns.length; j++) {
      photobtns[j].classList.remove("grid-active");
    }
    // Add "active" class to the clicked button
    this.classList.add("grid-active");
  });
}
