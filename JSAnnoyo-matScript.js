setTimeout(annoy, 2000);

function annoy(){
	var answer = prompt("Are we there yet?");
	var counter = 1

	while(answer.indexOf("yes")=== -1 && answer !== "yeah") {
		var answer = prompt("Are we there yet?");
		counter++;
	}

	alert("Yay, we finally made it! You achieved level " + counter);
}

