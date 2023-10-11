// script.js

// Create a map centered at a specific location and zoom level
var map = L.map('map').setView([28.7041, -81.582], 7);

// Add a tile layer (for example, OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Load your GeoJSON data
fetch('regions.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON data to the map as a GeoJSON layer with custom styling and popup content
        L.geoJSON(data, {
            style: function(feature) {
                // Determine the color based on the "REGION" property
                var regionColor = getColorBasedOnRegion(feature.properties.REGION);
                
                // Return style options
                return {
                    fillColor: regionColor,
                    color: 'white',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                };
            },
            onEachFeature: function(feature, layer) {
                // Bind a popup with the county and region information to each feature
                var popupContent = "County: " + feature.properties.NAME + "<br>Region: " + feature.properties.REGION;
                layer.bindPopup(popupContent);
            }
        }).addTo(map);
    });


// Define a function to determine color based on the "REGION" property
function getColorBasedOnRegion(regionValue) {
    // Implement your logic to assign colors based on "REGION" property values
    // Return a color code (e.g., '#FF0000' for red) for each region value
switch(regionValue) {
    case 1:
        return '#FF0000'; // Red color for region 1
    case 2:
        return '#00FF00'; // Green color for region 2
    case 3:
        return '#0000FF'; // Blue color for region 3
    case 4:
        return '#FFFF00'; // Yellow color for region 4
    case 5:
        return '#FFFFFF'; // White color for region 5
    case 6:
        return '#A52A2A'; // Brown color for region 6
    case 7:
        return '#FFA500'; // Orange color for region 7
    case 8:
        return '#FFC0CB'; // Pink color for region 8
    default:
        return '#000000'; // Default color for unknown regions (black in this case)
}

}



