// Create ‘let’ (as this will change) to a count  value of 0.
let count = 0

// Create the value add get the ID value.
const value = document.querySelector('#value')
console.log(value)

// Select the buttons using querySelectorAll (so we don’t have to add 3 event listeners).
const btns = document.querySelectorAll('.btn')
console.log(btns)

// Now lets make use of the forEach statement and use ‘ban’ or whatever to select each ‘item’.
btns.forEach(function(btn) {
  console.log(btn)
  // Inside,  lets add an eventListener using ‘click’ and the type and pass an ‘e’ so we know which button we’re clicking on.
  btn.addEventListener('click', function(e) {
    // Console log the ‘e’ event and append currentTarget to see which we are selecting.
    console.log(e.currentTarget.classList)
    // Save into a variable.
    const styles = e.currentTarget.classList
    // Then lets set up an IF statement.  I can then ask ‘IF’ a button contains a certain class, i.e ‘decrease’ decrease count by 1.
    if (styles.contains('decrease')) {
      // Decrease count
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    // Change the value of textContent
    value.textContent = count
  })
})