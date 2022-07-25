/*
 * Copyright (c) 2022. Implex
 * All rights reserved
 */

const nav = document.querySelector('nav');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add('black-background');
    } else {
        nav.classList.remove('black-background');
    }
};
