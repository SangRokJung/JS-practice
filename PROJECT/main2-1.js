(()=>{
    // 스크롤 값
    let yOffset = 0;

    // 현재 보여지는 section
    let currentSection = 0;     

    let PrevSectionHeight = 0;

    let sectionYOffset = 0;


    const sectionSet = [
        // section-0
        {
            // type : section의 구분값 (sticky : 글자위치가 고정되어 스크롤에 반응하는 섹션)
            //                          normal : 일반적인 스크롤 섹션
            type : 'normal',

            // height : 스크롤의 높이, 초기화함수에서 화면 구성에 따라 비율로 설정됨.
            height : 0,

            // multiple : 스크롤 높이를 설정하기 위한 배수.
            multiple : 1,

            // section에서 사용하는 element들을 저장.
            objs : {
                container : document.querySelector('#section-0'),
                seriseMsgA : document.querySelector('#section-0 serise-message a'),
            },
            // section에서 사용하는 값들을 저장.
            values : {
                MessageA_opacity : [0, 1],
            }

        },
        
        // section-1
        {
            type : 'sticky',
            height : 0,
            multiple : 3,
            objs : {
                container : document.querySelector('#section-1'),

            },
            values : {

            }

        },

        // section-2
        {
            type : 'sticky',
            height : 0,
            multiple : 3,            
            objs : {
                container : document.querySelector('#section-2'),

            },
            values : {


            }

        }        
    ];

//-------------------------------------------------------------------------
// 함수 파트
//-------------------------------------------------------------------------
    
    // sectionSet 배열을 초기화 해주는 함수.
    const initSectionSet = function()
    {
        // 높이를 설정.
        for(let i = 0; i < sectionSet.length; i++)
        {
            // 높이를 설정한다.
            sectionSet[i].height = window.innerHeight * sectionSet[i].multiple;                 
            sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`;

        }

    }    

    // yOffset에 따라 현재 보고있는 Section을 설정한다.\
    // 스크롤이 일어날때 실행되어야 한다.
    const getCurrentSection = function()
    {   
        let result = 0;
        if (yOffset <= sectionSet[0].height)
        {
            result = 0;

        }
        else if ((yOffset > sectionSet[0].height) && 
                 (yOffset <= sectionSet[0].height + sectionSet[1].height))
        {
            result = 1;
            
        }
        else if (yOffset > sectionSet[0].height + sectionSet[1].height)
        {
            result = 2;
        }

        return result;
        
        // console.log('currentSection = ' + currentSection);
    }

    //현재 section의 위쪽 section의 합을 구하는 함수
    const getPrevSectionHeight = function () {
        let result = 0;

        for (let i = 0; i < currentSection; i++) {
            result = result + sectionSet[i].height;
        }

        return result;
    }

    // 최초에 HTML Page를 초기화하는 함수.
    const initHTMLPage = function()
    {
        // sectionSet을 초기화한다.
        initSectionSet();

        // 기타 전역변수들도 초기화.
        yOffset = 0;

    }

    // 스크롤시에 수행되는 함수
    const scrollLoop = function()
    {
        // currentSection을 설정한다.
        getCurrentSection();

        // currentSection에 따른 CSS값을 설정.
        document.body.setAttribute('id', `show-section-${currentSection}`)

        // 해당 currentSection에서 에니메이션을 실행한다.
        playAnimation();
    }

    const playAnimation = function() {
        let opVal = 0;

        switch(currentSection){
            case 0 : 
                break;

            case 1 : 
                // 현재 구하고 싶은 값은 스크롤을 대리면 opt가 증가한다.
                // (1:전체 높이) * (현재 스크롤 값)

                //1. 스크롤 값을 기반으로 opacity 범위를 계산한다.
                const elemTag       = document.getElementsByClassName('fadein-items1')
                        opVal       = (sectionYOffset) * (1/sectionSet[1].height);
                
                //2. CSS에 적용한다.
                for (let i = 0; i < elemTag.length; i ++) {
                    elemTag[i].style.opacity = `${opVal}`
                }
                break;

            case 2 : 
                const elemTag2 = document.getElementsByClassName('fadein-items2');
                opVal = (sectionYOffset) * (1/sectionSet[2].height);
                
                for (let i = 0; i < elemTag2.length; i ++) {
                    elemTag2[i].style.opacity = `${opVal}`
                }
            
                break;
        }
    }

    const ttTag = document.querySelector("#id_local-nav-links-00")
    //인터벌
    let intv;
    //opacity, translate Value
    let opctValue = 0;
    let tslYValue = 0;
    //bRunFlag
    let bRunFlag = null;

    const animi = function() {
        opctValue += 0.01;
        tslYValue -= 0.5;
        if(opctValue >= 1){
            opctValue =1;
            ttTag.style.opacity = `${opctValue}`
            clearInterval(intv)
            return
        }

        ttTag.style.opacity = `${opctValue}`
        ttTag.style.transform = `translateY(${tslYValue}px)`
    }

//-------------------------------------------------------------------------
// 이벤트 핸들러
//-------------------------------------------------------------------------

window.addEventListener('scroll', ()=>{      
    // 스크롤 값
    // 현재 센셕
    // 이전 섹션의 높이
    // 현재 섹션내에서 스크롤 값          
    yOffset             = window.scrollY;
    currentSection      = getCurrentSection();
    PrevSectionHeight   = getPrevSectionHeight();
    sectionYOffset      = yOffset - PrevSectionHeight;

    scrollLoop();
});

window.addEventListener('DOMContentLoaded', () => {
    intv = setInterval(animi, 10)
})
    

//-------------------------------------------------------------------------
// 함수 호출
//-------------------------------------------------------------------------
    initHTMLPage();


})();