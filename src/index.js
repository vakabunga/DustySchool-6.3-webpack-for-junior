import getUserName from './js/getUserName';

import './css/style.css';
import 'mini.css/dist/mini-default.min.css';

// import avatarUrl from './img/avatar.png';

const avatar = document.querySelector('.avatar');
// avatar.src = avatarUrl;

const form = document.querySelector('.form');
const greetingsElement = document.querySelector('.greetings');
const input = document.querySelector('.input');
const userName = localStorage.getItem('userName');

getUserName().then((result) => {
	greetingsElement.innerHTML = `Приветствую тебя, <span class="username">${result}</span>!`;
	form.classList.add('hidden');
});

export { form, input, avatar, userName };
