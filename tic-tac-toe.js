// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function WorkOut() {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "45")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
