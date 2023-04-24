//----------Services Button---------

const button = document.querySelectorAll(".services__btn");
const layer = document.querySelectorAll(".services__info-box");
const img = document.querySelectorAll(".services__info-img");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (button[i].classList.contains("services__btn--disabled")) {
      for (let j = 0; j < button.length; j++) {
        button[j].classList.remove("services__btn--active");
        button[j].classList.add("services__btn--disabled");
        layer[j].classList.remove("services__info-box--active");
        img[j].classList.remove("services__info-img--active");
      }
        button[i].classList.add("services__btn--active");
        button[i].classList.remove("services__btn--disabled");
        layer[i].classList.add("services__info-box--active");
        img[i].classList.add("services__info-img--active");

    }
  });
}

// ------------Header-------

if (window.innerWidth > 980) {
  const navbar = document.querySelector(".navbar");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add("navbar--active");
    } else {
      navbar.classList.remove("navbar--active");
    }
  };
}

const modalButton = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".modal-close");

modalButton.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
  });
});
modalClose.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.style.overflow = "auto";
  });
});

// --------------Berger-------

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar__nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("navbar__nav--active");
  if (nav.classList.contains("navbar__nav--active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// -------------slider Swiper---


new Swiper(".partners__slider", {
  speed: 2400,
  freeMode: true,
  // centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    
    300: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.25,
      spaceBetween: 15,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    980: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    1030: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1190: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".partners__arrow-right",
    prevEl: ".partners__arrow-left",
  },
});

new Swiper(".portfolio__slider", {
  speed: 2400,
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    300: {
      slidesPerView: 0.9,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.25,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1.9,
      spaceBetween: 23,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 23,
    },
    800: {
      slidesPerView: 2.3,
      spaceBetween: 25,
    },
    900: {
      slidesPerView: 2.6,
      spaceBetween: 25,
    },
    1000: {
      slidesPerView: 2.85,
      spaceBetween: 28,
    },
    1190: {
      slidesPerView: 3.25,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".portfolio__arrow-right",
    prevEl: ".portfolio__arrow-left",
  },
});
