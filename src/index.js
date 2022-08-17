import './style/style.scss';
import { getData } from './fetch.js';
// import { newsData } from './newsfetch.js';
// import { timeData } from './timeLine.js';
// import { details } from "./details.js";

// timeData();
// newsData();
getData();

const crypto = document.getElementById('crypto');
const cryptoNews = document.getElementById('cryptoNews');
const coinList = document.getElementById('coinDlist');
const newsLst = document.getElementById('newslive');

coinList.style.display = 'block';
newsLst.style.display = 'none';

crypto.addEventListener('click', () => {
    coinList.style.display = 'block';
    newsLst.style.display = 'none';
});

cryptoNews.addEventListener('click', () => {
    coinList.style.display = 'none';
    newsLst.style.display = 'block';
});
