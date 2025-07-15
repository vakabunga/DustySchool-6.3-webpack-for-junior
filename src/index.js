const form = document.querySelector('.form');
const greetingsElement = document.querySelector('.greetings');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const avatar = document.querySelector('.avatar');
const userName = localStorage.getItem('userName');

getUserName()
  .then((result) => {
    greetingsElement.innerHTML = `Приветствую тебя, <span class="username">${result}</span>!`;
    form.classList.add('hidden');
  });
