let bottom = 10;
let left = 50;
let score = 0;

let roadLeft = Math.floor(
  document.getElementById("road").getBoundingClientRect().left
);
let roadRight = Math.floor(
  document.getElementById("road").getBoundingClientRect().right
);

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

  //score
  setInterval(() => {
    document.getElementById("score").innerText = `Score: ${score}`;
    score = score + 1;
  }, 400);

  // road animation
  document.getElementById("road").style.animation =
    "road-animation 3s linear infinite";

  // white car animation
  let whiteCarLeft = Math.floor(
    document.getElementById("white-car").getBoundingClientRect().left
  );
  setInterval(() => {
    const num = Math.floor(Math.random() * (25 - 13) + 13);
    document.getElementById("white-car").style.left = `${num}vw`;
  }, 5000);
  document.getElementById("white-car").style.animation =
    "white-car-animation 5s linear infinite";

  // black car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (43 - 28) + 28);
    document.getElementById("black-car").style.left = `${num}vw`;
  }, 2000);
  document.getElementById("black-car").style.animation =
    "black-car-animation 2s linear infinite";

  // blue car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (43 - 29) + 29);
    document.getElementById("blue-car").style.right = `${num}vw`;
  }, 3000);
  document.getElementById("blue-car").style.animation =
    "blue-car-animation 3s infinite";

  // green car animation
  setInterval(() => {
    const num = Math.floor(Math.random() * (25 - 13) + 13);
    document.getElementById("green-car").style.right = `${num}vw`;
  }, 4000);
  document.getElementById("green-car").style.animation =
    "green-car-animation 4s linear infinite";
});

let myCarRight = Math.abs(
  document.getElementById("my-car").getBoundingClientRect().right - 30
);

setInterval(() => {
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
    document.getElementById("black-car").getBoundingClientRect().left + 30
  );
  let blackCarRight = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().right - 30
  );
  let blackCarTop = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().top + 30
  );
  let blackCarBottom = Math.abs(
    document.getElementById("black-car").getBoundingClientRect().bottom - 30
  );

  // blue car border
  let blueCarLeft = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().left + 30
  );
  let blueCarRight = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().right - 30
  );
  let blueCarTop = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().top + 30
  );
  let blueCarBottom = Math.abs(
    document.getElementById("blue-car").getBoundingClientRect().bottom - 30
  );

  // green car border
  let greenCarLeft = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().left + 30
  );
  let greenCarRight = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().right - 30
  );
  let greenCarTop = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().top + 30
  );
  let greenCarBottom = Math.abs(
    document.getElementById("green-car").getBoundingClientRect().bottom - 30
  );

  // my car car border
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

  if (myCarLeft < roadLeft || myCarRight > roadRight) {
    alert("Game Over!");
    score = 0;
    left = 50;
    document.getElementById("my-car").style.left = `${left}vw`;
  }
}, 100);
