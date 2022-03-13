let slider2 = tns({
    container: '.slider__my-slider',
    items: 1,
    gutter: 20,
    slideBy: '1',
    autoplay: false,
    "nav": false,
    controlsContainer: ".slider__controls",
    prevButton: ".slider__previous",
    nextButton: ".slider__next",

    responsive: {


        1200: {
            items: 4,
            gutter: 20,
        },
        770: {
            items: 3,
            gutter: 20,
        },
        480: {
            items: 2,

        },




    }
});