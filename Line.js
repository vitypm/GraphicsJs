import {Defaults} from './defaults.js';

export default class line {
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
    }

    Right(){
        this.ctx.beginPath(); //Создаем новый путь
        this.ctx.strokeStyle = "#9017db"; //Цвет
        this.ctx.lineWidth = 3; //Размер
        this.ctx.moveTo(this.ctx.canvas.width/2 - Math.abs(Defaults.transferX),this.ctx.canvas.height/2 + Defaults.transferY); //С какой точки начать
        this.ctx.lineTo(this.ctx.canvas.width/2 + this.ctx.canvas.width + Math.abs(Defaults.transferX),this.ctx.canvas.height/2 + Defaults.transferY); //Куда двигаться
        this.ctx.closePath(); //Закрываем путь
        this.ctx.stroke();//Рисуем

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =0; m < this.ctx.canvas.width + Math.abs(Defaults.transferX + Defaults.transferY) ; m+= this.scalingWidth) {
            this.ctx.fillRect(this.ctx.canvas.width/2 + m + Defaults.transferX, this.ctx.canvas.height/2 - 15 + Defaults.transferY, 2, 30);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    Left(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.transferX,this.ctx.canvas.height/2 + Defaults.transferY);
        this.ctx.lineTo(-this.ctx.canvas.width,this.ctx.canvas.height/2 + Defaults.transferY);
        this.ctx.closePath();
        this.ctx.stroke();


        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =2; m < this.ctx.canvas.width + Math.abs(Defaults.transferX + Defaults.transferY); m+= this.scalingWidth) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - m + Defaults.transferX, this.ctx.canvas.height/2 - 15 + Defaults.transferY, 2, 30);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    //ОСИ Y
    Bottom(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.transferX, this.ctx.canvas.height/2 + Defaults.transferY);
        this.ctx.lineTo(this.ctx.canvas.width/2 + Defaults.transferX, this.ctx.canvas.height/2 + this.ctx.canvas.height - Defaults.transferY);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =0; m < this.ctx.canvas.width + Math.abs(Defaults.transferX + Defaults.transferY); m+=this.scalingHeight) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - 15 + Defaults.transferX, this.ctx.canvas.height/2 + m + Defaults.transferY, 30, 2);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    Top(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.transferX, this.ctx.canvas.height/2 + Defaults.transferY);
        this.ctx.lineTo(this.ctx.canvas.width/2 + Defaults.transferX, this.ctx.canvas.height/2 - this.ctx.canvas.height);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =2; m < this.ctx.canvas.width + Math.abs(Defaults.transferX + Defaults.transferY); m+=this.scalingHeight) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - 15 + Defaults.transferX, this.ctx.canvas.height/2 - m + Defaults.transferY, 30, 2);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    //Во всех направлениях линий
    AxisDirections (){
       this.Right();
       this.Left();
       this.Bottom();
       this.Top();
    }

}