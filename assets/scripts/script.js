/*
 * Copyright (c) 2022. Implex
 * All rights reserved
 */

const implex = (function () {
  const START_TRANSITION_CLASS = 'start';
  const HEADER_ID = 'header';

  let sections;
  let sectionsToshow;
  let header;

  document.addEventListener("DOMContentLoaded", init);


  function init() {
    sections = document.getElementsByTagName('section');
    sectionsToshow = sections.length;
    header = document.getElementById(HEADER_ID);


    setTimeout(() => {  
      checkSectionPositions();
    }, 0);

    window.addEventListener('scroll', checkSectionPositions);
  }

  function checkSectionPositions() {
    const innerHeight = (window.innerHeight || document.documentElement.clientHeight) * 0.8;

    Array.prototype.forEach.call(sections, section => {
      if (
        isElementInViewport(section, innerHeight) &&
        !section.classList.contains(START_TRANSITION_CLASS)
      ) {
        section.classList.add(START_TRANSITION_CLASS);
        sectionsToshow--;
      }
    });

    if (!sectionsToshow) {
      window.removeEventListener('scroll', checkSectionPositions);
    }
  }

  function isElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();

    return rect.top <= viewportHeight;
  }

  window.onscroll = () => {
    const additionalClassName = 'black-opaque';

    if (document.documentElement.scrollTop > 100) {
      header.classList.add(additionalClassName);
    } else {
      header.classList.remove(additionalClassName);
    }
  };

  return {};
})();
