console.log('This is connected and working');



function runGreetingTwo(message, target){

//Still use our prompts 
var hourNow = prompt(message).toLowerCase;

//Declare a variable called greeting
var greeting;

//If else logic to determine what the greeting should be. 
if(hourNow > 18 && hourNow < 24){
        greeting = 'Go to Bed ' + target;
    } else if(hourNow >12 && hourNow < 18) {
        greeting = 'Good day sir. ' + target;
    } else if( hourNow >= 0 && hourNow < 24){
        greeting = 'Go to work, and Good Morning. ' + target;
    } else {
        greeting = 'wait, you didnt give me the right response. Who knows what time it is?'
    }

    
    //console log greeting
    console.log('Our Response', greeting);
    document.write(greeting);
}

runGreetingTwo('What time is it?', 'everyone!');










// // Create a Function to run the greeting if else statements. 
// function runGreeting() {

//     var hourNow = prompt('What time is it? 0-23');
//     var greeting;
//     if(hourNow > 18 && hourNow < 24){
//         greeting = 'Go to Bed';
//     } else if(hourNow >12 && hourNow < 18) {
//         greeting = 'Good day sir.';
//     } else if( hourNow >= 0 && hourNow < 24){
//         greeting = 'Go to work, and Good Morning.';
//     } else {
//         greeting = 'wait, you didnt give me the right response. Who knows what time it is?'
//     }
// //return the response to the console using an identifier for our log.
//     console.log('Our Prompt Response.', greeting);
// //write the greeting to the document and make it an <h2>

//     document.write('<h2>' + greeting + '</h2>');
    


// }



// //Invoke the function by calling it. 

// runGreeting();



// This is function expression 

var makeSandwich = function(bread, meat, cheese){
    var bread = prompt("What type of bread?");
    var meat =  prompt("What type of meat?");
    var cheese = prompt("What type of cheese?");


    return "Here is a sandwich on " + bread + ", containing " + meat + " and " + cheese;

}

//var lunchTimeSandwich = makeSandwich("Rye", "Turkey", "Swiss");

//console.log(lunchTimeSandwich);

//makeSandwich();

