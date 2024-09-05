// Selecting DOM elements
const startBtn = document.querySelector('#startBtn'),
	endBtn = document.querySelector('#endBtn'),
	preNext = document.querySelectorAll('.preNext'),
	numbers = document.querySelectorAll('.link');

// Setting an initial step
let currentStep = 0;

// Func to update the button states
const updateBtn = () => {
	if (currentStep === 4) {
		endBtn.disabled = true;
		preNext[1].disabled = true;
	} else if (currentStep === 0) {
		startBtn.disabled = true;
		preNext[0].disabled = true;
	} else {
		endBtn.disabled = false;
		preNext[1].disabled = false;
		startBtn.disabled = false;
		preNext[0].disabled = false;
	}
};

// Add event listeners to the number links
numbers.forEach((number, numberIndex) => {
	number.addEventListener('click', (e) => {
		e.preventDefault();
		// Set the current step to the clicked number link
		currentStep = numberIndex;
		// Remove the 'active' class from the previously active number
		document.querySelector('.active').classList.remove('active');
		// Add the 'active' class to the clicked number link
		number.classList.add('active');
		updateBtn();
	});
});

// Add event listeners to the 'previous' and 'next' buttons
preNext.forEach((button) => {
	button.addEventListener('click', (e) => {
		currentStep += e.target.id === 'next' ? 1 : -1;
		numbers.forEach((number, numberIndex) => {
			number.classList.toggle('active', numberIndex === currentStep);
			updateBtn();
		});
	});
});

// Add event listener to the 'start' button
startBtn.addEventListener('click', () => {
	document.querySelector('.active').classList.remove('active');
	// Add the 'active' class to the first number link
	numbers[0].classList.add('active');
	currentStep = 0;
	updateBtn();
	endBtn.disabled = false;
	preNext[1].disabled = false;
});

// Add event listener to the 'end' button
endBtn.addEventListener('click', () => {
	document.querySelector('.active').classList.remove('active');
	// Add the 'active' class to the last number link
	numbers[4].classList.add('active');
	currentStep = 4;
	updateBtn();
	startBtn.disabled = false;
	preNext[0].disabled = false;
});
