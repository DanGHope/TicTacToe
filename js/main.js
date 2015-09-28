var cells;
var curTurn;
var gameOver;
//Init
window.onload = function() {
	cells = document.getElementsByClassName("cell");
	curTurn = "X";
	gameOver = false;
};

//Cell Click Logic
function cellClicked(element) {
	//Check if game is still in play state
	if (!gameOver) {
		//Check if square can be played on
		if (element.innerHTML == "&nbsp;") {
			element.innerHTML = curTurn;

			//Check for win every turn and display winner
			var winner = checkWin();
			if (winner) {
				gameOver = true;
				if (winner != "TIE") {
					document.getElementById("gameWin").innerHTML = winner + " WINS!";
				} else {
					document.getElementById("gameWin").innerHTML = "TIE GAME!";
				}
			}

			//Alternate Turns
			if (curTurn == "X") {
				curTurn = "O";
			} else {
				curTurn = "X";
			}
			
			//Display whos turn it is
			document.getElementById("currentTurn").innerHTML = curTurn + "'s Turn";
		}
	}
}

//Win Condition
function checkWin() {

	//Check Rows
	for ( row = 0; row < 3; row++) {
		for ( n = row * 3; n < 3 + (row * 3); n++) {
			if (cells[n].innerHTML != curTurn) {
				break;
			} else if (n == 2 + (3 * row)) {
				return curTurn;
			}
		}
	}

	//Check Columns
	for ( col = 0; col < 3; col++) {
		for ( n = col; n < 7 + col; n += 3) {
			if (cells[n].innerHTML != curTurn) {
				break;
			} else if (n == 6 + col) {
				return curTurn;
			}
		}
	}

	//Check Tie
	for ( i = 0; i < 9; i++) {
		if (cells[i].innerHTML == "&nbsp;") {
			break;
		} else if (i == 8) {
			return "TIE";
		}
	}

	return 0;
}

//Reset Game Button
function reset() {
	//Clear Board
	for ( i = 0; i < cells.length; i++) {
		cells[i].innerHTML = "&nbsp;";
	}
	//Reset Variables
	curTurn = "X";
	gameOver = false;
	document.getElementById("gameWin").innerHTML = "";
	document.getElementById("currentTurn").innerHTML = curTurn + "'s Turn";
}
