// Brent Levan
// Project 2
// SDI 1308
// functions, arguments, and returns

var gameName = "Too Fast Too Furious";
var startButton = "start";
var selectButton = "select";
var numberOfPlayers = 3;

console.log("You are playing " + gameName + ".");
console.log("To begin, press the " + startButton + " button.");
console.log("To change the settings, select the " + selectButton + " button.");

var firstChoice = function(start, select) {
    
    var choice1 = start;
    var choice2 = select;
    
    if (choice1 === true) {
        console.log("Please select number of players.");
       
       if (choice2 === true) {
            console.log("Please select the option you wish to change."); 
        
        }; 
        
    } else {
        
        console.log("Please make a selection.");
        
    };
    
    
};
    firstChoice(true,false);
    
;

console.log("You have chosen " + numberOfPlayers + " players.");
console.log("You need two more players to join for you selection.");


var morePlayers = function(totalPlayers) {
    
    while (totalPlayers >1) {
        console.log ("Player " + totalPlayers +" has joined the game.");
        
         totalNumber = totalPlayers --;
    };

        console.log ("You now have " + numberOfPlayers + " players.");
    
        return totalNumber;
    
    };


     morePlayers(numberOfPlayers);

;

console.log("Please select game type.");

var chooseType = function(gameType,gameTime) {
    
    var multiPlay = gameType;
    var setTime = gameTime;
    
    console.log(multiPlay + setTime );
    
    return multiPlay,setTime;
    };    

    chooseType("You have chosen street race.", "The time you chose is 5 minutes.");
    
;    

var raceResults = function(playerTag, lap1, lap2, lap3) {
    
    for (var i=0, a=3; i<a; i++) {
        
        console.log(playerTag[i] + "Your combined time was " + (lap1[i] + lap2[i] + lap3[i] ) + " seconds.");
        
    };
    
    return raceResults;
    
    };

    var totalResults = raceResults(["Levan5 ", "NukeLifeWife ", "WaffleMan37"],[96,99,101],
                                                                               [93,96,98],
                                                                               [92,92,94]);
    
;

var endOfGame = function(continueOn,endGame) {
    
    var newGame = continueOn;
    var exitToMain = endGame;
    
    if (newGame === true && exitToMain === false ) {
        console.log("You have selected to start a new game, please select game type.");
    } else {
        console.log("Are you sure you want to exit to the main screen?");
    };
    
    return endOfGame;
    
    };

    endOfGame(true,false);
    
;    