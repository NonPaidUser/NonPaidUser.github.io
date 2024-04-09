function multiplayerGame() {
    document.querySelector('.menu').style.display = 'none';
    document.getElementById('multiplayer').style.display = 'block';
    document.querySelector('.overlay').style.display = 'none';
    player1hp.innerText = 50;
    player2hp.innerText = 50;
    blockp1 = 0;
    blockp2 = 0;
    currentPlayer = Math.floor(Math.random()*2)+1;
    document.getElementById('game-firsttoattack').innerText = "Player " + currentPlayer + " first to attack!";
    if (currentPlayer===1){
        gameturn2.innerText = "Turn to hit!";
    }
    else {
        gameturn1.innerText = "Turn to hit!";
    }
}

function retry(){
    document.querySelector('.overlay').style.display = 'none';
    player1hp.innerText = 50;
    player2hp.innerText = 50;
    blockp1 = 0;
    blockp2 = 0;
    blockP1.innerText = "";
    blockP2.innerText = "";
    currentPlayer = Math.floor(Math.random()*2)+1;
    document.getElementById('game-firsttoattack').innerText = "Player " + currentPlayer + " first to attack!";
    if (currentPlayer===1){
        gameturn2.innerText = "Turn to hit!";
    }
    else {
        gameturn1.innerText = "Turn to hit!";
    }
}

var player1hp = document.getElementById('player1-hp');
var player2hp = document.getElementById('player2-hp');
var gameturn1 = document.getElementById('game-turn1');
var gameturn2 = document.getElementById('game-turn2');
var player1Img = document.getElementById('player1-img');
var player2Img = document.getElementById('player2-img');
var gameannouncer = document.getElementById('game-announcer');
var healturns = document.getElementById("healturns");
var damageturns = document.getElementById("damageturns");
var blockturns = document.getElementById("blockturns");
var blockP1 = document.getElementById("player1-block");
var blockP2 = document.getElementById("player2-block");

var player1HP = parseFloat(player1hp.innerText);
var player2HP = parseFloat(player2hp.innerText);
var healturnsp2;    
var healturnsp1;
var blockturnsp1;
var blockturnsp2;
var blockp1 = 0;
var blockp2 = 0;

var damages = [0,1,2,3,4,5,6,7,8,9,10];
var healing = [0,1,2];
var block = [0,1,2];

var currentPlayer = Math.floor(Math.random()*2)+1;
document.getElementById('game-firsttoattack').innerText = "Player " + currentPlayer + " first to attack!";

if (currentPlayer===1){
    gameturn2.innerText = "Turn to hit!";
}
else {
    gameturn1.innerText = "Turn to hit!";
}

