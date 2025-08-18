const animalImages = document.querySelectorAll('.animal-image');
animalImages.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('green-border');
  });
});


