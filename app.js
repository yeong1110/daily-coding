const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	let userName = prompt('사용자명을 입력해주세요');
	
	while(userName !== null && !userName.trim()) {
		userName = prompt('사용자명은 필수값입니다')
	}
	if(userNamegit) {
		const message = `환영합니다 ${userName}님!`
		console.log(message);
		alert(message);
	}
	
})

const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
	card.style.setProperty('--delay', `${i * 0.1}s`);
})
