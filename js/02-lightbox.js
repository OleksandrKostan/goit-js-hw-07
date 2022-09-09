import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryItemsEl = document.querySelector(".gallery");

const selectorGallery = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const createGalleryMarkup = galleryItems.map(selectorGallery).join("");
galleryItemsEl.insertAdjacentHTML("afterbegin", createGalleryMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  caption: true,
  captionsData: "alt",
});
