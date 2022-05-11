document.addEventListener('DOMContentLoaded', () => {
    //페이지 출력시 이벤트
    const ttTag = document.getElementsByClassName('local-nav-links-0')

    //태그 ADD & DELETE 이벤트
    const tagAddBtnTag = document.querySelector('#local-nav-btn')
    const tagAddIptTag = document.querySelector('#local-nav-input')

    const tagSetTag = document.querySelector('#id_tag_set')

    tagAddIptTag.addEventListener('keypress', (Event) => {
 
        if(Event.keyCode === 13) {
            const newTagBtn = document.createElement('button');
            newTagBtn.className = 'new-tag-btn'
            tagSetTag.appendChild(newTagBtn)
    
            newTagBtn.textContent = ` #${tagAddIptTag.value}`
    
            tagAddIptTag.value = ``

            newTagBtn.addEventListener('click', (Event) => {
                tagSetTag.removeChild(newTagBtn)
            })
        }
    })

    tagAddBtnTag.addEventListener('click', (event) => {

        const newTagBtn = document.createElement('button');
        newTagBtn.className = 'new-tag-btn'
        tagSetTag.appendChild(newTagBtn)

        newTagBtn.textContent = ` #${tagAddIptTag.value}`

        tagAddIptTag.value = ``

        newTagBtn.addEventListener('click', (Event) => {
            tagSetTag.removeChild(newTagBtn)
        })
    })
    
    const lcNavLinks1Tag = document.getElementsByClassName('.local-nav-links-1')

    document.addEventListener('scroll', (Event) => {
        // console.log(lcNavLinks1Tag.style)
        console.log('START')
    })

    //스크롤 이벤트


    ///////////////////////////////////////////////////////////////////////////////////////
    //화면 출력시 이벤트


    
})