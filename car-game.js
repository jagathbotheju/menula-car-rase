let bottom = 10;
let left = 50;
let score = 0;

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    bottom = bottom + 3;
  } else if (e.key === "ArrowDown") {
    bottom = bottom - 3;
  } else if (e.key === "ArrowLeft") {
    left = left - 3;
  } else if (e.key === "ArrowRight") {
    left = left + 3;
  }

  document.getElementById("my-car").style.bottom = `${bottom}vh`;
  document.getElementById("my-car").style.left = `${left}vw`;
});

document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("start-button").style.display = "none";

  setInterval(() => {
    document.getElementById("score").innerText = `Score: ${score}`;
    score = score + 1;
  }, 400);

  // road animation
  document.getElementById("road").style.animation =
    "road-animation 3s linear infinite";

  // white car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (35 - 27 + 1) + 27);
    document.getElementById("white-car").style.left = `${num}vw`;
  }, 5000);
  document.getElementById("white-car").style.animation =
    "white-car-animation 5s linear infinite";

  // black car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (50 - 33 + 1) + 33);
    document.getElementById("black-car").style.left = `${num}vw`;
  }, 2000);
  document.getElementById("black-car").style.animation =
    "black-car-animation 2s linear infinite";

  // blue car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (43 - 35 + 1) + 35);
    document.getElementById("blue-car").style.right = `${num}vw`;
  }, 3000);
  document.getElementById("blue-car").style.animation =
    "blue-car-animation 3s linear infinite";

  // green car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (34 - 26 + 1) + 26);
    document.getElementById("green-car").style.right = `${num}vw`;
  }, 4000);
  document.getElementById("green-car").style.animation =
    "green-car-animation 4s linear infinite";
});

let myCarLeft = Math.abs(
  document.getElementById("my-car").getBoundingClientRect().left + 30
);
console.log("myCarLeft:", myCarLeft);

setInterval(() => {
  let myCarRect = document.getElementById("my-car").getBoundingClientRect();

  // white car border
  let whiteCarLeft = Math.abs(
    document.getElementById("white-car").getBoundingClientRect().left + 30
  );
  let whiteCarRight = Math.abs(
    document.getElementById("white-car").getBoundingClientRect().right - 30
  );
  let whiteCarTop = Math.abs(
    document.getElementById("white-car").getBoundingClientRect().top + 30
  );
  let whiteCarBottom = Math.abs(
    document.getElementById("white-car").getBoundingClientRect().bottom - 30
  );

  // black car border
  let blackCarLeft = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().left
  );
  let blackCarRight = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().right
  );
  let blackCarTop = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().top
  );
  let blackCarBottom = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().bottom
  );

  // blue car border
  let blueCarLeft = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().left
  );
  let blueCarRight = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().right
  );
  let blueCarTop = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().top
  );
  let blueCarBottom = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().bottom
  );

  // green car border
  let greenCarLeft = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().left
  );
  let greenCarRight = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().right
  );
  let greenCarTop = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().top
  );
  let greenCarBottom = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().bottom
  );

  // mycar car border
  let myCarLeft = Math.abs(
    document.getElementById("my-car").getBoundingClientRect().left + 30
  );
  let myCarRight = Math.abs(
    document.getElementById("my-car").getBoundingClientRect().right - 30
  );
  let myCarTop = Math.abs(
    document.getElementById("my-car").getBoundingClientRect().top + 30
  );
  let myCarBottom = Math.abs(
    document.getElementById("my-car").getBoundingClientRect().bottom - 30
  );

  //white car accident
  if (
    ((whiteCarLeft < myCarLeft && myCarLeft < whiteCarRight) ||
      (whiteCarLeft < myCarRight && myCarRight < whiteCarRight)) &&
    ((whiteCarTop < myCarTop && myCarTop < whiteCarBottom) ||
      (whiteCarTop < myCarBottom && myCarBottom < whiteCarBottom))
  ) {
    alert("Game Over!");
    score = 0;
  }

  //black car accident
  if (
    ((blackCarLeft < myCarLeft && myCarLeft < blackCarRight) ||
      (blackCarLeft < myCarRight && myCarRight < blackCarRight)) &&
    ((blackCarTop < myCarTop && myCarTop < blackCarBottom) ||
      (blackCarTop < myCarBottom && myCarBottom < blackCarBottom))
  ) {
    alert("Game Over!");
    score = 0;
  }

  //black car accident
  if (
    ((blueCarLeft < myCarLeft && myCarLeft < blueCarRight) ||
      (blueCarLeft < myCarRight && myCarRight < blueCarRight)) &&
    ((blueCarTop < myCarTop && myCarTop < blueCarBottom) ||
      (blueCarTop < myCarBottom && myCarBottom < blueCarBottom))
  ) {
    alert("Game Over!");
    score = 0;
  }

  //green car accident
  if (
    ((greenCarLeft < myCarLeft && myCarLeft < greenCarRight) ||
      (greenCarLeft < myCarRight && myCarRight < greenCarRight)) &&
    ((greenCarTop < myCarTop && myCarTop < greenCarBottom) ||
      (greenCarTop < myCarBottom && myCarBottom < greenCarBottom))
  ) {
    alert("Game Over!");
    score = 0;
  }

  if (myCarLeft < 470 || myCarLeft > 1350) {
    alert("Game Over!");
    score = 0;
    left = 50;
    document.getElementById("my-car").style.left = `${left}vw`;
  }
}, 100);
