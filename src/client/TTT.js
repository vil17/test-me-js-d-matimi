
$(document).ready(function () {
    
    var inputSign = $('.empty'); /*einungis .empty eru klikkable, þessvegna nota ég empty classann en ekki box*/
    var playerTurn = true; /*true er player 1 eða X í þessu tilfelli*/
    var playerTurnText = $('.player-turn-text'); /*texti yfir borði*/
    var playerXScoreText = $('#player-one-score') 
    var playerOScoreText = $('#player-two-score')
    var playerXscore = 0; /*teljari sem telur stigin fyrir töfluna neðst*/
    var playerOscore = 0; /* -"- */
    var gameOn = true; /* þegar leikur er virkur þá er þetta true, sér aðallega um að loka borðinu eftir að leik lýkur */
    var boxes = $('.box');

    /*binda function á reset-takkann*/
    $('#reset-button').on('click', function (e) {
        resetBoard();
    });

    /*declara function á reitina*/
    inputSign.on('click', function (e) {
        if(gameOn === true){ 
            $(this).text(playerTag);
            runGameValidation();
        }
    })

    var playerTag = function () { /* þetta er "sá sem er að gera" */
        if (playerTurn === true) { /*ef spilari 1 er að gera þá keyrist þessi gaur*/
            if ($(this).hasClass('empty')) { /*ef reitur ef með klasann empty*/
                playerTurn = false; /*þá setja þannig að player 2 eigi að gera */
                $(this).removeClass('empty').addClass('X'); /* fjarlægðu empty og settu klasann X */
                playerTurnText.text("O, it's your turn!");
                return 'X';
            }
        } else {
            if ($(this).hasClass('empty')) {
                playerTurn = true;
                $(this).removeClass('empty').addClass('O');
                playerTurnText.text("X, it's your turn!");
                return 'O';
            }
        }
    }
/*skilgreining á kössunum fyrir winning condition, aðallega með dollarmerki tila ð hafa eitthvað=*/
var $1 = $('#1'); var $2 = $('#2'); var $3 = $('#3'); var $4 = $('#4'); var $5 = $('#5'); var $6 = $('#6'); var $7 = $('#7'); var $8 = $('#8'); var $9 = $('#9');

function runGameValidation() {
    if(playerTurn === false){
        player = 'X'
    }
    else{player = 'O'};
    if  (   ($1.hasClass(player) && $2.hasClass(player) && $3.hasClass(player)) ||
            ($4.hasClass(player) && $5.hasClass(player) && $6.hasClass(player)) ||
            ($7.hasClass(player) && $8.hasClass(player) && $9.hasClass(player)) ||
            ($1.hasClass(player) && $4.hasClass(player) && $7.hasClass(player)) ||
            ($2.hasClass(player) && $5.hasClass(player) && $8.hasClass(player)) ||
            ($3.hasClass(player) && $6.hasClass(player) && $9.hasClass(player)) ||
            ($1.hasClass(player) && $5.hasClass(player) && $9.hasClass(player)) ||
            ($7.hasClass(player) && $5.hasClass(player) && $3.hasClass(player))  )  
            {gameWon(player); gameOn = false;}
            else if((!$1.hasClass('empty') && !$2.hasClass('empty') && !$3.hasClass('empty') && !$4.hasClass('empty') && !$5.hasClass('empty') && !$6.hasClass('empty') && !$7.hasClass('empty') && !$8.hasClass('empty') && !$9.hasClass('empty'))){
                playerTurnText.text('Draw!');
                gameOn = false;};
}

function gameWon(player) {
    if(player === 'X'){
        playerTurnText.text("X won the game!")
        playerXscore += 1;
        if(playerXscore === 1){
            playerXScoreText.text('X has 1 point')
        }else{
        playerXScoreText.text('X has ' + playerXscore + ' points')
        }
    }else if (player === "O") {
        playerTurnText.text("O won the game!")
        playerOscore += 1;
        if(playerOscore === 1){
            playerOScoreText.text('O has 1 point')
        }else{
        playerOScoreText.text('O has ' + playerXscore + ' points')
        }
    }
}

function resetBoard() {
    playerTurn = true;
    playerTurnText.text("X, it's your turn!");
    boxes.removeClass('X O').addClass('empty')
    boxes.text('')
    gameOn = true;
}
})