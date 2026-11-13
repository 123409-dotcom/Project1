"use strict";

// 1. Select the navigation elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// 2. Open and close the mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// 3. Close the menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
});
});

// 4. Automatically display the current year
document.getElementById("year").textContent =
new Date().getFullYear();

// 5. Handle the contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
    formStatus.textContent = "Please complete every field.";
    return;
}

formStatus.textContent =
    "Thank you, " + name +
    "! This demo form is working, but sending messages requires a backend or email service.";

contactForm.reset();
});