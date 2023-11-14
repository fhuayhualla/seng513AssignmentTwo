/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Francisco Huayhualla */
/* UCID: 30091238 */


document.addEventListener("DOMContentLoaded", function() {
    // Button to refresh the page
    document.getElementById("playAgainBtn").addEventListener("click", function() {
        window.location.reload();
    });

    // Determines whether game mode is pvp (player vs player) or pvc (player vs computer)
    gameMode = 0;
    // Determines the current player (player 1 is always first)
    currentPlayer = 1;
    // Indicator for whether the game has ended or not
    ended = 0;

    const instructionText = document.getElementById("instructionText");
    const winnerText = document.getElementById("winnerText");
    // Initially hide the winner text
    winnerText.style.display = 'none';

    // array with 9 indices that represent the game board and each of its cells
    let array = Array(9).fill(0);

    // If the player chooses the cell 00
    document.getElementById("cell00").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell00Img.src != ""){
                // skip
            } else {
                cell00Img.src = "media/xSymbol.png";
                array[0] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell00Img.src != ""){
                // skip
            } else {
                cell00Img.src = "media/oSymbol.png";
                array[0] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell00Img.src != ""){
                // skip
            } else {
                cell00Img.src = "media/xSymbol.png";
                array[0] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 01
    document.getElementById("cell01").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell01Img.src != ""){
                // skip
            } else {
                cell01Img.src = "media/xSymbol.png";
                array[1] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell01Img.src != ""){
                // skip
            } else {
                cell01Img.src = "media/oSymbol.png";
                array[1] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell01Img.src != ""){
                // skip
            } else {
                cell01Img.src = "media/xSymbol.png";
                array[1] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 02
    document.getElementById("cell02").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell02Img.src != ""){
                // skip
            } else {
                cell02Img.src = "media/xSymbol.png";
                array[2] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell02Img.src != ""){
                // skip
            } else {
                cell02Img.src = "media/oSymbol.png";
                array[2] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell02Img.src != ""){
                // skip
            } else {
                cell02Img.src = "media/xSymbol.png";
                array[2] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 10
    document.getElementById("cell10").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell10Img.src != ""){
                // skip
            } else {
                cell10Img.src = "media/xSymbol.png";
                array[3] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell10Img.src != ""){
                // skip
            } else {
                cell10Img.src = "media/oSymbol.png";
                array[3] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell10Img.src != ""){
                // skip
            } else {
                cell10Img.src = "media/xSymbol.png";
                array[3] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 11
    document.getElementById("cell11").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell11Img.src != ""){
                // skip
            } else {
                cell11Img.src = "media/xSymbol.png";
                array[4] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell11Img.src != ""){
                // skip
            } else {
                cell11Img.src = "media/oSymbol.png";
                array[4] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell11Img.src != ""){
                // skip
            } else {
                cell11Img.src = "media/xSymbol.png";
                array[4] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 12
    document.getElementById("cell12").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell12Img.src != ""){
                // skip
            } else {
                cell12Img.src = "media/xSymbol.png";
                array[5] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell12Img.src != ""){
                // skip
            } else {
                cell12Img.src = "media/oSymbol.png";
                array[5] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell12Img.src != ""){
                // skip
            } else {
                cell12Img.src = "media/xSymbol.png";
                array[5] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 20
    document.getElementById("cell20").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell20Img.src != ""){
                // skip
            } else {
                cell20Img.src = "media/xSymbol.png";
                array[6] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell20Img.src != ""){
                // skip
            } else {
                cell20Img.src = "media/oSymbol.png";
                array[6] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell20Img.src != ""){
                // skip
            } else {
                cell20Img.src = "media/xSymbol.png";
                array[6] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 21
    document.getElementById("cell21").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell21Img.src != ""){
                // skip
            } else {
                cell21Img.src = "media/xSymbol.png";
                array[7] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell21Img.src != ""){
                // skip
            } else {
                cell21Img.src = "media/oSymbol.png";
                array[7] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell21Img.src != ""){
                // skip
            } else {
                cell21Img.src = "media/xSymbol.png";
                array[7] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // If the player chooses the cell 22
    document.getElementById("cell22").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            if (cell22Img.src != ""){
                // skip
            } else {
                cell22Img.src = "media/xSymbol.png";
                array[8] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 2's turn!";
                currentPlayer = 2;
            }
        } else if (gameMode === 1 && currentPlayer === 2) {
            if (cell22Img.src != ""){
                // skip
            } else {
                cell22Img.src = "media/oSymbol.png";
                array[8] = "o";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                instructionText.textContent = "Player 1's turn!";
                currentPlayer = 1;
            }
        } else if (gameMode === 2) {
            if (cell22Img.src != ""){
                // skip
            } else {
                cell22Img.src = "media/xSymbol.png";
                array[8] = "x";
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
                randomPlay();
                winnerCheck();
                if (ended === 0) {
                    drawCheck();
                }
            }
        }
    });

    // Player vs player mode selected
    document.getElementById("pvpBtn").addEventListener("click", function() {
        gameMode = 1; // player vs player
        document.getElementById("pvpBtn").disabled = true;
        document.getElementById("pvcBtn").disabled = true;
        instructionText.textContent = "Player 1's turn!";
    });

    // Player vs computer mode selected
    document.getElementById("pvcBtn").addEventListener("click", function() {
        gameMode = 2; // player vs computer
        document.getElementById("pvpBtn").disabled = true;
        document.getElementById("pvcBtn").disabled = true;
        instructionText.textContent = "Player 1's turn!";
        instructionText.style.display = 'none';
    });

    // Name the cell's image placeholders
    const cell00Img = document.getElementById("cell00Img");
    const cell01Img = document.getElementById("cell01Img");
    const cell02Img = document.getElementById("cell02Img");
    const cell10Img = document.getElementById("cell10Img");
    const cell11Img = document.getElementById("cell11Img");
    const cell12Img = document.getElementById("cell12Img");
    const cell20Img = document.getElementById("cell20Img");
    const cell21Img = document.getElementById("cell21Img");
    const cell22Img = document.getElementById("cell22Img");

    // Function that "randomly" chooses a cell to place the symbol "O" in
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

    // Function that checks for vertical, horizontal, or diagonal wins by either player
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
    }

    // Function that checks if the game ended with a draw
    function drawCheck () {
        if (array[0] != "0" && array[1] != "0" && array[2] != "0" && array[3] != "0" && array[4] != "0" && array[5] != "0" && array[6] != "0" && array[7] != "0" && array[8] != "0") {
            winnerText.textContent = "Draw!";
            winnerText.style.display = 'block';
            gameEnded();
        }
    }

    // Function that indicated the game has ended
    function gameEnded() {
        ended = 1;
    }
    
});
