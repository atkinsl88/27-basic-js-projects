// -- DOM Elements -- //
const usersChoice = document.getElementById('users-choice')
const compsChoice = document.getElementById('comps-choice')
const resultDisplay = document.getElementById('result-display')

// -- Buttons -- //
const btns = document.querySelectorAll('.btn')

// -- User Choice -- //
let userPick
let compPick
let result

// -- Add events to buttons -- //
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    userPick = e.currentTarget.id
    usersChoice.textContent = userPick
    // Create a function below and add it
    generateCompChoice()
    getResult()
  })
})

// -- Computer Choice -- //
function generateCompChoice() {
  // Use Math.random() to generate a number
  const randomPick = Math.random()
  // If statement
  if (randomPick > 0.33) {
    compPick = 'rock'
  } else if (randomPick <= 0.66) {
    compPick = 'paper'
  } else if (randomPick > 0.66) {
    compPick = 'scissors'
  }
  compsChoice.textContent = compPick
}

// -- Function to Compare -- //
function getResult() {
  // Tie!
  if (userPick === compPick) {
    result = 'Its a tie!'
  }
  // Rock!
  if (userPick === 'rock' && compPick === 'paper') {
    result = 'Paper wins!'
  }
  if (userPick === 'rock' && compPick === 'scissors') {
    result = 'Scissors wins!'
  }
  // Paper!
  if (userPick === 'paper' && compPick === 'rock') {
    result = 'Paper wins!'
  }
  if (userPick === 'paper' && compPick === 'scissors') {
    result = 'Scissors wins!'
  }
  // Scissors!
  if (userPick === 'scissors' && compPick === 'rock') {
    result = 'Rock wins!'
  }
  if (userPick === 'scissors' && compPick === 'paper') {
    result = 'Scissors wins!'
  }
  console.log(result)
  result.textContent = resultDisplay
}