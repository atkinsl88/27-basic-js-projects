const btns = document.querySelectorAll('.question-btn')

// Traversing the DOM option
btns.forEach(function(btn) {
  btn .addEventListener('click', function(e) {
    console.log(e.currentTarget.parentElement.parentElement)
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})
