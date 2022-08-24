'use strict'

const menToggle = document.querySelector('.header__button-gender_men'),
    womenToggle = document.querySelector('.header__button-gender_women'),
    cardImage = document.querySelector('.card__image'),
    cardText = document.querySelector('.card__text'),
    buttonText = document.querySelector('.header__button-change_text'),
    buttonImage = document.querySelector('.header__button-change_image');

const state = {
    gender: document.body.classList.contains('women') ? 'women' : 'men',
};

const getRandomForArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};

const getData = () => fetch('db.json').then((response) => response.json());

const renderData = () => {
    if(state.photo.includes('black')){
        cardText.style.color = '#fff';
    } else {
        cardText.style.color = '';
    }
    
    cardImage.src = `assets/${state.photo}`;
    cardText.innerHTML = state.text.replaceAll('\n', '<br>');
};

const getDataToCard = () => {
    getData().then(data => {
        state.text = getRandomForArr(data.text[state.gender]);
        state.photo = getRandomForArr(data.photo[state.gender]);
        renderData();
    });
};

const changeToMen = () => {
    if (state.gender !== 'men') {
        document.body.classList.add('men');
        document.body.classList.remove('women');
        state.gender = 'men';
        getDataToCard();
    }
};

const changeToWomen = () => {
    if (state.gender !== 'women'){
        document.body.classList.add('women');
        document.body.classList.remove('men');
        state.gender = 'women';
        getDataToCard();
    }
};

const changeText = () => {
    getData().then(data => {
        state.text = getRandomForArr(data.text[state.gender]);
        renderData();
    });
};

const changeImage = () => {
    getData().then(data => {
        state.photo = getRandomForArr(data.photo[state.gender]);
        renderData();
    });
};

menToggle.addEventListener('click', changeToMen);
womenToggle.addEventListener('click', changeToWomen);
buttonImage.addEventListener('click', changeImage);
buttonText.addEventListener('click', changeText);
getDataToCard();