function heal() {

    console.log(healturnsp1, healturnsp2);

    var player1Heal = Math.floor(Math.random()*healing.length)+7;
    var player2Heal = Math.floor(Math.random()*healing.length)+7;

    if (currentPlayer === 1){

        // Check if at max hp
        if (player1HP >= 50){
            gameannouncer.innerText = "Already at max hp! Can't heal!";
            console.log(gameannouncer.innerText);
            setTimeout(function() {
                gameannouncer.innerText = "";
                }, 500);
            return;
        }

        // Turn Healing
        if (healturnsp1 = 0){
            document.getElementById('heal-button').disabled = false;
        }
        else {

            healturnsp1 = 4;
            healturns.innerText = healturnsp1;
            document.getElementById('heal-button').disabled = true;

        }

        gameturn2.innerText = "";
        gameturn1.innerText = "Turn to hit!";

        console.log(player1HP);
        console.log(currentPlayer);
        console.log(player1Heal);

        player1HP += player1Heal;
        player1hp.innerText = player1HP + " +" + player1Heal;
        setTimeout(function() {
                player1hp.innerText = player1HP;
            }, 500);
        
        player1Img.classList.add('shake-animation');

        console.log(player1HP);
    }

    else {

        if (player2HP >= 50){
            gameannouncer.innerText = "Already at max hp! Can't heal!";
            console.log(gameannouncer.innerText);
            setTimeout(function() {
                gameannouncer.innerText = "";
                }, 500);
            return;
        }

        // Turn Healing
        if (healturnsp2 = 0){
            document.getElementById('heal-button').disabled = false;
        }
        else {

            healturnsp2 = 4;
            healturns.innerText = healturnsp2;
            document.getElementById('heal-button').disabled = true;

        }

        gameturn1.innerText = "";
        gameturn2.innerText = "Turn to hit!";

        console.log(player2HP)
        console.log(currentPlayer);
        console.log(player2Heal);

        player2HP += player2Heal;
        player2hp.innerText = player2HP + " +" + player2Heal;
        setTimeout(function() {
                player2hp.innerText = player2HP;
            }, 500);

        player2Img.classList.add('shake-animation');

        console.log(player2HP)
    }

    // Take turns
    console.log(healturnsp1, healturnsp2);

    if (currentPlayer === 1){
        if (healturnsp2>0){
            document.getElementById('heal-button').disabled = true;
            healturnsp2 -= 1;
            healturns.innerText = healturnsp2;
        }
        else {
            document.getElementById('heal-button').disabled = false;
            healturns.innerText = "";
        }
    }
    else {
        if (healturnsp1>0){
            document.getElementById('heal-button').disabled = true;
            healturnsp1 -= 1;
            healturns.innerText = healturnsp1;
        }
        else {
            document.getElementById('heal-button').disabled = false;
            healturns.innerText = "";
        }
    }

    // Next player check if block
    if (blockp2 > 0){
        document.getElementById("block-button").disabled = true;
    }

    else if (blockp1 > 0){
        document.getElementById("block-button").disabled = true;
    }

    // Switch players
    currentPlayer = (currentPlayer === 1) ? 2 : 1;

    // Remove animation classes after a delay
    setTimeout(function() { 

    player1Img.classList.remove('shake-animation');
    player2Img.classList.remove('shake-animation');

    }, 500);
}

