// ! Navigation toggle
const navOpen = document.getElementsByClassName('header__hamburger-menu')
const navClose = document.getElementsByClassName('sidebar__close-icon')
const sidebar = document.getElementsByClassName('sidebar')

navClose[0].addEventListener("click", () => {
    sidebar[0].classList.remove("sidebar--visible")
    sidebar[0].classList.add("sidebar--hidden")

});

navOpen[0].addEventListener("click", () => {

    sidebar[0].classList.remove("sidebar--hidden")
    sidebar[0].classList.add("sidebar--visible")

});


// ! Sidebar cart toggle
const cartOpen = document.getElementsByClassName('shopping-bag')
const cartClose = document.getElementsByClassName('sidebar-cart__close-icon')
const sidebarCart = document.getElementsByClassName('sidebar-cart')

cartClose[0].addEventListener("click", (e) => {
    e.preventDefault()
    sidebarCart[0].classList.remove("sidebar-cart--visible")
    sidebarCart[0].classList.add("sidebar-cart--hidden")
});

cartOpen[0].addEventListener("click", (e) => {
    e.preventDefault()
    sidebarCart[0].classList.remove("sidebar-cart--hidden")
    sidebarCart[0].classList.add("sidebar-cart--visible")
});

// ! Quick shop modal toggle
const quickShopOpen = document.getElementsByClassName('quick-shop')
const quickShopClose = document.getElementsByClassName('quick-shop-modal__close-icon')
const quickShopModal = document.getElementsByClassName('quick-shop-modal')

const toggleModalFirst = () => {

    quickShopModal[0].classList.toggle("quick-shop-modal--visible")

}
const toggleModalSecond = () => {

    quickShopModal[1].classList.toggle("quick-shop-modal--visible")

}
const toggleModalThird = () => {

    quickShopModal[2].classList.toggle("quick-shop-modal--visible")

}
const toggleModalFourth = () => {

    quickShopModal[3].classList.toggle("quick-shop-modal--visible")

}
const toggleModalFifth = () => {

    quickShopModal[4].classList.toggle("quick-shop-modal--visible")

}
const toggleModalSixth = () => {

    quickShopModal[5].classList.toggle("quick-shop-modal--visible")

}
const toggleModalSeventh = () => {

    quickShopModal[6].classList.toggle("quick-shop-modal--visible")

}
const toggleModalEighth = () => {

    quickShopModal[7].classList.toggle("quick-shop-modal--visible")

}
const toggleModalNinth = () => {

    quickShopModal[8].classList.toggle("quick-shop-modal--visible")

}


// ! Quick View Modal toggle
// modal open
const modalOpen = document.getElementsByClassName('quick-view');
// modal close
const modalClose = document.getElementsByClassName('quick-view-modal__close');

const modal = document.getElementsByClassName('quick-view-modal')
const modalContent = document.getElementsByClassName('quick-view-modal__content')
const bodyElement = document.getElementById("appBody");



const toggleQuickFirst = () => {
    modal[0].classList.toggle("quick-view-modal--hidden")
    modalContent[0].classList.toggle("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");
}
const toggleQuickSecond = () => {
    modal[1].classList.toggle("quick-view-modal--hidden")
    modalContent[1].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickThird = () => {
    modal[2].classList.toggle("quick-view-modal--hidden")
    modalContent[2].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickFourth = () => {
    modal[3].classList.toggle("quick-view-modal--hidden")
    modalContent[3].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickFifth = () => {
    modal[4].classList.toggle("quick-view-modal--hidden")
    modalContent[4].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickSixth = () => {
    modal[5].classList.toggle("quick-view-modal--hidden")
    modalContent[5].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickSeventh = () => {
    modal[6].classList.toggle("quick-view-modal--hidden")
    modalContent[6].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickEighth = () => {
    modal[7].classList.toggle("quick-view-modal--hidden")
    modalContent[7].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}
const toggleQuickNinth = () => {
    modal[8].classList.toggle("quick-view-modal--hidden")
    modalContent[8].classList.remove("quick-view-modal__content--hidden")
    bodyElement.classList.toggle("stop-scroll");

}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = () => {
    // hide modal
    modal.classList.add('quick-view-modal--hidden');
    //remove scrolling on body when modal is open
    bodyElement.classList.remove("stop-scroll");

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {

    if (event.target === modal && event.target.classList.contains('quick-view-modal--hidden')) {
        modal.classList.remove('quick-view-modal--hidden');

        bodyElement.classList.toggle("stop-scroll");
    }
}






//! Product Quantity selector

function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}


// ! Accordion toggle
const acc = document.getElementsByClassName("accordion-toggle");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {


        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// ! Timer
const daysContainer = document.getElementById("days")
const hoursContainer = document.getElementById("hours")
const minutesContainer = document.getElementById("minutes")
const secondsContainer = document.getElementById("seconds")
// Set the date we're counting down to
const countDownDate = new Date("jun 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    if (secondsContainer) {
        daysContainer.innerHTML = days < 10 ? `0${days}` : `${days}`
        hoursContainer.innerHTML = hours < 10 ? `0${hours}` : `${hours}`
        minutesContainer.innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`
        secondsContainer.innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`
    }
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);

// ! Timer 2
const daysContainer1 = document.getElementById("days1")
const hoursContainer1 = document.getElementById("hours1")
const minutesContainer1 = document.getElementById("minutes1")
const secondsContainer1 = document.getElementById("seconds1")
// Set the date we're counting down to
const countDownDate1 = new Date("dec 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
const x1 = setInterval(function () {

    // Get today's date and time
    const now1 = new Date().getTime();

    // Find the distance between now and the count down date
    const distance1 = countDownDate1 - now1;

    // Time calculations for days, hours, minutes and seconds
    const days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    if (secondsContainer1 && distance1 > 0) {
        daysContainer1.innerHTML = days1 < 10 ? `0${days1}` : `${days1}`
        hoursContainer1.innerHTML = hours1 < 10 ? `0${hours1}` : `${hours1}`
        minutesContainer1.innerHTML = minutes1 < 10 ? `0${minutes1}` : `${minutes1}`
        secondsContainer1.innerHTML = seconds1 < 10 ? `0${seconds1}` : `${seconds1}`
    }
    // If the count down is finished, write some text
    if (distance1 < 0) {
        clearInterval(x1);
        document.getElementsByClassName("countdown-timer1").innerHTML = "EXPIRED";
    }
}, 1000);


