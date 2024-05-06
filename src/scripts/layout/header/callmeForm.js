window.addEventListener('load', () => {
    if(document.querySelector('.question-form')){
        const inputFields = document.querySelectorAll('.question-form__input')

        function inputEventHandler(){
            if (!this.value.trim())  {
                this.parentNode.classList.remove('active')
            }else {
                this.parentNode.classList.add('active')
            }
        }

        inputFields.forEach(el => {
            el.addEventListener('input', inputEventHandler)
        })

    }



})