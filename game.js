/*

	遊戲JavaScript文件
	
*/

var currentPlayer = 1;
var player1TotalScore = 0;
var player2TotalScore = 0;

var counter = 1;

var isPlayingGame = true;

// document.querySelector('#player1-current-score').textContent = dice; // 玩家1的點數數字 
// document.querySelector('#player' + currentPlayer + '-current-score').textContent = dice; // 把玩家數字變成 變量 即可替換玩家


// document.querySelector('#player' + currentPlayer + '-current-score').innerHTML = '<h1>'+ dice +'<h1>';  // 把玩家的點數數字變大

// document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice').style = 'display: none';

document.querySelector('.winner1').style.display = 'none';
document.querySelector('.winner2').style.display = 'none';


// Event 監聽
// 哪裡會變，就是一個變量
document.querySelector('.roll').addEventListener('click', function(){



	if (isPlayingGame) {

	var dice = Math.floor(Math.random() * 6) + 1; // 使用 * 6 + 1 是因為不要有 0
	// console.log(dice);
	document.querySelector('.dice').style = 'display: block';
	document.querySelector('.dice').src = 'dice' + dice + '.png';

		if(currentPlayer === 1) {

			document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;

			player1TotalScore += dice;
			document.getElementById('player'+ currentPlayer +'-total-score').textContent = player1TotalScore;

			document.querySelector('.panel-'+ currentPlayer).classList.remove('active');
			currentPlayer = 2;
			document.querySelector('.panel-'+ currentPlayer).classList.add('active');
			document.getElementById('player'+ currentPlayer +'-current-score').textContent = 0;

		} else {

			document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;

			player2TotalScore += dice;
			document.getElementById('player'+ currentPlayer +'-total-score').textContent = player2TotalScore;

			document.querySelector('.panel-'+ currentPlayer).classList.remove('active');
			currentPlayer = 1;
			document.querySelector('.panel-'+ currentPlayer).classList.add('active');
			document.getElementById('player'+ currentPlayer +'-current-score').textContent = 0;
		}

		counter += 1;
		// console.log(counter);

		if(counter === 7) {

			if(player1TotalScore > player2TotalScore) {

				document.querySelector('.winner1').style.display = 'block';
				document.getElementById('player1-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;

			} else if(player1TotalScore < player2TotalScore) {

				document.querySelector('.winner2').style.display = 'block';
				document.getElementById('player2-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;

			} else {

				document.querySelector('.roll').textContent = '平手';
				isPlayingGame = false;

			}
		}
	} else {

		// initial game
		init();
		isPlayingGame = true;

	}



	

});


document.querySelector('.newGame').addEventListener('click', function() {

	init();
	isPlayingGame = true;

});


// 把 初始化遊戲的 function 設在 eventListener 外面，需要時調用
function init() {

	currentPlayer = 1;
	player1TotalScore = 0;
	player2TotalScore = 0;
	counter = 1;

	document.querySelector('.dice').style = 'display: none';
	document.querySelector('.winner1').style.display = 'none';
	document.querySelector('.winner2').style.display = 'none';

	document.getElementById('player1-current-score').textContent = 0;
	document.getElementById('player2-current-score').textContent = 0;
	document.getElementById('player1-total-score').textContent = 0;
	document.getElementById('player2-total-score').textContent = 0;

	document.querySelector('.panel-1').classList.add('active');
	document.querySelector('.panel-2').classList.remove('active');

	document.querySelector('.roll').textContent = '摇骰子';
	document.getElementById('player1-current-score').style = 'margin-top: 55px';
	document.getElementById('player2-current-score').style = 'margin-top: 55px';

}