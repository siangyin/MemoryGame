/*** >> Function to get player name input ***/

let playername;
function getPlayerName() {
	const playername = document.getElementById("playername").value;
	console.log(playername);
}

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

/*** Function: Check cards img  ***/

const checkCards = (num1, num2) => {
	return 0;
};

/*** Data Objects for Games level structures & player ***/

class User {
	constructor(name) {
		this.name = name;
		this.currentlvl = 1;
		this.coins = 100;
		this.complete = 0;
		this.moves = 0;
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

addCards(gameLvl[player.currentlvl].cards);

// document.getElementById("1").firstChild.style.visibility = "visible";

/*** DOM events ***/
function gotalert() {
	alert("Clicked!");
}

const cardbox = document.getElementById("cardbox");
// cardbox.addEventListener("click", (e) => {
// 	let imgClicked = e;
// 	let img = e.target.getAttribute("img");
// 	console.log(imgClicked);
// 	console.log(e.target);
// 	console.log(img);
// 	console.log(e.target);
// });

/*** Function: toggle cards hide or show  ***/
// const cards
// function toggleCards() {
//  if ()
// }

cardbox.addEventListener("click", (e) => {
	let imgClicked = e.target.firstChild;
	imgClicked.classList.toggle("hide");
	// imgClicked.classList.toggle();
	console.log(e.target.firstChild);
});

/*** Data Objects for Games level structures & player ***/
