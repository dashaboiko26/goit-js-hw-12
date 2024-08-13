import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImagesByQuery from './js/pixabay-api';
import { createImages, clearImages, scrollDown } from './js/render-functions';

const form = document.querySelector('.form-gallery');
const input = document.querySelector('.form-input');
const loader = document.querySelector('.loader');
const button = document.querySelector('.load');
const message = document.querySelector('.bottom');

const per_page = 15;

let page = 1;
let wordFromStart = '';

form.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleClick);

async function handleSubmit(event) {
  clearImages();
  event.preventDefault();
  loader.classList.remove('hidden');
  message.classList.remove('show-text');
  let wordForSearch = input.value.trim();
  wordFromStart = wordForSearch;
  page = 1;
  if (wordForSearch === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please fill the input',
    });
    loader.classList.add('hidden');
    return;
  }
  try {
    const data = await searchImagesByQuery(wordForSearch, page, per_page);
    if (data.total === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add('hidden');
      return;
    } else {
      await createImages(data);
      button.classList.remove('hidden');
    }
    if (data.hits.length < per_page) {
      button.classList.add('hidden');
      message.classList.add('show-text');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
    loader.classList.add('hidden');
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
    loader.classList.add('hidden');
  }
}

async function handleClick(event) {
  page += 1;
  loader.classList.remove('hidden');
  button.classList.add('hidden');
  try {
    const data = await searchImagesByQuery(wordFromStart, page, per_page);
    if (data.hits.length < per_page) {
      button.classList.add('hidden');
      message.classList.add('show-text');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      button.classList.remove('hidden');
    }
    await createImages(data);
    scrollDown();
    loader.classList.add('hidden');
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
    loader.classList.add('hidden');
  }
}
