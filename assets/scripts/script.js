/*
 * Copyright (c) 2022. Implex
 * All rights reserved
 */

const implex = (function () {
  const START_TRANSITION_CLASS = 'start';
  const HEADER_ID = 'header';
  const defaultTextForFileLabel = 'File size up to 10MB';

  let sections;
  let sectionsToshow;
  let header;
  let headerItems;
  let formFileUploadInput;
  let formCustomTextForFileLabel;
  let formFileRemoveBtn;
  let contactForm;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    if (document.getElementsByClassName('carousel').length !== 0) {
      const splide = new Splide('.splide', {
        drag: isTouchScreen(),
        type: 'loop',
      });

      splide.mount();
    }

    sections = document.getElementsByTagName('section');
    sectionsToshow = sections.length;
    header = document.getElementById(HEADER_ID);
    headerItems = document.querySelectorAll('.desktop-menu .menu-item');
    formFileUploadInput = document.getElementById('contact-form-file-upload');
    formCustomTextForFileLabel = document.getElementById('contact-form-custom-text');
    formFileRemoveBtn = document.getElementById('contact-form-remove-file');
    contactForm = document.getElementById('contact-form');

    setTimeout(() => {
      checkSectionPositions();
      setActiveMenuItem();
      checkHeaderClassNames();
      formCustomTextForFileLabel.innerHTML = defaultTextForFileLabel;
    }, 0);

    window.addEventListener('scroll', checkSectionPositions);
    window.addEventListener('scroll', setActiveMenuItem);
    window.addEventListener('scroll', checkHeaderClassNames);

    // delete chosen file from input
    formFileRemoveBtn.onclick = function () {
      if (formFileUploadInput.value) {
        formFileUploadInput.value = '';
        formCustomTextForFileLabel.innerHTML = defaultTextForFileLabel;
        formFileRemoveBtn.classList.add('hidden');
      }
    };

    formFileUploadInput.addEventListener('change', function () {
      if (formFileUploadInput.value) {
        formCustomTextForFileLabel.textContent = formFileUploadInput.value.split('\\').pop();
        formFileRemoveBtn.classList.remove('hidden');
      }
    })
    contactForm.addEventListener('submit', onSubmit);
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

  function onSubmit(e) {
    e.preventDefault();

    const errorBorderClassName = 'error-border';
    const hiddenClassName = 'hidden';

    const xhr = new XMLHttpRequest();
    const nameInputField = document.getElementById('contact-form-name-input');
    const emailInputField = document.getElementById('contact-form-email-input');
    const commentInputField = document.getElementById('contact-form-comment-input');
    let nameInputValue = nameInputField.value;
    let emailInputValue = emailInputField.value;
    let commentInputValue = commentInputField.value;

    const errorBlock = document.getElementById('contact-form-error-block');
    const successBlock = document.getElementById('contact-form-success-block');

    const formData = new FormData(contactForm);

    if (!nameInputValue || !emailInputValue || !commentInputValue) {
      errorBlock.classList.remove(hiddenClassName);

      if (!nameInputValue) {
        nameInputField.classList.add(errorBorderClassName);
      }

      if (!emailInputValue) {
        emailInputField.classList.add(errorBorderClassName);
      }

      if (!commentInputValue) {
        commentInputField.classList.add(errorBorderClassName);
      }
    } else {
      nameInputField.classList.remove(errorBorderClassName);
      emailInputField.classList.remove(errorBorderClassName);
      commentInputField.classList.remove(errorBorderClassName);
      errorBlock.classList.add(hiddenClassName)

      xhr.open("POST", 'https://hook.eu1.make.com/kdbfhg6o36adn4j7fwvmu9kx1o9xdzyt');
      xhr.send(formData);

      contactForm.classList.add(hiddenClassName)
      document.getElementById('contact-form-additional-text').classList.add(hiddenClassName);
      document.getElementById('contact-form-subtitle').classList.add(hiddenClassName);
      successBlock.classList.remove(hiddenClassName);
    }
  }

  function isTouchScreen() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  }

// its help change text-area size depending content
  function textAreaSizesDependContent(element) {
    element.style.height = "1px";
    element.style.height = (26 + element.scrollHeight) + "px";
  }

  return {
    textAreaSizesDependContent: (el) => textAreaSizesDependContent(el)
  };
})();
