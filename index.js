
//1. Detecting button press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);                           //callback ; calls a function
    buttonAnimation(buttonInnerHTML);
  });
}

//2. Detecting keyboard press                                // key is property of keypress
document.addEventListener("keypress", function(event) {   // search the word event and key, we use document to let the webpage listen to any keyboars strokes
  makeSound(event.key);                                     //callback ; calls a function
  buttonAnimation(event.key);
});



//function used by click and press button; called by the two conditions above
function makeSound(key) {
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      //something like else statemnt
    default:
      console.log()

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector ("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
  
}


//do this code by using if else statement
//document.querySelector(".set").addEventListener("click", allBtns);
//function Audio() {
//alert("I got clicked!");

//console.log(this);

//  console.log(this.innerHTML);   for every click, the number of buttons wll be displayed
//console.log(this.innerHTML);  for every click , the line of codes of button from html will be displayed in the console
