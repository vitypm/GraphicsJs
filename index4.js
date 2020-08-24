import {Defaults} from './defaults.js';
import Graphicss from './index2.js';


function GraficsG(canvas)
{
    let graf = new Graphicss(canvas);
    let movex;
    let movey;
    let mouseIsDown = false;
    function update()
    {
        graf.scaling();
        graf.grid();
        graf.line();
        graf.label();
        graf.graf();
    }
    //События клика
    graf.canvas.onmousedown = function (event)
    {
        graf.canvas.style.cursor = "default";
        movex = event.x - graf.canvas.width/2; //позиция захвата
        movey = event.y - graf.canvas.height/2; //позиция захвата
        update();
        mouseIsDown = true;
    }
    graf.canvas.onmouseup = function(event)
    {

        graf.canvas.style.cursor = "default";
        movex = event.x - graf.canvas.width/2; //позиция захвата
        movey = event.y - graf.canvas.height/2;
        update();
        mouseIsDown = false;
    }
    //Собитие движения
    graf.canvas.onmousemove = function(event)
    {
        if(!mouseIsDown) return 0;
        graf.canvas.style.cursor = "move";
        let x = event.x - graf.canvas.width/2;  // позиция мыши
        let y = event.y - graf.canvas.height/2;  // позиция мыши
        let posX = (x - movex) / 15;
        let posY = (y - movey) / 15;
        Defaults.transferX +=  posX;
        Defaults.transferY +=  posY;
        update();
    }
    //Собитие выхода машки за canvas
    graf.canvas.onmouseout = function (event)
    {
        graf.canvas.style.cursor = "default";
        update();
        mouseIsDown = false;
    }
    //Зумируем
    graf.canvas.onwheel = function (event)
    {
        console.log(event)
    }
    window.onload = update;
    window.onresize = update;
}

export default GraficsG;
