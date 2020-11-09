const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

function start() {
	let clicks = 0;
	button.textContent = 'Clickr';
	const startTime = Date.now(); // текущее время милисикунд

	display.textContent = formatTime(TIMEOUT);
	button.onclick = () => counter.textContent = clicks++;

	const interval = setInterval(() => {
		const delta = Date.now() - startTime;
		display.textContent = formatTime(TIMEOUT - delta);
	}, 100);

	const timeout = setTimeout(() => {
		button.onclick = null; // выключаем обработчик по истечению времени
		button.textContent = 'Reload';
		display.textContent = 'Game Over';
		clearInterval(interval);
		clearTimeout(timeout);
		setTimeout(() => {
			return reload();
		}, 1000);
	}, TIMEOUT);
}

function reload() {
	button.onclick = start;
}

function formatTime(ms) {
	return Number.parseFloat(ms / 1000).toFixed(2);
}