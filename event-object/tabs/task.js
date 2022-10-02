// массив вкладок
const tabs = Array.from(document.querySelectorAll('.tab'));


// находим индекс активной вкладки
function indexActiveTab() {
  return tabs.findIndex(tab => tab.classList.contains('tab_active'));
}


// массив контента
const content = Array.from(document.querySelectorAll('.tab__content'));


// активация вкладки по индексу вкладки
function tabActivate(index) {
    tabs[index].classList.add('tab_active');
}


// деактивация вкладки по индексу
function tabDeactivate(index) {
    tabs[index].classList.remove('tab_active')
    
}


// активация контента по индексу вкладки
function contentActivate(index) {
    content[index].classList.add('tab__content_active');
}


// деактивация контента, относящегося к группе вкладов
function contentDeactivate(tabParent) {
    content.forEach(element => {
        if(element.closest('.tabs').id == tabParent) {
            element.classList.remove('tab__content_active');
        }
        
    })
    
}


// определяем id группы вкладок, на элемент которой клюкнули
function tabNumber(element) {
    const tabsId = element.closest('.tabs').id
    return tabsId;
}


// обработка событий
tabs.forEach(element => {
    element.addEventListener('click', () => {
        tabDeactivate(indexActiveTab());
        contentDeactivate(tabNumber(element));
        const indexClicked = tabs.indexOf(element);        
        tabActivate(indexClicked);
        contentActivate(indexClicked);

    })
});
