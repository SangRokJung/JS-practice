(()=>{
    //스크롤 값
    let yOffset = 0;

    //현재 보여지는 section 
    let currentSection = 0;
    
    const sectionSet = [
        //section0
        {
            // sticky : 글자 위치 고정 하여 스크롤 반응
            // normal : 일반적인 스크롤 반응

            type : 'sticky',
            height : 0,
            multiple : 4,
            //section에서 사용하는 element들을 저장.
            objs : {
                container : document.querySelector('#section-0')
            },
            //section에서 사용하는 값들을 저장.
            values : {
            }
        },
        //section1
        {
            type : 'normal',
            height : 0,
            multiple : 4,
            objs : {
                container : document.querySelector('#section-1')
            },
            values : {
            }
        },
        //section2
        {
            type : 'sticky',
            height :0,
            multiple : 4,
            objs : {
                container : document.querySelector('#section-2')
            },
            values : {
            }
        }
    ];

    const initSectionSet = function(){
        //높이 설정
        //muliple 만큼 곱한다.
        for(let i =0; i < sectionSet.length; i++){
            sectionSet[i].height = window.innerHeight * sectionSet[i].multiple;
            
            //documnet-element의 속성 변경
            sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`
        }
    }

    const scrollLoop = function() {
        if(yOffset < sectionSet[0].height){
            currentSection = 0;
        }
        else if ((yOffset > sectionSet[0].height) && (yOffset < sectionSet[0].height + sectionSet[1].height)){
            currentSection = 1;
        }
        else if (yOffset > sectionSet[0].height + sectionSet[1].height) {
            currentSection = 2;
        }
    }

    // 최초의 HTML페이지를 초기화 하는 함수.
    const initHTMLPage = function () {
        //sectionSet을 초기화
        initSectionSet();

        //기타 전역 변수 초기화.
        yOffset = 0;
        currentSection = 0;
    }

    initHTMLPage();

    window.addEventListener('scroll', (event)=>{
        yOffset = window.scrollY;
        
        scrollLoop();
        console.log(currentSection)
    })
})();

