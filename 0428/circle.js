class circle {
    //private
    #pi
    #radiusC

    //constructor
    constructor(_radiusC = 1, _pi = 3.14){
        //Radius ìë ¥
        if (_radiusC < 0){
            throw 'Enter a natural number greater than zero.'
        }   
        else{
            this.#radiusC = _radiusC;
        }

        //Piìë ¥
        if ((_pi >= 3.14 && _pi < 3.15 ) || _pi === 'ð¿'){
            this.#pi = _pi
        }
        else {
            throw 'It is not ð¿ value.'
        }

    }

    //setter
    set setPi(_pi){
        return this._setPi(_pi)
    }
    setPi(_setPi){
        this.#pi = _setPi
    }
    set setRadius (_radius){
        this.#radiusC = _radius
    }
    setRadius (_radius){
        this.#radiusC = _radius
    }

    //getter
    get Pi (){
        return this.getPi()
    }
    getPi (){
        return this.#pi
    }

    //get function
    //ëì´ êµ¬íë í¨ì
    getWidth () {
        if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
            return 'Enter a natural number greater than zero.'
        }
        else{
            if (this.#pi === 'ð¿') {

                if(isNaN(this.#radiusC * this.#radiusC)){
                    return 'Enter a natural number greater than zero.'
                }
                else{
                    return `${this.#radiusC * this.#radiusC}${this.#pi}`
                }
            }
            else {
                if(isNaN(this.#radiusC * this.#radiusC * this.#pi)){
                    return 'Enter a natural number greater than zero.'
                }
                else{
                    return this.#radiusC * this.#radiusC * this.#pi
                }
            }
        }       
    }
    //ëë  êµ¬íë í¨ì
    getCircum() {
        if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
            return 'Enter a natural number greater than zero.'
        }
        else{
            if (this.#pi === 'ð¿'){
                if(isNaN(this.#radiusC * 2)){
                    return 'Enter a natural number greater than zero.'
                }
                else{
                    return `${this.#radiusC * 2}${this.#pi}`
                }
            }
            else{
                if (isNaN(this.#radiusC * 2 * this.#pi)){
                    return 'Enter a natural number greater than zero.'
                }
                else{   
                    return (this.#radiusC * 2 * this.#pi)
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnClick = document.querySelector('button')
    const inputRadius = document.querySelector('#radius')
    const inputPi = document.querySelector('#id_pi_input')
    const width = document.querySelector('#id_width')
    const circum = document.querySelector('#id_circum')
    const pi = document.querySelector('#id_pi')
    const selector = document.querySelector('#id_sel_pi')

    //PI ì í
    selector.addEventListener('change', () =>{
        if (selector.value === 'Direct input'){
            inputPi.value = `3.14 <= value > 3.15`
        }
        else{
            inputPi.value = selector.value; 
        }
    })

    //ë²í¼ ê³ì°
    btnClick.addEventListener('click', (event) => {

        const c2 = new circle(Number(inputRadius.value), inputPi.value)

        width.textContent = `area : ${c2.getWidth()}`
        circum.textContent = `circum : ${c2.getCircum()}`
        pi.textContent = `pi : ${c2.Pi}`

    })
})