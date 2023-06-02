gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

if (ScrollTrigger.isTouch !== 1) {
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
  gsap.fromTo(".logo__ico",{
    opacity:0,
    y:-40,
  },{
    opacity:1,
    y:0,
    duration:1.2,
    delay:.4
  })
  gsap.fromTo(".navbar__menu-item--animation",{
    opacity:0,
    y:-40,
  },{
    opacity:1,
    y:0,
    duration:1,
    stagger:.2,
  })

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
          start: "top 90%",
          marker: true,
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
        ease: "power4",
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

  // ------------------------Solution-------

  const solution = gsap.timeline({
    scrollTrigger: {
      trigger: ".solution",
      start: "30% 50%",
    },
  });

  solution.fromTo(
    ".solution__item",
    { opacity: 0, x: -100, y: -100, scale: 1.4 },
    { opacity: 1, x: 0, y: 0, scale: 1, stagger: 0.2, duration: 1 }
  );

  // -------------------------Steps-------

  gsap.fromTo(
    ".steps__subtitle",
    {
      opacity: 0,
      x: 100,
    },
    {
      scrollTrigger: {
        trigger: ".steps",
        start: "20% 80%",
        end: "400 90%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );
  gsap.fromTo(
    ".steps__text",
    {
      opacity: 0,
      x: 100,
    },
    {
      scrollTrigger: {
        trigger: ".steps",
        start: "20% 80%",
        end: "400 90%",
        scrub: true,
      },
      stagger: 0.2,
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  const steps = gsap.timeline({
    scrollTrigger: {
      trigger: ".steps",
      start: "20% 50%",
    },
  });

  steps
    .fromTo(
      ".steps__arrow",
      {
        drawSVG: "0%",
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 1,
        drawSVG: "100%",
        duration: 1,
      }
    )
    .fromTo(
      ".steps__info-item-img ",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 1,
        duration: 0.8,
      },
      0.6
    )
    .fromTo(
      ".steps__info-text",
      {
        opacity: 0,
        y: 30,
      },
      {
        stagger: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      0.8
    );

  // ---------------------From-----------

  const form = gsap.timeline({
    scrollTrigger: {
      trigger: ".form",
      start: "top 50%",
    },
  });

  form
    .fromTo(
      ".form__input",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    )
    .fromTo(
      ".form__layer-button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
      0.4
    );
  // .fromTo("",{},{})
  // .fromTo("",{},{})
  // .fromTo("",{},{})
  // .fromTo("",{},{})

  // ---------------------About------

  const about = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-us",
      start: "top 40%",
      end: "300 40%",
      scrub: true,
    },
  });

  about.fromTo(
    ".about-us__text",
    {
      opacity: 0,
      x: -20,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.4,
    }
  );
  gsap.fromTo(
    ".about-us__item",
    {
      opacity: 0,
      scale: 1.2,
    },
    {
      scrollTrigger: {
        trigger: ".about-us",
        start: "top 40%",
        end: "300 40%",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.4,
    }
  );

  // ----------------Comfort-------

  const comfort = gsap.timeline({
    scrollTrigger: {
      trigger: ".comfort",
      start: "top 50%",
    },
  });

  comfort
    .fromTo(
      ".comfort__ico-item",
      {
        opacity: 0,
        x: -20,
        y: 20,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    )
    .fromTo(
      ".comfort__text",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.6
    )
    .fromTo(
      ".comfort__layer-button",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      0.8
    )
    .fromTo(
      ".comfort__gallery-img",
      { opacity: 0, scale: 1.4 },
      { opacity: 1, ease: "back", scale: 1, stagger: 0.4, duration: 1 },
      0.4
    );

  gsap.fromTo(
    ".comfort__info-text",
    {
      opacity: 0,
      x: -20,
    },
    {
      scrollTrigger: {
        trigger: ".comfort",
        start: "top 50%",
        end: "400 30%",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 1,
    }
  );
  gsap.fromTo(
    ".comfort__info-decor",
    {
      opacity: 0,
      y: -20,
    },
    {
      scrollTrigger: {
        trigger: ".comfort",
        start: "top 50%",
        end: "300 30%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
    }
  );

  // --------------------

  // let itemsL = gsap.utils.toArray(".work-plan__column-1 .work-plan__item");

  // itemsL.forEach((item) => {
  //   gsap.fromTo(
  //     item,
  //     {
  //       x: -100,
  //       y:100,
  //       opacity: 0,
  //     },
  //     {
  //       x: 0,
  //       y:0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: item,
  //         start:"-850",
  //         end:"-100",
  //         scrub: true,
  //       },
  //     }
  //   );
  // });

  const workPlan = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-plan",
      start: "10% 50%",
    },
  });

  workPlan
    .fromTo(
      ".work-plan__item-title--left",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 2.5,
      },
      0
    )
    .fromTo(
      ".work-plan__item-text--left",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 2.5,
      },
      0.5
    )
    .fromTo(
      ".work-plan__item-title--right",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 2.5,
      },
      1.5
    )
    .fromTo(
      ".work-plan__item-text--right",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 2.5,
      },
      2
    )

    .fromTo(
      ".work-plan__end-title--end",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )

    // -----------------------
    .fromTo(
      ".work-plan__item-img--first",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      0.5
    )
    .fromTo(
      ".work-plan__item-img--second",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      1.5
    )

    .fromTo(
      ".work-plan__item-img--third",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      2.5
    )
    .fromTo(
      ".work-plan__item-img-place--third",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      2
    )

    .fromTo(
      ".work-plan__item-img--fourth",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      3.5
    )

    .fromTo(
      ".work-plan__item-img--fivth",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      4.5
    )

    .fromTo(
      ".work-plan__item-img--sixth",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      5.5
    )
    .fromTo(
      ".work-plan__end-img",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      6.5
    )

    // ----------------------------------

    .fromTo(
      ".work-plan__arrow--first",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",
        duration: 1,
      },
      1
    )
    .fromTo(
      ".work-plan__arrow--second",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",
        duration: 1,
      },
      2
    )

    .fromTo(
      ".work-plan__arrow--third",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",
        duration: 1,
      },
      3
    )

    .fromTo(
      ".work-plan__arrow--fourth",
      {
        drawSVG: "100% 100%",
      },
      {
        drawSVG: "100% 0%",
        duration: 1,
      },
      4
    )

    .fromTo(
      ".work-plan__arrow--fivth",
      {
        drawSVG: "100% 100%",
      },
      {
        drawSVG: "100% 0%",
        duration: 1,
      },
      5
    );

  // ------------------Portfolio------

  const portfolio = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 70%",
    },
  });

  portfolio
    .fromTo(
      ".portfolio__text",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
      }
    )
    .fromTo(
      ".portfolio__slider-item",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
      }
    )
    .fromTo(
      ".portfolio__slider-box",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      1
    );

  // ----------------------------Partners-----------------

  const partners = gsap.timeline({
    scrollTrigger: {
      trigger: ".partners",
      start: "40% 70%",
    },
  });

  partners
    .fromTo(
      ".partners__text",
      {
        opacity: 0,
        x: -60,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    )
    .fromTo(
      ".partners__item-img",
      {
        opacity: 0,
        scale: 1.2,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      },
      0.6
    )
    .fromTo(
      ".partners__slider-box",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
      0.8
    );

  // -----------------------Footer--------

  const footer = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 70%",
    },
  });

  footer
    .fromTo(
      ".footer__logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    )
    .fromTo(
      ".footer__about-text",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.6
    )

    .fromTo(
      ".footer__about-title",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      1
    )

    .fromTo(
      ".footer__info-title",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      1.2
    )
    .fromTo(
      ".footer__info-item ",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      },
      1.6
    )
    .fromTo(
      ".footer__form-title",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      1.2
    )
    .fromTo(
      ".footer__form-input",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      },
      1.6
    )
    .fromTo(
      ".footer__button-layer",
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      2
    );
}
