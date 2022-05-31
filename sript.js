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