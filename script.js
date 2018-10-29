var results = {
    player0: 0,
    player1: 0
}

var winner = -1;
var activePlayer = 0;   
var gameFields = {
             top: [-1, -2, -3],
            mid: [-4, -5, -6],
            bottom: [-7,-8,-9]
    }

// BUTTONS
document.querySelector('.new__game').addEventListener('click', gameInit);
  document.querySelector('.reset__score').addEventListener('click',resetScores);


// Event Listeneri za svaki field

document.querySelector('.field__1').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.top[0] <= -1 && winner === -1){
                document.querySelector('.field__1').textContent = 'X';gameFields.top[0] = 0;winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.top[0] <= -1 && winner === -1){
                document.querySelector('.field__1').textContent = 'O';gameFields.top[0] = 1;winChecker();  activePlayer = changePlayer(activePlayer); 
            }
    })
    document.querySelector('.field__2').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.top[1] <= -1 && winner === -1){
                document.querySelector('.field__2').textContent = 'X'; gameFields.top[1] = 0;winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.top[1] <= -1 && winner === -1){
                document.querySelector('.field__2').textContent = 'O';gameFields.top[1] = 1; winChecker(); activePlayer = changePlayer(activePlayer);  
            }
    })
    document.querySelector('.field__3').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.top[2] <= -1 && winner === -1){
                document.querySelector('.field__3').textContent = 'X'; gameFields.top[2] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.top[2] <= -1 && winner === -1){
                document.querySelector('.field__3').textContent = 'O';gameFields.top[2] = 1; winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })


    document.querySelector('.field__4').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.mid[0] <= -1 && winner === -1){
                document.querySelector('.field__4').textContent = 'X'; gameFields.mid[0] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.mid[0] <= -1 && winner === -1){
                document.querySelector('.field__4').textContent = 'O'; gameFields.mid[0] = 1;winChecker();  activePlayer = changePlayer(activePlayer); 
            }
    })
    document.querySelector('.field__5').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.mid[1] <= -1 && winner === -1){
                document.querySelector('.field__5').textContent = 'X'; gameFields.mid[1] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.mid[1] <= -1 && winner === -1){
                document.querySelector('.field__5').textContent = 'O'; gameFields.mid[1] = 1; winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })
    document.querySelector('.field__6').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.mid[2] <= -1 && winner === -1){
                document.querySelector('.field__6').textContent = 'X'; gameFields.mid[2] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.mid[2] <= -1 && winner === -1){ 
                document.querySelector('.field__6').textContent = 'O';gameFields.mid[2] = 1; winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })


    document.querySelector('.field__7').addEventListener('click', function(){
            if (activePlayer === 0 && gameFields.bottom[0] <= -1 && winner === -1){
                document.querySelector('.field__7').textContent = 'X'; gameFields.bottom[0] = 0;  winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.bottom[0] <= -1 && winner === -1){
                document.querySelector('.field__7').textContent = 'O'; gameFields.bottom[0] = 1;  winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })
    document.querySelector('.field__8').addEventListener('click', function(){
            if (activePlayer === 0  && gameFields.bottom[1] <= -1 && winner === -1){
                document.querySelector('.field__8').textContent = 'X'; gameFields.bottom[1] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.bottom[1] <= -1 && winner === -1){
                document.querySelector('.field__8').textContent = 'O'; gameFields.bottom[1] = 1; winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })
    document.querySelector('.field__9').addEventListener('click', function(){
            if (activePlayer === 0  && gameFields.bottom[2] <= -1 && winner === -1){
                document.querySelector('.field__9').textContent = 'X'; gameFields.bottom[2] = 0; winChecker(); activePlayer = changePlayer(activePlayer); 
            }else if (gameFields.bottom[2] <= -1 && winner === -1){
                document.querySelector('.field__9').textContent = 'O'; gameFields.bottom[2] = 1; winChecker(); activePlayer = changePlayer(activePlayer); 
            }
    })






function gameInit(){
    
    winner = -1;
    activePlayer = 0;
    gameFields = {
            top: [-1, -2, -3],
            mid: [-4, -5, -6],
            bottom: [-7,-8,-9]
    }
    var field = document.querySelectorAll('.field');
    var i;
    for(i = 0; i < field.length; i++){
        field[i].textContent = '';
    }
    updateResUI();
    console.log('Game Initialized.')
};
gameInit();



function changePlayer(player){
    if (player === 0){
        player = 1;
    }else if(player === 1){
        player = 0;
    }
    return player;
}




function winChecker(){
    // Vertikalni
    if(gameFields.top[0] === gameFields.mid[0] && gameFields.top[0] === gameFields.bottom[0]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }else if(gameFields.top[1] === gameFields.mid[1] && gameFields.top[1] === gameFields.bottom[1]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }else if(gameFields.top[2] === gameFields.mid[2] && gameFields.top[2] === gameFields.bottom[2]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }
    // Horizontalni
    else if(gameFields.top[0] === gameFields.top[1] && gameFields.top[0] === gameFields.top[2]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }else if(gameFields.mid[0] === gameFields.mid[1] && gameFields.mid[0] === gameFields.mid[2]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }else if(gameFields.bottom[0] === gameFields.bottom[1] && gameFields.bottom[0] === gameFields.bottom[2]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }
    //dva ova pod 45 stepeni
    else if(gameFields.top[0] === gameFields.mid[1] && gameFields.top[0] === gameFields.bottom[2]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }else if(gameFields.top[2] === gameFields.mid[1] && gameFields.top[2] === gameFields.bottom[0]) {
        console.log('Player'+ activePlayer +' is the winner'); winner = activePlayer; keepScores(winner);
    }
}

function keepScores(whoWon){
    if(whoWon === 0){
        results.player0 += 1;
    }else if(whoWon === 1){
        results.player1 += 1;
    }
    updateResUI();
    
}


function stopTheGame(won){
    if(won !== -1){
        console.log('Player ' + won + ' won the game!')
    }
}

function resetScores(){
    results.player0 = 0;
    results.player1 = 0;
    gameInit();
}

  
function updateResUI(){
    document.querySelector('.playa1').textContent = results.player0;
    document.querySelector('.playa2').textContent = results.player1;
}










/////
