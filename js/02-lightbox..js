import { galleryItems } from './gallery-items.js';

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemCardMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

function createGalleryItemCardMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    }).join('');
}

