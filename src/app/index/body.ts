export class Body {
    constructor(
        public country: string,
        public temparature : number,
        public weather: string,
        public img : string = '../../../assets/cloudy.png',
    ){}

         /**
     * weatherDisplay
     
    public weatherDisplay(tem) {
        if (tem <= 0) {
            return this.weather = 'snowing';
        }else if (0 < tem && tem <= 20) {
            return this.weather = 'storm';
        } else if(20 < tem && tem <=30){
            return this.weather = 'raining';
        } else if (30 < tem && tem <=40) {
            return this.weather = 'cloudy';
        }else{
            return this.weather = 'sunny';
        }
     };*/

    public imgType() {
            switch (this.weather) {
                case 'cloudy':
                  return this.img = '../../../assets/cloudy.png';
                  break;
                case 'sunny':
                   return this.img = '../../../assets/sunlight-removebg-preview.png';
                    break;
                case 'strom':
                   return this.img = '../../../assets/strom-removebg-preview.png'
                  break;
                  case 'raining':
                   return this.img = '../../../assets/raining-removebg-preview.png'
                  break;
                  case 'snowing':
                   return this.img = '../../../assets/snowing-removebg-preview.png'
                  break;
                default :
                return this.img;
              }
          
    }
   
}

