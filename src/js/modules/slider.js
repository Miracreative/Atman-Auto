function slider() {
    let slideIndex = 1;
    let offset = 0;
    const slides = document.querySelectorAll('.slide'),
        slider = document.querySelector('.main__slider'),
        prev = document.querySelector('.main__slider-prev'),
        next = document.querySelector('.main__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.main__slider-wrapper'),
        slidesField = document.querySelector('.main__slider-inner');
    let width = window.getComputedStyle(slidesWrapper).width;
  
    function getCurrentZero() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }
    function getTotalZero() {
        if (slides.length < 10) {
            total.textContent =  `0${slides.length}`;
        } else {
            total.textContent =  slides.length;
        }
    }

    getCurrentZero();
    getTotalZero();
    
    slidesField.style.width = 100 * slides.length + 'vw';
    
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.3s';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    console.log(offset)

    function sliceOffset() {
        if (offset == deleteNoDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        
    }

    function sliceOffsetPrev() {
        if(offset == 0) {
            offset = deleteNoDigits(width) * (slides.length - 1)
            console.log(deleteNoDigits(width) * (slides.length - 1))
            slidesField.style.transform = `translateX(-${offset}px)`;
        } else {
            offset -= deleteNoDigits(width);
            slidesField.style.transform = `translateX(-${offset}px)`;
        }
    }


    function deleteNoDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        sliceOffset();
        getCurrentZero();
    });

    prev.addEventListener('click', () => {
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        sliceOffsetPrev();
        getCurrentZero();
    });

    // window.addEventListener('resize',() => {
    //     width = window.getComputedStyle(slidesWrapper).width;
        
    //     slidesField.style.width = 100 * slides.length + '%';
        
    //     slides.forEach(slide => {
    //         slide.style.width = width;
    //     });
    
    
    //     offset = (slideIndex -1) * deleteNoDigits(width);
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });

}
module.exports = slider;