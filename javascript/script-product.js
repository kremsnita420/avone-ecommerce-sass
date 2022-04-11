// ! Info tabs
const infoTabToggle = document.querySelectorAll('.info-tab__link');
const infoTab = document.querySelectorAll('.info-tab__content');

[...infoTabToggle].forEach((item, index) => {
    item.onclick = () => {
        // display content of clicked tab and hide other tabs
        [...infoTab].forEach((item) => {
            item.classList.add('info-tab__content--hidden');
        });
        infoTab[index].classList.toggle('info-tab__content--hidden');

        //add active class to the clicked tab and remove previous active tab
        [...infoTabToggle].forEach((item) => {
            item.classList.remove('info-tab__link--active');
        }
        );
        infoTabToggle[index].classList.toggle('info-tab__link--active');





    }
});




// ! review form toggle

const formToggle = document.getElementById('review-form-toggle');
const form = document.getElementById('product-reviews__form');

formToggle.addEventListener('click', function () {
    form.classList.toggle('product-reviews__form--hidden');
    console.log('first')
});