const numberElement = document.querySelector('.number');
const nextButton = document.querySelector('.next-button');

let currentNumber = 1;

nextButton.addEventListener('click', () => {
	currentNumber++;
	numberElement.textContent = currentNumber;
});
