/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Francisco Huayhualla */
/* UCID: 30091238 */


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playAgainBtn").addEventListener("click", function() {
        window.location.reload();
    });

    gameMode = 0;
    currentPlayer = 1;
    playerSelection = 1;
    ended = 0;

    const instructionText = document.getElementById("instructionText");
    const winnerText = document.getElementById("winnerText");
    winnerText.style.display = 'none';

    let array = Array(9).fill(0);

    // If the player tries to play before selecting game Mode

    document.getElementById("cell00").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell00Img.src = "media/xSymbol.png";
            array[0] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell00Img.src = "media/oSymbol.png";
            array[0] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell00Img.src = "media/xSymbol.png";
            array[0] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell01").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell01Img.src = "media/xSymbol.png";
            array[1] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell01Img.src = "media/oSymbol.png";
            array[1] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell01Img.src = "media/xSymbol.png";
            array[1] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell02").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell02Img.src = "media/xSymbol.png";
            array[2] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell02Img.src = "media/oSymbol.png";
            array[2] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell02Img.src = "media/xSymbol.png";
            array[2] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell10").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell10Img.src = "media/xSymbol.png";
            array[3] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell10Img.src = "media/oSymbol.png";
            array[3] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell10Img.src = "media/xSymbol.png";
            array[3] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell11").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell11Img.src = "media/xSymbol.png";
            array[4] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell11Img.src = "media/oSymbol.png";
            array[4] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell11Img.src = "media/xSymbol.png";
            array[4] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell12").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell12Img.src = "media/xSymbol.png";
            array[5] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell12Img.src = "media/oSymbol.png";
            array[5] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell12Img.src = "media/xSymbol.png";
            array[5] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell20").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell20Img.src = "media/xSymbol.png";
            array[6] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell20Img.src = "media/oSymbol.png";
            array[6] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell20Img.src = "media/xSymbol.png";
            array[6] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell21").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell21Img.src = "media/xSymbol.png";
            array[7] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell21Img.src = "media/oSymbol.png";
            array[7] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell21Img.src = "media/xSymbol.png";
            array[7] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    document.getElementById("cell22").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell22Img.src = "media/xSymbol.png";
            array[8] = "x";
            winnerCheck();
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell22Img.src = "media/oSymbol.png";
            array[8] = "o";
            winnerCheck();
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2) {
            cell22Img.src = "media/xSymbol.png";
            array[8] = "x";
            winnerCheck();
            randomPlay();
            winnerCheck();
        }
    });

    // If the player selects the game Mode

    document.getElementById("pvpBtn").addEventListener("click", function() {
        gameMode = 1; // player vs player
        document.getElementById("pvpBtn").disabled = true;
        document.getElementById("pvcBtn").disabled = true;
        instructionText.textContent = "Player 1's turn!";
    });

    document.getElementById("pvcBtn").addEventListener("click", function() {
        gameMode = 2; // player vs computer
        document.getElementById("pvpBtn").disabled = true;
        document.getElementById("pvcBtn").disabled = true;
        instructionText.textContent = "Player 1's turn!";
        instructionText.style.display = 'none';
    });

    const cell00Img = document.getElementById("cell00Img");
    const cell01Img = document.getElementById("cell01Img");
    const cell02Img = document.getElementById("cell02Img");
    const cell10Img = document.getElementById("cell10Img");
    const cell11Img = document.getElementById("cell11Img");
    const cell12Img = document.getElementById("cell12Img");
    const cell20Img = document.getElementById("cell20Img");
    const cell21Img = document.getElementById("cell21Img");
    const cell22Img = document.getElementById("cell22Img");

    function randomPlay() {
        if (cell00Img.src === "") {
            cell00Img.src = "media/oSymbol.png";
            array[0] = "o";
        } else if (cell01Img.src === "") {
            cell01Img.src = "media/oSymbol.png";
            array[1] = "o";
        } else if (cell02Img.src === "") {
            cell02Img.src = "media/oSymbol.png";
            array[2] = "o";
        } else if (cell10Img.src === "") {
            cell10Img.src = "media/oSymbol.png";
            array[3] = "o";
        } else if (cell11Img.src === "") {
            cell11Img.src = "media/oSymbol.png";
            array[4] = "o";
        } else if (cell12Img.src === "") {
            cell12Img.src = "media/oSymbol.png";
            array[5] = "o";
        } else if (cell20Img.src === "") {
            cell20Img.src = "media/oSymbol.png";
            array[6] = "o";
        } else if (cell21Img.src === "") {
            cell21Img.src = "media/oSymbol.png";
            array[7] = "o";
        } else if (cell22Img.src === "") {
            cell22Img.src = "media/oSymbol.png";
            array[8] = "o";
        }
    }

    function winnerCheck () {
        // Vertical Check

        if(array[0] === "x" && array[3] === "x" && array[6] === "x"){
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[0] === "o" && array[3] === "o" && array[6] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[1] === "x" && array[4] === "x" && array[7] === "x") {
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[1] === "o" && array[4] === "o" && array[7] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[2] === "x" && array[5] === "x" && array[8] === "x") {
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[2] === "o" && array[5] === "o" && array[8] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        }

        // Horizontal Check

        if(array[0] === "x" && array[1] === "x" && array[2] === "x"){
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[0] === "o" && array[1] === "o" && array[2] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[3] === "x" && array[4] === "x" && array[5] === "x") {
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[3] === "o" && array[4] === "o" && array[5] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[6] === "x" && array[7] === "x" && array[8] === "x") {
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[6] === "o" && array[7] === "o" && array[8] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        }

        // Diagonal Check

        if(array[2] === "x" && array[4] === "x" && array[6] === "x"){
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[2] === "o" && array[4] === "o" && array[6] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[0] === "x" && array[4] === "x" && array[8] === "x") {
            winnerText.textContent = "Player 1 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        } else if (array[0] === "o" && array[4] === "o" && array[8] === "o") {
            winnerText.textContent = "Player 2 Won!";
            winnerText.style.display = 'block';
            gameEnded();
        }

        // Draw Check

        if (array[0] != "0" && array[1] != "0" && array[2] != "0" && array[3] != "0" && array[4] != "0" && array[5] != "0" && array[6] != "0" && array[7] != "0" && array[8] != "0") {
            winnerText.textContent = "Draw!";
            winnerText.style.display = 'block';
            gameEnded();
        }
    }

    function gameEnded() {
        ended = 1;
    }
    
});
