//! Company logos slider
let slider = tns({
    container: '.company-logos__my-logos',
    items: 2,
    gutter: 20,
    edgePadding: 20,
    slideBy: '1',
    autoplay: false,
    "nav": false,
    controlsContainer: ".slider__controls1",
    prevButton: ".slider__previous1",
    nextButton: ".slider__next1",

    responsive: {
        560: {
            items: 3,
        },
        770: {
            items: 4,
        },
        1200: {
            items: 5,
            edgePadding: 0,
        },
    }
});

// ! New arrivals slider
let slider2 = tns({
    container: '#slider__my-slider',
    items: 2,
    gutter: 10,
    edgePadding: 20,
    slideBy: '1',
    loop: false,
    rewind: true,
    autoplay: false,
    "swipeAngle": false,
    "nav": false,

    controlsContainer: ".slider__controls-new-arrivals",


    responsive: {
        1200: {
            items: 4,
            edgePadding: 0,
        },
        770: {
            items: 3,
            edgePadding: 0,
        },

    }
});

// ! Blog articles slider
let slider3 = tns({
    container: '.blog__my-articles',
    items: 1,
    edgePadding: 20,
    gutter: 10,
    slideBy: '1',
    autoplay: false,
    "nav": false,
    gutter: 20,
    controlsContainer: ".slider__controls2",
    prevButton: ".slider__previous2",
    nextButton: ".slider__next2",

    responsive: {
        1200: {
            items: 3,
            edgePadding: 0,
        },
        770: {
            items: 2,
        }
    }
});

// ! Quick view modal 1
let slider5 = tns({
    container: '#quick-view__slider-home-1',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-4",
    prevButton: ".slider__previous-home-4",
    nextButton: ".slider__next-home-4",


});
// ! Quick view modal 2
let slider6 = tns({
    container: '#quick-view__slider-home-2',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-5",
    prevButton: ".slider__previous-home-5",
    nextButton: ".slider__next-home-5",


});
// ! Quick view modal 3
let slider7 = tns({
    container: '#quick-view__slider-home-3',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-6",
    prevButton: ".slider__previous-home-6",
    nextButton: ".slider__next-home-6",


});
// ! Quick view modal 4
let slider8 = tns({
    container: '#quick-view__slider-home-4',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-7",
    prevButton: ".slider__previous-home-7",
    nextButton: ".slider__next-home-7",


});
// ! Quick view modal 5
let slider9 = tns({
    container: '#quick-view__slider-home-5',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-8",
    prevButton: ".slider__previous-home-8",
    nextButton: ".slider__next-home-8",
});
// ! Quick view modal 6
let slider10 = tns({
    container: '#quick-view__slider-home-6',
    items: 1,
    slideBy: '1',
    gutter: 0,
    edgePadding: 0,
    loop: true,
    autoplay: false,
    autoplayButtonOutput: false,

    "nav": false,

    controlsContainer: ".slider__controls-home-9",
    prevButton: ".slider__previous-home-9",
    nextButton: ".slider__next-home-9",
});
