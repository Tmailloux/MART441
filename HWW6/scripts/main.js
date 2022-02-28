var imageIDs = ["image1", "image2", "image3" , "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankimagePath = "images/blanksquare.png";
var imageReveal = new Array();
var firstChoice = -1;
var secondChoice = -1;
var score = 0;
var allfound = 0;
var player = {"firstname":"", "lastname":"", "age":0, "score":0}

function revealImages()
{
    randomizeImages();

    for(var i = 0; i < imageIDs.length; i++){
        document.getElementById(imageIDs[i]).src = blankimagePath;
    }
}

function randomizeImages(){
    var actualimagePath = ["images/circleimg.png", "images/hexagonimg.png", "images/rhombusimg.png", "images/squareimg.png", "images/triangleimg.png"];
    var count = [0,0,0,0,0];

    while(imageReveal.length < 10){
        var randomNumber = Math.floor(Math.random() * actualimagePath.length)

        if(count[randomNumber] < 2){
            imageReveal.push(actualimagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function changeImage(number){

    if(firstChoice >= 0){
        secondChoice = number
        document.getElementById(imageIDs[number]).src= imageReveal[secondChoice];
    }

    else if(firstChoice < 0){
        firstChoice = number;
        document.getElementById(imageIDs[number]).src= imageReveal[firstChoice];
    }

    if(imageReveal[secondChoice] != imageReveal[firstChoice] && firstChoice >= 0 && secondChoice >= 0){
        score++;
        setTimeout(imagesDisappear, 1000);
    }

    else if(imageReveal[secondChoice] == imageReveal[firstChoice] && firstChoice >= 0 && secondChoice >= 0){
        score++;
        allfound++;

        firstChoice = -1;
        secondChoice = -1;
        if(allfound == imageReveal.length/2){
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end.html"
        }
    }
    
}

function imagesDisappear()
{

    console.log(firstChoice);
    document.getElementById(imageIDs[firstChoice]).src = blankimagePath;
    document.getElementById(imageIDs[secondChoice]).src = blankimagePath;
    firstChoice = -1;
    secondChoice = -1;
}

function addInfo(){
    var firstname = document.getElementById("txtFirstName").value;
    var lastname = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstname;
    player.lastname = lastname;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function playerInfo(){
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + player.lastname + "<br>" + "Age: " + player.age + "<br>" + "Score: " + player.score;
    if (document.getElementById("endInformation") != null){
        document.getElementById("endInformation").innerHTML = str;
    }
}