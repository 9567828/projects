const swiper1 = new Swiper(".hero_slide", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000, //add
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".project_slide", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper3 = new Swiper(".contact", {
  loop: true,
  speed: 3000,
  slidesPerView: "auto",
  spaceBetween: 20,
  // loopedSlides: 10,
  loopAdditionalSlides: 1,
  observer: false,
  observeParents: true,
  autoplay: {
    delay: 0, //add
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper4 = new Swiper(".art", {
  loop: true,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});
