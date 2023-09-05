const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");
const nuvem = document.querySelector(".nuvem");
const audionormal = document.querySelector('.audionormal')

audionormal.play();

const jump = () => {
  mario.classList.add("pulo");
  setTimeout(() => {
    mario.classList.remove("pulo");
  }, 500);
};

const loop = setInterval(() => {
  const audiorip = document.querySelector('.audiorip')
  const positioncano = cano.offsetLeft;
  const positionnuvem = nuvem.offsetLeft;
  const positionmario = +window.getComputedStyle(mario).bottom.replace('px', '');

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
    audionormal.pause();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("click", jump);
