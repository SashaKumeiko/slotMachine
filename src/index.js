import './style.css';
import './modal.css';

class Game {
  constructor(data) {
    if (typeof Game.instance === 'object') {
      return Game.instance;
    }
    if (data) {
      this.data = data;
    }
    this.coins = 100;
    this.win = '';
    this.amountOfWins = 0;
    Game.instance = this;
    return this;
  }

  getCoins() {
    return this.coins;
  }
  spendCoins() {
    return (this.coins -= 10);
  }

  toggleStartButton() {
    let button = document.querySelector('.start-button');
    if (button.disabled) {
      button.disabled = false;
      button.style.backgroundImage = `url(${this.data.spins[0].image})`;
    } else {
      button.disabled = true;
      button.style.backgroundImage = `url(${this.data.spins[1].image})`;
    }
  }

  start() {
    clearTimeout(timeout);
    this.toggleStartButton();
    let gridContainer = document.querySelector('.grid-container');

    const generate = () => {
      let div = document.createElement('div');
      for (let i = 1; i <= 9; i++) {
        let slot = document.createElement('div');
        let symbol = this.data.slots[Math.floor(Math.random() * Math.floor(6))];
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
    };

    gridContainer.innerHTML = generate().innerHTML;
    this.checkWin();
    let timeout = setTimeout(this.toggleStartButton.bind(this), 1000);
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

    let result = '';

    this.win = arrays.some((arr) => {
      let line = arr.join('');
      let arrSeparatedByWild = line.split('wild');
      if (arrSeparatedByWild.length == 3) {
        result = 'win';
        return true;
      } else if (arrSeparatedByWild.length == 2) {
        let index = arr.findIndex((el) => el === 'wild');
        switch (index) {
          case 0:
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
    if (this.win){ 
      this.amountOfWins++;
      this.showWin();
      this.coins+=10;
    }
    else{
      this.coins-=5;
    }

    console.log(result, this.win);
    if(this.coins<=0) {this.coins==0; 
    this.toggleStartButton();}
    this.setStats()
    console.log("coins:",this.coins,"wins:",this.amountOfWins)
  }
  setStats(){
    document.querySelector('.stats').innerHTML=`
    <div>Money: ${this.coins}</div>
    <div>Wins: ${this.amountOfWins} </div>`
  }
  showWin() {
    clearTimeout(modalTimeout);

    document.querySelector('.modal').style.display = 'block';
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const modalText = document.querySelector('.modal-content div');
    const container = document.querySelector('.container');

    window.onclick = function (event) {
      if (
        event.target == modalContent ||
        event.target == container ||
        event.target == modalText
      ) {
        modal.style.display = 'none';
      }
    };
    const modalTimeout = setTimeout(() => {
      modal.style.display = 'none';
    }, 3000);
  }

  loading() {
    clearTimeout(timeLoading);
    console.log(this.data.apple);
    let root = document.getElementById('root');
    root.innerHTML = `
     <div class="container">
      <div class='grid-container'>
      <div class="slot slot1"><img src = ${this.data.slots[2].image} class='slotImg'></div>
      <div class="slot slot2"><img src = ${this.data.slots[5].image} class='slotImg'></div>
      <div class="slot slot3"><img src = ${this.data.slots[1].image} class='slotImg'></div>
      <div class="slot slot4"><img src = ${this.data.slots[1].image} class='slotImg'></div>
      <div class="slot slot5"><img src = ${this.data.slots[0].image} class='slotImg'></div>    
      <div class="slot slot6"><img src = ${this.data.slots[4].image} class='slotImg'></div>   
      <div class="slot slot7"><img src = ${this.data.slots[2].image} class='slotImg'></div>
      <div class="slot slot8"><img src = ${this.data.slots[3].image} class='slotImg'></div>    
      <div class="slot slot9"><img src = ${this.data.slots[0].image} class='slotImg'></div>    
      </div>
      <button class='start-button'></button>
      <div class='stats'>
      <div>Money: 100</div>
      <div>Wins: 0 </div>
      </div>
      </div>
      `;
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${this.data.bgs.image})`;

    const startButton = document.querySelector('.start-button');

    startButton.style.backgroundImage = `url(${this.data.spins[0].image})`;
    startButton.addEventListener('click', this.start.bind(this));

    return;
  }
}
let timeLoading = setTimeout(() => {

  fetch('./public/assets.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.querySelector('.initial').classList.remove('initial');
      let game = new Game(data);
      game.loading();
    });

}, 500);
