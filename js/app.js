const map = L.map('map').setView([45.628, 8.299], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Carica i vigneti
fetch('data/vigneti.geojson')
    .then(response => response.json())
    .then(data => {

        L.geoJSON(data, {

            onEachFeature: function(feature, layer) {

                layer.bindPopup(`
                    <h3>${feature.properties.nome}</h3>

                    <b>Località:</b> ${feature.properties.localita}<br>

                    <b>Comune:</b> ${feature.properties.comune}<br>

                    <b>DOC:</b> ${feature.properties.doc}
                `);

            }

        }).addTo(map);

    });
