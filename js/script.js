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

/* ============================================================================================= */

const allCategoriesLink = document.querySelector(".all-categories-link");
const submenuCategories = document.querySelector(".all-categories");
const departmentLink = document.querySelector(".department");
const departmentCategories = document.querySelector(".department-categories");

const hamburguerMenu = document.querySelector(".hamburguer-box");
const navMenuMobile = document.querySelector(".nav-menu-mobile");

const searchingFor = document.querySelector(".searching-for");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search input");

function hoverHandler(element, target) {
  element.addEventListener("mouseenter", () => {
    target.classList.add("show-menu");
  });

  element.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!target.matches(":hover")) {
        target.classList.remove("show-menu");
      }
    }, 100);
  });

  target.addEventListener("mouseenter", () => {
    target.classList.add("show-menu");
  });

  target.addEventListener("mouseleave", () => {
    target.classList.remove("show-menu");
  });
}

hoverHandler(allCategoriesLink, submenuCategories);
hoverHandler(departmentLink, departmentCategories);

function handleSearch() {
  if (!searchInput.value) {
    alert("Insira seu item de pesquisa na busca");
    searchingFor.innerText = "";
    return;
  }
  searchingFor.innerText = `Pesquisando por:  ${searchInput.value}`;
}

searchBtn.addEventListener("click", handleSearch);
