

var wins = 0;
var losses = 0;
var score = 0;

var randomNumber = Math.floor(Math.random() * 101);
var Crystal1 = Math.floor(Math.random() * 11) + 1;
var Crystal2 = Math.floor(Math.random() * 11) + 1;
var Crystal3 = Math.floor(Math.random() * 11) + 1;
var Crystal4 = Math.floor(Math.random() * 11) + 1;


function newGame() 
{
    randomNumber = Math.floor(Math.random() * 101);
    Crystal1 = Math.floor(Math.random() * 11) + 1;
    Crystal2 = Math.floor(Math.random() * 11) + 1;
    Crystal3 = Math.floor(Math.random() * 11) + 1;
    Crystal4 = Math.floor(Math.random() * 11) + 1;
    score = 0;
    $("#randomNumberDisplay").text(randomNumber);
    $("#scoreDisplay").text(score);

}

function win() 
{
    wins ++;
	alert("You win! You've won " + wins + " times so far.  Keep up the good work!");
    $("#Wins").text(wins);
    resetValues();
	newGame();
}

function lose() 
{
    losses ++;
    alert("You lose!  You've lost " + losses + " times so far.  What's wrong with you?");
    $("#lossesDisplay").text(losses);
    resetValues();
	newGame();
}
function resetValues()
{
    $("#crystal1ValueDisplay").text(" "); 
    $("#crystal2ValueDisplay").text(" "); 
    $("#crystal3ValueDisplay").text(" "); 
    $("#crystal4ValueDisplay").text(" "); 
}

function DisplayAlert() 
{
    var newParagraph = "\r\n"
    var paragraph = "You will be given a random number at the start of the game.."
    paragraph += newParagraph;
    paragraph += " ";
    paragraph += newParagraph;
    paragraph += "There are 4 Crystals below.  By clicking on a Crystal you will add a specific amount of points to your Total Score.";
    paragraph += newParagraph;
    paragraph += " ";
    paragraph += newParagraph;
    paragraph += "You win the game by matching Total Score to Random Number, you lose the game if your Total Score goes above the Random Number.";
    paragraph += newParagraph;
    paragraph += " ";
    paragraph += newParagraph;
    paragraph += "The value of each crystal is hidden from you until you click on it.  Each time when the game starts, the game will change the value of each crystal.";
    alert(paragraph);
 }

$("#Crystal1").on ('click', function()
{
    score = score + Crystal1;
    // console.log("This is Crystal1");
    
    $("#scoreDisplay").text(score); 
    $("#crystal1ValueDisplay").text(Crystal1);

          
        if (score == randomNumber)
        {
          win();
        }
        else if (score >= randomNumber)
        {
          lose();
        }   
});  

$("#Crystal2").on ('click', function()
{
    score = score + Crystal2;
    // console.log("This is Crystal2");
    
    $("#scoreDisplay").text(score);
    $("#crystal2ValueDisplay").text(Crystal2); 
         
        if (score == randomNumber)
        {
          win();
        }
        else if (score >= randomNumber)
        {
          lose();
        }   
});  

$("#Crystal3").on ('click', function()
{
    score = score + Crystal3;
    // console.log("This is Crystal3");
    
    $("#scoreDisplay").text(score); 
    $("#crystal3ValueDisplay").text(Crystal3);
          
        if (score == randomNumber)
        {
          win();
        }
        else if (score >= randomNumber)
        {
          lose();
        }   
});  

$("#Crystal4").on ('click', function()
{
    score = score + Crystal4;
    // console.log(score);
    
    $("#scoreDisplay").text(score); 
    $("#crystal4ValueDisplay").text(Crystal4);
         
        if (score == randomNumber)
        {
          win();
        }
        else if (score >= randomNumber)
        {
          lose();
        }   
});  

$("#gameInstructions").on ('click', function()
{    
    DisplayAlert(); 
});  

$("#winCounter").html(wins);
$("#lossCounter").html(losses);
$("#scoreDisplay").text(score);
$("#randomNumberDisplay").text(randomNumber);
// console.log("randomNumber = " + randomNumber);
// console.log("Losses = " + losses);
// console.log("Score = " + score);