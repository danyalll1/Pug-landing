window.addEventListener('load', () => {
    if(document.querySelector('.product-tabs')){
        const elements = document.querySelectorAll('[data-optionid]')
        const  buttons = document.querySelectorAll('.product-tabs__button')

        function buttonEventHandler(event){
            const id = event.target.dataset.optionid
            elements.forEach(el => {
                el.dataset.optionid === id ? el.classList.add('active') : el.classList.remove('active')
            })
        }


        buttons.forEach(el=> el.addEventListener('click',buttonEventHandler))




    }



})