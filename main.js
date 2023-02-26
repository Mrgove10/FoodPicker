function generate() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Do something with the JSON data
            // Get a random index from the JSON data array
            const randomIndex = Math.floor(Math.random() * data.length);

            // Get the item at the random index
            const randomItem = data[randomIndex];

            // Log the random item to the console
            console.log(randomItem);
        })
        .catch(error => console.error(error));
}