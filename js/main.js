/*** >> Function to get player name input ***/
let playername;
function getPlayerName() {
	const playername = document.getElementById("playername").value;
	console.log(playername);
}

/***__Functions: >>-f->> randCardsArr (the no. of unique pairs) return random integer (0 to 80) for random cardID into an array >>-f->> randId() then >>-f->> dblCardsArr(arr) duplicate each card in given array and >>-f->> shuffleArray(arr)shuffle the cards e.g:randCardsArr(2):[5, 59, 5, 59]__***/
function randCardsArr(num) {
	const randId = () => {
		return Math.floor(Math.random() * 81);
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

/*** Function: Generate Cards in <div id=id# class = cards> >>-f->> addCards(no. of card) appending into HTML page  ***/

function addCards(num) {
	for (let i = 0; i < num; i++) {
		let newDivChild = document.createElement("div");
		document
			.getElementById("cardbox")
			.appendChild(newDivChild)
			.setAttribute("id", i);
		let docId = document.getElementById(i);
		docId.setAttribute("class", "cards");
	}
}

/*** Objects for Games level structures & player ***/

const player = { currentlvl: 1, coins: 100, matches: 0, turns: 0 };

const createLvlObj = class {
	constructor(level, cards, time) {
		this.level = "Level " + level;
		this.cards = cards;
		this.pairs = cards / 2;
		this.time = time;
	}
};

const gameLvl = {
	1: { level: "Level 1", cards: 8, pairs: 4, time: 60 },
	2: { level: "Level 2", cards: 16, pairs: 8, time: 60 },
	3: { level: "Level 3", cards: 24, pairs: 12, time: 90 },
	4: { level: "Level 4", cards: 32, pairs: 16, time: 90 },
	5: { level: "Level 5", cards: 40, pairs: 20, time: 90 },
};

addCards(gameLvl[player.currentlvl].cards);
