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


//all the fucntions are here

//function to draw objects on the canvas

function draw(){
    //drawing the Image unto the Canvas
    ctx.drawImage(ground,0,0);
    ctx.drawImage(foodImg,food.x,food.y);
}


let game=setInterval(draw, 100);

