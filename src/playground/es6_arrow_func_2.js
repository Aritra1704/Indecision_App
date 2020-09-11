const add = function (a,b) {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Aritra',
    cities: ["Kolkata", "Hydrabad"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    number: [2, 3, 5],
    multiplyBy: 2,
    multiply() {
        return this.number.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());