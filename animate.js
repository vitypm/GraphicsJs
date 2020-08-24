import {Defaults} from './defaults.js';

export default class animate {

    constructor(ctx) {
        this.ctx = ctx;

    }

    mathF(){
        let x,y,g=3;
        let arrX = [];
        let arrY = [];
        let size = 100;
        let centerX = this.ctx.canvas.width/2;
        let centerY = this.ctx.canvas.height/2;
        for (let t = 0; t < g; t+=0.01){
            x =  3 * Math.tan(t) / (1 +  Math.pow(Math.tan(t),3));
            y =  3 * Math.pow(Math.tan(t),2)/ ( 1 + Math.pow(Math.tan(t),3) );
            let tempX = x;
            let tempY = y;
            x = centerX  + (size) * (tempX * Math.cos(130) - tempY * Math.sin(130)) //rotate X
            y = centerY  + (size) * (tempX * Math.sin(130) + tempY * Math.cos(130)) //rotate Y
            arrX.push(x);
            arrY.push(y);
        }
        return {
            arrX,
            arrY,
            centerX,
            centerY
        }
    }

    hide(){

    }
}