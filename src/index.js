import './style/style.scss';
import { getData } from './fetch.js';
import { newsData } from './newsfetch.js';
import { timeData } from './timeLine.js';
import { details } from "./details.js";

timeData();
newsData();
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

const close = document.getElementById('closeUp');
const overlay = document.getElementById('overlay');
close.addEventListener('click', () => {
    overlay.style.display = 'none';
    location.reload();
});

const navIcon = document.querySelector('.nav-icon');
const navIconsec = document.querySelector('.nav-icon2');
    navIconsec.style.display = 'none';
const navLink = document.querySelector('.nav-cont');

navIcon.addEventListener('click', () => {
    navIconsec.style.display = 'block';
    navLink.style.display = 'flex';
    navIcon.style.display = 'none';
});

navIconsec.addEventListener('click', () => {
    navIcon.style.display = 'block';
    navLink.style.display = 'none';
    navIconsec.style.display = 'none';
    location.reload();
});