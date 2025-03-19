"use strict";

window.onload = function () {
  const pages = [
    "start",
    "about",
    "offer",
    "templates",
    "photogallery",
    "cases",
    "rates",
    "blog",
    "prices",
    "contact",
  ];
  fetchPages(pages);
  scrollToTop();
};

window.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo");
  if (window.scrollY > 50) {
    logo.classList.add("logo-scroll-down");
    logo.classList.remove("logo-scroll-up");
  } else {
    logo.classList.add("logo-scroll-up");
    logo.classList.remove("logo-scroll-down");
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
    setTimeout(() => {
      fetchPage(this.parentElement.id);
      addCss(this.parentElement.id);
    }, 100);
  });
});

function fetchPages(pages) {
  pages.forEach((page) => {
    fetchPage(page);
    addCss(page);
  });
  scrollToTop();
}

function fetchPage(page) {
  fetch(`pages/${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.text();
    })
    .then((data) => {
      let contentHTML = document.querySelector(".content");
      contentHTML.innerHTML = contentHTML.innerHTML.concat(data);
    })
    .catch((error) => console.error("Error loading content:", error));
  scrollToTop();
}

function addCss(page) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `styles/${page}.css`;
  document.head.appendChild(link);
}

function hidePage(page) {
  document.querySelector(".content");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// <!-- Modal Carousel -->
//   <div id="gallery-modal" class="modal hidden">
//     <div class="modal-content">
//       <span class="close">&times;</span>
//       <div class="carousel">
//         <button class="prev">&#10094;</button>
//         <img id="carousel-image" src="" alt="Gallery Image" />
//         <button class="next">&#10095;</button>
//       </div>
//     </div>
//   </div>
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("gallery-modal");
  const carouselImage = document.getElementById("carousel-image");
  const closeModal = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let images = [];
  let currentIndex = 0;

  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const category = item.getAttribute("data-category");

      images = loadImages(category);
      if (images.length > 0) {
        currentIndex = 0;
        updateCarousel();
        modal.classList.remove("hidden");
      }
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  function loadImages(category) {
    let imageList = [];
    for (let i = 0; i < 5; i++) {
      let imgPath = `../img/photogallery/${category}/${i}.png`;
      imageList.push(imgPath);
    }
    return imageList;
  }

  function updateCarousel() {
    carouselImage.src = images[currentIndex];
  }
});
