// Create an array for ‘Simple’ changer which contains 4 colours: Green, Red, Blue and Yellow.
const colors = [
  "green",
  "red",
  "blue",
  "yellow"
]

// Create a variable and assign it to our ‘Click Me!’ button.
// Don’t forget to assign an ID ‘btn’ to the markup.
const btn = document.getElementById('btn')

// Create a variable and assign to to the ‘Background Colour’ title. 
// Again, don’t forget to assign a class ‘colors’ to the markup.
const color = document.querySelector('.color')

// Now we have the variables setup, let’s create an Event Listener to watch out for the button click. *Test with a console.log*
btn.addEventListener('click', function() {

  console.log('Clicked!')

  // Then we want to add some logic to our function. Start by generating a random number between 0-3 (that’s how big our array is).
  const randomNumber = getRandomNumber();
  console.log(randomNumber)

  // Now let’s access our document and locate the colors we defined in our earlier array. Start with console.log(document) and append further.
  console.log(document.body.style.backgroundColor = colors[randomNumber])
  document.body.style.backgroundColor = colors[randomNumber]

  // Now lets use the element ‘color’ and use the DOM element textContent to change the 'Hextone' title where the Span is used.
  color.textContent = colors[randomNumber]

})

//  Now we’re going to make a function to generate a random number and replace the ‘2’ we hardcoded in the randomNumber variable beforehand.
function getRandomNumber() {
  // Right now our numbers will be something like ‘0.3243534534’ but it will never be 1. So we can use the array ‘colors’ and ‘length’ which will give us a random number like ‘2.24436346’ or ‘3.143242’ which we can use.
  // Replace this with the below 'return Math.random() * colors.length'
  return Math.floor(Math.random() * colors.length)
  
}