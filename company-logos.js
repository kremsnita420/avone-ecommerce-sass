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
        770: {
            items: 4,
            gutter: 20,
        },
        380: {
            items: 3,

        },




    }
});