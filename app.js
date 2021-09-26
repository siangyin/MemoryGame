/*** >> Function to get player name input ***/

// function getPlayerName() {
// 	const playername = document.getElementById("playername").value;
// 	console.log(playername);
// }

//--- DATA Objects for Games level structures & player ***/
// class for player setup
class User {
	constructor(name) {
		this.name = name;
		this.currentlvl = 1;
		this.coins = startingCoins;
		this.complete = 0;
		this.moves = 0;
		this.sound = true;
		this.gamerecord = {};
	}

	addCoins(num) {
		this.coins += num;
		coinsTxt.textContent = this.coins;
	}
	deductCoins(num) {
		this.coins -= num;
		coinsTxt.textContent = this.coins;
	}
	addMoves() {
		this.moves++;
		movesTxt.textContent = this.moves;
	}
	addComplete() {
		this.complete++;
		achievementTxt.textContent = `${this.complete} / ${
			gameLvl[this.currentlvl].pairs
		}`;
	}

	reset() {
		removeAllChilds(cardbox);
		currLvlCardsArr = [];
		startGameTime = 0;
		endGameTime = 0;
		gameTimeRec = 0;
		this.moves = 0;
		movesTxt.textContent = this.moves;
		this.complete = 0;
		achievementTxt.textContent = this.complete;
		stopInt();
	}

	replay() {
		stopInt();
		// this.reset();
		removeAllChilds(cardbox);
		currLvlCardsArr = [];
		startGameTime = 0;
		endGameTime = 0;
		gameTimeRec = 0;
		this.moves = 0;
		movesTxt.textContent = this.moves;
		this.complete = 0;
		achievementTxt.textContent = this.complete;
		//
		this.currentlvl = 1;
		h1LvlTxt.textContent = gameLvl[this.currentlvl].level;
		this.gamerecord = {};
		this.coins = startingCoins;
		coinsTxt.textContent = this.coins;
		time = gameLvl[player.currentlvl].time;
		timeTxt.textContent = timeFormater(time);
		timerInt();
		addCards(gameLvl[this.currentlvl].cards);
		startGameTime = new Date().getTime();
	}

	completeALevel() {
		if (player.sound) {
			bonus.play();
		}

		endGameTime = new Date().getTime();
		gameTimeRec = parseInt((endGameTime - startGameTime) / 1000);

		console.log(
			`Good Job, you have completed Level ${this.currentlvl} in ${gameTimeRec} sec`
		);

		this.gamerecord[this.currentlvl] = gameTimeRec;
		this.coins += gameLvl[this.currentlvl].bonus;
		coinsTxt.textContent = this.coins;

		if (this.currentlvl === Object.keys(gameLvl).length) {
			console.log("Well Done, you have completed all levels");
			this.reset();
		} else {
			this.currentlvl++;
			this.reset();
			this.nextLevel();
		}
	}

	nextLevel() {
		stopInt();
		h1LvlTxt.textContent = gameLvl[this.currentlvl].level;
		console.log(time);
		time = gameLvl[player.currentlvl].time;
		timeTxt.textContent = timeFormater(time);
		timerInt();
		addCards(gameLvl[this.currentlvl].cards);
		startGameTime = new Date().getTime();
	}
}

