window.addEventListener('load', () => {
    if(document.querySelector('.form__input')){
       const inputField = document.querySelector('.form__input-field')
        inputField.addEventListener('input', function() {
            const label = this.previousSibling;
            if (this.value.trim() !== '') {
                label.classList.add('active');
                this.classList.add('active')
            } else {
                label.classList.remove('active');
                this.classList.remove('active')
            }
        })

    }



})