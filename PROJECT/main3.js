(()=>{
    // 스크롤 값
    let yOffset = 0;

    // 현재 보여지는 section
    let currentSection = 0;     


    const sectionSet = [
        // section-0
        {
            // type : section의 구분값 (sticky : 글자위치가 고정되어 스크롤에 반응하는 섹션)
            //                          normal : 일반적인 스크롤 섹션
            type : 'sticky',

            // height : 스크롤의 높이, 초기화함수에서 화면 구성에 따라 비율로 설정됨.
            height : 0,

            // multiple : 스크롤 높이를 설정하기 위한 배수.
            multiple : 4,

            // section에서 사용하는 element들을 저장.
            ojbs : {
                container : document.querySelector('#section-0'),
            },
            // section에서 사용하는 값들을 저장.
            values : {

            }

        },
        
        // section-1
        {
            type : 'normal',
            height : 0,
            multiple : 4,
            ojbs : {
                container : document.querySelector('#section-1'),

            },
            values : {

            }

        },

        // section-2
        {
            type : 'sticky',
            height : 0,
            multiple : 4,            
            ojbs : {
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
            sectionSet[i].ojbs.container.style.height = `${sectionSet[i].height}px`;

        }

    }    

    // yOffset에 따라 현재 보고있는 Section을 설정한다.\
    // 스크롤이 일어날때 실행되어야 한다.
    const setCurrentSection = function()
    {        
        if (yOffset <= sectionSet[0].height)
        {
            currentSection = 0;

        }
        else if ((yOffset > sectionSet[0].height) && 
                 (yOffset <= sectionSet[0].height + sectionSet[1].height))
        {
            currentSection = 1;
            
        }
        else if (yOffset > sectionSet[0].height + sectionSet[1].height)
        {
            currentSection = 2;
        }
        
        console.log('currentSection = ' + currentSection);


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
        setCurrentSection();

        // currentSection에 따른 CSS값을 설정.
        //document.body.setAttribute('id', `show-section-${currentSection}`)

        
    }

//-------------------------------------------------------------------------
// 이벤트 핸들러
//-------------------------------------------------------------------------

    window.addEventListener('scroll', ()=>{                
        yOffset = window.scrollY;
        scrollLoop();        

    });
    

//-------------------------------------------------------------------------
// 함수 호출
//-------------------------------------------------------------------------
    initHTMLPage();


})();