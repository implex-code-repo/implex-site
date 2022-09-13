/*
 * Copyright (c) 2022. Implex
 * All rights reserved
 */

const implex = (function () {
  const START_TRANSITION_CLASS = 'start';
  const HEADER_ID = 'header';
  const defaultText = 'File size up to 10MB';

  let sections;
  let sectionsToshow;
  let header;
  let headerItems;
  let uploadBtn;
  let customText;
  let removeBtn;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    sections = document.getElementsByTagName('section');
    sectionsToshow = sections.length;
    header = document.getElementById(HEADER_ID);
    headerItems = document.querySelectorAll('.desktop-menu .menu-item');
    uploadBtn = document.getElementById('file-upload');
    customText = document.getElementById('custom-text');
    removeBtn = document.getElementById('remove-file');

    setTimeout(() => {
      checkSectionPositions();
      setActiveMenuItem();
      checkHeaderClassNames();
      customText.innerHTML = defaultText;
    }, 0);

    console.log(uploadBtn);

    window.addEventListener('scroll', checkSectionPositions);
    window.addEventListener('scroll', setActiveMenuItem);
    window.addEventListener('scroll', checkHeaderClassNames);


    // delete chosen file from input
    removeBtn.onclick = function () {
      if (uploadBtn.value) {
        uploadBtn.value = '';
        customText.innerHTML = defaultText
        removeBtn.style.display = 'none';
      }
    };

    uploadBtn.addEventListener('change', function () {

      console.log(uploadBtn)

      if (uploadBtn.value) {
        customText.textContent = uploadBtn.value.split('\\').pop();
        removeBtn.style.display = 'block';
      }
    })

  }

  function setActiveMenuItem() {
    let currentSectionId = '';

    for (let section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute('id');
      }
    }

    for (let item of headerItems) {
      item.classList.remove('active');
      if (item.getAttribute('data-section-id') === currentSectionId) {
        item.classList.add('active');
      }
    }
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

  function checkHeaderClassNames() {
    const additionalClassName = 'black-opaque';

    if (document.documentElement.scrollTop > 100) {
      header.classList.add(additionalClassName);
    } else {
      header.classList.remove(additionalClassName);
    }
  }

  return {};
})();

function onSubmit() {

  const nameInputValue = document.getElementById('name-input').value;
  const emailInputValue = document.getElementById('email-input').value;
  const fileInputValue = document.getElementById('file-upload').value;
  const errorBlock = document.getElementsByClassName('error-block')[0];
  const form = document.getElementById('contact-form');


  if (nameInputValue === '' || emailInputValue === '') {
    errorBlock.style.display = 'flex';
  } else {
    errorBlock.style.display = 'none';
  }
}
