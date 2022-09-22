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
  let form;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    sections = document.getElementsByTagName('section');
    sectionsToshow = sections.length;
    header = document.getElementById(HEADER_ID);
    headerItems = document.querySelectorAll('.desktop-menu .menu-item');
    uploadBtn = document.getElementById('file-upload');
    customText = document.getElementById('custom-text');
    removeBtn = document.getElementById('remove-file');
    form = document.getElementById('contact-form');

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
    form.addEventListener('submit', onSubmit);

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

    const xhr = new XMLHttpRequest();
    const nameInputField = document.getElementById('name-input');
    const emailInputField = document.getElementById('email-input');
    const commentInputField = document.getElementById('comment-input');
    let nameInputValue = nameInputField.value;
    let emailInputValue = emailInputField.value;
    let commentInputValue = commentInputField.value;

    const errorBlock = document.getElementsByClassName('error-block')[0];
    const successBlock = document.getElementById('success-block');

    const FD = new FormData(form);

    if (nameInputValue === '' || emailInputValue === '' || commentInputValue === '') {
      errorBlock.style.display = 'flex';
      errorBlock.textContent = 'Please enter valid value';

      if (nameInputValue === '') {
        nameInputField.style.borderColor = '#F95D51';
      }

      if (emailInputValue === '') {
        emailInputField.style.borderColor = '#F95D51';
      }

      if (commentInputValue === '') {
        commentInputField.style.borderColor = '#F95D51';
      }
    } else {
      nameInputField.style.borderColor = '#7A7878';
      emailInputField.style.borderColor = '#7A7878';
      commentInputField.style.borderColor = '#7A7878';
      errorBlock.style.display = 'none';

      xhr.open("POST",'https://hook.eu1.make.com/kdbfhg6o36adn4j7fwvmu9kx1o9xdzyt');
      xhr.send(FD);

      form.style.display = 'none';
      document.getElementsByClassName('additional-text')[0].style.display = 'none';
      successBlock.style.display = 'flex';
    }
  }

  return {};
})();
