import { form, input, avatar, userName } from '../index';

export default function getUserName() {
	if (userName !== null) {
		return Promise.resolve(userName);
	}

	return new Promise((resolve, reject) => {
		avatar.classList.add('hidden');
		form.classList.remove('hidden');

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			localStorage.setItem('userName', input.value);
			avatar.classList.remove('hidden');

			resolve(localStorage.getItem('userName'));
		});
	});
}
