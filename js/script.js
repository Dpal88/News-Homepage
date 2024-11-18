const container = document.querySelector('.container');

const hamButton = document.querySelector('.header__btn');

const topNavMenu = document.querySelector('.header__menu');
const opacityDiv = document.querySelector('.opacity-BG');

hamButton.addEventListener('click', e => {
    const closeIcon = document.querySelector('.header__icon--close');
    const hamIcon = document.querySelector('.header__icon--ham');

    hamIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');

    topNavMenu.classList.toggle('active');
    opacityDiv.classList.toggle('activeBG');
})