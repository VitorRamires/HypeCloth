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

const allCategoriesLink = document.querySelector(".all-categories-link");
const submenuCategories = document.querySelector(".all-categories");
const departmentLink = document.querySelector(".department");
const departmentCategories = document.querySelector(".department-categories");
const hamburguerMenu = document.querySelector(".hamburguer-box");
const navMenuMobile = document.querySelector(".nav-menu-mobile");
const searchingFor = document.querySelector(".searching-for");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search input");
const links = document.querySelectorAll(".links");

hamburguerMenu.addEventListener("click", () => {
  navMenuMobile.classList.toggle("active-menu");
  hamburguerMenu.classList.toggle("active-menu");
});

function setupHoverBehavior(trigger, target) {
  trigger.addEventListener("mouseenter", () => {
    target.classList.add("show-menu");
  });

  trigger.addEventListener("mouseleave", () => {
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

setupHoverBehavior(allCategoriesLink, submenuCategories);
setupHoverBehavior(departmentLink, departmentCategories);

function handleSearch() {
  if (!searchInput.value) {
    alert("Insira seu item de pesquisa na busca");
    searchingFor.innerText = "";
    searchingFor.style.display = "none";
    searchInput.focus();
    return;
  }
  searchingFor.innerText = `Pesquisando por: ${searchInput.value}`;
  searchingFor.style.display = "block";
}

searchBtn.addEventListener("click", handleSearch);

let matchWidthSize = window.matchMedia("(max-width: 750px)");

function updateLinksBehavior() {
  links.forEach((link) => {
    const allInformation = link.querySelectorAll("h5");

    if (matchWidthSize.matches) {
      allInformation.forEach((info) => (info.style.opacity = 0));

      const toggleAccordion = () => {
        link.classList.toggle("show-link-info");
        const displayStyle = link.classList.contains("show-link-info") ? 1 : 0;
        const heightLink = link.classList.contains("show-link-info") ? 235 : 75;
        allInformation.forEach((info) => (info.style.opacity = displayStyle));
        link.style.height = heightLink + "px";
      };

      link.addEventListener("click", toggleAccordion);
      link._toggleAccordion = toggleAccordion;
    } else {
      link.classList.remove("show-link-info");
      link.style.height = "";
      allInformation.forEach((info) => (info.style.opacity = 1));

      if (link._toggleAccordion) {
        link.removeEventListener("click", link._toggleAccordion);
        delete link._toggleAccordion;
      }
    }
  });
}

updateLinksBehavior();
matchWidthSize.addEventListener("change", updateLinksBehavior);
