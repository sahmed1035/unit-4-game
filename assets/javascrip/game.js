//assigned computerNumPick variables to random number
var computerNumPick= Math.floor(Math.random()* 101)+19;

//assigned all four crsytal variables to random numbers

var sapphire = Math.floor(Math.random()*12)+1; 
//random number from 1 to 12
var emerald = Math.floor(Math.random()*12)+1; 
var amethyst = Math.floor(Math.random()*12)+1; 
var ruby = Math.floor(Math.random()*12)+1; 
       
//set total user score variable to 0 
var userTotalScore = 0; 

//set wins and losses variables to 0
var wins = 0;  
// going forward it will increment based off of the checkForWinsOrLosses method.
var losses = 0; 



$(document).ready(function(){


function initial()
{
    $("#random-area").html(computerNumPick);
 
}
function resetGame()
{
   //reset computerNumPick to new random picks
    computerNumPick= Math.floor(Math.random()* 101)+19;

   //reset all crystal variables to new random pick
    sapphire = Math.floor(Math.random()*12)+1;
    //random number from 1 to 12
    emerald = Math.floor(Math.random()*12)+1; 
    amethyst = Math.floor(Math.random()*12)+1;
    ruby = Math.floor(Math.random()*12)+1; 

   //Total user  is zero
   userTotalScore = 0; 
   playGame();
   $("#random-area").html(computerNumPick);
   $("#score-area").html("");
   
  
}

function checkForWinsOrLosses()   {
    if(userTotalScore === computerNumPick) {
        //increment wins by 1.
        wins++;
         //win-area div display You're a winner!
         $("#win-area").html( "You're a winner!"+ "<br> Wins:" + wins); 
        
        resetGame();
    }
    else if (userTotalScore > computerNumPick) {
        //increment losses by 1.
        losses++;
        //win-area div display You're a winner!
        $("#win-area").html( "You're a Loser!" + "<br> Losses:" +losses);  
       
        resetGame();
    
            }
 
        }



function playGame(){

   
 /////////////////user's click on sapphire/////////////////
    $("#sapphire").on("click",function(){
        //global variable sapphire value added to the userTotalScore
        userTotalScore += sapphire;
        //score-title div to display userTotalScore
        $("#score-area").html(userTotalScore);
        checkForWinsOrLosses();
        });

 /////////////////user's click on emerald/////////////////
 $("#emerald").on("click",function(){
    //global variable emerald value added to the userTotalScore
    userTotalScore += emerald;
    //score-title div to display userTotalScore
    $("#score-area").html(userTotalScore);
    checkForWinsOrLosses();
    });

/////////////////user's click on amethyst/////////////////
$("#amethyst").on("click",function(){
    //global variable amethyst value added to the userTotalScore
    userTotalScore += amethyst;
    //score-title div to display userTotalScore
    $("#score-area").html(userTotalScore);  
    checkForWinsOrLosses();
    });


/////////////////user's click on ruby/////////////////
  $("#ruby").on("click",function(){
    //global variable ruby value added to the userTotalScore
    userTotalScore += ruby;
    //score-title div to display userTotalScore
    $("#score-area").html(userTotalScore);  
    checkForWinsOrLosses() 
    
    });


 }

    
initial();

playGame();



});

































