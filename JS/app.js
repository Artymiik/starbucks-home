function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle")
  circle.style.background = color
  
  const first1  = document.querySelector(".l1")
  const first2  = document.querySelector(".l2")
  const first3  = document.querySelector(".l3")
  first1.style.background = color
  first2.style.background = color
  first3.style.background = color
}