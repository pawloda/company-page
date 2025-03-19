"use strict";

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

window.onload = function () {
  fetchPages(pages);
  setTimeout(() => {
    addStartButtonFunc();
    addStartImgFunc();
    showPage("start");
  }, 100);
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
      hidePages();
      showPage(this.parentElement.id);
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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function hidePages() {
  pages.forEach((page) => hidePage(page));
}

function hidePage(page) {
  const pageContent = document.querySelector(`.${page}-section`);
  if (!pageContent) {
    console.error(`Element .${page}-section not found`);
  }
  if (pageContent && pageContent.classList.contains("shown-tr")) {
    pageContent.classList.remove("shown-tr");
  }
  if (pageContent && pageContent.classList.contains("shown")) {
    pageContent.classList.remove("shown");
  }
  if (pageContent && !pageContent.classList.contains("hidden-tr")) {
    pageContent.classList.add("hidden-tr");
  }
  if (pageContent && !pageContent.classList.contains("hidden")) {
    setTimeout(() => pageContent.classList.add("hidden"), 400);
  }
}

function showPage(page) {
  scrollToTop();
  const pageContent = document.querySelector(`.${page}-section`);
  if (!pageContent) {
    console.error(`Element .${page}-section not found`);
  }
  if (pageContent && pageContent.classList.contains("hidden-tr")) {
    pageContent.classList.remove("hidden-tr");
  }
  if (pageContent && pageContent.classList.contains("hidden")) {
    pageContent.classList.remove("hidden");
  }
  if (pageContent && !pageContent.classList.contains("shown")) {
    pageContent.classList.add("shown");
  }
  if (pageContent && !pageContent.classList.contains("shown-tr")) {
    setTimeout(() => pageContent.classList.add("shown-tr"), 10);
  }
}

function addStartButtonFunc() {
  document
    .querySelector("#start-offer-button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("prices");
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#prices").classList.add("current");
    });
}

function addStartImgFunc() {
  document.querySelectorAll(".offer-fence").forEach((el) =>
    el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("offer");
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#offer").classList.add("current");
    })
  );

  document.querySelectorAll(".offer-gates").forEach((el) =>
    el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("offer");
        window.scrollTo({
          top: 1630,
          behavior: "smooth",
        });
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#offer").classList.add("current");
    })
  );

  document.querySelectorAll(".offer-balustrade").forEach((el) =>
    el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("offer");
        window.scrollTo({
          top: 1900,
          behavior: "smooth",
        });
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#offer").classList.add("current");
    })
  );

  document.querySelectorAll(".offer-mesh").forEach((el) =>
    el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("offer");
        window.scrollTo({
          top: 1630,
          behavior: "smooth",
        });
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#offer").classList.add("current");
    })
  );

  document.querySelectorAll(".offer-others").forEach((el) =>
    el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        hidePages();
        showPage("offer");
        window.scrollTo({
          top: 1900,
          behavior: "smooth",
        });
      }, 100);

      document
        .querySelectorAll(".nav-el")
        .forEach((item) => item.classList.remove("current"));
      document.querySelector("#offer").classList.add("current");
    })
  );
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
// document.addEventListener("DOMContentLoaded", () => {
//   const galleryItems = document.querySelectorAll(".gallery-item");
//   const modal = document.getElementById("gallery-modal");
//   const carouselImage = document.getElementById("carousel-image");
//   const closeModal = document.querySelector(".close");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");

//   let images = [];
//   let currentIndex = 0;

//   galleryItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.preventDefault();
//       const category = item.getAttribute("data-category");

//       images = loadImages(category);
//       if (images.length > 0) {
//         currentIndex = 0;
//         updateCarousel();
//         modal.classList.remove("hidden");
//       }
//     });
//   });

//   closeModal.addEventListener("click", () => {
//     modal.classList.add("hidden");
//   });

//   prevBtn.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateCarousel();
//     }
//   });

//   nextBtn.addEventListener("click", () => {
//     if (currentIndex < images.length - 1) {
//       currentIndex++;
//       updateCarousel();
//     }
//   });

//   function loadImages(category) {
//     let imageList = [];
//     for (let i = 0; i < 5; i++) {
//       let imgPath = `../img/photogallery/${category}/${i}.png`;
//       imageList.push(imgPath);
//     }
//     return imageList;
//   }

//   function updateCarousel() {
//     carouselImage.src = images[currentIndex];
//   }
// });
