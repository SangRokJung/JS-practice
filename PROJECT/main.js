document.addEventListener('DOMContentLoaded', () => {
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


})