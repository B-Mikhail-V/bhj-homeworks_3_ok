const btn = Array.from(document.querySelectorAll('.dropdown__value'))
const items = Array.from(document.querySelectorAll('.dropdown__item'))
const links = Array.from(document.querySelectorAll('.dropdown__link'))


//обработчик для кнопки
btn.forEach(element => {
    element.addEventListener('click', onClickAct)

});

//индекс активноЙ кнопки
function findActiveBtn() {
    return btn.findIndex(btn => btn.nextElementSibling.classList.contains('dropdown__list_active'))
    
 }

 //колбэк для клика на кнопку
function onClickAct(e) {
    e.target.nextElementSibling.classList.toggle('dropdown__list_active');
}


//обработчик для элемента меню
items.forEach(element => {
    element.addEventListener('click', onClick2)
});


//колбэк для клика на элемент меню
function onClick2(e) {
    let text = e.target.textContent;
    e.preventDefault();
    btn[findActiveBtn()].textContent = text;
    btn[findActiveBtn()].nextElementSibling.classList.remove('dropdown__list_active')
}



