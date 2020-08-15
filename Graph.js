import {Defaults} from './defaults.js';
export default class graph {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw(){
        let x1,y1;
        let tempX;
        let tempY;
        let rotate = 0;
        let size = 100;
        let centerX = this.ctx.canvas.width/2;
        let centerY = this.ctx.canvas.height/2;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.lineWidth = 4; //Размер
        for (let d=0; d <= 4; d += 0.01) {
            x1 =  3 * (Math.tan(d))/ (1 + Math.tan(d) * Math.tan(d) * Math.tan(d) ); //t * Math.sin(t);
            y1 =  3 * (Math.tan(d) * Math.tan(d) )/ ( 1 + Math.tan(d) * Math.tan(d) * Math.tan(d)  ); //-t * Math.cos(t);
            tempX = x1;
            tempY = y1;
            x1 = centerX  + (size) * (tempX * Math.cos(rotate) - tempY * Math.sin(rotate)) //rotate X
            y1 = centerY + (size) * (tempX * Math.sin(rotate) + tempY * Math.cos(rotate)) //rotate Y
            this.ctx.strokeStyle = "#ff0000";
            this.ctx.lineTo(x1,y1);
        }

        this.ctx.stroke();
        this.ctx.closePath();

    }

}