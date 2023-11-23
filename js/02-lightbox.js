import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  }).join('')
};

const lightbox = new SimpleLightbox('.gallery a', {

    captionsData: "alt",
    captionDelay: 250,

});
lightbox.on('show.simplelightbox'); 