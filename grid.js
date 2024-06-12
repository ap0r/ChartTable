// grid.js
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map('map').setView([0, 0], 2); // Centered at [0, 0] with zoom level 2

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to create a lat/long grid
    function createLatLongGrid() {
        for (var lat = -90; lat <= 90; lat += 10) {
            L.polyline([[lat, -180], [lat, 180]], { color: 'red', weight: 1 }).addTo(map);
        }
        for (var lng = -180; lng <= 180; lng += 10) {
            L.polyline([[-90, lng], [90, lng]], { color: 'red', weight: 1 }).addTo(map);
        }
    }

    // Call the function to create the grid
    createLatLongGrid();
});
