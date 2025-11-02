function checkAnswer (){
	let answer = prompt("Question: Who created JavaScript?" 
						+ "\n"
						+ "\n" 
						+ "A) Brendan Eich" 
						+ "\n" 
						+ "B) Bill Gates" 
						+ "\n" 
						+ "C) Mark Zuckerberg" 
						+ "\n"
						+ "\n"
						+ "Please select the correct option (A, B, or C).");
	switch (answer) {
		case "A":
		case "a":
		case "Brendan Eich":
			alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
			break;
		case "B":
		case "b":
		case "Bill Gates":
			alert("Nope. He lead the development of the Windows Operating System.");
			checkAnswer();
			break;
		case "C":
		case "c":
		case "Mark Zuckerberg":
			alert("Nope. He just came up with the idea for a social network idea.");
			checkAnswer();
			break;
	
		default:
			alert("Please select a valid option (A, B, or C).");
			break;
	}
}

checkAnswer();