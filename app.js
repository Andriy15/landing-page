const accordion = document.querySelectorAll('.container-ac')
const navSpan = document.querySelectorAll('.nav-span')

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

let prevSpan = null // keep track of previously clicked span

navSpan.forEach((span) => {
  span.addEventListener('click', () => {
    if (prevSpan) {
      prevSpan.style.borderBottom = ''
      prevSpan.style.color = ''
    }
    span.style.borderBottom = '1px solid #1375ED'
    span.style.color = '#1375ED'
    prevSpan = span 
  })
})
