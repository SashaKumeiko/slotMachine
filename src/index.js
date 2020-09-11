import './style.css'
import imgPine from './assets/SYM4.png'
import imgLemon from './assets/SYM5.png'
import imgApple from './assets/SYM6.png'
import imgStrawberry from './assets/SYM3.png'
import imgGrapes from './assets/SYM7.png'
import imgWild from './assets/SYM1.png'
import backImg from './assets/BG.png'
import spinImg from './assets/BTN_Spin.png'
let symbols = [
  {
    name: 'pineapple',
    image: imgPine
  },
  {
    name: 'strawberry',
    image: imgStrawberry
  },
  {
    name: 'lemon',
    image: imgLemon
  },
  {
    name: 'grapes',
    image: imgGrapes
  },
  {
    name: 'apple',
    image: imgApple
  },
  {
    name: 'wild',
    image: imgWild
  },
];

class Game {
  constructor() {
    if (typeof Game.instance === 'object') {
      return Game.instance;
    }
    this.cash = 100;
    this.win = ''
    Game.instance = this;
    return this;
  }

  getCash() {
    return this.cash;
  }
  spendCash() {
    return (this.cash -= 10);
  }

  start() {
    // console.log('start');
    let gridContainer = document.querySelector('.grid-container');
    function generate() {
      let div = document.createElement('div');
      div.classList.add('container');
      for (let i = 1; i <= 9; i++) {
        let slot = document.createElement('div');
        let symbol = symbols[Math.floor(Math.random() * Math.floor(6))]
        slot.id = `${
          symbol.name
        }`
        slot.classList.add('slot');
        slot.classList.add(`slot${i}`);
        slot.innerHTML = `<img src=${symbol.image} class='slotImg'>`
        div.append(slot);
      }
      //   console.log(div);
      return div;
    }
    gridContainer.innerHTML = generate().innerHTML;
    Game.checkWin();
  }

  static checkWin() {
    //   console.log('checkwin')
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
    //   let arrTest = [ 'pineapple', 'pineapple','pineapple']
    //   console.log(arrTest)
    // let arraysTest =[arrTest]
    this.win = arrays.some((arr) => {
      let line = arr.join('');
      let arrSeparatedByWild = line.split('wild');
      if (arrSeparatedByWild.length == 3) {
        // console.log('win');
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
              // console.log('win');
              result = 'win';
              return true;
            } else result = 'lost';
            break;
          case 1:
            if (arr[0] === arr[2]) {
              // console.log('win');
              result = 'win';
              return true;
            } else result = 'lost';
            break;
          case 2:
            if (arr[0] === arr[1]) {
              // console.log('win');
              result = 'win';
              return true;
            } else result = 'lost';
            break;
        }
      } else if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0]!='wild') {
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
      <div class='start-button'></div>
      </div>
      `;
      const container = document.querySelector('.container')
      container.style.backgroundImage = `url(${backImg})`

const startButton =document.querySelector('.start-button')
      startButton.style.backgroundImage = `url(${spinImg})`
      startButton.addEventListener('click', this.start);

    return;
  }
}

let A = new Game();
let B = new Game();
// A.spendCash();
// A.spendCash();
// B.spendCash();
// console.log(A);
A.loading();
// console.log(A.getCash());
