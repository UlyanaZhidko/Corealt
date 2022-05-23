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








function openPhoto(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();