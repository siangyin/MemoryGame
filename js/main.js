/*** >> Function to get player name input ***/

function getPlayerName() {
	const playername = document.getElementById("playername").value;
	console.log(playername);
}

document.addEventListener("DOMContentLoaded", function () {
	bkgmusic.play();
});

const bkgmusic = new Audio("backgroundmusic0.mp3");
