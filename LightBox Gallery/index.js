const images = document.querySelectorAll('.image');
const popup_modal = document.querySelector('.popup-modal');
const popup_image = popup_modal.querySelector('img');
const close_button = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let image_index = 0;

images.forEach(function (image, index) {
    const image_link = image.querySelector('a');
    image_link.addEventListener('click', function (e) {
        e.preventDefault();
        image_index = index;
        popup_image.src = images[index].querySelector('img').src;
        popup_image.alt = images[index].querySelector('img').alt;
        popup_modal.classList.remove('hidden');
    });
});
close_button.addEventListener('click', function (e) {
    popup_modal.classList.add('hidden');
});

popup_modal.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target === popup_modal) {
        popup_modal.classList.add('hidden');
    }
})

prevButton.addEventListener('click', function (e) {
    if (image_index === 0) {
        popup_image.src = images[images.length - 1].querySelector('img').src;
        popup_image.alt = images[images.length - 1].querySelector('img').alt;
        image_index = images.length - 1;
    } else {
        image_index--;
        popup_image.src = images[image_index].querySelector('img').src;
        popup_image.alt = images[image_index].querySelector('img').alt;
    }
});
nextButton.addEventListener('click', function (e) {
    if (image_index === (images.length - 1)) {
        image_index = 0;
        popup_image.src = images[image_index].querySelector('img').src;
        popup_image.alt = images[image_index].querySelector('img').alt;
    } else {
        image_index++;
        popup_image.src = images[image_index].querySelector('img').src;
        popup_image.alt = images[image_index].querySelector('img').alt;
    }
});

