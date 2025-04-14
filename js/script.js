const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 15,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next-element",
    prevEl: ".prev-element",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperEl = document.querySelector("swiper-wrapper");
