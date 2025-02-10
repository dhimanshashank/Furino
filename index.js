document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".navNavigation");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!event.target.closest('.navNavigation') && 
        !event.target.closest('.menu-toggle')) {
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
