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
