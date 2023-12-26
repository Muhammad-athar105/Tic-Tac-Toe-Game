let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msgDraw = document.querySelector("#msg-draw");


let turnO = true;  // playerX. //PlayerO
let count = 0;

const winPattern = [

  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]

]


const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide")

}
boxes.forEach((box) => {
  box.addEventListener('click', () => {

    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      count++;
      box.disabled = true;
      checkWinner();
    }
  });
});


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const showDrawMessage = () => {
  msgDraw.innerText = `Match is draw try again ..`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {

    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;

    if (position1Value != "" && position1Value === position2Value  &&  position2Value === position3Value) {
      showWinner(position1Value);
        return;
    }
  }
  if (count === 9) {
    showDrawMessage();
  }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



// These are used for debugging in checkWinner function
// console.log(pattern[0], pattern[1], pattern[2],)
// console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]
// console.log(pattern[0], pattern[1], pattern[2])
// console.log(
//   boxes[pattern[0]].innerText,
//   boxes[pattern[1]].innerText,
//   boxes[pattern[2]].innerText,
// )