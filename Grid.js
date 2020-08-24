import {Defaults} from './defaults.js';

export default class grid {
    constructor(ctx, scalingWidth, scalingHeight, rule) {
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

     //   console.log("Grid accept");
    }

    Reut(){
        return {
            centerX: this.ctx.canvas.width/2,
            centerY:this.ctx.canvas.height/2
        }
    }

    grid()
    {
        let centerX = this.ctx.canvas.width + Math.abs(Defaults.transferX); //Высчитываем середину
        let centerY = this.ctx.canvas.height + Math.abs(Defaults.transferY); //Высчитываем середину
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Grid.strokeStyle;
        this.ctx.lineWidth = Defaults.Grid.lineWidth;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth) {
            this.ctx.moveTo(centerX - x + Defaults.transferX, centerY + Defaults.transferY);
            this.ctx.lineTo(centerX - x + Defaults.transferX, centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.transferX, centerY - y + Defaults.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width , centerY - y + Defaults.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    centerGrid()
    {
        let centerX = this.ctx.canvas.width / 2; //Высчитываем середину
        let centerY = this.ctx.canvas.height / 2; //Высчитываем середину
        /*
        * Слево сверху
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Grid.strokeStyle;
        this.ctx.lineWidth = Defaults.Grid.lineWidth;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth) {
            this.ctx.moveTo(centerX - x + Defaults.transferX, centerY + Defaults.transferY);
            this.ctx.lineTo(centerX - x + Defaults.transferX, centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.transferX, centerY - y + Defaults.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width, centerY - y + Defaults.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Справо сверху
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Grid.strokeStyle;
        this.ctx.lineWidth = Defaults.Grid.lineWidth;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX + x + Defaults.transferX, centerY + Defaults.transferY);
            this.ctx.lineTo(centerX + x + Defaults.transferX,centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.transferX, centerY - y + Defaults.transferY);
            this.ctx.lineTo(centerX + this.ctx.canvas.width, centerY - y + Defaults.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Справо снизу
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Grid.strokeStyle;
        this.ctx.lineWidth = Defaults.Grid.lineWidth;
        //Вертикальные линий
        for (let x = 1; x <  this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX + x + Defaults.transferX, centerY + Defaults.transferY);
            this.ctx.lineTo(centerX + x + Defaults.transferX, centerY + this.ctx.canvas.height);
        }
        //Горизантальные лини
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.transferX, centerY + y + Defaults.transferY);
            this.ctx.lineTo(centerX + this.ctx.canvas.width ,centerY + y + Defaults.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Слево снизу
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = Defaults.Grid.strokeStyle;
        this.ctx.lineWidth = Defaults.Grid.lineWidth;
        //Вертикальные линий
        for (let x = 1; x <  this.ctx.canvas.width + Math.abs(Defaults.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX - x + Defaults.transferX, centerY + Defaults.transferY);
            this.ctx.lineTo(centerX - x + Defaults.transferX,centerY + this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.transferX, centerY + y + Defaults.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width, centerY + y + Defaults.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();

    }
}