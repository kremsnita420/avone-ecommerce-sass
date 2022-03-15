let slider = tns({
    container: '.company-logos__my-logos',
    items: 2,
    gutter: 20,
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
        },





    }
});

let slider3 = tns({
    container: '.blog__my-articles',
    items: 1,
    slideBy: '1',
    autoplay: false,
    "nav": false,
    gutter: 20,
    controlsContainer: ".slider__controls2",
    prevButton: ".slider__previous2",
    nextButton: ".slider__next2",


    responsive: {
        770: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});