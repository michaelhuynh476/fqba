var map = L.map('map').setView([27.9944024, -81.7602544], 7); // Set initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data and add it to the map
fetch('regions.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    fillColor: getColor(feature.properties.region),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    fillOpacity: 0.7
                };
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.region);
            }
        }).addTo(map);
    });

// Define a color function based on the region
function getColor(region) {
    switch (region) {
        case 'Region 1': return 'red';
        case 'Region 2': return 'orange';
        case 'Region 3': return 'yellow';
        case 'Region 4': return 'green';
        case 'Region 5': return 'blue';
        case 'Region 6': return 'purple';
        case 'Region 7': return 'pink';
        case 'Region 8': return 'brown';
        default: return 'gray';
    }
}