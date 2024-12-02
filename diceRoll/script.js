(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const selectSound = new Audio('audio/beep.mp3');
    const selectedSound2 = new Audio('audio/click.mp3');

    

    const gameData = {
        dice: ['images/1roll.jpg', 'images/2roll.jpg', 'images/3roll.jpg', 'images/4roll.jpg', 'images/5roll.jpg', 'images/6roll.jpg'],
        players: ['player 1', 'player 2'],
        
        player1:['images/catCharacter.jpg'],
        player2:['images/pupCharacter.jpg'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function() {
        //gameData.index = Math.round(Math.random() ); 
        gameControl.innerHTML = '<h2>The Game Has Started </h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        choosePlayer(); 

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });
        //console.log(gameData.index); 
        //setUpTurn(); 
    });

    function choosePlayer() {
        const buttonClickSound = new Audio('audio/beep.mp3');
        game.innerHTML = `<p>select a player</p>`; 
        actionArea.innerHTML = `
        <div class = "player-container"> 
            <img src="${gameData.player1[0]}" alt="Player 1" data-player="0" class="player-img">
            <img src= "${gameData.player2[0]}" alt="Player 2" data-player="1" class="player-img"> 
        </div>
        `;


        actionArea.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', function(){
                selectSound.play();
                const selectedPlayer = this.getAttribute('data-player');
                gameData.index = parseInt(selectedPlayer, 10);
                setUpTurn(); 
            }); 
        }); 

    }

    function setUpTurn(){

        const buttonClickSound = new Audio('audio/click.mp3');
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]} </p>`; 
        actionArea.innerHTML = '<div class= "flex-buttons"> <button id= "roll">Roll the Dice</button> <button id="pass">Pass</button> </div>'; 
    
        document.getElementById('roll').addEventListener('click', function(){
            buttonClickSound.play();
            throwDice();
        });

        document.getElementById('pass').addEventListener('click', function(){
            buttonClickSound.play();
            gameData.index=gameData.index ? 0: 1;
            setUpTurn();
        });
    }
    

    function throwDice(){
        actionArea.innerHTML = ''; 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
        gameData.rollSum = gameData.roll1 + gameData.roll2; 

        game.innerHTML = `
            <p>Roll the dice for the ${gameData.players[gameData.index]}</p>
            <div class= "dice-container">
                <img src="${gameData.dice[gameData.roll1-1]}" class="dice-img">
                <img src= "${gameData.dice[gameData.roll2-1]}" class="dice-img">
            </div>
        `;
        
        //gameData.rollSum = gameData.roll1 + gameData.roll2; 
        //console.log(gameData);

        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake eyes! </p>'; 
            gameData.score[gameData.index] = 0;
            switchPlayer(); 
        }

        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            //gameData.index?(gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a one. Switching to ${gameData.players[gameData.index ? 0 : 1]}</p>`; 
            switchPlayer();
            
        }

        else{
            gameData.score[gameData.index] += gameData.rollSum;
            
            actionArea.innerHTML = `<div class= "flex-buttons"> <button id= "rollagain"> Roll again </button> <button id="pass">Pass</button> </div>`;
           
            document.getElementById('rollagain').addEventListener('click', setUpTurn);
            document.getElementById('pass').addEventListener('click',function(){
                gameData.index = gameData.index ? 0 : 1;
                setUpTurn(); 
            });

            checkWinningCondition();
        }
    }

    function switchPlayer() {
        gameData.index = gameData.index ? 0: 1; 
        setTimeout(setUpTurn, 3000);
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;    
            actionArea.innerHTML = ''; 
            document.getElementById('quit').innerHTML = 'Start a New Game?'; 
        }
        else{
            showCurrentScore();
        }
    }    
    
    function showCurrentScore(){
        score.innerHTML = `<p> The score is currently ${gameData.players[0]}: ${gameData.score[0]}
        and ${gameData.players[1]}: ${gameData.score[1]} </p>`;
    }

})();
