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
    addCarouselFunc();
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

function addCarouselFunc() {
  const modal = document.getElementById("gallery-modal");
  const carouselImage = document.getElementById("carousel-image");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeModal = document.querySelector(".close");
  const overlay = document.querySelector(".modal-overlay");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let images = [];
  let currentIndex = 0;

  // Load images and open modal when clicking on a gallery image
  galleryItems.forEach((item) => {
    item.addEventListener("click", async (event) => {
      event.preventDefault();

      // Get all images from the clicked category
      const category = item.dataset.category;
      try {
        images = await getImagesForCategory(category); // ✅ WAIT for images to load
      } catch (error) {
        console.error("There is a problem with images:", error);
        return;
      }

      if (images.length === 0) return;

      currentIndex = 0; // Reset to first image
      showImage(currentIndex);

      modal.classList.add("shown");
    });
  });

  async function getImagesForCategory(category) {
    const basePath = `../img/photogallery/${category}/`;
    let images = [];
    let index = 0;

    while (true) {
      let pngUrl = `${basePath}${index}.png`;
      let jpegUrl = `${basePath}${index}.jpeg`;

      // Check PNG first
      let response = await fetch(pngUrl, { method: "HEAD" }).catch(() => null);
      if (response.ok) {
        images.push(pngUrl);
        index++;
      } else {
        // If PNG fails, check JPEG
        response = await fetch(jpegUrl, { method: "HEAD" }).catch(() => null);
        if (response.ok) {
          images.push(jpegUrl);
          index++;
        } else {
          break;
        }
      }
    }
    return images;
  }

  // Function to display the current image in the carousel
  function showImage(index) {
    if (index >= 0 && index < images.length) {
      carouselImage.src = images[index];
    }
  }

  // Close modal when clicking on close button or overlay
  closeModal.addEventListener("click", closeGallery);
  overlay.addEventListener("click", closeGallery);

  function closeGallery() {
    modal.classList.remove("shown");
  }

  // Next and Prev Buttons
  nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage(currentIndex);
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showImage(currentIndex);
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGallery();
    }
  });
}
