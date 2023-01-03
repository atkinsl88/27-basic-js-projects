//  Create an array for ‘Hex’ and use the numbers 1-9 and letters A-F (as this is what creates a hextone).
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Create a variable and assign it to our ‘Click Me!’ button.
// Don’t forget to assign an ID ‘btn’ to the markup.
const btn = document.getElementById('btn')

// Create a variable and assign to to the ‘Background Colour’ title. 
// Again, don’t forget to assign a class ‘colors’ to the markup.
const color = document.querySelector('.color')

// Now we have the variables setup, let’s create an Event Listener to watch out for the button click. *Test with a console.log*
btn.addEventListener('click', function() {

  console.log('Clicked!')

  // Now let’s define a variable using ‘let’ as it will be a changing variable.
  let hexColor = '#'

  // Then we’re going to create a loop which runs 6 times (the number of items in a hextone).
  for (let i = 0; i < 6; i++) {

    // Use the hexColor variable, addition assignment += hex[0] means we should get 6 0’s. Make sure you add this into a console.log.
    // console.log(hexColor += hex[0])
    hexColor += hex[getRandomNumber()]

    // Now lets use the element ‘color’ and use the DOM element textContent to change the ‘Hextone’ title where the Span is used.
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor

  }

})

//  Now we’re going to make a function to generate a random number and replace the ‘2’ we hardcoded in the randomNumber variable beforehand.
function getRandomNumber() {
  // Right now our numbers will be something like ‘0.3243534534’ but it will never be 1. So we can use the array ‘colors’ and ‘length’ which will give us a random number like ‘2.24436346’ or ‘3.143242’ which we can use.
  // Replace this with the below 'return Math.random() * hex.length'
  return Math.floor(Math.random() * hex.length)
  
}