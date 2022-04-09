// ! Info tabs

function openTab(evt, tabNumber) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("info-tab__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNumber).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Get the element with id="default-open" and click on it
document.getElementById("default-open").click();

// ! review form toggle

const formToggle = document.getElementById('review-form-toggle');
const form = document.getElementById('product-reviews__form');

formToggle.addEventListener('click', function () {
    form.classList.toggle('product-reviews__form--hidden');
    console.log('first')
});