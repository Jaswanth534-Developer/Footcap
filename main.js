'use strict';

/**
 * Navbar toggle functionality with event listener safety checks
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-navbar] a"); // Select all nav links

if (overlay && navOpenBtn && navbar && navCloseBtn) {
  const navElems = [overlay, navOpenBtn, navCloseBtn, ...navLinks]; // Include nav links

  function toggleNav() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  navElems.forEach(elem => {
    elem.removeEventListener("click", toggleNav);
    elem.addEventListener("click", toggleNav);
  });
}

/**
 * Header & go-top button activation on page scroll (optimized)
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

if (header && goTopBtn) {
  let lastScrollY = 0;

  window.addEventListener("scroll", () => {
    if (lastScrollY === window.scrollY) return;
    lastScrollY = window.scrollY;

    requestAnimationFrame(() => {
      if (window.scrollY >= 80) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    });
  });
}
