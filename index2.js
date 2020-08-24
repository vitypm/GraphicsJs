import Coordinate from './index3.js';
import {Defaults} from './defaults.js';

/*
class прослойка, нужна для того чтобы можно было вызвать в основном скрипте

 */

class Graphicss {
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
        this.Grid = new Coordinate.Grid(this.ctx,80,80,2);
        this.Polar = new Coordinate.Polar(this.ctx,80,80,2);
        this.Line = new Coordinate.Line(this.ctx,80,80,2);
        this.Label = new Coordinate.Label(this.ctx,80,80,2);
        this.Graph = new Coordinate.Graph(this.ctx);
        this.Animate = new Coordinate.Animate(this.ctx);
    }
    //Масштабирование
    scaling()
    {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.Grid = new Coordinate.Grid(this.ctx, 80, 80, 2);
        this.Polar = new Coordinate.Polar(this.ctx,80,80,2);
        this.Line = new Coordinate.Line(this.ctx,80,80,2);
        this.Label = new Coordinate.Label(this.ctx,80,80,2);
        this.Graph = new Coordinate.Graph(this.ctx);
        this.Animate = new Coordinate.Animate(this.ctx)
    }

    grid(par = 0){
      //  this.ctx.imageSmoothingQuality = "high"
        this.Grid.centerGrid();
    }

    line(){
        this.Line.AxisDirections();
    }
    label(){
        this.Label.AxisLabel();
    }
    graf(){
        this.Graph.draw();
    }
    polar(){
        this.Polar.draw();
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

export default Graphicss;