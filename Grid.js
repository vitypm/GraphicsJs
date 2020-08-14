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
            this.scalingWidth = scalingWidth;
            this.scalingHeight = scalingHeight;
        }

     //   console.log("Grid accept");
    }

    grid()
    {
        let centerX = this.ctx.canvas.width; //Высчитываем середину
        let centerY = this.ctx.canvas.height; //Высчитываем середину
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#423124";
        this.ctx.lineWidth = 3;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth) {
            this.ctx.moveTo(centerX - x + Defaults.Grid.transferX, centerY + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - x + Defaults.Grid.transferX, centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.Grid.transferX, centerY - y + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width , centerY - y + Defaults.Grid.transferY);
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
        this.ctx.strokeStyle = "#423124";
        this.ctx.lineWidth = 3;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth) {
            this.ctx.moveTo(centerX - x + Defaults.Grid.transferX, centerY + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - x + Defaults.Grid.transferX, centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.Grid.transferX, centerY - y + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width, centerY - y + Defaults.Grid.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Справо сверху
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#423124";
        this.ctx.lineWidth = 3;
        //Вертикальные линий
        for (let x = 1; x < this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX + x + Defaults.Grid.transferX, centerY + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX + x + Defaults.Grid.transferX,centerY - this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.Grid.transferX, centerY - y + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX + this.ctx.canvas.width, centerY - y + Defaults.Grid.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Справо снизу
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#423124";
        this.ctx.lineWidth = 3;
        //Вертикальные линий
        for (let x = 1; x <  this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX + x + Defaults.Grid.transferX, centerY + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX + x + Defaults.Grid.transferX, centerY + this.ctx.canvas.height);
        }
        //Горизантальные лини
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.Grid.transferX, centerY + y + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX + this.ctx.canvas.width ,centerY + y + Defaults.Grid.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        /*
        * Слево снизу
        */
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#423124";
        this.ctx.lineWidth = 3;
        //Вертикальные линий
        for (let x = 1; x <  this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX); x += this.scalingWidth)
        {
            this.ctx.moveTo(centerX - x + Defaults.Grid.transferX, centerY + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - x + Defaults.Grid.transferX,centerY + this.ctx.canvas.height);
        }
        //Горизантальные линий
        for (let y = 1; y < this.ctx.canvas.height + Math.abs(Defaults.Grid.transferY); y += this.scalingHeight)
        {
            this.ctx.moveTo(centerX + Defaults.Grid.transferX, centerY + y + Defaults.Grid.transferY);
            this.ctx.lineTo(centerX - this.ctx.canvas.width, centerY + y + Defaults.Grid.transferY);
        }
        this.ctx.closePath();
        this.ctx.stroke();

    }
}