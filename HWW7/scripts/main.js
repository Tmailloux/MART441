var myViewFinderArray = new Array();
var myImage = document.getElementById("myImage");


class ViewFinder
{
    
    constructor(title, description, imagePath, author, year)
    {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        let str;
        str = this.title + ", " + this.author + "," + " " + this.year + "<br>" + this.description; 
        return str;
    }

    get theTitle(){
        return this.title;
    }

    set theTitle(title){
        this.title = title;
    }

    get theAuthor(){
        return this.author;
    }

    set theAuthor(author){
        this.author = author;
    }

    get theYear(){
        return this.year;
    }

    set theYear(year){
        this.author = year;
    }

    get theDescription(){
        return this.description;
    }

    set theDescription(description){
        this.author = description;
    }

    get theImagePath(){
        return this.imagePath;
    }

    set theImagePath(imagePath){
        this.imagePath = imagePath;
    }
}


function initializeArray()
{
    
    var myViewFinder = new ViewFinder(" BLM Protest","A group of Black Lives Matter protesters gathered at the Washington monument.","images/BLMPhoto.jpeg", "Drew Angerer", "2020" );

    var myViewFinder1 = new ViewFinder("Family Detention Protest", "A group of Japanese Internment Camp survivors protest child detention in Dilley, Texas.", "images/FamilyDetentionProtest.jpeg", "Martha Nakawaga", "2019");

    var myViewFinder2 = new ViewFinder("Department Store - Mobile, Alabama", "Mother and daughter stand outside a segregated department store.", "images/GordonParksPhoto.jpeg", "Gordon Parks", "1956");

    var myViewFinder3 = new ViewFinder("March On Washinton", "Large group gathers at Washington Monument to protest against social injustice.", "images/MarchOnWashington.webp", "Simbarashe Cha", "2020");

    var myViewFinder4 = new ViewFinder("Womens Suffrage", "A group of women picketing at the White House gate.", "images/WomensSuffrage.jpeg", "Unknown", "1917");
    
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);


}

function accessInformation()
{

    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("myImage").src = myViewFinderArray[randomNumber].imagePath;

}
