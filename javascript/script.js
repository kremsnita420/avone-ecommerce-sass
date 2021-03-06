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




const toggleQuickShopFirst = () => {

    quickShopModal[0].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopSecond = () => {

    quickShopModal[1].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopThird = () => {

    quickShopModal[2].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopFourth = () => {

    quickShopModal[3].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopFifth = () => {

    quickShopModal[4].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopSixth = () => {

    quickShopModal[5].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopSeventh = () => {

    quickShopModal[6].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopEighth = () => {

    quickShopModal[7].classList.toggle("quick-shop-modal--visible")

}
const toggleQuickShopNinth = () => {

    quickShopModal[8].classList.toggle("quick-shop-modal--visible")

}


// ! Quick View Modal toggle
// modal open
const modalOpen = document.getElementsByClassName('quick-view');
// modal close
const modalClose = document.getElementsByClassName('quick-view-modal__close');

const modals = document.getElementsByClassName('quick-view-modal')
const singleModal = document.getElementById('quick-view-modal')
const modalContent = document.getElementsByClassName('quick-view-modal__content')
const bodyElement = document.getElementById("appBody");


// ! Open Quick View Modal
[...modalOpen].forEach((btn, ind) => {
    btn.onclick = () => (
        modals[ind].classList.toggle("quick-view-modal--hidden"),
        modalContent[ind].classList.toggle("quick-view-modal__content--hidden"),
        bodyElement.classList.toggle("stop-scroll")
    );


});

//! Close Quick View Modal
[...modalClose].forEach((span, ind) => {
    span.onclick = () => (
        modals[ind].classList.toggle("quick-view-modal--hidden"),
        modalContent[ind].classList.toggle("quick-view-modal__content--hidden"),
        bodyElement.classList.toggle("stop-scroll")
    );


});

//! When clicking outside of the modal, close it
window.onclick = (e) => {
    [...modals].forEach((modal) => {
        if (e.target === modal) {
            modal.classList.toggle("quick-view-modal--hidden"),
                bodyElement.classList.toggle("stop-scroll")

        }
    });
};



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