// game level structures
const gameLvl = {
	1: {
		level: "Level 1",
		cards: 4,
		pairs: 2,
		time: 20,
		speed: 1500,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	2: {
		level: "Level 2",
		cards: 6,
		pairs: 3,
		time: 30,
		speed: 1300,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	3: {
		level: "Level 3",
		cards: 6,
		pairs: 3,
		time: 60,
		speed: 1100,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	4: {
		level: "Level 4",
		cards: 6,
		pairs: 3,
		time: 60,
		speed: 900,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	5: {
		level: "Level 5",
		cards: 6,
		pairs: 3,
		time: 120,
		speed: 700,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
};

// -- GLOBAL variables
let startingCoins = 20;
const player = new User("lee");

let currLvlCardsArr;
let cardsImgClicked = [];
let startGameTime = 0;
let endGameTime = 0;
let gameTimeRec = 0;
let time;
time = gameLvl[player.currentlvl].time;

let gameInterval;

const cardbox = document.getElementById("cardbox");
const h1LvlTxt = document.getElementById("level");
const coinsTxt = document.getElementById("coins");
const achievementTxt = document.getElementById("achievement");
const movesTxt = document.getElementById("moves");
const timeTxt = document.getElementById("time");
const replayBtn = document.getElementById("replayBtn");
const soundBtn = document.getElementById("soundBtn");

coinsTxt.textContent = startingCoins;
achievementTxt.textContent = `${player.complete} / ${
	gameLvl[player.currentlvl].pairs
}`;

replayBtn.addEventListener("click", player.replay);

document.addEventListener("DOMContentLoaded", function () {
	startPlay();
});

const flipping = new Audio("audio/flipping.wav");
const wrongAns = new Audio("audio/wronganswerbuzz.wav");
const correctAns = new Audio("audio/correctanswer.wav");
const timesup = new Audio("audio/timesup.mp3");
const timercd = new Audio("audio/timerclock10s.mp3");
const bonus = new Audio("audio/prize.wav");

const timerInt = () => {
	gameInterval = setInterval(timeCount, 1000);
};

const stopInt = () => {
	clearInterval(gameInterval);
};

/***  Functions: >>-f->> randCardsArr (set no.) return for random cardID into an array (cards162: 0 to 161) *2 sets and >>-f->> shuffleArray(arr) shuffle the cards e.g: randCardsArr(2):[5, 59, 5, 59]  ***/

function randCardsArr(num) {
	const randId = () => {
		return Math.floor(Math.random() * 162);
	};
	let array = [];
	do {
		let j = randId();
		if (!array.includes(j)) {
			array.push(j);
		}
	} while (array.length < num);

	const dblCardsArr = (arr) => {
		const shuffleArray = (arr) => {
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
			return arr;
		};
		let arrX2 = [...shuffleArray(arr), ...shuffleArray(arr)];
		return shuffleArray(arrX2);
	};
	return dblCardsArr(array);
}

/*>>-f->>  Function: Generate Cards in div id=id# class=cards addCards(cards no.) appending into HTML page  ***/

function addCards(num) {
	currLvlCardsArr = randCardsArr(gameLvl[player.currentlvl].cards / 2);
	for (let i = 0; i < num; i++) {
		let newDiv = document.createElement("div");
		let image = new Image();

		cardbox.appendChild(newDiv).setAttribute("id", i);

		let docId = document.getElementById(i);
		docId.className = "cards";

		image.src = "images/cards/cards" + currLvlCardsArr[i] + ".jpeg";
		image.setAttribute("img", currLvlCardsArr[i]);
		docId.appendChild(image).className = "hide cutie";
	}
}

// >>-f->>  Function: start play

function startPlay() {
	addCards(gameLvl[player.currentlvl].cards);
	timerInt();
	startGameTime = new Date().getTime();
}

/*>>-f->>  Function: for timer countdown & time:format  ***/

function timeFormater(time) {
	let min = parseInt(time / 60);
	let sec = time % 60 > 9 ? time % 60 : `0${time % 60}`;
	return `0${min}:${sec}`;
}

function timeCount() {
	timeTxt.textContent = timeFormater(time);
	time--;
	console.log(time);
	if (time === 10 && player.sound === true) {
		timercd.play();
	}
	if (
		time === 0 ||
		player.coins === 0 ||
		player.coins - gameLvl[player.currentlvl].damages < 0
	) {
		stopInt();
		if (player.sound) {
			timesup.play();
		}

		console.log("GAME OVER");
	}
	timeTxt.textContent = timeFormater(time);
}

/*>>-f->>  Function: clear all existing cards (uses: next level/ replay same level)  ***/

function removeAllChilds(parent) {
	while (parent.lastChild) {
		parent.removeChild(parent.lastChild);
	}
}

/*>>-f->>  Function: Check cards img if same and push to temp arr with cards id and img ***/

function check2Cards() {
	let firstCardID = document.getElementById(cardsImgClicked[0]["divId"]);
	let secondCardID = document.getElementById(cardsImgClicked[1]["divId"]);
	//

	if (cardsImgClicked.length === 2) {
		let is2SameCards = cardsImgClicked[0]["img"] === cardsImgClicked[1]["img"];
		if (player.complete === gameLvl[player.currentlvl].pairs - 1) {
			if (player.sound) {
				correctAns.play();
			}

			matchedPair();
			cardsImgClicked = [];
		} else if (is2SameCards) {
			if (player.sound) {
				correctAns.play();
			}

			firstCardID.style.visibility = "hidden";
			secondCardID.style.visibility = "hidden";
			matchedPair();
			cardsImgClicked = [];
		} else if (!is2SameCards) {
			if (player.sound) {
				wrongAns.play();
			}

			firstCardID.firstChild.classList.add("hide");
			secondCardID.firstChild.classList.add("hide");

			xMatch();
			cardsImgClicked = [];
		}
	}
}

/*>>-f->>  Function: matchedPair and xMatch ***/
function matchedPair() {
	player.addMoves();
	player.addComplete();
	player.addCoins(gameLvl[player.currentlvl].earning);
	if (player.complete === gameLvl[player.currentlvl].pairs) {
		player.completeALevel();
	}
}

function xMatch() {
	player.addMoves();
	player.deductCoins(gameLvl[player.currentlvl].damages);
}

/*** DOM events ***/

cardbox.addEventListener("click", (e) => {
	if (player.sound) {
		flipping.play();
	}
	if (cardsImgClicked.length === 2) {
		return;
	}
	let imgClicked = e.target.firstChild;
	let img = imgClicked.getAttribute("img");
	let divId = e.target.getAttribute("id");
	if (imgClicked.classList.contains("hide")) {
		imgClicked.classList.remove("hide");
		cardsImgClicked.push({ divId: divId, img: img });
	} else {
		imgClicked.classList.add("hide");
	}

	setTimeout(function () {
		if (cardsImgClicked.length === 2) {
			check2Cards();
		}
	}, gameLvl[player.currentlvl].speed);
});

soundBtn.addEventListener("click", (e) => {
	if (e.target.textContent === "🔔") {
		player.sound = false;
		e.target.textContent = "🔕";
		document.getElementById("bkgmusic").muted = true;
	} else {
		player.sound = true;
		e.target.textContent = "🔔";
		document.getElementById("bkgmusic").muted = false;
	}
});
