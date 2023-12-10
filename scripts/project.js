document.addEventListener('DOMContentLoaded', () => {
    // Fetch tile data from the JSON file
    fetch('https://gist.githubusercontent.com/marcosismayle/44c29036d35f4d5d518eed4cdba298ba/raw/5bd27d5e36aeb5634060eaafb9bda2dbf2eb7749/tiles.json')
        .then(response => response.json())
        .then(tileData => {
            // Log the fetched data to the console to check if it's correct
            console.log(tileData);

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

    // Fetch tile data from the JSON file
    fetch('https://gist.githubusercontent.com/marcosismayle/44c29036d35f4d5d518eed4cdba298ba/raw/5bd27d5e36aeb5634060eaafb9bda2dbf2eb7749/tiles.json')
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
