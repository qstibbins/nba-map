// Create the 'street' tile layer as a second background of the map
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create the map object with center and zoom options.
// Initialize the map centered on USA
// const map = L.map('map').setView([39.5, -98.35], 4);

let map = L.map("map", {
  center: [39.5, -98.35],//[44.98517, -93.30474],
  zoom: 4 //5
});

// Then add the 'basemap' tile layer to the map.
street.addTo(map);

// Create the layer groups, base maps, and overlays for our two sets of data, earthquakes and tectonic_plates.
// Add a control to the map that will allow the user to change which layers are visible.
let teams = new L.layerGroup();

let baseMaps = {
  "Street Map": street
};

let overlayMaps = {
  "NBA Teams": teams,
};

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);

// Function to populate and show the side panel
function showSidePanel(team) {
  const map = document.getElementById('map');
  const panel = document.getElementById('side-panel');
  const infoDiv = document.getElementById('team-info');

  // Populate the side panel with team information
  infoDiv.innerHTML = `
    <h2>${team.name}</h2>
    <img src="${team.logo}" alt="${team.name} logo" style="width:100px;">
    <p><strong>Championships:</strong> ${team.championships}</p>
    <p><strong>MVP Awards:</strong></p>
    <ul>
      ${team.mvps.map(mvp => `<li>${mvp.player} (${mvp.seasons.join(', ')})</li>`).join('')}
    </ul>
  `;

  panel.classList.add("open")
  // Display the side panel
  panel.style.display = 'block';
}

// Function to close the side panel
function closeSidePanel() {
  document.getElementById('side-panel').style.display = 'none';
  document.getElementById('side-panel').classList.remove("open");
}

// Attach event listener to close button
document.getElementById('close-btn').addEventListener('click', closeSidePanel);

// Loop through teams and add markers
nbaTeams.forEach(team => {
  const logoIcon = L.icon({
    iconUrl: team.logo,
    iconSize: [40, 40],       // Size of the logo
    iconAnchor: [20, 20],     // Center the icon
    popupAnchor: [0, -20],    // Position popup above icon
  });

  const marker = L.marker([team.lat, team.lng], { icon: logoIcon }).addTo(teams);

  marker.bindTooltip(team.name, { permanent: false, direction: 'top' });

  let zoomed = false;

  marker.on('click', () => {
    if (!zoomed) {
      map.setView([team.lat, team.lng], 13); // Zoom in
      marker.bindPopup(`
        <b>${team.name}</b><br>
        Click again to zoom out.
      `).openPopup();
      zoomed = true;
      showSidePanel(team);
    } else {
      map.setView([39.5, -98.35], 4); // Zoom back out
      map.closePopup();
      zoomed = false;
      closeSidePanel();
    }
  });
});

teams.addTo(map)