let popupBg = document.querySelector('.popup');
let popup = document.querySelector('.popup__content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopup = document.querySelector('.top__close');
let scroll = calcScroll();

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)

    let scrollWidh = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidh;
}

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active-popup')
        document.body.classList.add('_lock');
        let scroll = calcScroll()
        document.body.style.marginRight = `${scroll}px`;
    })
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active-popup')
        document.body.classList.remove('_lock');
        document.body.style.marginRight = `0px`;
    }
});

closePopup.addEventListener('click', () => {
    popupBg.classList.remove('active-popup')
    document.body.classList.remove('_lock');
    document.body.style.marginRight = `0px`;
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && popupBg.classList.contains('active')) {
        popupBg.classList.remove('active')
        document.body.classList.remove('_lock');
        document.body.style.marginRight = `0px`;
    }
});


// *************************
const sliderMain = document.querySelector('.slide-main')

function sliderActive() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        sliderMain.classList.add('slide-main-active');
        initSlider()
    } else {
        sliderMain.classList.remove('slide-main-active');
        initSlider()
    }
}

sliderActive()

window.addEventListener('resize', function () {
    sliderActive()
});

function initSlider() {
    if(sliderMain.classList.contains('slide-main-active')) {
        new Swiper('.slide-main-active', {

            touchRatio: 2,
            keyboard: {
                enabled: true,
                pageUpDown: true
            },
    
            slidesPerView: 4.5,
    
            slidesPerGroup: 4.5,
    
            breakpoints: {
                320: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                },
                400: {
                    slidesPerGroup: 2.5,
                    slidesPerView: 2.5,
                },
                480: {
                    slidesPerGroup: 4,
                    slidesPerView: 4,
                },
                767: {
                    slidesPerGroup: 4.5,
                    slidesPerView: 4.5
                }
            }
        })
    } else {
        new Swiper()
    }  
}

new Swiper('.popular-slider', {
    keyboard: {
        enabled: true,
        pageUpDown: true
    },

    slidesPerView: 5.5,

    slidesPerGroup: 5.5,

    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1.5,
        },
        480: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        767: {
            slidesPerGroup: 3,
            slidesPerView: 3
        },
        992: {
            slidesPerGroup: 3,
            slidesPerView: 3
        },
        1000: {
            slidesPerGroup: 4,
            slidesPerView: 4
        },
        1200: {
            slidesPerGroup: 5,
            slidesPerView: 5
        },
        1600: {
            slidesPerGroup: 5.5,
            slidesPerView: 5.5   
        }
    }
})