import Swiper from 'swiper'
import {FreeMode, Scrollbar} from 'swiper/modules'
import {cardMouseMoveEventHandler} from "@/scripts/helpers/card-image.js";

window.addEventListener('load', () => {
    if(document.querySelector('.product-also')){
        const cards = document.querySelectorAll(' .product-also__item-images')
        cards.forEach(el=> el.addEventListener('mousemove',(event)=> cardMouseMoveEventHandler(event,el,'product-also__item-image','data-id')
        ))
    }

    const alsoSlider = new Swiper('.swiper.product-also__slider', {
        modules: [ Scrollbar, FreeMode],
        slidesPerView: 3,
        spaceBetween: 8,
        scrollbar:{
            el: ' .swiper-scrollbar.product-also__scroll',
        },
        breakpoints:{
            320:{
                slidesPerView:1
            },
            770:{
              slidesPerView:3
            }
        }



    })
})