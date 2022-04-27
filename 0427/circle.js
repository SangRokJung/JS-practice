class circle {
    //private
    #pi
    #radiusC

    //constructor
    constructor(_radiusC = 1, _pi = 3.14){
        if (_radiusC < 0){
            throw 'Enter a natural number greater than zero.'
        }   
        else{
            this.#radiusC = _radiusC;
        }

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