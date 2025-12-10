function updateDateTime() {
	const now = new Date();
	const currentDateTime = now.toLocaleString();
	document.querySelector('#datetime').textContent = currentDateTime;
	inner = document.querySelector('h1').innerHTML;
	inner = `Asabeneh Yetayeh challenges in <span>2020</span>`;
	document.querySelector('h1').innerHTML = inner;
	document.querySelector('h1 span').style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
	document.querySelector('#datetime').style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
	lis = document.querySelectorAll('li');
	lis.forEach((li, index) => {
		if (index  === 0) {
			li.style.backgroundColor = 'green';
		} else if (index === 1) {
			li.style.backgroundColor = 'yellow';
		} else {
			li.style.backgroundColor = 'red';
		}
	});
}

setInterval(updateDateTime, 1000);