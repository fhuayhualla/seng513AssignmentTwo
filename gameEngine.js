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

    const instructionText = document.getElementById("instructionText");

    // If the player tries to play before selecting game Mode

    document.getElementById("cell00").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell00Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell00Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell00Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell01").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell01Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell01Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell01Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell02").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell02Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell02Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell02Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell10").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell10Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell10Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell10Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell11").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell11Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell11Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell11Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell12").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell12Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell12Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell12Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell20").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell20Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell20Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell20Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell21").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell21Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell21Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell21Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
        }
    });

    document.getElementById("cell22").addEventListener("click", function() {
        if(gameMode === 0){
            alert("Choose the desired game mode before playing!");
        } else if (gameMode === 1 && currentPlayer === 1) {
            cell22Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
        } else if (gameMode === 1 && currentPlayer === 2) {
            cell22Img.src = "media/oSymbol.png";
            instructionText.textContent = "Player 1's turn!";
            currentPlayer = 1;
        } else if (gameMode === 2 && currentPlayer === 1) {
            cell22Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
            currentPlayer = 2;
            randomPlay();
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
        var cellList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var randomIndex = Math.floor(Math.random() * cellList.length);

        if (randomIndex === 1) {
            if (cell00Img.src === "") {
                cell00Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 2) {
            if (cell01Img.src === "") {
                cell01Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 3) {
            if (cell02Img.src === "") {
                cell02Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 4) {
            if (cell10Img.src === "") {
                cell10Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 5) {
            if (cell11Img.src === "") {
                cell11Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 6) {
            if (cell12Img.src === "") {
                cell12Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 7) {
            if (cell20Img.src === "") {
                cell20Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 8) {
            if (cell21Img.src === "") {
                cell21Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        } else if (randomIndex === 9) {
            if (cell22Img.src === "") {
                cell22Img.src = "media/oSymbol.png";
                currentPlayer = 1;
            } else {
                randomPlay();
            }
        }
    }

    document.getElementById("xSelectDiv").addEventListener("click", function() {
        playerSelection = 1;

        document.getElementById("cell00").addEventListener("click", function() {
            cell00Img.src = "media/xSymbol.png";
            instructionText.textContent = "Player 2's turn!";
        });

    });

    document.getElementById("oSelectDiv").addEventListener("click", function() {
        playerSelection = 0;

        document.getElementById("cell00").addEventListener("click", function() {
            cell00Img.src = "media/oSymbol.png";
        });
    });

    /* The following functions will be implemented for both player vs player and player vs computer.
        The only difference is that when a player is playing against the computer, the player
        will only get to play with the symbol "x" and the computer will only get to play using the
        symbol "o". The computer will randomly select a sell in the gameplay grid that does not 
        already have a symbol inside of it. It will place the symbol "o" up until either player wins
        or the game ends with a draw. */

    // function that checks if player 1 (player playing with x) won
    /* function player1Won () {
        function rowWin() {
            for (i = 0; i <= 2; i++) {
                if (cell[i][0].contents == cell[i][1].contents == cell[i][2].contents) {
                    player 1 won;
                }
            }
        }

        function columnWin() {
            for (i = 0; i <= 2; i++) {
                if (cell[0][i].contents == cell[1][i].contents == cell[2][i].contents) {
                    player 1 won;
                }
            }
        }

        function diagonalWin() {
            if ((cell[0][0].contents == cell[1][1].contents == cell[2][2].contents) || (cell[0][2].contents == cell[1][1].contents == cell[2][0].contents)) {
                player 1 won;
            }
        }
    }


    // function that checks if player 2 (player playing with o) won
    /* function player2Won () {
        function rowWin() {
            for (i = 0; i <= 2; i++) {
                if (cell[i][0].contents == cell[i][1].contents == cell[i][2].contents) {
                    player 2 won;
                }
            }
        }

        function columnWin() {
            for (i = 0; i <= 2; i++) {
                if (cell[0][i].contents == cell[1][i].contents == cell[2][i].contents) {
                    player 2 won;
                }
            }
        }

        function diagonalWin() {
            if ((cell[0][0].contents == cell[1][1].contents == cell[2][2].contents) || (cell[0][2].contents == cell[1][1].contents == cell[2][0].contents)) {
                player 2 won;
            }
        }
    }*/


    // function that checks for draw (full grid)
    /* function checkForDraw () {
        for (int i = 0; i<= 2; i++) {
            for (int j = 0; j<= 2; j++) {
                if grid[i][j] == 'no image'
                return false
        return true
            }
        }
    }


    // This code is for the random selection of a cell when it is the computer's turn to play
    function randomPlay() {
        int i;
        int j;
        while (true) {
            rand select i such that i is in range 0-2
            rand select j such that j is in range 0-2
            if (cell[i][j] == 'no image'){
                cell[i][j].insert symbol "o"
                break;
            }
        }
    }

    */
});
