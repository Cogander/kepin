let player1 = { health: 100, attack: 15, specialUsed: false, healUsed: false };
let player2 = { health: 100, attack: 15, specialUsed: false, healUsed: false };

let currentTurn = 1;
let gameOver = false;

function updateStats() {
    document.getElementById('player1-health').textContent = player1.health;
    document.getElementById('player2-health').textContent = player2.health;
}

function addToLog(message) {
    const log = document.getElementById('battle-log');
    log.innerHTML += `<p>${message}</p>`;
    log.scrollTop = log.scrollHeight;
}

function attack() {
    if (gameOver) return;

    let damage = Math.floor(Math.random() * 10) + 15;

    if (currentTurn === 1) {
        player2.health -= damage;
        addToLog(`⚔️ Player 1 menyerang - ${damage} damage!`);
        currentTurn = 2;
    } else {
        player1.health -= damage;
        addToLog(`⚔️ Player 2 menyerang - ${damage} damage!`);
        currentTurn = 1;
    }

    updateStats();
    checkBattleEnd();
}

function heal() {
    if (gameOver) return;

    let healAmount = Math.floor(Math.random() * 15) + 20;

    if (currentTurn === 1 && !player1.healUsed) {
        player1.health = Math.min(player1.health + healAmount, 100);
        player1.healUsed = true;
        addToLog(`❤️ Player 1 heal +${healAmount}`);
        currentTurn = 2;
    } else if (currentTurn === 2 && !player2.healUsed) {
        player2.health = Math.min(player2.health + healAmount, 100);
        player2.healUsed = true;
        addToLog(`❤️ Player 2 heal +${healAmount}`);
        currentTurn = 1;
    } else {
        addToLog("❌ Heal sudah dipakai!");
    }

    updateStats();
}

function specialAttack() {
    if (gameOver) return;

    let damage = Math.floor(Math.random() * 25) + 25;

    if (currentTurn === 1 && !player1.specialUsed) {
        player2.health -= damage;
        player1.specialUsed = true;
        addToLog(`🔥 Player 1 SPECIAL - ${damage} damage!`);
        currentTurn = 2;
    } else if (currentTurn === 2 && !player2.specialUsed) {
        player1.health -= damage;
        player2.specialUsed = true;
        addToLog(`🔥 Player 2 SPECIAL - ${damage} damage!`);
        currentTurn = 1;
    } else {
        addToLog("❌ Special sudah dipakai!");
    }

    updateStats();
    checkBattleEnd();
}

function checkBattleEnd() {
    if (player1.health <= 0) {
        addToLog("🏆 Player 2 MENANG!");
        gameOver = true;
    } else if (player2.health <= 0) {
        addToLog("🏆 Player 1 MENANG!");
        gameOver = true;
    }
}

function resetGame() {
    player1 = { health: 100, attack: 15, specialUsed: false, healUsed: false };
    player2 = { health: 100, attack: 15, specialUsed: false, healUsed: false };
    currentTurn = 1;
    gameOver = false;
    document.getElementById('battle-log').innerHTML = "";
    updateStats();
}
