// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
document.getElementById("ksv").addEventListener("click", function (event) {
  const button = event.target.getBoundingClientRect();
  const contentBox = document.getElementById("content-box");
  const dimBackground = document.getElementById("dim-background");

  // Set custom properties for animation
  contentBox.style.setProperty("--button-left", `${button.left + button.width / 2}px`);
  contentBox.style.setProperty("--button-top", `${button.top + button.height / 2}px`);

  // Show dim background
  dimBackground.classList.add("active");

  // Show content box with animation
  contentBox.classList.remove("hidden");
  contentBox.classList.add("show");
});

function closeContentBox() {
  const contentBox = document.getElementById("content-box");
  const dimBackground = document.getElementById("dim-background");

  // Hide content box and dim background
  contentBox.classList.remove("show");
  contentBox.classList.add("hidden");

  dimBackground.classList.remove("active");
}




// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});