function attack() {

    blockturnsp1 = Math.floor(Math.random()*2);
    blockturnsp2 = Math.floor(Math.random()*2);

    console.log(blockturnsp1, blockturnsp2);

    var player1Damage = Math.floor(Math.random()*damages.length)-blockp2;
    var player2Damage = Math.floor(Math.random()*damages.length)-blockp1;

    if (player1Damage <= 0){
        player1Damage = 0;
    }
    
    if (player2Damage <= 0) {
        player2Damage = 0;
    }

    console.log(player1Damage, player2Damage);

    if (currentPlayer === 1) {
    console.log(currentPlayer);
    console.log(player1Damage);

    // For turn message
    gameturn2.innerText = "";
    gameturn1.innerText = "Turn to hit!";

    // Apply damage to player 2
    player2HP -= player1Damage;
    player2hp.innerText = player2HP + " -" + player1Damage;
    setTimeout(function() {
            player2hp.innerText = player2HP;
        }, 500);
    player2Img.classList.add('shake-animation');

    // Check if player 2 is defeated
    if (player2HP <= 0) {
        player2hp.innerText = 0;
        console.log(player2hp.innerText);
        document.getElementById('game-result').innerText = "Player 1 wins!";
        document.getElementById('attack-button').disabled = true;
        document.getElementById('heal-button').disabled = true;
        document.getElementById('block-button').disabled = true;
        return;
    }

    // Check for hit miss
    else if (player1Damage==0) {
        gameannouncer.innerText = "You missed!";
        console.log(gameannouncer.innerText);
        setTimeout(function() {
            gameannouncer.innerText = "";
        }, 500);
    }

    // Check for critical hit
    else if (player1Damage>7) {
        gameannouncer.innerText = "Critical hit!";
        console.log(gameannouncer.innerText);
        setTimeout(function() {
            gameannouncer.innerText = "";
        }, 500);
    }

    } 

    else {
    console.log(currentPlayer);
    console.log(player2Damage);

    // For turn message
    gameturn1.innerText = "";
    gameturn2.innerText = "Turn to hit!";

    // Apply damage to player 1
    player1HP -= player2Damage;
    player1hp.innerText = player1HP + " -" + player2Damage;
    setTimeout(function() {
            player1hp.innerText = player1HP;
        }, 500);
    player1Img.classList.add('shake-animation');

    // Check if player 1 is defeated
    if (player1HP <= 0) {
        player1hp.innerText = 0;
        console.log(player1hp.innerText);
        document.getElementById('game-result').innerText = "Player 2 wins!";
        document.getElementById('attack-button').disabled = true;
        document.getElementById('heal-button').disabled = true;
        document.getElementById('block-button').disabled = true;
        return;
    }

    // Check for hit miss
    else if (player2Damage==0) {
        gameannouncer.innerText = "You missed!";
        console.log(gameannouncer.innerText);
        setTimeout(function() {
            gameannouncer.innerText = "";
        }, 500);
    }

    // Check for critical hit
    else if (player2Damage>7) {
        gameannouncer.innerText = "Critical hit!";
        console.log(gameannouncer.innerText);
        setTimeout(function() {
            gameannouncer.innerText = "";
        }, 500);
    }
    }

    // Take turns in healing
    if (currentPlayer === 1){
        if (healturnsp2>0){
            document.getElementById('heal-button').disabled = true;
            healturnsp2 -= 1;
            healturns.innerText = healturnsp2;
        }
        else {
            document.getElementById('heal-button').disabled = false;
            healturns.innerText = "";
        }
    }
    else {
        if (healturnsp1>0){
            document.getElementById('heal-button').disabled = true;
            healturnsp1 -= 1;
            healturns.innerText = healturnsp1;
        }
        else {
            document.getElementById('heal-button').disabled = false;
            healturns.innerText = "";
        }
    }
    
    // Block turns in blocking
    if (blockp1 > 0 && currentPlayer === 2 && player2Damage > 0){
        if (blockturnsp2==1){
            blockP1.innerText = "";
            document.getElementById("block-button").disabled = false;
            blockp1 = 0;
        }
        else {
            document.getElementById("block-button").disabled = true;
        }
    }
    else if (blockp2 > 0 && currentPlayer === 1 && player1Damage > 0 ) {
        if (blockturnsp1==1){
            blockP2.innerText = "";
            document.getElementById("block-button").disabled = false;
            blockp2 = 0;
        }
        else {
            document.getElementById("block-button").disabled = true;
        }
    }

    else if (blockp2 > 0 && currentPlayer === 1 && player1Damage == 0 ){
        document.getElementById("block-button").disabled = true;
    }

    else if (blockp1 > 0 && currentPlayer === 2 && player2Damage == 0 ){
        document.getElementById("block-button").disabled = true;
    }

    else if (blockp2 == 0 && currentPlayer === 1){
        document.getElementById("block-button").disabled = false;
    }

    else if (blockp1 == 0 && currentPlayer === 2){
        document.getElementById("block-button").disabled = false;
    }


    console.log(healturnsp1, healturnsp2);

    // Switch players
    currentPlayer = (currentPlayer === 1) ? 2 : 1;

    // Remove animation classes after a delay
    setTimeout(function() { 

    player1Img.classList.remove('shake-animation');
    player2Img.classList.remove('shake-animation');

    }, 500);
}

function blocks() {

    // Next player check if block
    if (blockp2 > 0){
        document.getElementById("block-button").disabled = true;
    }

    else if (blockp1 > 0){
        document.getElementById("block-button").disabled = true;
    }


    if (currentPlayer === 1){

    blockp1 = Math.floor(Math.random()*block.length)+3;

    // For turn message
    gameturn2.innerText = "";
    gameturn1.innerText = "Turn to hit!";

    blockP1.innerText = "| " + blockp1;

    }

    else {

    blockp2 = Math.floor(Math.random()*block.length)+3;

    // For turn message
    gameturn1.innerText = "";
    gameturn2.innerText = "Turn to hit!";

    blockP2.innerText = "| " + blockp2;      

    }

    console.log(blockp2, blockp1);

    // Switch players
    currentPlayer = (currentPlayer === 1) ? 2 : 1;

    // Remove animation classes after a delay
    setTimeout(function() { 

    player1Img.classList.remove('shake-animation');
    player2Img.classList.remove('shake-animation');

    }, 500);

}

function setting(){
    document.querySelector('.overlay').style.display = 'block';
}

function resume(){
    document.querySelector('.overlay').style.display = 'none';
}

function quit(){
    document.querySelector('.menu').style.display = 'block';
    document.getElementById('multiplayer').style.display = 'none';
}
