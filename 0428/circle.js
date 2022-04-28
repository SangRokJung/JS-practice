class circle {
    //private
    #pi
    #radiusC

    //constructor
    constructor(_radiusC = 1, _pi = 3.14){
        //Radius 입력
        if (_radiusC < 0){
            throw 'Enter a natural number greater than zero.'
        }   
        else{
            this.#radiusC = _radiusC;
        }

        //Pi입력
        if ((_pi >= 3.14 && _pi < 3.15 ) || _pi === '𝝿'){
            this.#pi = _pi
        }
        else {
            throw 'It is not 𝝿 value.'
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
    //넓이 구하는 함수
    getWidth () {
        if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
            return 'Enter a natural number greater than zero.'
        }
        else{
            if (this.#pi === '𝝿') {

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
    //둘레 구하는 함수
    getCircum() {
        if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
            return 'Enter a natural number greater than zero.'
        }
        else{
            if (this.#pi === '𝝿'){
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

    //PI 선택
    selector.addEventListener('change', () =>{
        if (selector.value === 'Direct input'){
            inputPi.value = `3.14 <= value > 3.15`
        }
        else{
            inputPi.value = selector.value; 
        }
    })

    //버튼 계산
    btnClick.addEventListener('click', (event) => {

        const c2 = new circle(Number(inputRadius.value), inputPi.value)

        width.textContent = `area : ${c2.getWidth()}`
        circum.textContent = `circum : ${c2.getCircum()}`
        pi.textContent = `pi : ${c2.Pi}`

    })
})