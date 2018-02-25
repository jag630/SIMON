function newGame(){
	document.getElementById("0").style = "background: red;";
	document.getElementById("1").style = "background-color: green;";
	document.getElementById("2").style = "background-color: yellow;";
	document.getElementById("3").style = "background-color: blue;";
	counter = 0, order = [], turn = 0, playerEntryOrder = 0, round = 2;
	timer = setInterval(nextColor, 900);
	document.getElementById("output").innerHTML = "Round "+ String(round - 1);
	document.getElementById("newgame").style = "visibility: hidden;";
	raudio = new Audio('1.wav');
	raudio.play();
	raudio.pause();
	gaudio = new Audio('2.wav');
	gaudio.play();
	gaudio.pause();
	yaudio = new Audio('3.wav');
	yaudio.play();
	yaudio.pause();
	baudio = new Audio('4.wav');
	baudio.play();
	baudio.pause();
}
function nextColor(){
	var rand = Math.floor(Math.random()*4);
	
	if(counter >= round){
		counter = 0;
		turn = 1;
		clearInterval(timer);
	}
	
	switch(rand){
		case 0: compRed();
				break;
		case 1: compGreen();
				break;
		case 2: compYellow();
				break;
		case 3: compBlue();
				break;
	}
	
	
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function compRed(){
	raudio.play();
	counter++;
	order.push(0);
	document.getElementById("0").style = "background: radial-gradient(circle, white, red);box-shadow: 0 0 20px white;";
	await sleep(500);
	document.getElementById("0").style = "background: red;";
	
}

async function compGreen(){
	gaudio.play();
	counter++;
	order.push(1);
	document.getElementById("1").style = "background: radial-gradient(circle, white, green);box-shadow: 0 0 20px white;";
	await sleep(500);
	document.getElementById("1").style = "background: green;";
	
}

async function compYellow(){
	yaudio.play();
	counter++;
	order.push(2);
	document.getElementById("2").style = "background: radial-gradient(circle, white, yellow);box-shadow: 0 0 20px white;";
	await sleep(500);
	document.getElementById("2").style = "background: yellow;";
	
}

async function compBlue(){
	baudio.play();
	counter++;
	order.push(3);
	document.getElementById("3").style = "background: radial-gradient(circle, white, blue);box-shadow: 0 0 20px white;";
	await sleep(500);
	document.getElementById("3").style = "background: blue;";
	
}

async function userRed(){
	if(turn === 1){
	turn=0;
	document.getElementById("0").style = "background: radial-gradient(circle, white, red);box-shadow: 0 0 20px white;";
	if(order[playerEntryOrder] === 0){
		playerEntryOrder++;
		var audio = new Audio('1.wav');
		audio.play();
	} else {
		var audio = new Audio('buzzer.wav');
		audio.play();
		document.getElementById("output").innerHTML +="<br>You lose!";
		document.getElementById("newgame").style = "visibility: visible;";
		return;
	}
	await sleep(200);
	document.getElementById("0").style = "background: red;";
	if(playerEntryOrder === order.length){
		round++;
		document.getElementById("output").innerHTML = "Round "+ String(round - 1);
		order = [];
		playerEntryOrder = 0;
		turn = 0;
		timer = setInterval(nextColor, 900);
	}
	turn=1;
}}

async function userGreen(){
	if(turn === 1){
	turn=0;
	document.getElementById("1").style = "background: radial-gradient(circle, white, green);box-shadow: 0 0 20px white;";
	if(order[playerEntryOrder] === 1){
		var audio = new Audio('2.wav');
		audio.play();
		playerEntryOrder++;
	} else {
		var audio = new Audio('buzzer.wav');
		audio.play();
		document.getElementById("output").innerHTML +="<br>You lose!";
		document.getElementById("newgame").style = "visibility: visible;";
		return;
	}
	await sleep(200);
	document.getElementById("1").style = "background: green;";
	if(playerEntryOrder === order.length){
		round++;
		document.getElementById("output").innerHTML = "Round "+ String(round - 1);
		order = [];
		playerEntryOrder = 0;
		turn = 0;
		timer = setInterval(nextColor, 900);
	}	
	turn=1;
}}

async function userYellow(){
	if(turn === 1){
	turn=0;
	document.getElementById("2").style = "background: radial-gradient(circle, white, yellow);box-shadow: 0 0 20px white;";
	if(order[playerEntryOrder] === 2){
		var audio = new Audio('3.wav');
		audio.play();
		playerEntryOrder++;
	} else {
		var audio = new Audio('buzzer.wav');
		audio.play();
		document.getElementById("output").innerHTML +="<br>You lose!";
		document.getElementById("newgame").style = "visibility: visible;";
		return;
	}
	await sleep(200);
	document.getElementById("2").style = "background: yellow;";
	if(playerEntryOrder === order.length){
		round++;
		document.getElementById("output").innerHTML = "Round "+ String(round - 1);
		order = [];
		playerEntryOrder = 0;
		turn = 0;
		timer = setInterval(nextColor, 900);
	}	
	turn=1;
}}

async function userBlue(){
	if(turn === 1){
	turn=0;
	document.getElementById("3").style = "background: radial-gradient(circle, white, blue);box-shadow: 0 0 20px white;";
	if(order[playerEntryOrder] === 3){
		var audio = new Audio('4.wav');
		audio.play();
		playerEntryOrder++;
	} else {
		var audio = new Audio('buzzer.wav');
		audio.play();
		document.getElementById("output").innerHTML +="<br>You lose!";
		document.getElementById("newgame").style = "visibility: visible;";
		return;
	}
	await sleep(200);
	document.getElementById("3").style = "background: blue;";
	if(playerEntryOrder === order.length){
		round++;
		document.getElementById("output").innerHTML = "Round "+ String(round - 1);
		order = [];
		playerEntryOrder = 0;
		turn = 0;
		timer = setInterval(nextColor, 900);
	}
	turn=1;
}}

window.onload = function(){
	document.getElementById("0").addEventListener("click", function(){userRed();});
	document.getElementById("1").addEventListener("click", function(){userGreen();});
	document.getElementById("2").addEventListener("click", function(){userYellow();});
	document.getElementById("3").addEventListener("click", function(){userBlue();});
	document.getElementById("0").style = "background: red;";
	document.getElementById("1").style = "background-color: green;";
	document.getElementById("2").style = "background-color: yellow;";
	document.getElementById("3").style = "background-color: blue;";
	document.getElementById("newgame").addEventListener("click", newGame);
};
