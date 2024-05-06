import {cardMouseMoveEventHandler} from "@/scripts/helpers/card-image.js";
window.addEventListener('load', () => {
    if(document.querySelector('.catalog-nested__item')){
        const cards = document.querySelectorAll('.catalog-nested__item-images')
        cards.forEach(el=> el.addEventListener('mousemove', (event)=> cardMouseMoveEventHandler(event,el,'catalog-nested__item-image','data-id')))
    }
})