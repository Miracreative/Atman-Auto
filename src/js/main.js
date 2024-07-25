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

  const hamburger = document.querySelector('.header__hamburger');
  const navMenu = document.querySelector('.header__nav');
  const headerContact = document.querySelector('.header__contact');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('header__nav--active');
    headerContact.classList.toggle('header__contact--active');
    hamburger.classList.toggle('header__hamburger--active')
  })
    
});
