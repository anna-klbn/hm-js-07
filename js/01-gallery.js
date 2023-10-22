import { galleryItems } from './gallery-items.js';
const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemCardMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

function createGalleryItemCardMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}

function onGalleryItemsContainerClick(evt) {
  evt.preventDefault();
    
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const originalUrl = evt.target.dataset.source;


const options = {
    onShow: () => {
      window.addEventListener('keydown', onCloseEsc);
    },
    onClose: () => {
      window.removeEventListener('keydown', onCloseEsc);
    },


  };

  const instance = basicLightbox.create(`<img src=${originalUrl}>`, options);
        instance.show();
  function onCloseEsc(event) {
          
    if (basicLightbox.visible() && event.key === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);

