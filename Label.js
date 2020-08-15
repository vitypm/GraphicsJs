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
            this.scalingWidth = Defaults.Grid.scalingWidth;
            this.scalingHeight = Defaults.Grid.scalingHeight;
        }
     //   console.log("Label accept");
    }
    O(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Label.strokeStyle;
        this.ctx.font = Defaults.Label.font;
        this.ctx.lineWidth = Defaults.Label.lineWidth;
        this.ctx.strokeText("0",this.ctx.canvas.width/2,this.ctx.canvas.height/2);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    AxisLabel(){
        this.ctx.beginPath();
        this.ctx.font = Defaults.Label.font;
        this.ctx.strokeStyle = Defaults.Label.strokeStyle;
        this.ctx.lineWidth = Defaults.Label.lineWidth;

        //Right
        let text = 0;
        for (let x = 0; x < this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth) {
            this.ctx.strokeText(text,this.ctx.canvas.width/2 + x + Defaults.Label.paddingX + Defaults.transferX,this.ctx.canvas.height/2 - Defaults.Label.paddingY + Defaults.transferY);
            text++;
        }
        //Left
        let text2 = 0;
        for (let x = 0; x < this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth) {
            this.ctx.strokeText(text2, this.ctx.canvas.width/2 - x + Defaults.Label.paddingX + Defaults.transferX, this.ctx.canvas.height/2 - Defaults.Label.paddingY + Defaults.transferY);
            text2--;
        }
        //Top
        let text3 = 0;
        for (let y = 0; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight) {
            this.ctx.strokeText(text3, this.ctx.canvas.width/2 + Defaults.Label.paddingX + Defaults.transferX, this.ctx.canvas.height/2 - y - Defaults.Label.paddingY + Defaults.transferY);
            text3++;
        }
        //Bottom
        let text4 = 0;
        for (let y = 0; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight) {
            this.ctx.strokeText(text4, this.ctx.canvas.width/2 + Defaults.Label.paddingX + Defaults.transferX, this.ctx.canvas.height/2 + y - Defaults.Label.paddingY + Defaults.transferY);
            text4--;
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

}