"use strict";

window.onload = function () {
  fetchPage(`pages/start.html`);
};

window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  const logo = document.querySelector(".logo");
  if (window.scrollY > 200) {
    logo.classList.add("logo-scroll-down");
    logo.classList.remove("logo-scroll-up");
    header.classList.add("shrink");
  } else {
    logo.classList.add("logo-scroll-up");
    logo.classList.remove("logo-scroll-down");
    header.classList.remove("shrink");
  }
});

document.querySelectorAll(".nav-el").forEach((el) => {
  el.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-el")
      .forEach((item) => item.classList.remove("current"));
    this.classList.add("current");
  });
});

document.querySelectorAll(".nav-el a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    fetchPage(this.parentElement.id);
    addCss(this.parentElement.id);
  });

  function fetchPage(page) {
    fetch(`pages/${page}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(".content").innerHTML = data;
      })
      .catch((error) => console.error("Error loading content:", error));
  }
});

function addCss(page) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `styles/${page}.css`;
  document.head.appendChild(link);
}
