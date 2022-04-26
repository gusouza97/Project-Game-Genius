(function readyJS(win, doc) {
    'use strict';

    // MAIN VARIABLES
    let initialize = false
    let orderRound = new Array()
    let orderPlayer = new Array()
    let score = 0
    let gameOver;
    // 0 -> Green
    // 1 -> Red
    // 2 -> Yellow
    // 3 -> Blue

    // SELECTORES
    let gamePanel = document.querySelector(".gamePanel")
    let btnPlay = document.querySelector(".btnPlay")
    let btnGreen = document.querySelector(".green")
    let btnBlue = document.querySelector(".blue")
    let btnYellow = document.querySelector(".yellow")
    let btnRed = document.querySelector(".red")

    // LISTENERS
    btnPlay.addEventListener("click", () => {
        start();
    })

    // FUNCTIONS
    // Funcao para iniciar o game
    function start() {
        initialize = true
        gameOver = false
        gamePanel.style.display = "flex"
        btnPlay.style.display = "none"

        while(gameOver == false){
            
            orderRound.push(GenerateNumber());
            PiscarLuzes(orderRound);
            
            gameOver = true;
        }
    }

    // Funcao para gerar numero da rodada
    function GenerateNumber(){
        let value = Math.floor(Math.random() * 4)
        return value
    }

    function PiscarLuzes(orderRound){
        for(key in orderRound){
            
        }
    }

    function CreateTimer(){
        setTimeout(() => {
            timer
        })
    }

})(window, document);