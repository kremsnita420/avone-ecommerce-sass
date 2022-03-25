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
    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : `${days}`
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : `${hours}`
    document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);


