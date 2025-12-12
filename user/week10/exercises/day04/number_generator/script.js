// INSERT YOUR CODE HERE
const wrapper = document.querySelector(".wrapper");
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";

function getPrimeNumber(num) {
	if (num < 2) {
		return false;
	} else if (num === 2) {
		return true;
	} else {
		for (let i = num - 1; i >= 2; i--) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
}

for (let i = 0; i < 102; i++){
	const numberBox = document.createElement("div");
	numberBox.textContent = i;
	numberBox.style.border = "1px solid black";
	numberBox.style.width = "50px";
	numberBox.style.height = "30px";
	numberBox.style.display = "flex";
	numberBox.style.justifyContent = "center";
	numberBox.style.alignItems = "center";
	numberBox.style.margin = "3px";
	if (i % 2 === 0){
		numberBox.style.backgroundColor = "lightgreen";
	} else {
		numberBox.style.backgroundColor = "yellow";
	}
	if (getPrimeNumber(i)) {
		numberBox.style.backgroundColor = "red";
	}
	wrapper.appendChild(numberBox);
}