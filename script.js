const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");
const nuvem = document.querySelector(".nuvem");
const audionormal = document.querySelector(".audionormal");
const audiorip = document.querySelector(".audiorip");
const tempo= document.querySelector('.tempo');

audionormal.play();
audionormal.volume = 0.6 ;
const jumpSound = new Audio("./audio/mariopulosom.wav");
 

const startTimer = () => {
  let gameRunning = true;
  this.loop = setInterval(() => {
    const currentTime = +tempo.innerHTML;
    tempo.innerHTML = currentTime + 1;
  }, 1000);
}

const stopGame = () => {
  gameRunning = false;
  clearInterval(this.loop);
};

startTimer();

let jumping = false;
 
const jump = () => {
  if (!jumping) {
    jumping = true;
    mario.classList.add("pulo");
    setTimeout(() => {
      mario.classList.remove("pulo");
      jumping = false;
    }, 500);
    jumpSound.play();
  }
};

const loop = setInterval(() => {
  const positioncano = cano.offsetLeft;
  const positionnuvem = nuvem.offsetLeft;
  const positionmario = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (positioncano <= 120 && positionmario < 80 && positioncano > 0) {
    cano.style.animation = "none";
    cano.style.left = `${positioncano}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${positionmario}px`;

    mario.src = "./img/mariorip.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    nuvem.style.animation = "none";
    nuvem.style.left = `${positionnuvem}px`;

    audiorip.play();
    audiorip.volume = 0.7;
    audionormal.pause();

    clearInterval(loop);

    stopGame();
  }
}, 10);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    jump();
  }
});

document.addEventListener("touchstart", () => {
  jump();
});
