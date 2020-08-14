import Coordinate from './index3.js';
import {Defaults} from './defaults.js';

/*
class прослойка, нужна для того чтобы можно было вызвать в основном скрипте

 */

export default  class Graphics {
    constructor(id, art = '2d')
    {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext(art);
        this.Grid = new Coordinate.Grid(this.ctx,60,60,2);


        this.Polar = new Coordinate.Polar(this.ctx,60,60,2);
        this.Line = new Coordinate.Line(this.ctx,60,60,2);
        this.Label = new Coordinate.Label(this.ctx,60,60,2);
    }
    //Масштабирование
    scaling()
    {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.Grid = new Coordinate.Grid(this.ctx, 60, 60, 2);


        this.Polar = new Coordinate.Polar(this.ctx,60,60,2);
        this.Line = new Coordinate.Line(this.ctx,60,60,2);
        this.Label = new Coordinate.Label(this.ctx,60,60,2);
      //  console.log(this);



       // console.log(this.ctx.canvas.getBoundingClientRect());
        /*
        onmousedown = function (e) {
            move(e);
            function move(e) {
              let x =  e.offsetX -  e.composedPath()[0].width/2;
              let y = e.offsetY - e.composedPath()[0].height/2;
               // let x = e.offsetX - this.canvas.width/2;
               // let y = e.offsetY - this.canvas.height/2;
                console.log(x);
                Defaults.Grid.transferX = x;
                Defaults.Grid.transferY = y;
            }

            onmousemove = function(e)
            {
                move(e);

            };

           onmouseup = function()
            {
                onmousemove = null;
                onmouseup = null;
            };

        }
        ondragstart = function()
        {
            return false;
        };
        */

     //   let centerX = this.ctx.canvas.width / 2;
    //    let centerY = this.ctx.canvas.height / 2;

      //  let elem = document.elementFromPoint(centerX, centerY);


    //    elem.onmousedown = function (e) {
      //    let x = e.clientX ;
    //     let   y = e.clientY ;
            //  let centerX =  e.composedPath()[0].width/2;
      //  let centerY = e.composedPath()[0].height/2;

        //    e.resetTransform()



      //     console.log(e);
     //   }

    }

    grid(par = 0){



      //  this.Grid.centerGrid();
        this.Polar.draw();
        this.Line.allDirections();
        this.Label.AxisLabel();
    }

    get Width(){
        return this.canvas.width;
    }

    get Height(){
        return this.canvas.height;
    }

    set Height(h){
        this.canvas.height = h;
    }

    set Width(w){
        this.canvas.width = w;
    }



}