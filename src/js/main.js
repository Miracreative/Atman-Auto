"use strict";

window.addEventListener("DOMContentLoaded", () => {
  
  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 700,
    // Размер шага в пикселях
    stepSize: 80,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 20,
    // Максимальное ускорение
    accelerationMax: 1,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });

  let mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 576px)",
      isDesktop: "(min-width: 577px)",
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;
      gsap.utils.toArray('.title').forEach(title => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'bottom 95%',
            end: 'top center',
            scrub: 1
          },
          scaleX: isDesktop ? 1.25 : 1.0
        })
      })
    
    })

 

  
  // if(document.querySelector('#form')) {
  //   validate('input[name="name"]', 'input[name="phone"]', 'input[name="email"]');
  //   send('#form', 'input[name="name"]', 'input[name="phone"]', 'input[name="email"]', "/mailer/mail-footer.php");

  // }
    
});
