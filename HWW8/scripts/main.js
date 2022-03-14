var myViewFinderArray = new Array();
var allShapes = "#shape";
var myImage = document.getElementById("myImage");
var description = document.getElementById("description")
var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

class ShapeInfo{

    constructor(selector, imagePath, description){
        this.selector = selector;
        this.imagePath = imagePath;
        this.description = description;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    get theDescription(){
        return this.description;
    }

    toString(){
        let str;
        str = this.description;
        return str;
    }
}

function initializeArray(){

   
    var shape1 = new ShapeInfo("#shape", "images/circleimg.png", "Circle")
    var shape2 = new ShapeInfo("#shape", "images/rhombusimg.png", "Rhombus")
    var shape3 = new ShapeInfo("#shape", "images/squareimg.png", "Square")
    var shape4 = new ShapeInfo("#shape", "images/triangleimg.png", "Triangle")

    
    myViewFinderArray.push(shape1);
    myViewFinderArray.push(shape2);
    myViewFinderArray.push(shape3);
    myViewFinderArray.push(shape4);
}

function accessInformation()
{

    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("myImage").src = myViewFinderArray[randomNumber].theImagePath;
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString();

}


$(document).ready(function(){
    initializeArray();

    console.log(myViewFinderArray.length);

    $("button").click(function(){
        
        accessInformation();
        moveShape();
        $(myViewFinderArray[0].selector).attr("src", myViewFinderArray[randomNumber].theImagePath);
        $("#shape").fadeOut();
        
    });
});


function moveShape(){
    $("#moveShape").animate({left:235}).fadeToggle().animate({left:10}).fadeToggle();
    
}

