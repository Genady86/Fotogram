const PHOTO_PATH = './img/photos/';

const photos = [
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

const photoTitles = [
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

const dialogRef = document.getElementById ('image-overlay');
const dialogImg = document.getElementById ('dialog-image');
const closeBtn = document.getElementById ('close-dialog-btn');

closeBtn.addEventListener ('click', closeDialog);

function getPhotoTemplate (photo, title, index) {
  return `
    <li class="photo-card">
      <button onclick="openDialog(${index})">
        <img
          class="photo-image"
          src="${PHOTO_PATH}${photo}"
          alt="${title}"
        >
      </button>
    </li>
  `;
}

/**
 * shows all photos
 */
function render () {
  const contentRef = document.getElementById ('fotogram-content');
  contentRef.innerHTML = '';

  for (let i = 0; i < photos.length; i++) {
    contentRef.innerHTML += getPhotoTemplate (photos[i], photoTitles[i], i);
  }
}

function openDialog (index) {
  dialogImg.src = `${PHOTO_PATH}${photos[index]}`;
  dialogImg.alt = photoTitles[index];

  dialogRef.showModal ();
}

function closeDialog () {
  dialogRef.close ();

  dialogImg.src = '';
  dialogImg.alt = '';
}

render ();
