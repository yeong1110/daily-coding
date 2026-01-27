const btn = document.querySelector('.btn-submit');

btn.addEventListener('click', () => {
	let userName = prompt('사용자명을 입력해주세요');
	
	while (userName !== null && !userName.trim()) {
		userName = prompt('사용자명은 필수값입니다');
	}
	
	if(userName) {
		const message = `환영합니다 ${userName.trim()}님!`;
		console.log(message);
		alert(message);
	}
	
})

const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
	card.classList.add('appear');
	card.style.setProperty('--delay', `${i * 0.1}s`);
})

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
	const currentScheme = document.documentElement.dataset.colorScheme;
	const newScheme = currentScheme === 'light' ? 'dark' : 'light';
	document.documentElement.dataset.colorScheme = newScheme;
})

const gridChangeBtn = document.querySelector('.grid4');
const cardWrapper = document.querySelector('.card-wrapper');
gridChangeBtn.addEventListener('click', () => {
	const btnText = cardWrapper.classList.contains('grid4')? '4줄씩 보기' : '원래대로';
	gridChangeBtn.textContent = btnText;
	cards.forEach(card => {
		card.classList.remove('appear');
	})
	cardWrapper.classList.toggle('grid4');
	setTimeout(() => {
		cards.forEach((card, i) => {
			card.classList.add('appear');
			card.style.setProperty('--delay', `${i * 0.1}s`);
		})
	},10)
})
