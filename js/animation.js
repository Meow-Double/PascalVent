gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.fromTo(
  ".header__inner",
  {
    opacity: 0,
  },
  {
    delay: 0.4,
    duration: 2,
    opacity: 1,
  }
);

let servicesItems = gsap.utils.toArray(".services__info-item");

servicesItems.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: 100,
      y: 0,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "-600",
        end: "-100",
        // scrub: true,
      },
    }
  );
});

let servicesContent = gsap.utils.toArray(".services__content-text");

servicesContent.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: -100,
      y: 0,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "-600",
        end: "-100",
        // scrub: true,
      },
    }
  );
});

let title = gsap.utils.toArray(".title");

title.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: -100,
      y: 0,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "-600",
        end: "-100",
        // scrub: true,
      },
    }
  );
});

gsap.to(".solution__item", {
  delay: 1,
  opacity: 1,
  x: 0,
  y: 0,
  stagger: 1,
});

const t1 = gsap.timeline();

t1.fromTo(
  ".solution__item",
  { x: -100, y: -100, opacity: 0 },
  { x: 0, y: 0, opacity: 1, stagger: 1, delay: 0.3 }
);

ScrollTrigger.create({
  animation: t1,
  trigger: ".solution__inner",
  strat: "top top",
  end: "bottom",
  scrub: true,
});
