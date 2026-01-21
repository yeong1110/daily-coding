const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	const userName = prompt('사용자명을 입력해주세요');
	console.log(`환영합니다  ${userName}님!`);
	alert(`환영합니다  ${userName}님!`)
})