class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
  
  document.addEventListener('keyup', (e) => {
    let k1 = e.key.toLowerCase();
    // опеделяем, на какие клавиши не реагировать
    const keyNotEvent = ['capslock', 'shift', 'control', 'alt', 'enter']

    if(!keyNotEvent.includes(k1)) {
      if(this.currentSymbol.innerHTML == k1) { 
        this.success();  
      } else {
      this.fail();
      }
    }

  })

    }


  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    const answer = confirm('Ошибка! Начать заново? "Да"-начать заново, "Нет"-продолжить.')
    if(!answer) {
      if (++this.lossElement.textContent === 5) {
        alert('Вы проиграли!');
        this.reset();
      }
      this.setNewWord();
    } else {
      this.reset();
    }

  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
