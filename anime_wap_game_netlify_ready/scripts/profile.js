
fetch('/data/users.json')
  .then(response => response.json())
  .then(user => {
    const profile = document.getElementById("profileContainer");
    profile.innerHTML = `
      <h2>${user.name} the ${user.class}</h2>
      <p>Level: ${user.level}, XP: ${user.xp}</p>
      <p>Stats - HP: ${user.hp}, ATK: ${user.attack}, DEF: ${user.defense}</p>
      <h3>Equipped:</h3>
      <ul>${user.equipment.map(eq => `<li>${eq}</li>`).join("")}</ul>
    `;
  });
