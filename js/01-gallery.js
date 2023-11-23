import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);



function createGalleryCardMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('')
};

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onCardContainer);

  function onCardContainer(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
   const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">`
  );
    
    instance.show();
    
    const onKeydownEsc = event => {
  
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
};
  
document.addEventListener('keydown', onKeydownEsc);
};

