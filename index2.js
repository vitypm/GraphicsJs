import Coordinate from './index3.js';
import {Defaults} from './defaults.js';

/*
class прослойка, нужна для того чтобы можно было вызвать в основном скрипте

 */

export default  class Graphics {
    constructor(id, art = '2d')
    {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext
        (
            art,
            {
                alpha: true,
                antialias:true
            }
        );
        this.Grid = new Coordinate.Grid(this.ctx,60,60,2);
        this.Polar = new Coordinate.Polar(this.ctx,60,60,2);
        this.Line = new Coordinate.Line(this.ctx,60,60,2);
        this.Label = new Coordinate.Label(this.ctx,60,60,2);
        this.Graph = new Coordinate.Graph(this.ctx);
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
        this.Graph = new Coordinate.Graph(this.ctx);

    }

    grid(par = 0){




        this.ctx.imageSmoothingQuality = "high"
      this.Grid.centerGrid();
    //    this.Polar.draw();
       this.Line.AxisDirections();
       this.Label.AxisLabel();

    //    this.Graph.draw();
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