let windowCenter = window.innerWidth/2;

//Create Board
let board;
let boardWidth = 500;
let boardHeight = 500;
let canvas;
let score;
let scoreboard;

//Create Gamemodes
let easy = {
    rows: 3,
    columns: 3
}

//Create Player
let playerWidth = 80;
let playerHeight = 10;

let player = {
    x : boardWidth/2 - playerWidth/2,
    y: boardHeight - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
}

//Create the ball

let ballRadius = 10;
let ballVelocity = 5;

let ball = {
    x : Math.floor(Math.random() * 201) + 200,
    y : player.y - 150,
    radius: ballRadius,
    Xvelocity: -1,
    Yvelocity: 1
}

//Create the obstacles
let obsWidth = 50;
let obsHeight = 10;

var obs = function(x,y)
{
    this.x = x,
    this.y = y,
    this.height = obsHeight,
    this.width = obsWidth,
    this.isAlive = true
}

let obstacles = [];
let tempX = 15
//Draw in the x POS
for(let i = 0; i < 7; i++)
{
    //Draw in the y POS
    let tempY = 20;
    for(let k = 0; k < 6;k++)
    {
        let tempObs = new obs(tempX,tempY);
        obstacles.push(tempObs)
        tempY += 30;
    }
    tempX = tempX + obsWidth + 20;
}

window.onload = function() {
    //Initialize board
    board = document.querySelector("#board");
    board.height = boardHeight;
    board.width = boardWidth;
    canvas = board.getContext("2d");
    score = 0;
    scoreboard = document.getElementById("Scoreboard");

    //Draw the board
    requestAnimationFrame(draw);

}

function draw() {
    //Initialize Board
    requestAnimationFrame(draw);
    canvas.clearRect(0,0,board.width,board.height);

    //Draw the player
    canvas.fillStyle = "green";
    canvas.fillRect(player.x, player.y,player.width,player.height);

    //Draw the Ball
    checkColision()
    ball.x += ball.Xvelocity;
    ball.y += ball.Yvelocity;
    canvas.fillStyle = "white";
    canvas.fillRect(ball.x, ball.y,ball.radius,ball.radius);

    //Draw the obstacles
    for(let i = 0; i < obstacles.length; i++)
    {
        if(obstacles[i].isAlive == true)
        {
            canvas.fillStyle = "purple";
            canvas.fillRect(obstacles[i].x, obstacles[i].y,obstacles[i].width,obstacles[i].height);
        }
    }
    
    
}

function checkColision() {
    //check if the ball hits the walls
    if(ball.x + ball.radius >= boardWidth || ball.x <= 0) { ball.Xvelocity *= -1; }

    //Check if ball hits the player
    BalltoPlayerCollision();

    //Check if ball hits the roof
    if(ball.y <= 0){ball.Yvelocity *= -1}

    //Check if ball hits an obstacle
    for(let i = 0;i < obstacles.length;i++)
    {

        if(BallstoObstacles(i) && BallsLeftorRight(i)) 
        {
            ball.Yvelocity *= -1
            obstacles[i].isAlive = false;
            score++;
        }
    }

    scoreboard.innerHTML = score;

}

function BalltoPlayerCollision()
{
    let LeftBall = ball.x;
    let RightBall = ball.x + ball.radius;
    let DownBall = ball.y + ball.radius;
    let LeftPlayer = player.x;
    let MidPlayer = player.x + player.width/2;
    let RightPlayer = player.x + player.width;
    let TopPlayer = player.y;
    


    //Move the ball to the left
    if(LeftBall >= LeftPlayer && LeftBall <= MidPlayer && DownBall == TopPlayer)
    {
        ball.Xvelocity = -1;
        ball.Yvelocity *= -1
    }

    else if(RightBall >= LeftPlayer && RightBall <= MidPlayer && DownBall == TopPlayer)
    {
        ball.Xvelocity = -1;
        ball.Yvelocity *= -1
    }

    //Move the ball to the right
    else if(LeftBall >= MidPlayer  && LeftBall <= RightPlayer && DownBall == TopPlayer)
    {
        ball.Xvelocity = 1;
        ball.Yvelocity *= -1
    }

    else if(RightBall >= MidPlayer  && RightBall <=  RightPlayer && DownBall == TopPlayer)
    {
        ball.Xvelocity = 1;
        ball.Yvelocity *= -1
    }

    
}

function BallsLeftorRight(i)
{
    if(obstacles[i].isAlive)
    {
        let LeftBall = ball.x;
        let RightBall = ball.x + ball.radius;
        // left side of the ball
       if(LeftBall >= obstacles[i].x && LeftBall <= (obstacles[i].x + obstacles[i].width)) 
        {
            ball.Xvelocity = 1
            return true;
        }

        //right side of the ball
        if(RightBall >= obstacles[i].x && RightBall <= (obstacles[i].x + obstacles[i].width)) 
        {
            ball.Xvelocity = -1
            return true;
        }
    }
        
}


function BallstoObstacles(i)
{
    if(obstacles[i].isAlive)
    {
        //Bottom Part of the obstacle
        if(ball.y == (obstacles[i].y + obstacles[i].height) ) 
            {return true;}

        //Top Part of the obstacle
        if((ball.y + ball.radius) == (obstacles[i].y))
            {return true;}

        //Sides of the obstacle
        if(ball.y <= (obstacles[i].y + obstacles[i].height) && ball.y >= obstacles.y) 
            {return true;}

        if((ball.y + ball.radius) <= (obstacles[i].y + obstacles[i].height) && (ball.y + ball.radius) >= obstacles[i].y) 
            {return true;}

    }
}


function movePlayer(e){
    //Get mouse pos
    let mouseX = e.clientX;

    //Update player x pos
    player.x = mouseX - (windowCenter - (boardWidth/2)) - player.width/2;
    if(player.x <= 0) { player.x = 0; }
    else if(player.x + player.width >= boardWidth) { player.x = boardWidth - player.width; }
}