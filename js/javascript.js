(function readyJS(win, doc) {
    'use strict';

    // MAIN VARIABLES
    let orderRound = new Array()
    let orderPlayer = new Array()
    let score = 0

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
        Start();
    })

    btnGreen.addEventListener("click", () => {
        ReceberDados(0)
    })

    btnBlue.addEventListener("click", () => {
        ReceberDados(3)
    })

    btnYellow.addEventListener("click", () => {
        ReceberDados(2)
    })

    btnRed.addEventListener("click", () => {
        ReceberDados(1)
    })

    // FUNCTIONS
    // Funcao para iniciar o game
    function Start() {
        alert("Bem vindo ao Genis, iniciando um novo jogo!")

        score = 0
        
        gamePanel.style.display = "flex"
        btnPlay.style.display = "none"

        nextLevel();
    }

    // Funcao para gerar numero da rodada
    function GenerateNumber() {
        let value = Math.floor(Math.random() * 4)
        orderRound.push(value)
        orderPlayer = []

        for (let i in orderRound) {
            let elementColor = createColorElement(orderRound[i])
            lightColor(elementColor, Number(i) + 1)
        }
    }

    // Funcao para piscar as luzes
    function lightColor(element, timer) {
        timer = timer * 500

        setTimeout(() => {
            element.style.opacity = "0.3";
        }, timer);
        setTimeout(() => {
            element.style.opacity = "1";
        })
    }


    // Comparando as respostas
    function ComparaResposta() {
        for (let i in orderPlayer) {
            if (orderRound[i] != orderPlayer[i]) {
                gameOver();
                break;
            }
        }
        if (orderRound.length == orderPlayer.length) {
            alert(`Pontuacao: ${score}\nVoce acertou! Iniciando proximo nivel`)
            nextLevel();
        }
    }

    // Recebendo Dados
    function ReceberDados(id) {
        orderPlayer.push(id)
        createColorElement(id).style.opacity = "0.3";

        setTimeout(() => {
            createColorElement(id).style.opacity = "1";
            ComparaResposta();
        }, 250)
    }

    // Retorna a cor
    function createColorElement(color){
        if(color == 0){
            return btnGreen
        }else if(color == 1){
            return btnRed
        }else if(color == 2){
            return btnYellow
        }else if(color == 3){
            return btnBlue
        }
    }

    // Funcao para proximo nivel
    function nextLevel(){
        score++;
        GenerateNumber();
    }

    // Funcao para game over
    function gameOver(){
        alert(`Pontuacao: $(score)\nVoc perdeu o jogo!\nClique para iniciar novamente`)
        orderRound = [];
        orderPlayer = []

        Start();
    }

})(window, document);