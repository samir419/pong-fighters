let GAME_DELTA = 0.5
let GAME_FRAME = 1.5
document.getElementById("gamespeed-label").textContent="game speed: "+GAME_DELTA
document.getElementById("frametime-label").textContent="frame time: "+GAME_FRAME

document.getElementById("gamespeed-input").onchange=(event)=>{
	GAME_DELTA = event.target.value;
	document.getElementById("gamespeed-label").textContent="game speed: "+GAME_DELTA
}
document.getElementById("frametime-input").onchange=(event)=>{
	GAME_FRAME = event.target.value;
	document.getElementById("frametime-label").textContent="frame time: "+GAME_FRAME
}