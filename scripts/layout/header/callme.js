window.addEventListener('load', () => {
    if(document.querySelector('[data-form]')){
        const buttons = document.querySelectorAll('[data-form]')
        const formLayout = document.querySelector('.question-form__container')
        const body = document.querySelector('body')

        function clickEventHandlerCallMe(){
                formLayout.classList.add('active')
                body.classList.add('fixed')
        }
        function clickEventHandlerClose(event){
            if(event.target.closest('.question-form') ||  event.target.closest('.question-form__success-container') ){
                if(event.target.closest('.question-form__close')){
                    removeSuccess()
                }
            }else{
                removeSuccess()
            }


        }
        function removeSuccess (){
            formLayout.classList.remove('active')
            setTimeout(()=>{
                formLayout.classList.remove('success')
            },500)
            body.classList.remove('fixed')
        }

        buttons.forEach(el=>{
            el.addEventListener('click',clickEventHandlerCallMe)
        })

        formLayout.addEventListener('click',clickEventHandlerClose)

    }

})