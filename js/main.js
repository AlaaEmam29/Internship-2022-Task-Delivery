"use strict";
const overlay = document.querySelector(".overlay");
const menuBars = document.querySelector(".menu-bars");
const navbar = document.querySelector(".overlay");
const landingPage = document.querySelector(".landing-page");
const bars = document.querySelectorAll(".menu-bars div");
function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  }
}

menuBars.addEventListener("click", toggleNav);
window.addEventListener("scroll", function () {
  const scrollHight = window.pageYOffset;
  const  landingPageHight = landingPage.getBoundingClientRect().height;

  if (scrollHight > landingPageHight) {
    bars.forEach((bar) => {
      bar.style.backgroundColor = "#000";
    });
  } else {
    bars.forEach((bar) => {
      bar.style.backgroundColor = "#fff";
    });
  }
});
