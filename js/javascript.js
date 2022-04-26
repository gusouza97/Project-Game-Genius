(function readyJS(win, doc) {
    'use strict';

    // MAIN VARIABLES
    let initialize = false
    let orderRound = new Array()
    let orderPlayer = new Array()
    let timer;
    let check;
    let piscou;
    let loadLoop;
    let recebeClique = false;
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
        initialize = true
        gameOver = false
        timer = 1000;
        gamePanel.style.display = "flex"
        btnPlay.style.display = "none"

        // Gerando Sequencia da Rodada
        orderRound.push(GenerateNumber());
        orderRound.push(GenerateNumber());
        orderRound.push(GenerateNumber());
        orderRound.push(GenerateNumber());

        for (let i = 0; i < orderRound.length; i++) {
            check = true;
            Counter(orderRound[i])
        }


        // Ativando o recebimento dos dados
        if (recebeClique != true) {

        }

        if (orderRound.length == orderPlayer.length) {
            recebeClique = false;
            ComparaResposta();
        }

    }

    // Funcao para gerar numero da rodada
    function GenerateNumber() {
        let value = Math.floor(Math.random() * 4)
        return value
    }

    // Funcao para piscar as luzes
    function PiscarLuzes(valor) {
        switch (valor) {
            case 0:
                btnGreen.style.opacity = "0.3";
                check = false;
                setTimeout(() => {
                    piscou = piscou + 1;
                    btnGreen.style.opacity = "1";
                    check = true;
                }, timer)

                break;

            case 1:
                btnRed.style.opacity = "0.3";
                check = false;
                setTimeout(() => {
                    piscou = piscou + 1;
                    btnRed.style.opacity = "1";
                    check = true;
                }, timer)
                break;

            case 2:
                btnYellow.style.opacity = "0.3";
                check = false;
                setTimeout(() => {
                    piscou = piscou + 1;
                    btnYellow.style.opacity = "1";
                    check = true;
                }, timer)
                break;

            case 3:
                btnBlue.style.opacity = "0.3";
                check = false;
                setTimeout(() => {
                    piscou = piscou + 1;
                    btnBlue.style.opacity = "1";
                    check = true;
                }, timer)
                break;
        }
        recebeClique = false;
    }



    // Recebendo Dados
    function ReceberDados(id) {
        if (recebeClique == true) {
            orderPlayer.push(id)
            console.log(orderPlayer)
        }
    }


    // Comparando as respostas
    function ComparaResposta() {
        for (let i = 0; i < orderRound.length; i++) {
            if (orderRound[i] != orderPlayer[i]) {
                gameOver = true;
                console.log("Game Over")
            }
        }
    }

    // Funcao que auxilia no piscar das luzues
    function Counter(valor) {

        console.log(valor)

        setTimeout(() => {
            if(check == true){
                console.log(valor)
                PiscarLuzes(valor);
            }
        }, timer)
        
        

        //Bloqueando o Timeout
        if (piscou == orderRound.length - 1) {
            return;
        }

        setTimeout(Counter, 1000);
    }


})(window, document);