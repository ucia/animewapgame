
Promise.all([fetch('/data/enemies.json'), fetch('/data/skills.json')])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(([enemies, skills]) => {
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const skill = skills.find(s => s.implemented);
    const battleDiv = document.getElementById("battleContainer");
    let playerHP = 100;
    let enemyHP = enemy.hp;

    const updateBattle = () => {
      battleDiv.innerHTML = `
        <h2>Battle vs ${enemy.name}</h2>
        <p>Enemy HP: ${enemyHP}</p>
        <p>Your HP: ${playerHP}</p>
        <button id="attackBtn">${skill.name}</button>
      `;
      document.getElementById("attackBtn").onclick = () => {
        enemyHP -= skill.damage;
        if (enemyHP <= 0) {
          battleDiv.innerHTML += "<p>You defeated the enemy!</p>";
        } else {
          playerHP -= enemy.attack;
          if (playerHP <= 0) {
            battleDiv.innerHTML += "<p>You were defeated!</p>";
          } else {
            updateBattle();
          }
        }
      };
    };
    updateBattle();
  });
