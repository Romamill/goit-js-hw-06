
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElement = document.querySelector('.gallery');

const createGalleryItem = (image) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');
  
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add('gallery-image');
  
  galleryItem.appendChild(img);
  
  return galleryItem;
};

const createGallery = (images) => {
  const galleryItems = images.map(createGalleryItem);
  galleryItems.forEach(item => {
    galleryElement.appendChild(item);
  });
};

createGallery(images);

galleryElement.classList.add('flex-container');

galleryElement.style.display = 'flex';
galleryElement.style.flexWrap = 'wrap';
galleryElement.style.listStyle = 'none';
galleryElement.querySelectorAll('.gallery-item').forEach(item => {
  item.style.flex = '0 0 33.33%';
  item.style.padding = '10px';
  item.style.boxSizing = 'border-box';
});

galleryElement.querySelectorAll('.gallery-image').forEach(image => {
  image.style.width = '100%';
  image.style.height = 'auto';
});


