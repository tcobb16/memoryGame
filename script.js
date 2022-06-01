const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let select1 = undefined;
let select2 = undefined;
let canClick = true;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if(!canClick) {
    return;
  }

  if (event.target.tagName === "DIV"){
    event.target.style.backgroundColor = event.target.className;
    if (select1 === undefined) {
      select1 = event.target;
    }
    else if (select2 === undefined && event.target !== select1) {
      select2 = event.target;
      const sameColor = select1.className === select2.className;
      if(sameColor !== true){
         canClick = false;
        setTimeout(function(){
          select1.style.backgroundColor = "#ffffff";
          select2.style.backgroundColor = "#ffffff";
          select1 = undefined;
          select2 = undefined;
        }, 1000);
        setTimeout(function(){
          canClick = true
        }, 1000);
      }
      else {
        select1 = undefined;
        select2 = undefined;
      }
    }
  } 
  console.log("you just clicked", event.target);
}


// when the DOM loads
createDivsForColors(shuffledColors);

/* */