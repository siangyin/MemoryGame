console.log("hi");

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

shuffleArray(randArr1);
console.log(randArr1);

function addCards(num) {
	for (let i = 0; i < num; i++) {
		let newDivChild = document.createElement("div");
		document
			.getElementById("cardbox")
			.appendChild(newDivChild)
			.setAttribute("id", i);
	}
}

addCards(60);
