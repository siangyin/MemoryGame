//--- DATA Objects for Games level structures & player ***/
// class for player setup
class User {
	constructor(name) {
		this.name = name;
		this.currentlvl = 1;
		this.coins = 20;
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
		achievementTxt.textContent = this.complete;
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
		clearInterval(timerInt);
	}

	completeALevel() {
		endGameTime = new Date().getTime();
		gameTimeRec = parseInt((endGameTime - startGameTime) / 1000);

		console.log(
			`Good Job, you have complete ${this.currentlvl} in ${gameTimeRec} sec`
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
		h1LvlTxt.textContent = gameLvl[this.currentlvl].level;
		time = gameLvl[player.currentlvl].time;
		timeTxt.textContent = timeFormater(time);
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
		speed: 1400,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	3: {
		level: "Level 3",
		cards: 6,
		pairs: 3,
		time: 600,
		speed: 1300,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	4: {
		level: "Level 4",
		cards: 6,
		pairs: 3,
		time: 600,
		speed: 1000,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
	5: {
		level: "Level 5",
		cards: 6,
		pairs: 3,
		time: 600,
		speed: 800,
		earning: 20,
		damages: 10,
		bonus: 100,
	},
};

// -- GLOBAL variables
const player = new User("lee");
let currLvlCardsArr;
let cardsImgClicked = [];
let startGameTime = 0;
let endGameTime = 0;
let gameTimeRec = 0;
let time;
time = gameLvl[player.currentlvl].time;
let timerInt = setInterval(countDown, 1000);

const cardbox = document.getElementById("cardbox");

const h1LvlTxt = document.getElementById("level");
const coinsTxt = document.getElementById("coins");
const achievementTxt = document.getElementById("achievement");
const movesTxt = document.getElementById("moves");
const timeTxt = document.getElementById("time");

startPlay();

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

		document
			.getElementById("cardbox")
			.appendChild(newDiv)
			.setAttribute("id", i);

		let docId = document.getElementById(i);
		docId.className = "cards";

		image.src = "images/cards/cards" + currLvlCardsArr[i] + ".jpeg";
		image.setAttribute("img", currLvlCardsArr[i]);
		docId.appendChild(image).className = "hide cutie";
	}
}

/*>>-f->>  Function: countdown(each level time)  ***/

function timeFormater(time) {
	let min = parseInt(time / 60);
	let sec = time % 60 > 9 ? time % 60 : `0${time % 60}`;
	return `${min}:${sec}`;
}

function countDown() {
	timeTxt.textContent = timeFormater(time);
	time--;
	if (time === 0 || player.coins <= 0) {
		clearInterval(timerInt);
		console.log("GAME OVER");
	}
}

/*>>-f->>  Function: clear all existing cards (uses: next level/ replay same level)  ***/

const removeAllChilds = (parent) => {
	while (parent.lastChild) {
		parent.removeChild(parent.lastChild);
	}
};

// >>-f->>  Function: start play
function startPlay() {
	addCards(gameLvl[player.currentlvl].cards);

	startGameTime = new Date().getTime();
}

/*** DOM events ***/

cardbox.addEventListener("click", (e) => {
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

/*>>-f->>  Function: Check cards img if same and push to temp arr with cards id and img ***/

function check2Cards() {
	if (player.complete === gameLvl[player.currentlvl].pairs - 1) {
		matchedPair();
		cardsImgClicked = [];
	} else if (
		cardsImgClicked.length === 2 &&
		cardsImgClicked[0]["img"] === cardsImgClicked[1]["img"] //is2samecards
	) {
		matchedPair();
		document.getElementById(cardsImgClicked[0]["divId"]).style.visibility =
			"hidden"; // variable doc get elmt
		document.getElementById(cardsImgClicked[1]["divId"]).style.visibility =
			"hidden";
		cardsImgClicked = [];
	} else {
		xMatch();
		document
			.getElementById(cardsImgClicked[0]["divId"])
			.firstChild.classList.add("hide");
		document
			.getElementById(cardsImgClicked[1]["divId"])
			.firstChild.classList.add("hide");
		cardsImgClicked = [];
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
