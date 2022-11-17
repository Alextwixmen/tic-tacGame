const gameField = document.querySelector(".GameField");
const newGameButton = document.querySelector(".newGameButton");
const winnerText = document.querySelector(".winnerText");
const winnerWindow = document.querySelector(".PopUpContent");
const popUp = document.querySelector(".popUp");
const arrWithGameField = [[], [], [], [], [], [], [], [], []]; // наше поле для игры в ввиде массива
// во время хода игрока на нолике будем добавлять 2 на соответствуюее место
// во время хода игрока на крестике будем добавлять 1 на соответствуюшее место
let firstMove = false; // означает, что первый ход еще не был сделан. Сразу после первого хода меняем значение не true.
function whoIsTheWinner() {
  let winner = "Draw";
  if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[1] == 1 &&
    arrWithGameField[2] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[3] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[5] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[6] == 1 &&
    arrWithGameField[7] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[3] == 1 &&
    arrWithGameField[6] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[1] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[7] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[2] == 1 &&
    arrWithGameField[5] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[6] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[2] == 1
  ) {
    winner = "redCross";
  }
  //
  if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[1] == 2 &&
    arrWithGameField[2] == 2
  ) {
    console.log("1");
    winner = "greenCircle";
  } else if (
    arrWithGameField[3] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[5] == 2
  ) {
    console.log(arrWithGameField);
    console.log("2");

    winner = "greenCircle";
  } else if (
    arrWithGameField[6] == 2 &&
    arrWithGameField[7] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("3");
    winner = "greenCircle";
  } else if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[3] == 2 &&
    arrWithGameField[6] == 2
  ) {
    console.log("4");
    winner = "greenCircle";
  } else if (
    arrWithGameField[1] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[7] == 2
  ) {
    console.log("5");
    winner = "greenCircle";
  } else if (
    arrWithGameField[2] == 2 &&
    arrWithGameField[5] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("6");
    winner = "greenCircle";
  } else if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("7");
    winner = "greenCircle";
  } else if (
    arrWithGameField[6] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[2] == 2
  ) {
    console.log("8");
    winner = "greenCircle";
  }
  return winner;
}
function whoIsTheNext() {
  //функция на определение того, кто будет делать следующий ход.
  let number = 0;
  arrWithGameField.forEach((element) => {
    number += element.length;
  });
  return number;
}
// тут есть баг, поэтому лучше всего вешать листнера не на все поле, а на каждую отдельную клетку. Но пока я это не фиксил.
gameField.addEventListener("click", (clickPlace) => {
  let redCross = document.createElement("img");
  redCross.src = "assets/img/cross.png";
  redCross.style.height = "270px";
  redCross.style.width = "270px";
  let greenCircle = document.createElement("img");
  greenCircle.src = "assets/img/circle.png";
  greenCircle.style.height = "200px";
  greenCircle.style.width = "200px";
  let targetOfClick = clickPlace.target;
  numberOfSquare = clickPlace.target.className.slice(-1); //получаем конкретную цифру квадратика, на который мы кликаеем, который будет соответствовать индексу в массиве arrWithGameField
  if (firstMove == false) {
    firstMove = true;
    targetOfClick.appendChild(redCross);
    arrWithGameField[numberOfSquare].push(1);
    return;
  }
  let numberOfTheNextMove = whoIsTheNext(); // если число достигает 8 - игра окончена, так как все подмассивы забиты цифрами, то есть все клетки на поле заполнены крестиками/ноликами
  if (numberOfTheNextMove % 2 != 0 && numberOfTheNextMove <= 8) {
    targetOfClick.appendChild(greenCircle);
    arrWithGameField[numberOfSquare].push(2);
    let winner = whoIsTheWinner();
    if (winner == "redCross") {
      showWinner(winner);
    } else if (winner == "greenCircle") {
      showWinner(winner);
    }
  } else if (numberOfTheNextMove <= 8) {
    targetOfClick.appendChild(redCross);
    arrWithGameField[numberOfSquare].push(1);
    let winner = whoIsTheWinner();
    if (winner == "redCross") {
      showWinner(winner);
      console.log(arrWithGameField);
    } else if (winner == "greenCircle") {
      showWinner(winner);
    } else if (numberOfTheNextMove == 8) {
      showWinner("draw");
    }
  }
});
function showWinner(winner) {
  popUp.classList.toggle("hidden");
  winnerWindow.classList.add("winnerWindow");
  if (winner == "redCross") {
    winnerText.innerHTML = "Победил redCross";
  } else if (winner == "greenCircle") {
    winnerText.innerHTML = "Победил greenCircle";
  } else {
    winnerText.innerHTML = "Победила Дружба";
  }
}
newGameButton.addEventListener("click", () => {
  window.location.reload();
});

function smartComputer() {}

// const gameCell0 = document.querySelector(".gameСell0");
// const gameCell1 = document.querySelector(".gameСell1");
// const gameCell2 = document.querySelector(".gameСell2");
// const gameCell3 = document.querySelector(".gameСell3");
// const gameCell4 = document.querySelector(".gameСell4");
// const gameCell5 = document.querySelector(".gameСell5");
// const gameCell6 = document.querySelector(".gameСell6");
// const gameCell7 = document.querySelector(".gameСell7");
// const gameCell8 = document.querySelector(".gameСell8");
// const arrWithCelss = [
//   "gameСell1",
//   "gameCell2",
//   "gameCell3",
//   "gameCell4",
//   "gameCell5",
//   "gameCell6",
//   "gameCell7",
//   "gameCell8",
//   "gameCell9",
// ];
