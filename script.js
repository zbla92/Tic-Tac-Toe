activePlayer = 1;   







document.querySelector('.field__1').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__1').textContent = 'X';gameFields.top[0] = 0;
            }else{
                document.querySelector('.field__1').textContent = 'O';gameFields.top[0] = 1;
            }
    })
    document.querySelector('.field__2').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__2').textContent = 'X';
            }else{
                document.querySelector('.field__2').textContent = 'O';
            }
    })
    document.querySelector('.field__3').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__3').textContent = 'X';
            }else{
                document.querySelector('.field__3').textContent = 'O';
            }
    })


    document.querySelector('.field__4').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__4').textContent = 'X';
            }else{
                document.querySelector('.field__4').textContent = 'O';
            }
    })
    document.querySelector('.field__5').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__5').textContent = 'X';
            }else{
                document.querySelector('.field__5').textContent = 'O';
            }
    })
    document.querySelector('.field__6').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__6').textContent = 'X';
            }else{
                document.querySelector('.field__6').textContent = 'O';
            }
    })


    document.querySelector('.field__7').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__7').textContent = 'X';
            }else{
                document.querySelector('.field__7').textContent = 'O';
            }
    })
    document.querySelector('.field__8').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__8').textContent = 'X';
            }else{
                document.querySelector('.field__8').textContent = 'O';
            }
    })
    document.querySelector('.field__9').addEventListener('click', function(){
            if (activePlayer === 0){
                document.querySelector('.field__9').textContent = 'X';
            }else{
                document.querySelector('.field__9').textContent = 'O';
            }
    })







var gameFields = {
        top: [-1, -1, -1],
        mid: [-1, -1, -1],
        bottom: [-1.-1,-1]
}




























/////
