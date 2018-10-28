activePlayer = 0;   
var gameFields = {
             top: [-1, -2, -3],
            mid: [-4, -5, -6],
            bottom: [-7,-8,-9]
    }






document.querySelector('.field__1').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__1').textContent = 'X';gameFields.top[0] = 0; activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__1').textContent = 'O';gameFields.top[0] = 1;  activePlayer = 0; winChecker()
            }
    })
    document.querySelector('.field__2').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__2').textContent = 'X'; gameFields.top[1] = 0; activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__2').textContent = 'O';gameFields.top[1] = 1;  activePlayer = 0; winChecker()
            }
    })
    document.querySelector('.field__3').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__3').textContent = 'X'; gameFields.top[2] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__3').textContent = 'O';gameFields.top[2] = 1;  activePlayer = 0; winChecker()
            }
    })


    document.querySelector('.field__4').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__4').textContent = 'X'; gameFields.mid[0] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__4').textContent = 'O'; gameFields.mid[0] = 1;  activePlayer = 0;winChecker()
            }
    })
    document.querySelector('.field__5').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__5').textContent = 'X'; gameFields.mid[1] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__5').textContent = 'O'; gameFields.mid[1] = 1;  activePlayer = 0; winChecker()
            }
    })
    document.querySelector('.field__6').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__6').textContent = 'X'; gameFields.mid[2] = 0;  activePlayer = 1; winChecker()
            }else{ 
                document.querySelector('.field__6').textContent = 'O';gameFields.mid[2] = 1;  activePlayer = 0; winChecker()
            }
    })


    document.querySelector('.field__7').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__7').textContent = 'X'; gameFields.bottom[0] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__7').textContent = 'O'; gameFields.bottom[0] = 1;  activePlayer = 0; winChecker()
            }
    })
    document.querySelector('.field__8').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__8').textContent = 'X'; gameFields.bottom[1] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__8').textContent = 'O'; gameFields.bottom[1] = 1;  activePlayer = 0; winChecker()
            }
    })
    document.querySelector('.field__9').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__9').textContent = 'X'; gameFields.bottom[2] = 0;  activePlayer = 1; winChecker()
            }else{
                document.querySelector('.field__9').textContent = 'O'; gameFields.bottom[2] = 1;  activePlayer = 0; winChecker()
            }
    })






function gameInit(){
    
   gameFields = {
            top: [-1, -2, -3],
            mid: [-4, -5, -6],
            bottom: [-7,-8,-9]
    }

};
gameInit();








function winChecker(){
    // Vertikalni
    if(gameFields.top[0] === gameFields.mid[0] && gameFields.top[0] === gameFields.bottom[0]) {
        console.log('Player'+ gameFields.top[0] +' is the winner');
    }else if(gameFields.top[1] === gameFields.mid[1] && gameFields.top[1] === gameFields.bottom[1]) {
        console.log('Player'+ gameFields.top[1] +' is the winner');
    }else if(gameFields.top[2] === gameFields.mid[2] && gameFields.top[2] === gameFields.bottom[2]) {
        console.log('Player'+ gameFields.top[2] +' is the winner');
    }
    // Horizontalni
    else if(gameFields.top[0] === gameFields.top[1] && gameFields.top[0] === gameFields.top[2]) {
        console.log('Player'+ gameFields.top[0] +' is the winner');
    }else if(gameFields.mid[0] === gameFields.mid[1] && gameFields.mid[0] === gameFields.mid[2]) {
        console.log('Player'+ gameFields.mid[0] +' is the winner');
    }else if(gameFields.bottom[0] === gameFields.bottom[1] && gameFields.bottom[0] === gameFields.bottom[2]) {
        console.log('Player'+ gameFields.bottom[0] +' is the winner');
    }
    //dva ova pod 45 stepeni
    else if(gameFields.top[0] === gameFields.mid[1] && gameFields.top[0] === gameFields.bottom[2]) {
        console.log('Player'+ gameFields.top[0] +' is the winner');
    }else if(gameFields.top[2] === gameFields.mid[1] && gameFields.top[2] === gameFields.bottom[0]) {
        console.log('Player'+ gameFields.top[2] +' is the winner');
    }
}



function stopTheGame(){
    
}












/////
