/** main javascript **/

// function to get player name input
let playername;
function getPlayerName() {
	const playername = document.getElementById("playername").value;
	console.log(playername);
}

// shuffle array function
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

const randArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const randArr2 = [...randArr1, ...randArr1];
shuffleArray(randArr2);
console.log(randArr2);

function addCards(num) {
	for (let i = 0; i < num; i++) {
		let newDivChild = document.createElement("div");
		document
			.getElementById("cardbox")
			.appendChild(newDivChild)
			.setAttribute("id", i);
	}
}

addCards(40);
