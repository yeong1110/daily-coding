const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	const userName = prompt('사용자명을 입력해주세요');
	
	if(userName && userName.trim()) {
		const message = `환영합니다  ${userName}님!`
		console.log(message);
		alert(message);
	}
})
