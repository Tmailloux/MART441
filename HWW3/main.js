function chooseFunction(choice){

    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var myImage = document.getElementById("myImage");
    


    if (choice == 1 && answer1 == "Left.") {
        document.getElementById("myImage").src = "Images/DeadEnd1.png"
        document.getElementById("path").innerHTML = "You are at a dead end."
        document.getElementById("choice1").innerHTML = "Go Back."
        document.getElementById("choice2").innerHTML = "Give Up."
    }

    else if (choice == 2 && answer2 == "Right.") {
        document.getElementById("myImage").src = "Images/DoorWay1.png"
        document.getElementById("path").innerHTML = "You now are at a door."
        document.getElementById("choice1").innerHTML = "Open the door."
        document.getElementById("choice2").innerHTML = "Go Back."
    }

    else if(choice == 1 && answer1 == "Go Back.") {
        document.getElementById("myImage").src = "Images/Hallway1.png"
        document.getElementById("path").innerHTML = "You are in a dark hallway. You can only go left or right."
        document.getElementById("choice1").innerHTML = "Left."
        document.getElementById("choice2").innerHTML = "Right."

    }
    else if (choice == 2 && answer2 == "Give Up.") {
        document.getElementById("myImage").src = "Images/DeadEnd1.png"
        document.getElementById("path").innerHTML = "<h1>Game Over.<h1>"
        document.getElementById("choice1").innerHTML = null
        document.getElementById("choice2").innerHTML = null
        }

    else if(choice == 1 && answer1 == "Open the door.") {
        document.getElementById("myImage").src = "Images/Freedom.png"
        document.getElementById("path").innerHTML = "<h1>You Win! You are free to go.<h1>"
        document.getElementById("choice1").innerHTML = null
        document.getElementById("choice2").innerHTML =  null

        }

    else if(choice == 2 && answer2 == "Go Back.") {
        document.getElementById("myImage").src = "Images/Hallway1.png"
        document.getElementById("path").innerHTML = "You are in a dark hallway. You can only go left or right."
        document.getElementById("choice1").innerHTML = "Left."
        document.getElementById("choice2").innerHTML = "Right."
    }

    

   
    }
    

