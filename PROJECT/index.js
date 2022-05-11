document.addEventListener('DOMContentLoaded', () => {
    let opacityValue = 0;
    let translateYvalue = 0;

    const btnHighTag = document.querySelector('#btn-high')
    const btnlowTag = document.querySelector('#btn-low')
    const btnAllTag = document.querySelector('#btn-all')
    const textTag = document.querySelector('p')

    let intUp;
    let intDwn;
    let intAll;
    let bRunFade;

    //함수
    const opUp = function () {
        bRunFade = true
        opacityValue += 0.01;
        translateYvalue -= 0.2;

        if (opacityValue >= 1) {
            opacityValue = 1;
            translateYvalue = -20;
            clearInterval(intUp)
            intUp = null
            bRunFade = false;
            return
        }
        textTag.style.opacity = `${opacityValue}`;
        textTag.style.transform = `translateY(${translateYvalue}px)`;
    }


    const opDwn = function () {
        bRunFade = true

        if(opacityValue > 0){
            opacityValue -= 0.01;
            translateYvalue -= 0.2;
        }
        else{
            opacityValue = 0;
            translateYvalue = -40;
            clearInterval(intDwn)
            intDwn = null
            bRunFade = false;
            return
        }
        textTag.style.opacity = `${opacityValue}`;
        textTag.style.transform = `translateY(${translateYvalue}px)`;
    }

    const opAll = function () {
        bRunFade = true
        opacityValue += 0.01;
        translateYvalue -= 0.2;

        if (opacityValue >= 1) {
            opacityValue = 1;
            translateYvalue = -20;
            clearInterval(intAll)

            intDwn = setInterval(opDwn, 20)
            bRunFade = false;
            return
            
        }
        textTag.style.opacity = `${opacityValue}`;
        textTag.style.transform = `translateY(${translateYvalue}px)`;
    }

    //이벤트 핸들러
    btnHighTag.addEventListener('click', (Event) => {
        if (bRunFade === true){
            console.log('NO')
            return
        }
        else{
            opacityValue = 0;
            translateYvalue = 0;
            
            intUp = setInterval(opUp, 20)
        }

    })

    btnlowTag.addEventListener('click', (Event) => {
        if (bRunFade === true){
            console.log('NO')
            return
        }
        else{
            opacityValue = 1;
            translateYvalue = -20;
            
            intDwn = setInterval(opDwn, 20)
        }

    })

    btnAllTag.addEventListener('click', () => {
        if (bRunFade === true){
            console.log('NO')
            return
        }
        else{
            opacityValue = 0;
            translateYvalue = 0;
            intAll = setInterval(opAll, 20)
        }
    })
})