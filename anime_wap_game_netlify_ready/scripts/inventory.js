
fetch('/data/items.json')
  .then(response => response.json())
  .then(items => {
    const inventoryDiv = document.getElementById("inventoryContainer");
    inventoryDiv.innerHTML = "<h2>Your Items</h2><ul>" +
      items.slice(0, 20).map(item => `
        <li>
          <strong>${item.name}</strong> (${item.rarity}) - ${item.type}
          ${item.mechanic === "restore_hp" ? "<button onclick='alert("HP Restored")'>Use</button>" : ""}
        </li>`).join("") + "</ul>";
  });
