
//1-е модальное окно оправки формы
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

//фильтр для портфолио игроков
//portfolio
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
};


//2-е модальное окно политики конфиденциальности
const privacyLink = document.querySelector('.privacy');
const popUp2 = document.getElementById('pop_up_privacy');
const closeBtn = document.getElementById('popup_privacy_close');
// Открытие модального окна при клике на ссылку
privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    popUp2.style.display = 'block'; // Показываем модальное окно
});
// Закрытие модального окна при клике на кнопку закрытия
closeBtn.addEventListener('click', function() {
    popUp2.style.display = 'none'; // Скрываем модальное окно
});
// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(e) {
    if (e.target === popUp) {
        popUp2.style.display = 'none';
    }
});

//3-е модальное окно terms
const privacyLink3 = document.querySelector('.terms');
const popUp3 = document.getElementById('pop_up_terms');
const closeBtn3 = document.getElementById('popup_terms_close');
// Открытие модального окна при клике на ссылку
privacyLink3.addEventListener('click', function(e) {
    e.preventDefault();
    popUp3.style.display = 'block'; // Показываем модальное окно
});
// Закрытие модального окна при клике на кнопку закрытия
closeBtn3.addEventListener('click', function() {
    popUp3.style.display = 'none'; // Скрываем модальное окно
});
// Закрытие модального окна при клике вне его области
window3.addEventListener('click', function(e) {
    if (e.target === popUp3) {
        popUp3.style.display = 'none';
    }
});

