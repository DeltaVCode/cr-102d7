console.log('This is connected and working');



var hourNow = prompt('What time is it? 0-23');
var greeting;
if(hourNow > 18 && hourNow < 24){
    greeting = 'Go to Bed';
} else if(hourNow >12 && hourNow < 18) {
    greeting = 'Good day sir.';
} else if( hourNow >= 0 && hourNow < 24){
    greeting = 'Go to work, and Good Morning.';
} else {
    greeting = 'wait, you didnt give me the right response. Who knows what time it is?'
}
console.log(greeting);
document.write(greeting);