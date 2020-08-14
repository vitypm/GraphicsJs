import {Defaults} from './defaults.js';

export default class label {
    constructor(ctx,scalingWidth,scalingHeight, rule) {

        this.ctx = ctx;
        if(rule === "Screenscaling" || rule === 1)
        {
            this.scalingWidth = this.ctx.canvas.width / scalingWidth;
            this.scalingHeight = this.ctx.canvas.height / scalingHeight;
        }
        else if (rule === "Scaling" || rule === 2)
        {
            this.scalingWidth = scalingWidth;
            this.scalingHeight = scalingHeight;
        }
        //Параметры из defaults
        else
        {
            this.scalingWidth = scalingWidth;
            this.scalingHeight = scalingHeight;
        }
     //   console.log("Label accept");
    }
    O(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.font = '12 px Segoe UI';
        this.ctx.lineWidth = 1;
        this.ctx.strokeText("0",this.ctx.canvas.width/2,this.ctx.canvas.height/2);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    AxisLabel(){
        this.ctx.beginPath();
        this.ctx.font = '14px serif';
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

        let text = 0;
        for (let x = 0; x < this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth) {
            this.ctx.strokeText(text,this.ctx.canvas.width/2 + x + 10 + Defaults.Grid.transferX,this.ctx.canvas.height/2 - 20 + Defaults.Grid.transferY);
            text++;
        }

        let text2 = 0;
        for (let x = 0; x < this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth) {
            this.ctx.strokeText(text2, this.ctx.canvas.width/2 - x + 10 + Defaults.Grid.transferX, this.ctx.canvas.height/2 - 20 + Defaults.Grid.transferY); //Это вправо
            text2--;
        }
        let text3 = 0;
        for (let y = 0; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight) {
            this.ctx.strokeText(text3, this.ctx.canvas.width/2 + 10 + Defaults.Grid.transferX, this.ctx.canvas.height/2 - y - 20 + Defaults.Grid.transferY); //Это вверх
            text3++;
        }
        let text4 = 0;
        for (let y = 0; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight) {
            this.ctx.strokeText(text4, this.ctx.canvas.width/2 + 10 + Defaults.Grid.transferX, this.ctx.canvas.height/2 + y - 20 + Defaults.Grid.transferY); //Это вверх
            text4--;
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

}