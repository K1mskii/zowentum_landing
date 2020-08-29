$('.accordion__title').click(function () {
    $(this).closest('.accordion__item').siblings().removeClass('active').find('.accordion__content').slideUp(400);
    $(this).closest('.accordion__item').toggleClass('active').find('.accordion__content').slideToggle(400);
    return false;
});


const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.modal__close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}