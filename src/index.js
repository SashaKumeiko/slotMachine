import './style.css';
import imgPine from './assets/SYM4.png';
import imgLemon from './assets/SYM5.png';
import imgApple from './assets/SYM6.png';
import imgStrawberry from './assets/SYM3.png';
import imgGrapes from './assets/SYM7.png';
import imgWild from './assets/SYM1.png';
import backImg from './assets/BG.png';
import spinGrayImg from './assets/BTN_Spin_d.png';
import spinImg from './assets/BTN_Spin.png';
let symbols = [
  {
    name: 'pineapple',
    image: imgPine,
  },
  {
    name: 'strawberry',
    image: imgStrawberry,
  },
  {
    name: 'lemon',
    image: imgLemon,
  },
  {
    name: 'grapes',
    image: imgGrapes,
  },
  {
    name: 'apple',
    image: imgApple,
  },
  {
    name: 'wild',
    image: imgWild,
  },
];

class Game {
  constructor() {
    if (typeof Game.instance === 'object') {
      return Game.instance;
    }
    this.cash = 100;
    this.win = '';
    Game.instance = this;
    return this;
  }

  getCash() {
    return this.cash;
  }
  spendCash() {
    return (this.cash -= 10);
  }

  toggleStartButton() {
    let button = document.querySelector('.start-button');
    if (button.disabled) {
      button.disabled = false;
      button.style.backgroundImage = `url(${spinImg})`;
    } else {
      button.disabled = true;
      button.style.backgroundImage = `url(${spinGrayImg})`;
    }
    console.log(button);
  }

  start() {
    this.toggleStartButton();
    let gridContainer = document.querySelector('.grid-container');
    function generate() {
      let div = document.createElement('div');
      div.classList.add('container');
      for (let i = 1; i <= 9; i++) {
        let slot = document.createElement('div');
        let symbol = symbols[Math.floor(Math.random() * Math.floor(6))];
        slot.id = `${symbol.name}`;
        slot.classList.add('slot');
        slot.classList.add(`slot${i}`);

        switch (i) {
          case 1:
          case 4:
          case 7:
            slot.classList.add('animation1');
            break;
          case 2:
          case 5:
          case 8:
            slot.classList.add('animation2');
            break;
          case 3:
          case 6:
          case 9:
            slot.classList.add('animation3');
            break;
        }

        slot.innerHTML = `<img src=${symbol.image} class='slotImg'>`;

        div.append(slot);
      }
      return div;
    }
    gridContainer.innerHTML = generate().innerHTML;
    this.checkWin();
    let timeout = setTimeout(this.toggleStartButton, 1000);
  }

  checkWin() {
    const slot1 = document.querySelector('.slot1');
    const slot2 = document.querySelector('.slot2');
    const slot3 = document.querySelector('.slot3');
    const slot4 = document.querySelector('.slot4');
    const slot5 = document.querySelector('.slot5');
    const slot6 = document.querySelector('.slot6');
    const slot7 = document.querySelector('.slot7');
    const slot8 = document.querySelector('.slot8');
    const slot9 = document.querySelector('.slot9');

    let arr1 = [slot1.id, slot2.id, slot3.id];
    let arr2 = [slot4.id, slot5.id, slot6.id];
    let arr3 = [slot7.id, slot8.id, slot9.id];
    let arrays = [arr1, arr2, arr3];
    console.log(arrays);

    // }
    let result = '';

    this.win = arrays.some((arr) => {
      let line = arr.join('');
      let arrSeparatedByWild = line.split('wild');
      if (arrSeparatedByWild.length == 3) {
        result = 'win';
        return true;
      } else if (arrSeparatedByWild.length == 2) {
        console.log('hey');
        let index = arr.findIndex((el) => el === 'wild');
        console.log(index);
        switch (index) {
          case 0:
            console.log('wew');
            if (arr[1] === arr[2]) {
              result = 'win';
              return true;
            } else result = 'lost';
            break;
          case 1:
            if (arr[0] === arr[2]) {
              result = 'win';
              return true;
            } else result = 'lost';
            break;
          case 2:
            if (arr[0] === arr[1]) {
              result = 'win';
              return true;
            } else result = 'lost';
            break;
        }
      } else if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] != 'wild') {
        console.log('win 3 same');
        result = 'win';
        return true;
      } else {
        result = 'lost';
      }
    });
    console.log(result, this.win);
  }

  loading() {
    let root = document.getElementById('root');
    root.innerHTML = `
     <div class="container">
      <div class='grid-container'>
      <div class="slot slot1"><img src = ${symbols[2].image} class='slotImg'></div>
      <div class="slot slot2"><img src = ${symbols[5].image} class='slotImg'></div>
      <div class="slot slot3"><img src = ${symbols[1].image} class='slotImg'></div>
      <div class="slot slot4"><img src = ${symbols[1].image} class='slotImg'></div>
      <div class="slot slot5"><img src = ${symbols[0].image} class='slotImg'></div>    
      <div class="slot slot6"><img src = ${symbols[4].image} class='slotImg'></div>   
      <div class="slot slot7"><img src = ${symbols[2].image} class='slotImg'></div>
      <div class="slot slot8"><img src = ${symbols[3].image} class='slotImg'></div>    
      <div class="slot slot9"><img src = ${symbols[0].image} class='slotImg'></div>    
      </div>
      <button class='start-button'></button>
      </div>
      `;
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${backImg})`;

    const startButton = document.querySelector('.start-button');
    startButton.style.backgroundImage = `url(${spinImg})`;
    startButton.addEventListener('click', this.start.bind(this));

    return;
  }
}

setTimeout(() => {
  document.querySelector('.initial').classList.remove('initial');

  let A = new Game();
  A.loading();
}, 500);
