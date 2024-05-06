function cardMouseMoveEventHandler(event,element,selector,dataAtribute){
    let countOfImages = element.querySelectorAll('.'+`${selector}`).length
    console.log(element);
    const elementWidth = element.offsetWidth
    const oneCardWidth = elementWidth  / countOfImages
    const x = event.offsetX;
    let imageId  = Math.ceil(x/oneCardWidth)
    imageId < 1 ? imageId = 1 : null
    const cards = element.querySelectorAll([`[${dataAtribute}]`])
    cards.forEach(el => {
        if(Number(el.dataset.id) === imageId){
            el.classList.add('active')
        }else{
            el.classList.remove('active')
        }
    })
}

export{cardMouseMoveEventHandler}