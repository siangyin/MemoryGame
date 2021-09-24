// import DefaultExport from "./module.js";

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

/*** Function: Generate Cards in <div id=id# class = cards> >>-f->> addCards(cards no.) appending into HTML page  ***/

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

/*** Data Objects for Games level structures & player ***/

class User {
	constructor(name) {
		this.name = name;
		this.currentlvl = 1;
		this.coins = 100;
		this.complete = 0;
		this.moves = 0;
		this.sound = true;
	}

	addCoins(num) {
		this.coins += num;
	}
	deductCoins(num) {
		this.coins -= num;
	}

	addMoves() {
		this.moves++;
	}

	addComplete() {
		this.complete++;
	}

	nextLevel() {
		this.currentlvl++;
	}
}

const player = new User("lee");

const gameLvl = {
	1: { level: "Level 1", cards: 8, pairs: 4, time: 60 },
	2: { level: "Level 2", cards: 16, pairs: 8, time: 60 },
	3: { level: "Level 3", cards: 24, pairs: 12, time: 90 },
	4: { level: "Level 4", cards: 32, pairs: 16, time: 90 },
	5: { level: "Level 5", cards: 40, pairs: 20, time: 90 },
};

let currLvlCardsArr;
let cardsImgClicked = [];

addCards(gameLvl[player.currentlvl].cards);

let coinsTxt = document.getElementById("coins");
let achievementTxt = document.getElementById("achievement");
let movesTxt = document.getElementById("moves");
let timeTxt = document.getElementById("time");

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

// usage:
countdown(1000);

/*** DOM events ***/

const cardbox = document.getElementById("cardbox");

/*** Function: get card img by cards click ***/

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
	// imgClicked.classList.toggle();
	console.log(e.target);
	console.log(imgClicked);
	console.log(img);
	console.log(divId);
	console.log(cardsImgClicked);
});

/*** Function: Check cards img if same ***/

function check2Cards() {
	if (
		cardsImgClicked.length === 2 &&
		cardsImgClicked[0]["img"] === cardsImgClicked[1]["img"]
	) {
		console.log(true);
		document.getElementById(cardsImgClicked[0]["divId"]).style.visibility =
			"hidden";
		document.getElementById(cardsImgClicked[1]["divId"]).style.visibility =
			"hidden";
		cardsImgClicked = [];
	} else {
		console.log(false);
		document
			.getElementById(cardsImgClicked[0]["divId"])
			.firstChild.classList.add("hide");
		document
			.getElementById(cardsImgClicked[1]["divId"])
			.firstChild.classList.add("hide");
		cardsImgClicked = [];
	}
}

/***   ***/
