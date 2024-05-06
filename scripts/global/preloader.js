window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader-container')
    document.body.classList.add('fixed')
    preloader.classList.add('active')
    window.setTimeout(function () {
        preloader.classList.remove('active')
        document.body.classList.remove('fixed');
    }, 300);
})