window.addEventListener('load', () => {
    if(document.querySelector('.header__burger')){
        const burgerBtn = document.querySelector('.header__burger')
        const mobileMenu = document.querySelector('.header__menu.header__menu_mobile')

        function burgerClickEventHandler(){
            this.classList.toggle('active')
            mobileMenu.classList.toggle('active')
        }

        if(burgerBtn) {
            burgerBtn.addEventListener('click', burgerClickEventHandler)
        }
    }
})