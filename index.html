// Status pemain
let player1 = { name: "Player 1", health: 100, attack: 15, specialUsed: false, healUsed: false };
let player2 = { name: "Player 2", health: 100, attack: 15, specialUsed: false, healUsed: false };

let currentTurn = 1; // 1 = Player 1, 2 = Player 2

function updateStats() {
    document.getElementById('player1-health').textContent = player1.health;
    document.getElementById('player2-health').textContent = player2.health;
}

function addToLog(message) {
    const log = document.getElementById('battle-log');
    log.innerHTML += `<p>${message}</p>`;
    log.scrollTop = log.scrollHeight;
}

// Serangan
function attack() {
    if (currentTurn === 1) {
        const damage = Math.floor(Math.random() * 10) + player1.attack;
        player2.health -= damage;
        addToLog(`⚔️ Player 1 menyerang - Player 2 kehilangan ${damage} darah!`);
        currentTurn = 2;
    } else {
        const damage = Math.floor(Math.random() * 10) + player2.attack;
        player1.health -= damage;
        addToLog(`⚔️ Player 2 menyerang - Player 1 kehilangan ${damage} darah!`);
        currentTurn = 1;
    }
    updateStats();
    checkBattleEnd();
}

// Heal
function heal() {
    let healAmount = Math.floor(Math.random() * 15) + 20;
    if (currentTurn === 1 && !player1.healUsed) {
        player1.health = Math.min(player1.health + healAmount, 100);
        player1.healUsed = true;
        addToLog(`❤️ Player 1 menyembuhkan diri +${healAmount} darah!`);
        currentTurn = 2;
    } else if (currentTurn === 2 && !player2.healUsed) {
        player2.health = Math.min(player2.health + healAmount, 100);
        player
