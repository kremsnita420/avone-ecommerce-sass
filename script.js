const acc = document.getElementsByClassName("accordion-toggle");
const navOpen = document.getElementsByClassName('header__hamburger-menu')
const navClose = document.getElementsByClassName('sidebar__close-icon')
const sidebar = document.getElementsByClassName('sidebar')

let i;

// ! Navigation toggle


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
        console.log('1')
    } else {
        sidebar[0].classList.remove("sidebar--hidden")
        sidebar[0].classList.add("sidebar--visible")
        console.log('2')
    }
});


// ! Accordion toggle
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
            panel.style.display = "none";
        } else {
            panel.style.display = "flex";
        }
    });
}

// ! Timer

// Set the date we're counting down to
const countDownDate = new Date("Aug 5, 2022 15:37:25").getTime();

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
    document.querySelector(".countdown-timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName(".countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
