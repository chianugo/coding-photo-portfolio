let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
// showSlides();

// Next/previous controls
function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

// Sets a display of none to every slide except the current one
function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

filterSelection("all"); // Begin by showing all
function filterSelection(c) {
  // slides = document.getElementsByClassName("slide");
  // if (c == "all") c = "";
  // hide elemetns that are not active
  for (let i = 0; i < slides.length; i++) {
    console.log(slides.length);
    slides[i].classList.add("hidden");
    // AddClass(slides[i], "hidden");
    if (slides[i].classList.contains(c)) {
      // RemoveClass(slides[i], "hidden");
      slides[i].classList.remove("hidden");
    }
  }
}
/*
// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
*/
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

function logHello() {
  console.log("Hello World");
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
