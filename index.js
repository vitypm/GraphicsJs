



/*
// Указываем элемент для 2D рисования


 */




class Graphics {
        constructor(id, art = '2d') {
            this.canvas = document.getElementById(id);
            this.ctx = this.canvas.getContext(art);
        }


        /*
            get
         */
        width()
        {
            return this.canvas.clientWidth;
        }
        height()
        {
          return this.canvas.clientHeight;
        }

        //Выставить ширину и высоту под окно браузера
        m(){
            //При загрузки окна
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;

            //Считываем данные при изменение экрана

        }

        draw() {


        }

        start() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }



        mathFUnc(w,h) {

            let x,y,tempX,tempY;
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/2 ,  this.canvas.height/2 );
            console.log(this.canvas.width);
            this.ctx.strokeStyle = "#b734c4";
            this.ctx.lineWidth = 2; //Размер

            for (let t = 0; t < 130; t += 0.01) {
                x = 3 * Math.tan(t) / (1 + Math.pow(Math.tan(t), 3)); //t * Math.sin(t);
                y = 3 * Math.pow(Math.tan(t), 2) / (1 + Math.pow(Math.tan(t), 3)); //-t * Math.cos(t);
                tempX = x;
                tempY = y;
                x = 2 + (100) * (tempX * Math.cos(120) - tempY * Math.sin(120)) //rotate X
                y = 2 + (100) * (tempX * Math.sin(120) + tempY * Math.cos(120)) //rotate Y
                this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
            this.ctx.closePath();

        }


    }

