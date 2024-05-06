window.addEventListener('load', () => {
    if(document.querySelector('.up-button')){
        const upButton = document.querySelector('.up-button')

        function clickEventHandler(){
            window.scrollTo(0, 0);
        }

        upButton.addEventListener('click', clickEventHandler)
    }

})