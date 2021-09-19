console.log("hi");

// shuffle array function
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		console.log("j:" + j);
		const temp = array[i];
		console.log("temp = array[i] :" + temp);
		array[i] = array[j];
		console.log("array[i]:" + array[i] + "= array[j]:" + array[j]);
		array[j] = temp;
		console.log("array[j]:" + array[j] + "= temp:" + temp);
	}
	return array;
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shuffleArray(testArr);
console.log(testArr);
