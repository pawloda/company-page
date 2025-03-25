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
    addEmailFunc();
    updateLanguage("DE");
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
  const imageCounter = document.createElement("div"); // New element for the image counter

  let images = [];
  let currentIndex = 0;

  // Add image counter to the modal
  imageCounter.style.position = "absolute";
  imageCounter.style.bottom = "20px";
  imageCounter.style.left = "50%";
  imageCounter.style.transform = "translateX(-50%)";
  imageCounter.style.fontSize = "18px";
  imageCounter.style.color = "#000";
  modal.querySelector(".modal-content").appendChild(imageCounter);

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
      scrollToTop();
    });
  });

  async function getImagesForCategory(category) {
    const basePath = `../img/photogallery/${category}/`;
    let images = [];
    let index = 0;

    while (true) {
      let pngUrl = `${basePath}${index}.png`;
      let jpegUrl = `${basePath}${index}.jpeg`;
      let jpgUrl = `${basePath}${index}.jpg`;

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
          // If PNG fails, check JPG
          response = await fetch(jpgUrl, { method: "HEAD" }).catch(() => null);
          if (response.ok) {
            images.push(jpgUrl);
            index++;
          } else {
            break;
          }
        }
      }
    }
    return images;
  }

  // Function to display the current image in the carousel
  function showImage(index) {
    if (index >= 0 && index < images.length) {
      carouselImage.src = images[index];
      imageCounter.textContent = `${index + 1} / ${images.length}`; // Update the image counter
      updateButtonState();
    }
  }

  // Update button state (disable if on the first/last image)
  function updateButtonState() {
    prevButton.disabled = currentIndex === 0; // Disable prev button on first image
    nextButton.disabled = currentIndex === images.length - 1; // Disable next button on last image
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

function addEmailFunc() {
  // Initialize EmailJS (You need to set up an EmailJS account and get your credentials)
  emailjs.init("user_your_emailjs_user_id");

  // Handle form submission
  document
    .querySelector(".inquiry-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Prepare form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Send email using EmailJS
      emailjs
        .sendForm("service_your_service_id", "template_your_template_id", this)
        .then(
          function (response) {
            console.log("SUCCESS", response);
            // Show the pop-up confirmation
            showPopup();
          },
          function (error) {
            console.error("FAILED", error);
            // Optionally, handle the error case
            alert("Coś poszło nie tak. Spróbuj ponownie.");
          }
        );
    });

  // Handle form submission
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Prepare form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Send email using EmailJS
      emailjs
        .sendForm("service_your_service_id", "template_your_template_id", this)
        .then(
          function (response) {
            console.log("SUCCESS", response);
            // Show the pop-up confirmation
            showPopup();
          },
          function (error) {
            console.error("FAILED", error);
            // Optionally, handle the error case
            alert("Coś poszło nie tak. Spróbuj ponownie.");
          }
        );
    });

  // Show the pop-up
  function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("shown");
  }

  // Close the pop-up
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("shown");
  }
}

// Toggle burger menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("menu-open");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("menu-open");
}

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const burgerIcon = document.querySelector(".burger-icon");

  // Check if the clicked element is NOT inside the menu or the burger icon
  if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
    closeMenu();
  }
});

// Function to update the page text
function updateLanguage(lang) {
  const finalLang = lang === "PL" ? "pl" : lang === "DE" ? "de" : "en"; // Set language
  //     // Apply translations
  document.querySelectorAll("[data-de]").forEach((element) => {
    element.innerText = element.getAttribute(`data-${finalLang}`);
  });

  // Store selected language in localStorage
  localStorage.setItem("selectedLanguage", lang);
}

// Event listeners for language options
document.querySelectorAll(".lang-option").forEach((option) => {
  option.addEventListener("click", function () {
    const selectedLang = this.getAttribute("data-lang").toUpperCase();
    document.querySelector(".burger-icon").innerHTML = `${selectedLang} ☰`;
    updateLanguage(selectedLang);
    closeMenu(); // Close menu after selection
  });
});
