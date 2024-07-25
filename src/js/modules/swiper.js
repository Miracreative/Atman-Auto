function swiperSlider() {
    // const productSlider = new Swiper(".slide__slider", {
    //     observer: true,
    //     observeSlideChildren: true,
    //     updateOnWindowResize: true,
    //     updateOnWindowResize: true,
    //     observeParents: true,
    //     speed: 300,
    //     spaceBetween: '1%',
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 5,
    //         },
    //         769: {
    //             slidesPerView: 4,
    //         },
    //         992: {
    //             slidesPerView: 5,
    //         }
    //     }
    // })
    const areaSlider = new Swiper(".area__swiper", {
        observer: true,
        observeSlideChildren: true,
        updateOnWindowResize: true,
        updateOnWindowResize: true,
        observeParents: true,
        speed: 300,
        spaceBetween: '1%',
        breakpoints: {
            320: {
                slidesPerView: 5,
            },
            769: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        }
    })
}

module.exports = swiperSlider;