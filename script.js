const PHOTO_PATH = './img/photos/';

const photos = [
  { file: 'photo-01.jpg', title: 'Glacier bay in Alaska' },
  { file: 'photo-02.jpg', title: 'City street by night' },
  { file: 'photo-03.jpg', title: 'Dark clouds before the storm' },
  { file: 'photo-04.jpg', title: 'Blue tit on a branch' },
  { file: 'photo-05.jpg', title: 'Hurricane seen from space' },
  { file: 'photo-06.jpg', title: 'Mountain lake with reflection' },
  { file: 'photo-07.jpg', title: 'Duck spreading its wings' },
  { file: 'photo-08.jpg', title: 'Man standing at the shore' },
  { file: 'photo-09.jpg', title: 'Snow bunting on a rock' },
  { file: 'photo-10.jpg', title: 'Snow leopard cub' },
  { file: 'photo-11.jpg', title: 'Mountain range at sunrise' },
  { file: 'photo-12.jpg', title: 'Frozen tree in the snow' }
];

/**
 * Creates the HTML for a single photo card.
 * @param {Object} photo - One entry of the photos array.
 * @param {number} index - Position of the photo inside the array.
 * @returns {string} The HTML string of the list item.
 */
function getPhotoTemplate(photo, index) {
  return '';
}

/**
 * Renders all photos into the gallery container.
 */
function render() {
  const contentRef = document.getElementById('fotogram-content');
  contentRef.innerHTML = '';
}
