import Swiper from 'swiper'
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules'

window.addEventListener('load', () => {
    if(document.querySelector('.swiper.product-preview__slider')){

        const productSliderThumbs = new Swiper('.swiper.product-preview__slider-thumbs', {
            modules: [Navigation],
            slidesPerView: 3.2,
            direction:'vertical',
            spaceBetween: 12,
            freeMode: true,
            watchSlidesProgress : true,
            navigation:{
                nextEl: document.querySelector('.swiper-button-next.product-preview__slider-thumbs-button'),
                prevEl: document.querySelector('.swiper-button-prev.product-preview__slider-thumbs-button')
            },
        });

        const productSlider = new Swiper('.swiper.product-preview__slider', {
            modules: [Navigation, Pagination, Thumbs, FreeMode],
            loop: true,
            thumbs:{
                swiper: productSliderThumbs,
                slideThumbActiveClass:'active',

            },
            pagination: {
                el: ".swiper-pagination.product-preview__slider-pagination",
                clickable: true,
            },
            breakpoints:{
                320:{
                    slidesPerView: 1.1,
                    spaceBetween: 8,
                    freeMode: {
                        enabled:true
                    },
                },
                770:{
                    slidesPerView: 1,
                    spaceBetween: 40,
                    freeMode:{
                        enabled: false
                    }

                }
            }

        });
    }
})

