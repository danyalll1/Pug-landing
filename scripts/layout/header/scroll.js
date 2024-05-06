window.addEventListener('load', () => {

    if(document.querySelector('.header')){
        const header = document.querySelector('header')
        let lastScrollTop = 0
        if(document.querySelector('.top'))
            header.classList.add('header_main-section')

        function scrollEventHandler(){
            if(window.innerWidth > 1024){
                let scrollTop = window.scrollY
                if(scrollTop > lastScrollTop){
                    header.classList.add('header_hidden')
                    lastScrollTop = scrollTop
                }
                else{
                    header.classList.remove('header_hidden')
                    lastScrollTop = scrollTop-1
                }
                if(scrollTop > 5 || !document.querySelector('.top')){
                    header.classList.remove('header_main-section')
                }
                else{
                    header.classList.add('header_main-section')
                }
            }else{
                header.classList.remove('header_hidden')
            }
        }

        window.addEventListener('scroll',scrollEventHandler)
    }


})