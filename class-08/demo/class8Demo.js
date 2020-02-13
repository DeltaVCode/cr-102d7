console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


console.log('\r');
//Faster way.
//Use a loop to run code many times. 
console.log("while loops require a starting variable, in this case a variable set to 0");


var count = 0;
//while loops are similar to if statements in that they need a boolean expression inside their parentheses'
console.log("This code will run the loop as long as the variable above is less than or equal to 50");

while(count <= 50){
console.log(count);
count = count + 5;
//count + 5 = count;
}


// console.log("While loops need an expression to change the starting variable, in this case we are going to run it, while incrementing by 5. Everytime we run through the loop ");


// //this loop counts down from 50 to 0, decrease by -2 each times
count = 50;
while(count > 40){
  console.log(count);
  count = count - 2; 
}



console.log("Count up from 0 to 60 by 10");

count = 0;

while(count <= 60){
  console.log(count);
  count += 10;
}

var stop = '1'; //sentinal
while(true){
  var input = prompt('Give a number. Type 1 to exit. ');
  if(input === stop){
    break;
  }
}

// For Loops.
// 3 expressions to evaluate some conditions
for(var i = 0;     i < 11;        i++){
  console.log('The number is currently at: ' + i)
}


for( var i = 1000;       i >= 300;          i--){
    console.log("The current value of i in the loop is: " + i);
    }
    
    
    // buildApp('what time is it in 24 hour timing', 'everyone');
    
    
    var howMany = function() {
      var count = prompt('how many things do you want to order?');
    
      while (count === '' || isNaN(count)) {
        count = prompt('please enter a number');
      }
    
      console.log('howMany():', Number(count));
      return Number(count);
    }
    
    var getItem = function() {
      var order = prompt('what do you want to order?').toLowerCase;
      var item;
    
      while (order !== 'house' && order !== 'hotel') {
        order = prompt('please enter house or hotel');
      }
    
      if (order === 'hotel') {
        item = '<img src="https://media-cdn.tripadvisor.com/media/photo-s/09/d8/0a/09/img-hotel.jpg">';
      } else if (order === 'house') {
        item = '<img src="https://img.freepik.com/free-vector/colorful-houses-collection-flat-style_23-2147787131.jpg?size=338&ext=jpg">';
      }
    
      console.log('getItem():', item);
    
      document.write(item);
      return item;
    }
    
    var showOrder = function() {
      var item = getItem();
      var total = howMany();
      var result = '';
    
      for (var i = 0; i < total; i++) {
        result = result + '<p>Model #' + i + ' ' + item + '</p>';
      }
    
      console.log('showOrder():', result);
      return result;
    }
    
    // howMany();
    // getItem();
    showOrder();