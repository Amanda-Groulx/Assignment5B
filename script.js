document.getElementById('Area').addEventListener('click', AreaButton)
document.getElementById('circumference').addEventListener('click', CircumferenceButton)

let diameter = 0
let area = 0
let circumference = 0
let pi = Math.PI

function AreaButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pi = parseFloat(pi)

  area = pi * (diameter / 2) ** 2
  document.getElementById('answer-area').innerHTML = area
}

function CircumferenceButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pi = parseFloat(pi)

  circumference = pi * diameter
  document.getElementById('answer-circumference').innerHTML = circumference
}
