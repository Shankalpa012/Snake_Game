// All the elements are stored here

//grabing the HTML canvas
const cvs= document.getElementById("snake");
//grabbing the canvas 2d Context.. other contextcan also be drawn
const ctx=cvs.getContext("2d");


//all the variables are here

let box =32;

//loading the images

const ground = new Image();
ground.src="img/ground.png";

const foodImg = new Image();
foodImg.src="img/food.png";

//creating a Snake

let snake=[];
snake[0]={
    x: 9 * box,
    y: 10*box
}

//creting food

let food={
    x: Math.floor(Math.random()*17+1)*box,
    y: Math.floor(Math.random()*15+3)*box
}

//score value

let score=0;
let bestScore=0;


//controlling the snake with arrows keys
document.addEventListener("keydown",direction);

// variable for direction
let d;

//function to check the keypressed
function direction(e){
    if(e.keyCode==37 && d !="RIGHT"){
      d="LEFT"  
    }else if(e.keyCode==38 && d !="DOWN" ){ 
        d="UP"
    }else if(e.keyCode==39 && d !="LEFT" ){ 
        d="RIGHT"
    }else if(e.keyCode==40 && d !="UP" ){ 
        d="DOWN"
    }
}

//all the fucntions are here

//function to draw objects on the canvas

function draw(){
    //drawing the Image unto the Canvas
     ctx.drawImage(ground,0,0);
     ctx.drawImage(foodImg,food.x,food.y);
 
     //drawing the  Snake into unto the canvas
     for(let i=0; i<snake.length; i++){
         //short for of if or else
           ctx.fillStyle = (i==0)? "green" : "white";
           ctx.fillRect(snake[i].x,snake[i].y,box,box);
           
           ctx.strokeStyle = "red";
           ctx.strokeRect(snake[i].x,snake[i].y,box,box);
     }
 
    //css for the score of the game
    ctx.fillStyle="white";
    ctx.font="45px Change one"; 
    ctx.fillText(score,2*box,1.6*box);

    //getting the old poistion of the snake head
    let snakeX=snake[0].x;
    let snakeY=snake[0].y;

    //if the snake eats the food

    if(snakeX==food.x && snakeY== food.y){
        //increase the score 
        score++
        //generate the food in rrandom location 
         food={
            x: Math.floor(Math.random()*17+1)*box,
            y: Math.floor(Math.random()*15+3)*box
        }

    }else{
        snake.pop()
    }

     //direction of the key pressed
     if(d == "LEFT") snakeX -=box;
     if(d == "UP") snakeY -=box;
     if(d == "RIGHT") snakeX +=box;
     if(d == "DOWN") snakeY +=box;

    //adding the new head to the snake
    let newHead= {
        x:snakeX,
        y:snakeY
    }

    let newScore=0;
    //detecting the collision of the snake
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box|| snakeY > 17* box|| collision(newHead, snake)){
           clearInterval(game);
           ctx.fillStyle="white";
           ctx.font="45px Change one"; 
           ctx.fillText("Game Over",4*box,1.6*box);
           if(score > bestScore){
            bestScore= score;
               
        }         
    }

    newScore=bestScore;   
 
    //collision with snake function

    function collision(Head, Array){
        for(let i= 0;i < Array.length; i++ ){
            if(Head.x==Array[i].x && Head.y ==Array[i].y){
                return true;
            }
        }
        return false;

    }

    ctx.fillStyle="white";
    ctx.font="45px Change one"; 
    ctx.fillText(newScore,6*box,1.6*box);

    

    //adding the top of the snake 
   snake.unshift(newHead);

    

}





let game=setInterval(draw, 100);

