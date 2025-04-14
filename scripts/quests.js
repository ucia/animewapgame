
Promise.all([fetch('/data/quests.json'), fetch('/data/zones.json')])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(([quests, zones]) => {
    const container = document.getElementById("questContainer") || document.getElementById("zoneContainer") || document.getElementById("adminQuestContainer");
    if (container.id === "adminQuestContainer") {
      container.innerHTML = "<h2>Admin Quest Editor</h2><p>(Form to create/edit quests would be here)</p>";
    } else if (container.id === "zoneContainer") {
      container.innerHTML = "<h2>Exploration Zones</h2><ul>" +
        zones.map(z => `<li>${z.name} (Min Level: ${z.min_level})</li>`).join("") + "</ul>";
    } else {
      container.innerHTML = "<h2>Quest Log</h2><ul>" +
        quests.slice(0, 10).map(q => `<li><strong>${q.title}</strong>: ${q.description}</li>`).join("") + "</ul>";
    }
  });
