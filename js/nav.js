const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navbar = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const button = document.querySelector(".button-one");

button.addEventListener("click", () => {
  const isOpened = button.getAttribute("aria-expanded");
  if (isOpened === "false") {
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
  }
});
