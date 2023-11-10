const typed = new Typed(".typing", {
  strings: [" ", "MyTicTacToe Game", "Arvaj Saifi", "MyTicTacToe.com"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true,
});

const music = new Audio("./audio/music.mp3");
const ting = new Audio("./audio/ting.mp3");
const gameover = new Audio("./audio/gameover.mp3");

 let turn = "X";
let isGameOver = false;

const ChageTurn = () => {
  return turn === "X" ? "0" : "X";
};

const boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((ele) => {
  let boxText = ele.querySelector(".boxtext");
  ele.addEventListener("click", () => {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      turn = ChageTurn();
      ting.play();
      Winners();
      if (!isGameOver) {
        document.querySelector(".info").innerHTML = `Turn for ${turn}`;
      }
    }
  });
});

const Winners = () => {
  const boxText = document.getElementsByClassName("boxtext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((i) => {
    if (
      boxText[i[0]].innerHTML === boxText[i[1]].innerHTML &&
      boxText[i[1]].innerHTML === boxText[i[2]].innerHTML &&
      boxText[i[0]].innerHTML !== ""
    ) {
      isGameOver = true;
      let yy = document.querySelector(".info");
      yy.innerHTML = boxText[i[0]].innerHTML + " Won";
      yy.style.color = "red";
      document.getElementById("imgg").style.width = "130px";
      setTimeout(() => {
        arvaj(boxText[i[0]].innerHTML);
      }, 500);
    }
  });
};

const arvaj = (ak) => {
  const boxText = document.getElementsByClassName("boxtext");
  Array.from(boxText).forEach((ele) => {
    if (ele.innerHTML === "") {
      ele.innerHTML = ak;
      document.querySelector(".info").innerHTML = ak + " Won";
    }
  });
  setTimeout(() => {
    res.click();
  }, 4000);
};

let res = document.getElementById("reset");

res.addEventListener("click", () => {
  const boxText = document.getElementsByClassName("boxtext");
  Array.from(boxText).forEach((ele) => {
    ele.innerHTML = "";
  });
  document.getElementById("imgg").style.width = "0px";
  isGameOver = false;
  turn = "X";
  document.querySelector(".info").innerHTML = `Turn for ${turn}`;

  document.querySelector(".info").style.color = "black";
});

