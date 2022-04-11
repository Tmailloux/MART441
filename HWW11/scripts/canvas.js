var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var coin1, coin2;
var direction;
var questions;
var coinArray = [];
var squareArray = [];
var lives = 3;
var points = 0;
var player;


$(document).ready(function(){

    
    setup();  
    getCoins();
    
    $(this).keypress(function(event){
        getKey(event);
        
    });

});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    player = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
    
}

function getCoins(){

    coin1 = new Coin(150, 400, 25, 25, "#FFD700");

    $.getJSON("data/coins.json", function(data){
        for(var i = 0; i < data.coins.length; i++)
        {
            coinArray.push(new Coin(data.coins[i].x, data.coins[i].y, data.coins[i].h ,data.coins[i].h, data.coins[i].color));
        }
        
    });
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(player,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(player,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }

    var coinCheck = hasCollided(player, coinArray[0]);
    var noCoin = false;

    for(var i = 0; i < coinArray.length; i++){

        noCoin = hasCollided(player, coinArray[i]);
        if(noCoin == true){
            break;
        }
    }

    if(coinCheck || noCoin){
        points++;
        document.getElementById(coinArray[i]).style.display = "none";

    }
    
    drawSquare(); 
    
}

function moveUp()
{
    player.y-=10;
    //player.setY(y);
}
function moveDown()
{
    player.y+=10;
    //player.setY(y);
}
function moveRight()
{
    player.x+=10;
    //player.setX(x);

}
function moveLeft()
{
    player.x-=10;
    //player.setX(x);
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = player.mainColor;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50); 
    
    ctx.fillStyle = coin1.mainColor;
    ctx.fillRect(coin1.x, coin1.y, coin1.width, coin1.height);
    

    for(var i = 0; i < coinArray.length; i++){
        ctx.fillStyle = coinArray[i].mainColor;
        ctx.fillRect(coinArray[i].x, coinArray[i].y, coinArray[i].width, coinArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Points: " + points, 125, 50);

}


function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}