const button = document.querySelectorAll('.button')

button.forEach((button) => {
  button.addEventListener('click', () => {
      button.parentNode.classList.toggle('active')
  })
})