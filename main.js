const slides = document.getElementsByClassName("carousel__item")
let slidePosition = 0
const totalSlides = slides.length

const dots = document.getElementsByClassName("carousel__dot")
let dotPosition = 0
const totalDots = dots.length

document.getElementById("carousel__btn--next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel__btn--prev").addEventListener("click", moveToPrevSlide)


// hide all slides
function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel__item--visible")
        slide.classList.add("carousel__item--hidden")

    }
}

//hide all active dots
function hideAllDots() {
    for (let dot of dots) {
        dot.classList.remove("carousel__dot--active")
        dot.classList.add("carousel__dot")
    }
}

//move to next slide function
function moveToNextSlide() {
    hideAllSlides()
    hideAllDots()


    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel__item--visible")

    if (dotPosition === totalDots - 1) {
        dotPosition = 0
    } else {
        dotPosition++
    }

    dots[dotPosition].classList.add("carousel__dot--active")


}

//autoplay slider
setInterval(() => {
    hideAllSlides()
    hideAllDots()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel__item--visible")

    if (dotPosition === totalDots - 1) {
        dotPosition = 0
    } else {
        dotPosition++
    }

    dots[dotPosition].classList.add("carousel__dot--active")

}, 8000);

//move to prev slide function
function moveToPrevSlide() {
    hideAllSlides()
    hideAllDots()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add("carousel__item--visible")

    if (dotPosition === 0) {
        dotPosition = totalDots - 1
    } else {
        dotPosition--
    }

    dots[dotPosition].classList.add("carousel__dot--active")

}







