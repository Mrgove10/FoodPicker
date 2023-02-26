var ingredients = [
    { id: 1, name: "Tomato" }
]
var food = [
    { id: 1, name: 'Pizza', ingredients: [1] },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Mike' }
]

function generate(numberToGenerate) {
    var awenser = []
    for (let i = 0; i < numberToGenerate; i++) {
        awenser.push(getRandom())
    }

    populatehtml(awenser)
    console.log(awenser)
}

function getRandom() {
    const randomIndex = Math.floor(Math.random() * food.length);
    return food[randomIndex];
}

function populatehtml(list) {
    list.forEach(element => {
        document.getElementById(list).innerHTML += `<li>${element.name}</li>`
    });
}