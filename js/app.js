// import DefaultExport from "./module.js";

//--- DATA Objects for Games level structures & player ***/

// class for player setup
class User {
	constructor(name) {
		this.name = name;
		this.currentlvl = 1;
		this.coins = 100;
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

	completeALevel() {
		console.log(
			`Good Job, you have complete this level ${this.currentlvl} in ${timeTxt.textContent}`
		);
		this.gamerecord[this.currentlvl] = timeTxt.textContent;
		removeAllChilds(cardbox);
		currLvlCardsArr = [];
		this.coins += gameLvl[this.currentlvl].bonus;
		coinsTxt.textContent = this.coins;
		this.currentlvl++;
	}

	nextLevel() {
		h1LvlTxt.textContent = gameLvl[this.currentlvl].level;
		addCards(gameLvl[this.currentlvl].cards);
		this.coins += gameLvl[this.currentlvl].cards;
		this.moves = 0;
		movesTxt.textContent = this.moves;
		this.complete = 0;
		achievementTxt.textContent = this.complete;
		countdown(gameLvl[player.currentlvl].time);
	}
}

// game level structures
const gameLvl = {
	1: {
		level: "Level 1",
		cards: 10,
		pairs: 5,
		time: 60,
		speed: 1500,
		earning: 50,
		damages: 10,
		bonus: 250,
	},
	2: {
		level: "Level 2",
		cards: 10,
		pairs: 5,
		time: 60,
		speed: 1400,
		earning: 75,
		damages: 30,
		bonus: 500,
	},
	3: {
		level: "Level 3",
		cards: 10,
		pairs: 5,
		time: 90,
		speed: 1300,
		earning: 100,
		damages: 60,
		bonus: 1000,
	},
	4: {
		level: "Level 4",
		cards: 10,
		pairs: 5,
		time: 90,
		speed: 1200,
		earning: 150,
		damages: 120,
		bonus: 2500,
	},
	5: {
		level: "Level 5",
		cards: 10,
		pairs: 5,
		time: 90,
		speed: 1000,
		earning: 200,
		damages: 200,
		bonus: 5000,
	},
};

// -- GLOBAL variables
const player = new User("lee");
let currLvlCardsArr;
let cardsImgClicked = [];

const cardbox = document.getElementById("cardbox");

const h1LvlTxt = document.getElementById("level");
const coinsTxt = document.getElementById("coins");
const achievementTxt = document.getElementById("achievement");
const movesTxt = document.getElementById("moves");
const timeTxt = document.getElementById("time");

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

		image.src = "../images/cards/cards" + currLvlCardsArr[i] + ".jpeg";
		image.setAttribute("img", currLvlCardsArr[i]);
		docId.appendChild(image).className = "hide cutie";
	}
}

/*>>-f->>  Function: countdown(each level time)  ***/

function countdown(time) {
	let current = time;
	timeFormater = (from) => {
		let min = parseInt(from / 60);
		let sec = from % 60 > 9 ? from % 60 : `0${from % 60}`;
		return `${min}:${sec}`;
	};
	let timerInt = setInterval(function () {
		timeTxt.textContent = timeFormater(current);
		if (current === 0) {
			alert("times's up");
			clearInterval(timerInt);
		}
		current--;
	}, 1000);
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
	countdown(gameLvl[player.currentlvl].time);
}

/*** DOM events ***/

cardbox.addEventListener("click", (e) => {
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
		console.log(true);
		matchedPair();
		cardsImgClicked = [];
		player.nextLevel();
	} else if (
		cardsImgClicked.length === 2 &&
		cardsImgClicked[0]["img"] === cardsImgClicked[1]["img"]
	) {
		console.log(true);
		matchedPair();
		document.getElementById(cardsImgClicked[0]["divId"]).style.visibility =
			"hidden";
		document.getElementById(cardsImgClicked[1]["divId"]).style.visibility =
			"hidden";
		cardsImgClicked = [];
	} else {
		console.log(false);
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
