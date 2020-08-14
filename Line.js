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
            this.scalingWidth = scalingWidth;
            this.scalingHeight = scalingHeight;
        }
    }

    Right(width){
        this.ctx.beginPath(); //Создаем новый путь
        this.ctx.strokeStyle = "#9017db"; //Цвет
        this.ctx.lineWidth = 3; //Размер
        this.ctx.moveTo(this.ctx.canvas.width/2 - Math.abs(Defaults.Grid.transferX),this.ctx.canvas.height/2 + Defaults.Grid.transferY); //С какой точки начать
        this.ctx.lineTo(this.ctx.canvas.width/2 + this.ctx.canvas.width + Math.abs(Defaults.Grid.transferX),this.ctx.canvas.height/2 + Defaults.Grid.transferY); //Куда двигаться
        this.ctx.closePath(); //Закрываем путь
        this.ctx.stroke();//Рисуем
    }

    Left(width){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.Grid.transferX,this.ctx.canvas.height/2 + Defaults.Grid.transferY);
        this.ctx.lineTo(-this.ctx.canvas.width,this.ctx.canvas.height/2 + Defaults.Grid.transferY);
        this.ctx.closePath();
        this.ctx.stroke();


        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =60; m < this.ctx.canvas.width + Defaults.Grid.transferX + Defaults.Grid.transferY; m+=60) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - m + Defaults.Grid.transferX, this.ctx.canvas.height/2 - 15 + Defaults.Grid.transferY, 2, 30);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    //ОСИ Y
    Bottom(height){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.Grid.transferX, this.ctx.canvas.height/2 + Defaults.Grid.transferY);
        this.ctx.lineTo(this.ctx.canvas.width/2 + Defaults.Grid.transferX, this.ctx.canvas.height/2 + this.ctx.canvas.height - Defaults.Grid.transferY);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =60; m < this.ctx.canvas.width + Defaults.Grid.transferX + Defaults.Grid.transferY; m+=60) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - 15 + Defaults.Grid.transferX, this.ctx.canvas.height/2 + m + Defaults.Grid.transferY, 30, 2);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    Top(height){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.ctx.canvas.width/2 + Defaults.Grid.transferX, this.ctx.canvas.height/2 + Defaults.Grid.transferY);
        this.ctx.lineTo(this.ctx.canvas.width/2 + Defaults.Grid.transferX, this.ctx.canvas.height/2 - this.ctx.canvas.height);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "#9017db";
        this.ctx.lineWidth = 3;
        for (let m =60; m < this.ctx.canvas.width + Defaults.Grid.transferX + Defaults.Grid.transferY; m+=60) {
            this.ctx.fillRect(this.ctx.canvas.width/2 - 15 + Defaults.Grid.transferX, this.ctx.canvas.height/2 - m + Defaults.Grid.transferY, 30, 2);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    //Во всех направлениях линий
    allDirections (width,height){
       this.Right();
       this.Left();
       this.Bottom();
       this.Top();
    }

}