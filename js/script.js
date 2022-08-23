'use strict'

const menToggle = document.querySelector('.header__button-gender_men'),
    womenToggle = document.querySelector('.header__button-gender_women');

const state = {
    gender: document.body.classList.contains('women') ? 'women' : 'men',
};

console.log(state.gender);

const changeToMen = () => {
    if (state.gender !== 'men') {
        document.body.classList.add('men');
        document.body.classList.remove('women');
        state.gender = 'men';
    }
};

const changeToWomen = () => {
    if (state.gender !== 'women'){
        document.body.classList.add('women');
        document.body.classList.remove('men');
        state.gender = 'women';
    }
};

menToggle.addEventListener('click', changeToMen);
womenToggle.addEventListener('click', changeToWomen);