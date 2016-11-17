// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.

var namespace = "http://www.w3.org/2000/svg"
var player=1
var topLeftClicked = 0
var topMiddleClicked = 0
var topRightClicked = 0
var middleLeftClicked = 0
var middleMiddleClicked = 0
var middleRightClicked = 0
var bottomLeftClicked = 0
var bottomMiddleClicked  = 0
var bottomRightClicked = 0
document.addEventListener('keypress', restart);
function restart(){
  var s = event.keyCode;
  if (s ==32){
    location.reload(true);
  }
}
function workout() {
if (topLeftClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "45")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
 }
 else if (player==2) {
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "45")
   circle.setAttribute("cy", "45")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "red")
   var canvas = document.getElementById("game-board")
   canvas.appendChild(circle)
   player=1
 }
  topLeftClicked=1
}
}
function animals() {
if (topMiddleClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=1

}
  topMiddleClicked=1
}
}
function broccoli() {
if (topRightClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "45")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
player=1
}
  topRightClicked=1
}
}
function suckerforpain() {
if (middleLeftClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "45")
  circle.setAttribute("cy", "145")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
 }
 else if (player==2) {
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "45")
   circle.setAttribute("cy", "145")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "red")
   var canvas = document.getElementById("game-board")
   canvas.appendChild(circle)
   player=1
 }
  middleLeftClicked=1
}
}
function stitches() {
if (middleMiddleClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "145")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "145")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=1

}
  middleMiddleClicked=1
}
}
function closer() {
if (middleRightClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "145")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "145")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
player=1
}
  middleRightClicked=1
}
}
function ride() {
if (bottomLeftClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "45")
  circle.setAttribute("cy", "245")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
 }
 else if (player==2) {
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "45")
   circle.setAttribute("cy", "245")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "red")
   var canvas = document.getElementById("game-board")
   canvas.appendChild(circle)
   player=1
 }
  bottomLeftClicked=1
}
}
function radioactive() {
if (bottomMiddleClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "245")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "145")
  circle.setAttribute("cy", "245")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=1

}
  bottomMiddleClicked=1
}
}
function thehills() {
if (bottomRightClicked==0){
  if(player==1){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "245")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "#00FFFF")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  player=2
}
else if (player==2){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "245")
  circle.setAttribute("cy", "245")
  circle.setAttribute("r", "40")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
player=1
}
  bottomRightClicked=1
}
}
