class Snake{
    canvas = document.getElementById('canvas');
    context2D = canvas.getContext('2d');
    gamePause = true;
    snakeTab = [];
    snakeLength = 5;
    partSize = 10;
    dx = 0;
    dy = 0;

    init(){
        document.addEventListener('keydown', this.press.bind(this));
        this.makeSnake();
        const snake = this

        setInterval(() => {
            this.clearSnake();
            this.drawSnake();
            if(!this.gamePause) this.moveSnake();
        }, 100);
    }

    makeSnake(){
        this.context2D.fillStyle = 'blue';
        for(let i=0; i<this.snakeLength; i++){
            let x = this.canvas.width/2 + i * this.partSize;
            let y = this.canvas.height/2;
            this.snakeTab.push( {x: x, y: y} );
        }
    }

    drawSnake(){
        this.snakeTab.forEach( el => {
            this.context2D.strokeStyle = 'red';
            this.context2D.lineWidth = 2;
            this.context2D.lineJoin = 'bevel';
            this.context2D.strokeRect(el.x, el.y, this.partSize, this.partSize);
        })
    }

    press(e){
        if(this.gamePause) this.gamePause = false;
        switch(e.keyCode){
            case 87:
                this.dx = 0;
                this.dy = -10;
                break;
        }
    }

    moveSnake(){
        let headX = this.snakeTab[0].x + this.dx;
        let headY = this.snakeTab[0].y + this.dy;
        this.snakeTab.unshift( {x: headX, y: headY} );
        this.snakeTab.pop()
    }

    clearSnake(){
        this.context2D.fillStyle = 'greenyellow';
        this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const snake = new Snake();
snake.init();
