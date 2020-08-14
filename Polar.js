import {Defaults} from './defaults.js';

export default class polar {
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
    }
    draw() {
        let centerX = this.ctx.canvas.width/2 + Defaults.Grid.transferX; //Высчитываем середину
        let centerY = this.ctx.canvas.height/2 + Defaults.Grid.transferY; //Высчитываем середину

        //Статика
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#25a794";
        this.ctx.lineWidth = 3;

        //Линий на 360 градусов
        for(let radius=0; radius <= 360; radius+=30) {
            this.ctx.moveTo(centerX,centerY );
            this.ctx.lineTo
            (
                 centerX  + this.ctx.canvas.width *  Math.cos(Math.PI/2 - radius*(Math.PI/180)),
                 centerY  + this.ctx.canvas.width *  Math.sin(Math.PI/2 - radius*(Math.PI/180))
            );
        }
        this.ctx.stroke();
        this.ctx.closePath();

        //текст
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#040ca5";
        this.ctx.font = '20px serif';
        this.ctx.lineWidth = 1;
        for(let radius=0; radius < 360; radius+=30) {

            this.ctx.moveTo(centerX , centerY );
            this.ctx.strokeText
            (
                radius,
                centerX  + 400 * Math.cos(Math.PI*2 + radius*(Math.PI/180) ) + 20,
                centerY  - 400 * Math.sin(Math.PI*2 + radius*(Math.PI/180) ) - 10
            );
        }
        this.ctx.stroke();
        this.ctx.closePath();



        //Рисуем окружности
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#25a794";
        this.ctx.lineWidth = 3;
        this.ctx.ellipse(centerX , centerY , this.scalingWidth, this.scalingHeight, 0, 0, getRadians(360));
        //countCell - каждые указанную клетку делаем отступ
        for (let countCell = 0; countCell < this.ctx.canvas.width/5  ; countCell += 5)
        {
            this.ctx.ellipse
            (
                centerX ,
                centerY ,
                this.scalingWidth * countCell ,
                this.scalingHeight * countCell,
                0,
                0,
                getRadians(360)
            );
        }
        function getRadians(degrees) {
            return (Math.PI / 180) * degrees;
        }

        this.ctx.stroke();
        this.ctx.closePath();
    }
}