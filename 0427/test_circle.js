     //원의 둘레를 구하는 기능
        //원의 넓이를 구하는 기능
        //원주율 출력하는 기능
        //PT값을 3.14, pie로 계산
        //클래스를 생성할 때 반지름 길이를 넣어주게끔 설계 
        //반지름 안넣으면 길이는 1.


        class circle {
            //private
            #pi
            #radiusC

            //constructor
            constructor(_radiusC = 1, _pi = 3.14){
                if (typeof(_radiusC) !== 'number' || _radiusC < 0){
                    throw 'Enter a natural number greater than zero.'
                }   
                else{
                    this.#radiusC = _radiusC;
                }

                if (_pi >= 3.14 || _pi === '𝝿'){
                    this.#pi = _pi
                }
                else{
                    throw 'It is not 𝝿 value.'
                }

            }

            //setter
            set setPi(_Pi){
                return this.setPi(_Pi)
            }
            setPi(_setPi){
                this.#pi = _setPi
            }
            set setRadius (_radius){
                return this.setRadius(_radius)
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

            getWidth () {
                if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
                    return 'Enter a natural number greater than zero.'
                }
                else{
                    if (this.#pi === '𝝿') {
                        return `Width : ${this.#radiusC * this.#radiusC}${this.#pi}`
                    }
                    else{
                        return 'Width : ' + this.#radiusC * this.#radiusC * this.#pi
                    }
                }       
            }
            getCircum() {
                if(typeof(this.#radiusC) !== 'number' || this.#radiusC < 0){
                    return 'Enter a natural number greater than zero.'
                }
                else{
                    if (this.#pi === '𝝿'){
                        return `Circum : ${this.#radiusC * 2}${this.#pi}`
                    }
                    else{
                        return 'Circum : ' + (this.#radiusC * 2 * this.#pi)
                    }
                }
            }
        }
