document.addEventListener('DOMContentLoaded', () => {
    // Fetch tile data from the JSON file
    fetch('https://gist.githubusercontent.com/marcosismayle/44c29036d35f4d5d518eed4cdba298ba/raw/7704a5c2b13727becd1599bad5537d43289a26e8/construction_materials.json')
        .then(response => response.json())
        .then(tileData => {
            // Populate tile size and type options
            populateSelectOptions('tileSize', [...new Set(tileData.map(tile => tile.size))]);
            populateSelectOptions('tileType', [...new Set(tileData.map(tile => tile.type))]);
        })
        .catch(error => console.error('Error fetching tile data:', error));
});

function populateSelectOptions(selectId, options) {
    const selectElement = document.getElementById(selectId);

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        selectElement.add(optionElement);
    });
}

function calculateCost() {
    const ambientArea = parseFloat(document.getElementById('ambientArea').value);
    const tileSize = document.getElementById('tileSize').value;
    const tileType = document.getElementById('tileType').value;

    fetch('https://gist.githubusercontent.com/marcosismayle/44c29036d35f4d5d518eed4cdba298ba/raw/7704a5c2b13727becd1599bad5537d43289a26e8/construction_materials.json')
        .then(response => response.json())
        .then(tileData => {
            // Find the selected tile based on size and type
            const selectedTile = tileData.find(tile => tile.size === tileSize && tile.type === tileType);

            if (selectedTile) {
                const unitValue = selectedTile.price;
                const totalValue = unitValue * ambientArea;
                const tileQuantity = Math.ceil(ambientArea / parseFloat(selectedTile.size));

                // Display results
                document.getElementById('unitValue').textContent = unitValue.toFixed(2);
                document.getElementById('totalValue').textContent = totalValue.toFixed(2);
                document.getElementById('tileQuantity').textContent = tileQuantity;
            } else {
                alert('Selected tile not found in the data.');
            }
        })
        .catch(error => console.error('Error calculating cost:', error));
}
