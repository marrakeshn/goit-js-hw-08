import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Add imports above this line
// Change code below this line
const galleryContainerItem = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);
galleryContainerItem.insertAdjacentHTML("beforeend",  itemsMarkup);

function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"          
                            alt="${description}"
                        />
                    </a>`;
        })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    fadeSpeed: 300,
    captionType: "alt",
    showCounter: false,
    loop: false,
});