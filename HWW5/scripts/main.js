var imageIDs = ["image1", "image2", "image3" , "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankimagePath = "images/blanksquare.png";
var imageReveal = new Array();

function revealImages()
{
    randomizeImages();

    for(var i = 0; i < imageIDs.length; i++){
        document.getElementById(imageIDs[i]).src = blankimagePath;
    }
}

function randomizeImages(){
    var actualimagePath = ["images/circleimg.png", "images/hexagonimg.png", "images/rhombusimg.png", "images/squareimg.png", "images/triangleimg.png"];
    var count = [0,0];

    while(imageReveal.length < 10){
        var randomNumber = Math.floor(Math.random() * actualimagePath.length)

        if(count[randomNumber] < 2){
            imageReveal.push(actualimagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function changeImage(number){
    document.getElementById(imageIDs[number]).src= imageReveal[number];
}