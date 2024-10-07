const openPopUp = document.querySelectorAll('.open_popup.open_popup');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

// Назначаем обработчик события на каждую ссылку с классом .open_popup
openPopUp.forEach((openPopUp) => {
    openPopUp.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    });
});

// Закрытие попапа
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});
