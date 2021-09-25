/*** >> Function to get player name input ***/

function getPlayerName() {
	const playername = document.getElementById("playername").value;
	console.log(playername);
}
let music = document.getElementById("music");
function enableAutoplay() {
	music.autoplay = true;
	music.load();
}

music.oncanplay = function () {
	alert("Can start playing video");
};
