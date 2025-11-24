import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');
const loaderBackdrop = document.querySelector('.loader-backdrop');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}">
        </a>
        <ul class="card-info">
          <li><b>Likes:</b> ${img.likes}</li>
          <li><b>Views:</b> ${img.views}</li>
          <li><b>Comments:</b> ${img.comments}</li>
          <li><b>Downloads:</b> ${img.downloads}</li>
        </ul>
      </li>
    `
    )
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = '';
}

export function showLoader() {
  loaderBackdrop.classList.remove('hidden');
}

export function hideLoader() {
  loaderBackdrop.classList.add('hidden');
}
