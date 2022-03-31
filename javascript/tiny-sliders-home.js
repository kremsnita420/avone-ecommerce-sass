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


let slider2 = tns({
    container: '#slider__my-slider',
    items: 2,
    gutter: 0,
    edgePadding: 10,
    slideBy: '1',
    loop: false,
    rewind: true,
    autoplay: false,
    "nav": false,
    viewportMax: true,
    controlsContainer: ".slider__controls",
    prevButton: ".slider__previous",
    nextButton: ".slider__next",

    responsive: {
        1200: {
            items: 4,
            edgePadding: 0,
        },
        840: {
            items: 3,
            edgePadding: 0,
        },

    }
});

let slider3 = tns({
    container: '.blog__my-articles',
    items: 1,
    edgePadding: 20,
    slideBy: '1',
    autoplay: false,
    "nav": false,
    gutter: 20,
    controlsContainer: ".slider__controls2",
    prevButton: ".slider__previous2",
    nextButton: ".slider__next2",

    responsive: {
        600: {
            items: 2,
        },
        1200: {
            items: 3,
            edgePadding: 0,
        }
    }
});


