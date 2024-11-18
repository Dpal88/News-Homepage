const container = document.querySelector('.container');

const hamButton = document.querySelector('.topnav__btn');

const topNavMenu = document.querySelector('.topnav__menu');
const opacity = document.querySelector('.opacity');

hamButton.addEventListener('click', e => {
    const closeIcon = document.querySelector('.close-icon');
    const hamIcon = document.querySelector('.ham-icon');

    hamIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');

    topNavMenu.classList.toggle('active');
    opacity.classList.toggle('activeBG');
})