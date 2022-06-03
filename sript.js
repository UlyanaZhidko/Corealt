/* Блок Аренда - фото */
document.querySelectorAll('.tabs-wrapper').forEach((e) => {
    let tabTabs = e.querySelectorAll('.tabs .tab');
    let tabItems = e.querySelectorAll('.tabs-items .item');
    for (let i = 0; i < tabTabs.length; i++) {
        tabTabs[0].click();
        tabTabs[i].onclick = () => {
            tabTabs.forEach((e) => {
                e.classList.remove('on')
            });
            tabItems.forEach((e) => {
                e.classList.remove('on')
            });
            tabTabs[i].classList.add('on');
            tabItems[i].classList.add('on');
        }
    }
});


/* Прикрепить меню хедера */
let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header_fixed")
const remove_class_on_scroll = () => header.classList.remove("header_fixed")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }

})