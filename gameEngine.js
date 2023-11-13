/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Francisco Huayhualla */
/* UCID: 30091238 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playAgainBtn").addEventListener("click", function() {
        window.location.reload();
    });

    currentPlayer = 1;
    playerSelection = 1;

    const playerTurnText = document.getElementById("playerTurnText");

    const cell00Img = document.getElementById("cell00Img");
    //The following constants will be used for futture implementations of the game
    const cell01Img = document.getElementById("cell01Img");
    const cell02Img = document.getElementById("cell02Img");
    const cell10Img = document.getElementById("cell10Img");
    const cell11Img = document.getElementById("cell11Img");
    const cell12Img = document.getElementById("cell12Img");
    const cell20Img = document.getElementById("cell20Img");
    const cell21Img = document.getElementById("cell21Img");
    const cell22Img = document.getElementById("cell22Img");

    document.getElementById("xSelectDiv").addEventListener("click", function() {
        playerSelection = 1;

        document.getElementById("cell00").addEventListener("click", function() {
            cell00Img.src = "media/xSymbol.png";
            playerTurnText.textContent = "Player 2's turn!";
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

