const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
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
  breakpoints: {
    1140: {
      slidesPerView: 5,
    },
    750: {
      slidesPerView: 3,
    },
    390: {
      slidesPerView: 2,
    },
  },
});

const swiperEl = document.querySelector("swiper-wrapper");
const allCategoriesLink = document.querySelector(".all-categories-link");
const submenuCategories = document.querySelector(".all-categories");
const departmentLink = document.querySelector(".department");
const departmentCategories = document.querySelector(".department-categories");

allCategoriesLink.addEventListener("mouseover", () => {
  submenuCategories.classList.add("show-menu");
  departmentCategories.classList.remove("show-menu");
});

submenuCategories.addEventListener("mouseleave", () => {
  submenuCategories.classList.remove("show-menu");
});

departmentLink.addEventListener("mouseover", () => {
  departmentCategories.classList.add("show-menu");
  submenuCategories.classList.remove("show-menu");
});

departmentCategories.addEventListener("mouseleave", () => {
  departmentCategories.classList.remove("show-menu");
});
