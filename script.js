const THUMBNAIL_PATH = './img/photos/';
const FULL_PHOTO_PATH = './img/full/';

let currentIndex = 0;

const PHOTOS = [
    'photo-01.jpg',
    'photo-02.jpg',
    'photo-03.jpg',
    'photo-04.jpg',
    'photo-05.jpg',
    'photo-06.jpg',
    'photo-07.jpg',
    'photo-08.jpg',
    'photo-09.jpg',
    'photo-10.jpg',
    'photo-11.jpg',
    'photo-12.jpg',
];

const PHOTO_TITLES = [
    'Glacier bay in Alaska',
    'City street by night',
    'Dark clouds before the storm',
    'Blue tit on a branch',
    'Hurricane seen from space',
    'Mountain lake with reflection',
    'Duck spreading its wings',
    'Man standing at the shore',
    'Snow bunting on a rock',
    'Snow leopard cub',
    'Mountain range at sunrise',
    'Frozen tree in the snow',
];

const PHOTO_DESCRIPTIONS = [
    'Glacier landscape with snow and ice.',
    'City street illuminated at night.',
    'Dark storm clouds gathering in the sky.',
    'Blue tit sitting on a branch.',
    'Hurricane viewed from space.',
    'Mountain lake with a clear reflection.',
    'Duck spreading its wings.',
    'Person standing at the shoreline.',
    'Snow bunting sitting on a rock.',
    'Young snow leopard in the mountains.',
    'Mountain range during sunrise.',
    'Frozen tree surrounded by snow.',
];

const dialogRef = document.getElementById('dialog');
const dialogImg = document.getElementById('dialog-image');
const dialogTitle = document.getElementById('dialog-title');
const closeBtn = document.getElementById('close-button');
const previousBtn = document.getElementById('previous-button');
const nextBtn = document.getElementById('next-button');
const dialogDescription = document.getElementById('dialog-description');

const dialogCounter = document.getElementById('dialog-counter');

function getPhotoTemplate(photo, title, index) {
    return `
    <li class="photo-card">
      <article class="photo-article">
        <figure class="photo-figure">
          <button type="button" aria-label="Open ${title}" onclick="openDialog(${index})">
            <img class="photo-image" src="${THUMBNAIL_PATH}${photo}" alt="${title}">
          </button>
          <figcaption class="visually-hidden">${title}</figcaption>
        </figure>
      </article>
    </li>
  `;
}

function render() {
    const contentRef = document.getElementById('fotogram-content');

    contentRef.innerHTML = '';

    for (let i = 0; i < PHOTOS.length; i++) {
        contentRef.innerHTML += getPhotoTemplate(PHOTOS[i], PHOTO_TITLES[i], i);
    }
}

function openDialog(index) {
    currentIndex = index;

    updateDialog();

    dialogRef.showModal();
}

function updateDialog() {
    dialogImg.src = FULL_PHOTO_PATH + PHOTOS[currentIndex];
    dialogImg.alt = PHOTO_TITLES[currentIndex];
    dialogTitle.textContent = PHOTO_TITLES[currentIndex];
    dialogDescription.textContent = PHOTO_DESCRIPTIONS[currentIndex];

    dialogCounter.textContent = `${currentIndex + 1}/${PHOTOS.length}`;
}

function showPreviousPhoto() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = PHOTOS.length - 1;
    }

    updateDialog();
}

function showNextPhoto() {
    currentIndex++;

    if (currentIndex >= PHOTOS.length) {
        currentIndex = 0;
    }

    updateDialog();
}

function closeDialog() {
    dialogRef.close();
}

function clearDialog() {
    dialogImg.removeAttribute('src');
    dialogImg.alt = 'Selected photo';
    dialogTitle.textContent = 'Photo detail';
    dialogDescription.textContent = '';
}

closeBtn.addEventListener('click', closeDialog);

previousBtn.addEventListener('click', showPreviousPhoto);

nextBtn.addEventListener('click', showNextPhoto);

dialogRef.addEventListener('click', (event) => {
    if (event.target === dialogRef) {
        closeDialog();
    }
});

dialogRef.addEventListener('close', clearDialog);

document.addEventListener('keydown', (event) => {
    if (!dialogRef.open) {
        return;
    }

    if (event.key === 'ArrowLeft') {
        showPreviousPhoto();
    }

    if (event.key === 'ArrowRight') {
        showNextPhoto();
    }
});

render();
