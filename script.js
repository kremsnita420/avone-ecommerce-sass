// ! Navigation toggle
const navOpen = document.getElementsByClassName('header__hamburger-menu')
const navClose = document.getElementsByClassName('sidebar__close-icon')
const sidebar = document.getElementsByClassName('sidebar')

navClose[0].addEventListener("click", () => {

    if (sidebar[0].classList === "sidebar--hidden") {
        sidebar[0].classList.remove("sidebar--hidden")
        sidebar[0].classList.add("sidebar--visible")

    } else {
        sidebar[0].classList.add("sidebar--hidden")
        sidebar[0].classList.remove("sidebar--visible")

    }
});

navOpen[0].addEventListener("click", () => {

    if (sidebar[0].classList === "sidebar--hidden") {
        sidebar[0].classList.add("sidebar--hidden")
        sidebar[0].classList.remove("sidebar--visible")

    } else {
        sidebar[0].classList.remove("sidebar--hidden")
        sidebar[0].classList.add("sidebar--visible")

    }
});


// ! Accordion toggle
const acc = document.getElementsByClassName("accordion-toggle");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

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


